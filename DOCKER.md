# Docker Deployment - Technical Documentation

## Overview

This document explains the Docker configuration for **pedrocastro.pro**, a Next.js 15 application, and the technical decisions made during the containerization process.

---

## Files Created

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build configuration |
| `.dockerignore` | Excludes unnecessary files from build context |
| `docker-compose.yml` | Container orchestration for development/production |
| `docker-compose.prod.yml` | Production-specific overrides |
| `.env.example` | Environment variables template |

---

## Quick Start

### Build and Run

```bash
# Build the image
docker build -t pedrocastro-pro .

# Run with environment variables
docker run -p 3000:3000 \
  -e GMAIL_USER=your-email@gmail.com \
  -e GMAIL_APP_PASSWORD=your-app-password \
  -e GMAIL_RECIPIENT=recipient@email.com \
  pedrocastro-pro
```

### Using Docker Compose

```bash
# Development (with build)
docker compose up --build

# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Stop
docker compose down
```

---

## Technical Decisions

### 1. Multi-Stage Build Architecture

**Decision**: Use a 3-stage build (deps → builder → runner)

**Why**:
- **Stage 1 (deps)**: Isolates dependency installation. If `package.json` doesn't change, Docker caches this layer, dramatically speeding up rebuilds.
- **Stage 2 (builder)**: Compiles the Next.js application. Keeps build tools and source code separate from production.
- **Stage 3 (runner)**: Contains only production artifacts. Results in a minimal final image (~150-200MB vs ~1GB+ with single stage).

**Alternative Considered**: Single-stage build
- Rejected because it includes all build dependencies (TypeScript, dev packages, source code) in the final image, increasing attack surface and image size.

---

### 2. Base Image: `node:20-alpine` (No Pre-built Next.js Image)

**Decision**: Build from `node:20-alpine` instead of using a pre-built Next.js image

**Why Not a Pre-built Image?**:

1. **No Official Next.js Docker Image Exists**
   - Unlike nginx, postgres, or redis, Vercel does not publish an official Next.js Docker image
   - Vercel promotes their platform, not self-hosted Docker deployment
   - The [official Next.js docs](https://nextjs.org/docs/app/building-your-application/deploying#docker-image) recommend building your own Dockerfile

2. **Community Images Are Risky**
   - Third-party images (e.g., `someone/nextjs`) have unknown maintenance status
   - May contain outdated dependencies or security vulnerabilities
   - No guarantee of updates when Next.js releases new versions
   - Cannot audit what's inside without rebuilding anyway

3. **Every Next.js App is Different**
   - Pre-built images can't know your:
     - Package manager (npm, yarn, pnpm, bun)
     - Node.js version requirements
     - Build-time environment variables
     - Custom `next.config.mjs` settings
   - A generic image would be bloated to cover all cases

4. **Full Control and Transparency**
   - You can audit every line of the Dockerfile
   - Pin exact versions (Node 20.x, pnpm version)
   - Optimize for your specific app (standalone output)
   - No "black box" surprises in production

5. **Security Scanning**
   - Building from `node:20-alpine` (official Docker image) allows you to:
     - Run vulnerability scans (Trivy, Snyk) with full visibility
     - Update base image immediately when patches release
     - Know exactly what's in your supply chain

**Why `node:20-alpine` Specifically**:
- **Alpine Linux**: ~5MB base vs ~100MB for Debian-based images
- **Node.js 20 LTS**: Long-term support until April 2026, stable for production
- **Next.js 15 Compatibility**: Requires Node.js 18.18+, Node 20 is recommended
- **Security**: Smaller image = smaller attack surface

**Alternative Considered**: `node:20-slim` (Debian-based slim)
- Larger (~180MB) but better glibc compatibility
- Chose Alpine with `libc6-compat` for best of both worlds

---

### 3. Package Manager: pnpm

**Decision**: Use pnpm with `corepack enable`

**Why**:
- **Project uses pnpm**: Existing `pnpm-lock.yaml` ensures reproducible builds
- **Disk efficiency**: pnpm uses hard links, reducing `node_modules` size by ~50%
- **Speed**: Faster installs than npm/yarn in most scenarios
- **Corepack**: Built into Node.js, no separate pnpm installation needed

**Command Used**:
```dockerfile
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
```

`--frozen-lockfile` ensures exact versions from `pnpm-lock.yaml` are installed, preventing version drift between environments.

---

### 4. Next.js Standalone Output

**Decision**: Enable `output: 'standalone'` in `next.config.mjs`

**Why**:
- Creates a minimal, self-contained build in `.next/standalone`
- Includes only production dependencies actually used by the app
- Reduces final image size from ~500MB to ~150MB
- Creates a `server.js` file that can run without `next` CLI

**How It Works**:
```
.next/standalone/     # Minimal server + traced dependencies
.next/static/         # Static assets (CSS, JS bundles)
public/               # Public assets (images, fonts)
```

The runner stage copies these three directories to create the smallest possible image.

---

### 5. Non-Root User

**Decision**: Run the application as `nextjs:nodejs` user (UID 1001)

**Why**:
- **Security**: Containers running as root can escape to host with elevated privileges
- **Best Practice**: CIS Docker Benchmark recommends non-root users
- **Next.js Convention**: Official Next.js examples use UID 1001

```dockerfile
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
```

---

### 6. Health Check Configuration

**Decision**: Use `wget` for health checks instead of `curl`

**Why**:
- Alpine images include `wget` by default but not `curl`
- Avoids installing additional packages
- Simple HTTP check is sufficient for Next.js apps

```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
```

---

### 7. Environment Variables Strategy

**Decision**: Pass environment variables at runtime, not build time

**Why**:
- **Security**: Credentials never embedded in image layers
- **Flexibility**: Same image works in staging, production, different tenants
- **12-Factor App**: Configuration should be in the environment

**Implementation**:
```yaml
# docker-compose.yml
environment:
  - GMAIL_USER=${GMAIL_USER}
  - GMAIL_APP_PASSWORD=${GMAIL_APP_PASSWORD}
  - GMAIL_RECIPIENT=${GMAIL_RECIPIENT}
```

For production, use Docker secrets or a secrets manager (Vault, AWS Secrets Manager, etc.).

---

### 8. `.dockerignore` Optimization

**Decision**: Comprehensive exclusions for build context

**Why**:
- **Build Speed**: Smaller context = faster `docker build`
- **Security**: Prevents accidentally copying `.env` files into image
- **Image Size**: Excludes documentation, tests, IDE files

**Key Exclusions**:
- `node_modules/` - Reinstalled in container
- `.next/` - Rebuilt in container
- `.env*` - Passed at runtime
- `.git/` - Not needed for build
- `*.md` - Documentation not needed in production

---

### 9. Resource Limits (Production)

**Decision**: Set CPU and memory limits in `docker-compose.prod.yml`

**Why**:
- **Stability**: Prevents runaway processes from consuming all resources
- **Predictability**: Consistent performance under load
- **Multi-tenant Safety**: Fair resource sharing if running multiple containers

```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 512M
    reservations:
      cpus: '0.25'
      memory: 128M
```

**512MB Memory**: Sufficient for a stateless Next.js app with no database. Increase if you add SSR-heavy features.

---

### 10. Logging Configuration

**Decision**: JSON file driver with rotation

**Why**:
- **Disk Safety**: `max-size: 10m` and `max-file: 3` prevents disk exhaustion
- **Compatibility**: JSON format works with log aggregators (ELK, Loki, CloudWatch)

```yaml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
```

---

## Migration from Nixpacks

### What Changed

| Aspect | Nixpacks | Docker |
|--------|----------|--------|
| Configuration | Automatic detection | Explicit Dockerfile |
| Build Process | Black box | Transparent, customizable |
| Image Size | ~400-600MB | ~150-200MB (standalone) |
| Caching | Platform-dependent | Layer caching control |
| Debugging | Limited | Full `docker build` logs |
| Portability | Nixpacks-compatible hosts | Any Docker host |

### Benefits of Docker Migration

1. **Vendor Independence**: Deploy to any Docker-compatible platform (AWS ECS, Google Cloud Run, Azure Container Apps, DigitalOcean, self-hosted)
2. **Reproducibility**: Explicit Dockerfile ensures identical builds everywhere
3. **Optimization Control**: Fine-tune layers, caching, and image size
4. **Debugging**: Easier to troubleshoot build failures
5. **Security Scanning**: Use standard tools (Trivy, Snyk) on Docker images

---

## Production Deployment Checklist

- [ ] Set all environment variables (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `GMAIL_RECIPIENT`)
- [ ] Use HTTPS (reverse proxy like Nginx, Traefik, or cloud load balancer)
- [ ] Configure proper logging aggregation
- [ ] Set up monitoring (health checks, metrics)
- [ ] Use secrets management instead of plain environment variables
- [ ] Enable container restart policies
- [ ] Consider using a container registry (Docker Hub, GHCR, ECR)

---

## Common Commands

```bash
# Build with specific tag
docker build -t pedrocastro-pro:v1.0.0 .

# View image layers and size
docker history pedrocastro-pro

# Inspect image
docker inspect pedrocastro-pro

# Run with shell for debugging
docker run -it --entrypoint /bin/sh pedrocastro-pro

# View logs
docker compose logs -f web

# Rebuild without cache
docker compose build --no-cache
```

---

## Estimated Image Sizes

| Stage | Size |
|-------|------|
| deps | ~400MB (with node_modules) |
| builder | ~600MB (with .next build) |
| runner (final) | ~150-200MB |

The final production image is optimized by only including:
- Node.js runtime (~50MB)
- Alpine Linux base (~5MB)
- Standalone server + traced dependencies (~50MB)
- Static assets (~10MB)
- Public files (~1MB)

---

## Troubleshooting

### Build Fails at `pnpm install`
- Ensure `pnpm-lock.yaml` is committed and up to date
- Run `pnpm install` locally to regenerate lock file if needed

### Application Won't Start
- Check environment variables are set
- Verify `output: 'standalone'` is in `next.config.mjs`
- Ensure port 3000 is not in use

### Health Check Failing
- Increase `start_period` if app takes longer to boot
- Check application logs: `docker compose logs web`

---

*Document generated: 2025-01-28*
*Next.js Version: 15.2.4*
*Node.js Version: 20 LTS*
