# Phase 6 Research: SEO, Performance & Production Polish

## 1. Next.js App Router Metadata Best Practices

Next.js 15 provides native file-based metadata and API exports:
- `metadataBase: new URL('https://www.havenconstructions.com.au')`
- Title template: `%s | Haven Constructions`
- Dynamic sitemap: `src/app/sitemap.ts` exporting default async function returning `MetadataRoute.Sitemap`.
- Robots configuration: `src/app/robots.ts` exporting default function returning `MetadataRoute.Robots`.
- Vector app icon: `src/app/icon.svg` automatically detected by Next.js and served as `favicon.ico` / apple icon.

## 2. JSON-LD LocalBusiness Schema for High-End Construction

According to Google Search Central and Schema.org:
- Entity type: `HomeAndConstructionBusiness` (subtype of `LocalBusiness`).
- Key properties:
  - `name`: "Haven Constructions"
  - `description`: "Specialist luxury residential builder crafting bespoke architectural homes across Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale."
  - `address`: Street, locality, region, postalCode, country.
  - `areaServed`: Explicit list of target suburbs (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale, Melbourne).
  - `priceRange`: "$$$$"
  - `openingHours`: "Mo-Fr 08:00-17:30"
  - `telephone`: "+61483987479"
  - `email`: "info@havenconstructions.com.au"

## 3. Core Web Vitals (CWV) & Image Optimization

To guarantee sub-second LCP and 0 CLS:
- **Zero CLS**: All image parents must specify `aspect-ratio` in CSS (`16/10`, `4/5`, `1/1`) and `position: relative`.
- **LCP Optimization**: Homepage hero image has `priority={true}` and `fetchPriority="high"`.
- **Image Formats**: Enable `formats: ['image/avif', 'image/webp']` in `next.config.ts`.
- **Asset Localization**: Fonts are already localized in `public/fonts/` with `next/font/local` using font-display `swap`.
