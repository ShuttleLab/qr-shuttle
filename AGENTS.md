# QR Shuttle

Static-site QR code generator. Everything runs in the browser — no server, no data collection.

## Commands

```bash
npm install          # install deps
npm run dev          # next dev (http://localhost:3000)
npm run build        # next build && node scripts/postbuild.mjs
npm run lint         # eslint
```

There is no `typecheck` or `test` script. The repo has no test framework.

## Build quirk (postbuild)

`npm run build` runs two steps:

1. `next build` — emits static export to `out/` via `output: "export"` in next.config.ts. Because `localePrefix: "as-needed"` is used, the default locale (English) lands in `out/en/` but the canonical `/` URL is English. So step 2 fixes this.
2. `node scripts/postbuild.mjs` — promotes `out/en/*` → `out/`, removes `out/en/`, patches `<html lang>` in `out/zh/**/*.html` from `"en"` → `"zh-CN"`, and generates a service worker `out/sw.js` that precaches all HTML routes + PWA assets.

If you add a new route, verify it appears in the precache list. If you change the locale strategy, update the promotion/patching logic in `scripts/postbuild.mjs`.

## Architecture

- **Next.js 16 App Router** — all pages pre-rendered at build time (`output: "export"`).
- **Tailwind CSS v4** — PostCSS plugin (`@tailwindcss/postcss`), no Tailwind config file.
- **shadcn/ui** style `"base-nova"` — uses `@base-ui/react` (not Radix). Component source is in `components/ui/`.
- **next-intl v4** — URL-based i18n, `localePrefix: "as-needed"`. English at `/`, Chinese at `/zh/...`. Translations in `messages/{en,zh}.json`.
- **Color palette system** — 5 palettes (purple default, sakura, mint, ocean, sunset, graphite) applied via `<html data-palette="...">`, orthogonal to light/dark mode. See `app/globals.css` for token definitions (ShuttleLab hue 264). To add a palette: add CSS blocks for light and `.dark[data-palette="..."]` variants.
- **QR code generation** — `qrcode.react` + `file-saver` for export (PNG/SVG/JPG). Logo embedding with QR center excavation.
- **PWA** — service worker generated at build time by postbuild. Manifest and icons in `app/`.

## Structure notes

| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout — global metadata, JSON-LD (SoftwareApplication schema), ThemeProvider, Toaster, SW registration |
| `app/[locale]/layout.tsx` | Per-locale layout — next-intl provider, hreflang alternates, locale-specific metadata |
| `app/[locale]/page.tsx` | Homepage — embeds `QRGenerator` component |
| `app/[locale]/tools/` | Layer 4 SEO landing pages (6 pages, each with TechArticle/HowTo/FAQPage/BreadcrumbList schemas) |
| `components/` | All UI: `qr-generator`, `qr-preview`, `qr-controls`, `qr-export`, `qr-templates`, `theme-sync`, `layout-shell` |
| `lib/` | `qr-utils.ts` (value encoding), `qr-templates.ts` (default data), `constants.ts` (color arrays, types) |
| `i18n/` | next-intl routing, request, and navigation config |

## Conventions

- Import path alias: `@/*` maps to project root.
- `cn()` utility from `@/lib/utils` (clsx + tailwind-merge).
- All i18n keys use dot-separated namespaced paths (e.g. `home.templates.items.url.title`). Client: `useTranslations()`. Server: `getTranslations({ locale, namespace })`.
- `params` is typed as `Promise<{ locale: string }>` (Next.js 16 pattern).
- Call `setRequestLocale(locale)` in every server-rendered page for `generateStaticParams` support.
- Deploys to Cloudflare Pages via `wrangler deploy` (config in `wrangler.toml`, assets in `out/`).
- No `.env` files or environment variables needed.
- After editing `package.json`, run `npm install` and commit the updated `package-lock.json`. Cloudflare Pages uses `npm ci` which fails if the lockfile is out of sync.

## Related files

- `CLAUDE.md` delegates to this file (`@AGENTS.md`).
- `SEO_OVERVIEW.md` documents SEO asset inventory and known gaps.
