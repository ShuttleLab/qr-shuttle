# QR Shuttle - Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run typecheck
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **i18n**: next-intl (URL-based)
- **QR Code**: qrcode.react
- **Export**: file-saver
- **Icons**: lucide-react
- **Toast**: sonner
- **Fonts**: Geist + Geist Mono

### Project Structure

```
qr-shuttle/
├── app/
│   ├── layout.tsx                  # Root layout (metadata, JSON-LD)
│   ├── globals.css
│   ├── sitemap.ts                  # SEO sitemap
│   ├── robots.ts                   # SEO robots
│   ├── opengraph-image.tsx         # OG image
│   ├── icon-192.png/route.tsx      # PWA icon
│   ├── icon-512.png/route.tsx      # PWA icon
│   ├── manifest.ts                 # PWA manifest
│   ├── not-found.tsx               # Custom 404
│   └── [locale]/
│       ├── layout.tsx              # Locale layout (next-intl provider)
│       ├── page.tsx                # Layer 1 homepage
│       ├── about/page.tsx          # Layer 3 About
│       ├── privacy/page.tsx        # Layer 3 Privacy
│       └── terms/page.tsx          # Layer 3 Terms
├── components/
│   ├── header.tsx                  # Navigation bar
│   ├── footer.tsx                  # Footer
│   ├── theme-sync.tsx              # Theme toggle
│   ├── layout-shell.tsx            # Layout wrapper
│   ├── qr-generator.tsx            # Main QR generator
│   ├── qr-preview.tsx              # QR preview
│   ├── qr-controls.tsx             # Customization controls
│   ├── qr-templates.tsx            # Preset templates
│   ├── qr-export.tsx               # Export functionality
│   ├── about-content.tsx           # About page content
│   ├── AboutFaq.tsx                # FAQ component
│   ├── AboutFaqData.tsx            # FAQ data
│   └── ui/                         # shadcn components
├── i18n/
│   ├── routing.ts                  # next-intl routing config
│   ├── request.ts                  # Server-side request config
│   └── navigation.ts               # Link, useRouter, etc.
├── messages/
│   ├── en.json                     # English translations
│   └── zh.json                     # Chinese translations
├── lib/
│   ├── qr-utils.ts                 # QR code utility functions
│   ├── qr-templates.ts             # Template data
│   ├── utils.ts                    # cn() utility
│   └── constants.ts                # Constants
├── next.config.ts
├── wrangler.toml
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── AGENTS.md                       # This file
└── SEO_OVERVIEW.md                 # SEO asset map
```

### Key Features

1. **QR Code Types**: URL, Text, WiFi, vCard, Email, SMS, Phone, Location, Event
2. **Customization**: Colors, size, error correction, style, logo upload
3. **Export**: PNG, SVG, JPG formats
4. **i18n**: English and Chinese support
5. **Theme**: System/Light/Dark mode
6. **PWA**: Installable on mobile devices
7. **SEO**: Full metadata, sitemap, robots.txt, OG images

### Deployment

This project is configured for static export and Cloudflare Pages deployment:

```bash
# Build
npm run build

# Deploy to Cloudflare Pages
wrangler deploy
```

The `out/` directory contains the static export ready for deployment.

### Environment Variables

No environment variables required for basic functionality. All QR code generation happens client-side.

### Development Notes

- All QR code generation happens in the browser (privacy-first)
- No server-side processing or data collection
- Translations are in `messages/en.json` and `messages/zh.json`
- UI components use shadcn/ui pattern
- Follows ShuttleLab conventions for consistency

### Related Projects

- [Image Shuttle](https://image.shuttlelab.org) - Image compression
- [Note Shuttle](https://note.shuttlelab.org) - Encrypted notes
- [Status Shuttle](https://status.shuttlelab.org) - Uptime monitoring

### Support

For issues or questions, contact: support@shuttlelab.org
