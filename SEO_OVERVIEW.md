# SEO Overview: QR Shuttle

> Strategy: shuttlelab-handbook/playbooks/01-saas-funnel-strategy.md
> Execution playbook: shuttlelab-handbook/playbooks/00-new-saas-project.md

## Project type
- [x] Free tool

## Audience target
- [x] Overseas (English-primary)
- [x] Domestic Chinese (Chinese-primary)

## Payment (if paid)
- Processor: None (free tool)
- Pricing: Free forever
- Refund window: N/A

## i18n strategy
- Implementation: URL-based + `localePrefix: "as-needed"` (next-intl)
- Layer 4 language: English only

## Path A pages (internal navigation)
- Layer 1: `/` - Homepage with QR generator
- Layer 3: `/about` - About page with FAQ
- Layer 3: `/privacy` - Privacy policy
- Layer 3: `/terms` - Terms of service

## Path B pages (SEO landing)
All 6 live with 4 schemas each (TechArticle/HowTo/FAQPage/BreadcrumbList). Total word counts below (measured 2026-06).
- Layer 4: `/tools/url-qr-code` - URL QR code generator (~2043 words)
- Layer 4: `/tools/wifi-qr-code` - WiFi QR code generator (~1801 words)
- Layer 4: `/tools/vcard-qr-code` - Business card QR code (~1667 words)
- Layer 4: `/tools/text-qr-code` - Text QR code generator (~2047 words)
- Layer 4: `/tools/email-qr-code` - Email QR code generator (~2039 words)
- Layer 4: `/tools/custom-qr-code` - Custom QR code with logo (~2188 words)

## Schemas applied
- [x] SoftwareApplication (root layout)
- [x] FAQPage (about page)
- [x] HowTo (about page + all Layer 4 pages)
- [x] TechArticle (all 6 Layer 4 pages)
- [x] FAQPage (all 6 Layer 4 pages)
- [x] BreadcrumbList (all 6 Layer 4 pages)

## SEO Assets
- [x] `app/layout.tsx` - Root metadata + JSON-LD
- [x] `app/[locale]/layout.tsx` - hreflang + x-default
- [x] `app/sitemap.ts` - Sitemap with alternates
- [x] `app/robots.ts` - Robots.txt
- [x] `app/opengraph-image.tsx` - OG image
- [x] `app/manifest.ts` - PWA manifest
- [x] `app/icon-192.png/route.tsx` - PWA icon 192
- [x] `app/icon-512.png/route.tsx` - PWA icon 512
- [x] `app/not-found.tsx` - Custom 404

## Key metadata
- Domain: qr.shuttlelab.org
- Title: QR Shuttle — Free Online QR Code Generator
- Description: Generate custom QR codes for URLs, WiFi, vCard, email, and more. 100% private, no watermarks, no registration.
- OG locale: en_US, zh_CN
- Canonical: /

## Known gaps
- [ ] Google Search Console verification pending
- [ ] Bing Webmaster Tools verification pending
- [ ] Backlink building pending

## Last reviewed: 2026-06-04
