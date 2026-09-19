# Roadmap: Haven Constructions Luxury Showcase Modernization

## Overview

A 6-phase horizontal modernization journey transforming the monolithic 50MB cloned Haven Constructions website into an optimized, modular Next.js (App Router) + React 19 + TypeScript application with 100% visual and animation parity.

## Phases

- [x] **Phase 1: Legacy Quarantine & Next.js Bootstrap** - Isolate legacy files into `legacy_codebase/`, initialize clean Next.js + TS environment, extract structured content JSONs. (completed 2026-09-17)
- [x] **Phase 2: Design System Tokens & Kinetic Animation Engine** - Replicate fluid clamp typography/spacing tokens, configure Lenis smooth scrolling, and build staggered text-reveal components. (completed 2026-09-17)
- [x] **Phase 3: Core Navigation & Layout Shell** - Build dual-mode sticky header, mobile overlay menu, and luxury footer with Melbourne suburb SEO tags. (completed 2026-09-17)
- [x] **Phase 4: Homepage & Portfolio Showcase** - Componentize full-bleed hero, brand statement, featured projects carousel, and dynamic `/projects/[slug]` case study templates. (completed 2026-09-17)
- [x] **Phase 5: Informational Pages & Consultation Form** - Build `/about`, `/expertise`, `/for-architects`, and interactive `/contact` consultation inquiry form. (completed 2026-09-17)
- [x] **Phase 6: SEO, Performance & Production Polish** - Implement Next.js Metadata, JSON-LD schema, asset localization, and responsive QA verification. (completed 2026-09-17)

## Phase Details

### Phase 1: Legacy Quarantine & Next.js Bootstrap

**Goal**: Move monolithic legacy files to `legacy_codebase/`, bootstrap fresh Next.js App Router workspace, and extract clean project JSON content.
**Depends on**: Nothing (initial foundation)
**Requirements**: LEG-01, LEG-02, LEG-03
**Success Criteria** (what must be TRUE):

  1. Cloned files (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`) safely moved to `legacy_codebase/` and accessible for reference.
  2. Next.js 15/14 with React, TypeScript, and ESLint builds cleanly at root (`npm run build`).
  3. Structured content schemas and JSON files for projects (`ascot-residence`, `calibre`, `obsidian`, `small-house`) and static pages loaded in `src/content/`.

**Plans**: TBD

### Phase 2: Design System Tokens & Kinetic Animation Engine

**Goal**: Replicate exact fluid typography scales, spacing tokens, Lenis smooth scrolling, and kinetic text-reveal component.
**Depends on**: Phase 1
**Requirements**: DS-01, DS-02, DS-03
**Success Criteria** (what must be TRUE):

  1. CSS custom properties in `src/styles/globals.css` accurately reflect `--step--2` to `--step-10` and fluid clamps.
  2. Lenis smooth scroll active globally with identical damping and inertia.
  3. Reusable `TextReveal` component renders staggered translateY words with timing matching original site.

**Plans**: TBD

### Phase 3: Core Navigation & Layout Shell

**Goal**: Deliver responsive header navigation, mobile drawer overlay, and accredited footer.
**Depends on**: Phase 2
**Requirements**: NAV-01, NAV-02, NAV-03
**Success Criteria** (what must be TRUE):

  1. Sticky header smoothly transitions between transparent top mode and compact solid sticky mode on scroll.
  2. Fullscreen mobile drawer opens with animated navigation links and touch-friendly CTA buttons.
  3. Luxury footer displays complete Melbourne regional builder credentials, links, and suburb service tags.

**Plans**: TBD

### Phase 4: Homepage & Portfolio Showcase

**Goal**: Build the flagship homepage sections and dynamic portfolio case study pages.
**Depends on**: Phase 3
**Requirements**: PORT-01, PORT-02, PORT-03
**Success Criteria** (what must be TRUE):

  1. Homepage hero, brand statement, and project carousel render with full visual and animation parity.
  2. Dynamic route `/projects/[slug]` displays individual case studies (Ascot Residence, Calibre, Obsidian, Small House) with high-res galleries.
  3. Portfolio archive `/projects` allows category filtering and interactive hover states.

**Plans**: TBD

### Phase 5: Informational Pages & Consultation Form

**Goal**: Build brand narrative, architect partnership, and lead generation consultation form.
**Depends on**: Phase 4
**Requirements**: INFO-01, INFO-02, INFO-03
**Success Criteria** (what must be TRUE):

  1. `/about` page renders Haven history, builder philosophy, and leadership profile.
  2. `/expertise` and `/for-architects` detail collaboration workflows and high-end construction standards.
  3. Interactive consultation inquiry form at `/contact` captures client project parameters with real-time validation.

**Plans**: TBD

### Phase 6: SEO, Performance & Production Polish

**Goal**: Finalize SEO metadata, eliminate external fallback dependencies, and pass visual/performance audits.
**Depends on**: Phase 5
**Requirements**: PERF-01, PERF-02, PERF-03
**Success Criteria** (what must be TRUE):

  1. Complete OpenGraph, Twitter card, and LocalBusiness JSON-LD schema metadata present on all routes.
  2. Zero 404 network errors; all media, fonts, and icons reside locally in `public/`.
  3. Sub-second LCP and responsive cross-device layout verified without regressions.

**Plans**: TBD
