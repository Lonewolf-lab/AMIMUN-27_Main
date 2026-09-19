# Phase 6 Context: SEO, Performance & Production Polish

## Requirements & Scope
- **PERF-01**: Configure Next.js Metadata API for all routes with OpenGraph tags, luxury builder keywords, and JSON-LD LocalBusiness schema.
- **PERF-02**: Eliminate external 404 live-proxy dependency by ensuring all local imagery, fonts, and icons are fully localized in `public/` and optimized.
- **PERF-03**: Verify complete visual fidelity and performance benchmarks (sub-second LCP, zero layout shift) across desktop and mobile viewports.

## Key Architectural Decisions
1. **JSON-LD Schema**: Provide rich `HomeAndConstructionBusiness` structured data detailing Haven Constructions' primary service regions (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale), studio coordinates, contact details, and price range (`$$$$`).
2. **Next.js Metadata API & Sitemaps**: Use App Router `sitemap.ts` and `robots.ts` to dynamically generate search engine indices including all static pages (`/`, `/about`, `/expertise`, `/for-architects`, `/contact`, `/projects`) and all dynamic case studies (`/projects/[slug]`).
3. **Image & Asset Delivery**: Ensure `next.config.ts` has AVIF and WebP modern image format compression enabled, remote pattern caching, and zero Cumulative Layout Shift (CLS) via fixed aspect ratios on all containers.
4. **Brand Icons**: Generate clean vector brand icon at `src/app/icon.svg` matching Haven's geometric architectural emblem.
