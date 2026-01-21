# Pedro Castro Portfolio

A modern, responsive portfolio website showcasing expertise in iOS development, AI solutions, and lean product development.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)

## Features

- 🎨 Clean, Apple-inspired design
- 📱 Fully responsive layout
- ✉️ Working contact form with email integration
- 🌙 Dark mode support (via next-themes)
- ⚡ Built with Next.js 15 App Router
- 🎯 TypeScript for type safety
- 🎭 50+ pre-built UI components (shadcn/ui)
- 📧 Gmail SMTP integration with Nodemailer

## Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- Gmail account for email functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pedrocastro.pro
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file:
```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
GMAIL_RECIPIENT=recipient@example.com
```

**Note**: Generate a Gmail App Password at: [Google Account Security](https://myaccount.google.com/security) > 2-Step Verification > App Passwords

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on localhost:3000 |
| `pnpm build` | Build production bundle |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
pedrocastro.pro/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Email API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Hero + expertise cards
│   ├── contact-form.tsx    # Contact form
│   └── ...
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── Configuration files
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GMAIL_USER` | Gmail account for sending emails | Yes |
| `GMAIL_APP_PASSWORD` | Gmail app-specific password | Yes |
| `GMAIL_RECIPIENT` | Email address to receive contact form submissions | Yes |

## Features Overview

### Hero Section
- Professional introduction
- Three expertise areas:
  - iOS Development
  - Lean Development
  - AI Solutions
- Call-to-action buttons

### Contact Form
- Client-side validation
- Real-time loading states
- Success/error feedback
- Email delivery via Gmail SMTP

### UI Components
- 50+ pre-built components from shadcn/ui
- Accessible (ARIA compliant)
- Customizable with Tailwind CSS

## Customization

### Updating Content

**Hero Section**: Edit `components/hero-section.tsx`
- Update `expertiseAreas` array for cards
- Modify heading and tagline text

**Contact Form**: Edit `components/contact-form.tsx`
- Adjust form fields
- Customize styling

**SEO Metadata**: Edit `app/layout.tsx`
- Update title and description

### Styling

**Colors**: Modify `tailwind.config.ts` or `app/globals.css`

**Fonts**: Update in `app/layout.tsx` (currently using Inter)

**Theme**: Configure in `tailwind.config.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## Email Setup Guide

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate an App Password:
   - Select "Mail" as the app
   - Select "Other" as the device
   - Copy the 16-character password
4. Add to `.env.local`:
   ```
   GMAIL_APP_PASSWORD=your-16-char-password
   ```

## Troubleshooting

### Contact Form Not Sending

- Check environment variables are set correctly
- Verify Gmail App Password is valid
- Check console for error messages
- Ensure 2-Step Verification is enabled on Gmail

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`
- Check Node.js version (18+ required)

### Styling Issues

- Clear Tailwind cache: `pnpm build`
- Check `tailwind.config.ts` configuration
- Verify CSS imports in `app/layout.tsx`

## Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Customize content and styling
3. Update environment variables
4. Deploy to your preferred platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Pedro Castro**

- Website: [pedrocastro.pro](https://pedrocastro.pro)
- Email: Use the contact form on the website

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Version**: 1.0.0
**Last Updated**: November 2025
