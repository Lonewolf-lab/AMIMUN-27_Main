---
phase: 01-legacy-quarantine-next-js-bootstrap
plan: 01
subsystem: foundation
tags:
  - nextjs
  - react19
  - typescript
  - legacy-quarantine
  - design-tokens
provides:
  - Clean Next.js 15 App Router project structure at workspace root
  - Quarantined legacy_codebase/ archive with side-by-side proxy support
  - Vanilla CSS design tokens (--step--2 to --step-10, --space-3xs to --space-5xl)
affects:
  - Phase 2 (Design Tokens & Animation Engine)
  - Phase 3 (Header & Layout)
tech-stack:
  added:
    - next@15.5.25
    - react@19.0.0
    - react-dom@19.0.0
    - typescript@5.7.0
    - eslint-config-next@15.2.0
  patterns:
    - Next.js App Router (src/app/)
    - Vanilla CSS custom properties & design tokens (src/styles/tokens.css)
    - CSS Modules component scoping without Tailwind CSS
key-files:
  created:
    - package.json
    - tsconfig.json
    - next.config.ts
    - .eslintrc.json
    - .gitignore
    - src/styles/tokens.css
    - src/styles/reset.css
    - src/styles/globals.css
    - src/app/layout.tsx
    - src/app/page.tsx
  modified: []
key-decisions:
  - D-01: Full quarantine of monolithic legacy files into legacy_codebase/
  - D-02: Added npm run legacy script to run python3 legacy_codebase/server.py 8080
  - D-05: Standard Next.js 15 App Router directory layout organized under src/
  - D-06: Vanilla CSS design tokens and CSS Modules with no Tailwind CSS
patterns-established:
  - Path alias @/* mapped to ./src/*
  - Fluid typography and spacing scales defined in tokens.css and imported in globals.css
duration: 4min
completed: 2026-09-17
---

# Phase 1: Legacy Quarantine & Next.js Bootstrap — Plan 01 Summary

**Monolithic 50MB cloned bundle successfully quarantined into `legacy_codebase/` and Next.js 15 App Router workspace initialized with Vanilla CSS design tokens.**

## Performance

- **Duration:** ~4 min
- **Tasks:** 2 completed
- **Files modified:** 48 created/relocated

## Accomplishments

- **Legacy Quarantine (LEG-01, D-01):** Relocated `index.html` (50MB monolithic clone), `server.py`, `styles.css`, `_next/`, and `icons/` into `legacy_codebase/` while preserving `.git/`, `.planning/`, and `GEMINI.md` at the workspace root.
- **Side-by-Side Comparison Script (D-02):** Added `"legacy": "python3 legacy_codebase/server.py 8080"` to `package.json` to allow developers to run the legacy preview proxy alongside Next.js (`localhost:3000`).
- **Next.js 15 Bootstrap (LEG-02, D-05):** Initialized modern React 19 + TypeScript + ESLint workspace with Next.js App Router under `src/app/`.
- **Vanilla CSS Tokens (D-06):** Replicated exact fluid typography scales (`--step--2` to `--step-10`) and fluid spacing scales (`--space-3xs` to `--space-5xl`) in `src/styles/tokens.css` and `src/styles/globals.css` with zero Tailwind dependency.
- **Production Build Validation:** `npm run build` compiled cleanly in <1s with zero errors or warnings.

## Task Commits

1. **Task 1: Quarantine monolithic legacy assets into legacy_codebase/** - `6fd300e`
2. **Task 2: Bootstrap Next.js 15 App Router workspace with Vanilla CSS tokens** - `6fd300e`

## Files Created/Modified

- `legacy_codebase/*` - Quarantined legacy cloned assets (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`)
- `package.json` - Project manifest with dependencies and `dev`, `build`, `lint`, `legacy` scripts
- `tsconfig.json` - TypeScript compiler configuration with `@/*` path mapping
- `next.config.ts` - Next.js configuration with remote image patterns
- `.eslintrc.json` - Next.js core-web-vitals ESLint configuration
- `.gitignore` - Standard Next.js and Node.js ignore rules
- `src/styles/tokens.css` - Fluid clamp typography and spacing tokens
- `src/styles/reset.css` - Luxury layout reset rules
- `src/styles/globals.css` - Global stylesheet importing tokens and typography utilities
- `src/app/layout.tsx` - App Router root layout with metadata
- `src/app/page.tsx` - Initial bootstrap homepage

## Decisions & Deviations

- None - strictly followed all decisions in `01-CONTEXT.md` and `GEMINI.md`.

## Next Plan Readiness

- Plan 02 (Wave 2) is ready: extracting structured JSON data for the 4 core luxury projects and static pages into `src/content/`, wiring `next/font/local` for `fontSuisse`, and providing typed content getter utilities.
