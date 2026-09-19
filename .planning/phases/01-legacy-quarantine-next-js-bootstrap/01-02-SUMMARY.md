---
phase: 01-legacy-quarantine-next-js-bootstrap
plan: 02
subsystem: content-and-typography
tags:
  - typography
  - fonts
  - content-extraction
  - typescript
  - nextjs
provides:
  - Local Suisse luxury font setup via next/font/local (--font-suisse)
  - Structured JSON data for 4 luxury projects (ascot-residence, calibre, obsidian, small-house)
  - Structured JSON data for 4 static pages (about, expertise, contact, for-architects)
  - Strongly typed TypeScript content schemas and loader helpers (getAllProjects, getProjectBySlug)
affects:
  - Phase 2 (Design System Tokens & Kinetic Animation Engine)
  - Phase 4 (Homepage & Portfolio Showcase)
  - Phase 5 (Informational Pages & Consultation Form)
tech-stack:
  added:
    - next/font/local
  patterns:
    - Typed static content loader module (src/lib/content.ts)
    - Zero-CLS font optimization via Next.js localFont
key-files:
  created:
    - public/fonts/suisse.woff2
    - src/app/fonts.ts
    - src/types/content.ts
    - src/lib/content.ts
    - src/content/projects/ascot-residence.json
    - src/content/projects/calibre.json
    - src/content/projects/obsidian.json
    - src/content/projects/small-house.json
    - src/content/pages/about.json
    - src/content/pages/expertise.json
    - src/content/pages/contact.json
    - src/content/pages/for-architects.json
  modified:
    - src/app/layout.tsx
    - src/app/page.tsx
key-decisions:
  - D-03: Hybrid content storage with JSON files in src/content/ and typed helpers
  - D-04: Lightweight TypeScript interfaces without heavy runtime schema validators (no Zod)
  - D-07: Loaded legacy .woff2 font directly via next/font/local into --font-suisse
patterns-established:
  - getAllProjects and getProjectBySlug getters for portfolio access
  - Suisse font injected into root <html> and <body> via className and CSS variable
duration: 4min
completed: 2026-09-17
---

# Phase 1: Legacy Quarantine & Next.js Bootstrap — Plan 02 Summary

**Local luxury typography configured via `next/font/local` and structured project case study JSONs extracted into typed content modules.**

## Performance

- **Duration:** ~4 min
- **Tasks:** 2 completed
- **Files modified:** 14 created/modified

## Accomplishments

- **Local Typography Integration (D-07):** Migrated legacy Suisse font (`c42cb4950679bdba-s.p.woff2`) to `public/fonts/suisse.woff2` and configured `next/font/local` in `src/app/fonts.ts` to expose `--font-suisse`. Injected font classes into `src/app/layout.tsx` for zero-layout-shift luxury typography.
- **Content Extraction (LEG-03, D-03):** Extracted clean, structured JSON payloads from `legacy_codebase/_next/data/G9U8tHBk031x0vfc7LJ4H/` for:
  - 4 luxury project case studies (`ascot-residence.json`, `calibre.json`, `obsidian.json`, `small-house.json`) with headings, architectural details, location, status, main images, and gallery blocks.
  - 4 static pages (`about.json`, `expertise.json`, `contact.json`, `for-architects.json`).
- **Type-Safe Data Layer (D-04):** Created `src/types/content.ts` with `Project`, `ProjectDetail`, `ImageSource`, `PageContent` interfaces and `src/lib/content.ts` with `getAllProjects()`, `getProjectBySlug()`, and `getPageContent()` utilities.
- **Homepage Integration:** Updated `src/app/page.tsx` to render the extracted project case studies using `getAllProjects()`.
- **Production Build & Type Check:** Verified with `npx tsc --noEmit` and `npm run build`, compiling all static pages cleanly in ~1.5s with zero errors or warnings.

## Task Commits

1. **Task 1: Setup luxury Suisse typography with next/font/local** - `cbd2df1`
2. **Task 2: Extract structured project case studies and page data into typed content modules** - `cbd2df1`

## Files Created/Modified

- `public/fonts/suisse.woff2` - Legacy Suisse font binary
- `src/app/fonts.ts` - Local font configuration module
- `src/app/layout.tsx` - Injected Suisse font variable and className
- `src/app/page.tsx` - Updated homepage displaying loaded portfolio showcase
- `src/content/projects/*.json` - Ascot Residence, Calibre, Obsidian, Small House project JSONs
- `src/content/pages/*.json` - About, Expertise, Contact, For Architects page JSONs
- `src/types/content.ts` - TypeScript interfaces for content modeling
- `src/lib/content.ts` - Typed content getter utilities

## Decisions & Deviations

- None - followed `01-CONTEXT.md` decisions D-03, D-04, and D-07 as planned.

## Next Phase Readiness

- Phase 1 execution complete!
- Phase 2 (Design System Tokens & Kinetic Animation Engine) has all foundational design tokens, typography, and clean build architecture ready to implement Lenis smooth scrolling and kinetic text reveal components.
