# CLAUDE.md - Pedro Castro Portfolio

## Project Overview

**pedrocastro.pro** is a modern portfolio website for Pedro Castro, AI Engineer specializing in IA automation for businesses. Built with Next.js 15 and React 19, it features a clean Apple-inspired design with lead generation focus.

**Purpose**: Lead generation for AI automation services and products
**Type**: Multi-page application with service-specific landing pages
**Target Audience**:
- **Primary (Q1)**: Pymes 10-50 empleados, SaaS, e-commerce, servicios (Spain/LATAM)
- **Secondary (Q2+)**: Startups and SaaS B2B needing AI products

## Brand Positioning (Q1 2025)

**Headline**: "AI Engineer | Automatización IA para empresas | Ex-iOS Developer"

**Value Proposition**:
- Quick wins en 2-3 semanas, no proyectos de 6 meses
- ROI en 6-8 semanas
- Código abierto, sin lock-in tecnológico

**Services**:
1. Consultoría IA (auditorías gratuitas 30 min)
2. Automatización workflows (n8n, LangChain)
3. Desarrollo productos IA (Q2+)

**Stack**: n8n, LangChain, Python, TypeScript, OpenAI/Claude APIs

---

## Tech Stack

### Core Framework
- **Next.js** 15.2.4 (App Router)
- **React** 19
- **TypeScript** 5 (strict mode)
- **Node.js** (for API routes)

### UI & Styling
- **Tailwind CSS** 3.4.17 (utility-first styling)
- **shadcn/ui** (50+ Radix UI components)
- **Radix UI** (accessible headless components)
- **Lucide React** (icon library)
- **next-themes** (dark mode support)
- **PostCSS** + **Autoprefixer**
- **tailwindcss-animate** (animation utilities)

### Forms & Validation
- React state management (useState)
- Native fetch API for submissions
- Client-side validation with required fields

### Backend & Integration
- **Nodemailer** 7.0.3 (email sending)
- Gmail SMTP integration
- Next.js API Routes

### Utilities
- **clsx** + **tailwind-merge** (className utilities)
- **class-variance-authority** (component variants)
- **date-fns** (date utilities)

### Package Manager
- **pnpm**

---

## Architecture Overview

### Directory Structure

```
pedrocastro.pro/
├── app/                       # Next.js App Router
│   ├── api/contact/route.ts   # Email API endpoint
│   ├── globals.css            # Global styles & CSS variables
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Home page (main entry)
│
├── components/                # React components
│   ├── hero-section.tsx       # Hero + 3 expertise cards
│   ├── contact-form.tsx       # Contact form (client component)
│   ├── contact-section.tsx    # Contact wrapper
│   ├── footer.tsx             # Footer
│   ├── hero-background.tsx    # Dynamic gradient background
│   ├── theme-provider.tsx     # Theme context wrapper
│   └── ui/                    # 50+ shadcn components
│       ├── button.tsx, card.tsx, input.tsx, etc.
│       └── (accordion, alert, dialog, dropdown, etc.)
│
├── hooks/                     # Custom React hooks
│   ├── use-mobile.tsx         # Mobile viewport detection
│   └── use-toast.ts           # Toast notifications
│
├── lib/
│   └── utils.ts               # cn() utility (clsx + tw-merge)
│
├── public/                    # Static assets
│   └── (placeholder images)
│
├── Configuration Files:
│   ├── package.json           # Dependencies
│   ├── tsconfig.json          # TypeScript config
│   ├── tailwind.config.ts     # Tailwind theming
│   ├── next.config.mjs        # Next.js config
│   ├── postcss.config.mjs     # PostCSS config
│   └── components.json        # shadcn/ui config
```

---

## Key Components

### Page Components

**`app/page.tsx`** (Home Page)
- Main entry point rendering HeroSection, ContactSection, Footer
- Server component structure

**`app/layout.tsx`** (Root Layout)
- SEO metadata configuration
- Inter font loading (Google Fonts)
- Indie Flower font loaded via CDN
- HTML lang and suppressHydrationWarning settings

### Hero Section

**`components/hero-section.tsx`** (Legacy - to be replaced)
- Original generic portfolio hero
- Will be replaced by N8nHero for Q1 focus

**`components/n8n/`** (Q1 Primary Components)
- `hero.tsx` - Automation-focused hero with ROI messaging
- `use-cases.tsx` - 4 automation use cases grid
- `projects.tsx` - Delivered projects with results
- `cta.tsx` - Final CTA with consultation booking
- `index.tsx` - Portfolio section combining all n8n components

**`components/hero-background.tsx`**
- Client component ("use client")
- Dynamic gradient background
- Theme-aware (light/dark mode support)
- Fixed positioning behind content

### Contact Section

**`components/contact-section.tsx`**
- Wrapper for ContactForm
- Section heading and description

**`components/contact-form.tsx`** (Client Component)
- Form fields: Name, Email, Message
- Client-side validation (required fields)
- Submits to `/api/contact` via fetch
- Loading states with spinner animation
- Success message (auto-hides after 5s)
- Error handling with console logging

### Layout Components

**`components/footer.tsx`**
- Basic footer component

**`components/theme-provider.tsx`**
- Wraps next-themes ThemeProvider
- Enables theme switching capability

---

## API Routes

### POST `/api/contact`

**File**: `app/api/contact/route.ts`

**Purpose**: Handles contact form submissions and sends email via Gmail SMTP

**Request Body**:
```
{
  name: string,
  email: string,
  message: string
}
```

**Response**:
- Success: `{ message: 'Email sent successfully' }` (200)
- Validation Error: `{ message: 'Missing required fields' }` (400)
- Server Error: `{ message: 'Error sending email' }` (500)

**Email Configuration**:
- Service: Gmail SMTP
- From: `process.env.GMAIL_USER`
- To: `process.env.GMAIL_RECIPIENT`
- Reply-to: User's submitted email
- Subject: "New Contact Form Submission from {name}"
- Format: HTML email with contact details

---

## Styling System

### Tailwind CSS Configuration

**File**: `tailwind.config.ts`

**Features**:
- Dark mode: class-based (`darkMode: ["class"]`)
- CSS variables for theming (HSL format)
- Custom color system: primary, secondary, accent, destructive, muted
- Border radius variables: lg, md, sm
- Custom font: Inter (via CSS variable)
- Animation plugin enabled
- Container: centered, 2rem padding, max-width 1400px

### Global Styles

**File**: `app/globals.css`

**Structure**:
- `@layer base`: CSS variables for light/dark themes
- Root colors defined as HSL values
- `.dark` class overrides for dark mode
- Default border-radius: 0.5rem
- Font family: Inter from Google Fonts

### Color Palette

- **Primary Blue**: #0066FF - All CTAs, buttons, interactive elements
- **Primary Blue Dark**: #0052CC - Hover states
- **Success Green**: #16A34A - Result highlights, positive metrics
- **Neutrals**: Gray scale for text and backgrounds
- **Background**: White (#FFFFFF) and subtle gray (#FAFAFA)

---

## Environment Variables

Required environment variables (create `.env.local` in project root):

```
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
GMAIL_RECIPIENT=recipient@example.com
```

**Note**: `GMAIL_APP_PASSWORD` requires a Gmail App Password (not regular password). Generate at: Google Account > Security > 2-Step Verification > App Passwords

---

## Development Workflow

### Available Scripts

```bash
pnpm dev    # Start development server (localhost:3000)
pnpm build  # Production build
pnpm start  # Run production server
pnpm lint   # Run Next.js linter
```

### Development Server
- Runs on `http://localhost:3000`
- Hot module replacement enabled
- TypeScript checking in editor

### Build Configuration

**`next.config.mjs`**:
- ESLint errors ignored during build
- TypeScript errors ignored during build
- Image optimization disabled (`unoptimized: true`)

---

## Important Conventions

### File Organization
- Components use kebab-case filenames (`hero-section.tsx`)
- Client components marked with `"use client"` directive
- Server components by default (no directive needed)

### Component Patterns
- Functional components with TypeScript
- Props typed with TypeScript interfaces/types
- Radix UI components styled with Tailwind
- shadcn/ui components in `/components/ui/`

### Styling Conventions
- Utility-first with Tailwind CSS
- Inline classes (no separate CSS modules)
- `cn()` utility for conditional classes
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Dark mode classes: `dark:` prefix

### Path Aliases
- `@/*` maps to project root
- Example: `import { Button } from "@/components/ui/button"`

### TypeScript Configuration
- Strict mode enabled
- Target: ES6
- Module resolution: bundler
- JSX: preserve (for Next.js)

---

## Component Library (shadcn/ui)

50+ pre-built UI components available in `/components/ui/`:

**Form Components**: Button, Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Toggle
**Layout**: Card, Accordion, Tabs, Separator, Scroll Area
**Feedback**: Alert, Badge, Progress, Toast, Tooltip
**Overlays**: Dialog, Dropdown Menu, Popover, Hover Card, Sheet
**Navigation**: Breadcrumb, Menubar, Navigation Menu, Pagination
**Advanced**: Calendar, Command, Date Picker, Carousel, Chart, Resizable Panels

---

## Git Repository

**Current Branch**: `main`
**Status**: Clean working tree (as of last snapshot)

**Recent Commits**:
- `308989a` - change hero
- `a1675b4` - comment expertise
- `6ddfab1` - feat: mail feature
- `e74f0d4` - Version: 1.0.0

---

## Quick Reference

### Adding New Components
1. Create in `/components/` with `.tsx` extension
2. Use `"use client"` if component uses hooks/state
3. Import from `@/components/component-name`
4. Follow existing naming conventions

### Modifying Styles
- Edit Tailwind classes directly in components
- Global theme changes: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

### Adding API Routes
- Create in `/app/api/[route-name]/route.ts`
- Export functions: GET, POST, PUT, DELETE, PATCH
- Use NextRequest/NextResponse from `next/server`

### Email Functionality
- Email sending logic: `app/api/contact/route.ts`
- Form component: `components/contact-form.tsx`
- Requires environment variables (see Environment Variables section)

---

## Notes for AI Assistants

1. **Server vs Client Components**: Default to server components unless hooks, state, or browser APIs are needed
2. **Tailwind First**: Always use Tailwind utilities before creating custom CSS
3. **Type Safety**: Maintain strict TypeScript typing
4. **shadcn/ui**: Prefer using existing UI components from `/components/ui/`
5. **Path Imports**: Always use `@/` prefix for imports
6. **Email Testing**: Requires valid Gmail credentials in `.env.local`
7. **Build Config**: Linting/TS errors won't block builds (configured in `next.config.mjs`)

---

## Site Structure (Q1 2025)

### Current Routes
- `/` - Main landing (currently generic, to be updated)
- `/n8n` - Automation services landing (Q1 focus)

### Planned Structure
```
/                    → Hub personal (Q2: presents Pedro + routes to services)
/automatizacion      → n8n automation landing (rename from /n8n)
/productos           → AI products landing (Q2+: backend IA, custom solutions)
```

### Q1 Priority
Focus on `/n8n` (or `/automatizacion`) as primary lead generation page.
Main landing `/` should redirect or integrate automation content.

---

## Copy & Content

All copy lives in `.project/copy para la web.md` - **edit copy document first, then implement in components**.

Key messaging:
- "Automatizaciones de IA que recuperan su inversión en 6-8 semanas"
- "Consultoría gratuita" (not "auditoría")
- "Solo acepto 3 proyectos nuevos al mes"
- ROI-focused results with specific metrics

---

**Last Updated**: 2025-01-21
**Project Version**: 2.0.0 (Q1 Rebrand)
**Next.js Version**: 15.2.4
**React Version**: 19
