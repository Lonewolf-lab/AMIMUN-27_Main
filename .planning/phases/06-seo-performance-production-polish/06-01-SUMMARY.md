# Plan 06-01 Summary: SEO, OpenGraph, Sitemaps & Structured Data

## Outcomes
- **`<StructuredData />` (PERF-01)**: Created Schema.org `HomeAndConstructionBusiness` JSON-LD structured data with Haven's verified studio address (West Footscray), contact information, price tier (`$$$$`), and dedicated service areas (`Essendon`, `Aberfeldie`, `Moonee Ponds`, `Ascot Vale`, `Melbourne`).
- **Enhanced `RootLayout`**: Configured canonical base URL (`https://www.havenconstructions.com.au`), title templates, luxury keywords, full OpenGraph image representations, and Twitter summary cards.
- **Dynamic Sitemaps (`sitemap.ts`)**: Automatically lists all core navigation pages (`/`, `/about`, `/expertise`, `/for-architects`, `/projects`, `/contact`) and dynamically indexes every project case study (`/projects/[slug]`) with `lastModified` and `priority`.
- **Dynamic Robots (`robots.ts`)**: Permissive crawling policy referencing the canonical sitemap index.
- **Vector Brand Favicon**: SVG architectural emblem served via `src/app/icon.svg` and `public/favicon.svg`.
- **Verification**: `npx tsc --noEmit` and `npm run build` compiled 16/16 static routes with 0 errors.

## Verification Artifacts
- Commit: `db7844b` (`feat(06-01): implement comprehensive seo, structured data, sitemap, and brand icon`)
- Next.js static prerendered routes:
  - `/icon.svg`
  - `/robots.txt`
  - `/sitemap.xml`
