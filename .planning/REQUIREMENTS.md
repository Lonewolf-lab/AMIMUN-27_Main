# Requirements: Haven Constructions Luxury Showcase Modernization

**Defined:** 2026-09-17  
**Core Value:** Preserve 100% of the premium visual layout, luxury aesthetics, fluid typography, smooth scrolling physics (Lenis), and staggered text-reveal animations while transitioning to a modular, high-performance React component architecture.

## v1 Requirements

### Legacy Isolation & Foundation (LEG)

- [x] **LEG-01**: Quarantine all existing cloned assets (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`) into a dedicated `legacy_codebase/` directory.
- [x] **LEG-02**: Initialize a clean Next.js (App Router) + React 19 + TypeScript project at the workspace root without overwriting planning documents.
- [x] **LEG-03**: Extract static project data (`projects/*.json`, `about.json`, `expertise.json`, `contact.json`) and local media assets from `legacy_codebase/` into type-safe content definitions.

### Design System & Animation Engine (DS)

- [x] **DS-01**: Replicate fluid clamp typography (`--step--2` to `--step-10`) and spacing scale (`--space-3xs` to `--space-5xl`) in global CSS variables.
- [x] **DS-02**: Implement Lenis smooth scroll provider with native viewport resize and inertia calibration matching original site feel.
- [x] **DS-03**: Build a reusable `TextReveal` component supporting staggered word `translateY(100% -> 0)` animations matching `[animation="text-reveal"]`.

### Navigation & Core Layout (NAV)

- [x] **NAV-01**: Build responsive sticky dual-mode Header component transitioning between top transparent mode and compact solid sticky mode.
- [x] **NAV-02**: Implement fullscreen mobile overlay navigation menu with animated link reveals and quick contact CTAs.
- [x] **NAV-03**: Implement comprehensive luxury Footer with accreditation badges, Melbourne suburb service tags (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale), and quick navigation.

### Homepage & Portfolio Showcase (PORT)

- [x] **PORT-01**: Componentize Homepage sections (Hero with full-bleed imagery, Brand Statement, Expertise Highlights, Featured Projects carousel).
- [x] **PORT-02**: Build dynamic project case study pages (`/projects/[slug]`) rendering Ascot Residence, Calibre, Obsidian, and Small House with high-res galleries and architect attributions.
- [x] **PORT-03**: Build comprehensive portfolio index page (`/projects`) with category filters and interactive project hover transitions.

### Informational Pages & Client Inquiry (INFO)

- [x] **INFO-01**: Build `/about` page with Haven history, leadership profile, and philosophy narrative.
- [x] **INFO-02**: Build `/expertise` and `/for-architects` pages detailing tender process, architectural collaboration, and construction standards.
- [x] **INFO-03**: Build interactive `/contact` page with consultation inquiry form (project location, architectural status, project scope, budget range).

### Performance, SEO & Quality (PERF)

- [x] **PERF-01**: Configure Next.js Metadata API for all routes with OpenGraph tags, luxury builder keywords, and JSON-LD LocalBusiness schema.
- [x] **PERF-02**: Eliminate external 404 live-proxy dependency by ensuring all local imagery, fonts, and icons are fully localized in `public/`.
- [x] **PERF-03**: Verify complete visual fidelity and performance benchmarks (sub-second LCP, zero layout shift) across desktop and mobile viewports.

## v2 Requirements

### Deferred Capabilities

- **CMS-01**: Headless CMS integration (Sanity or Strapi) for real-time portfolio management by builder team.
- **PORTAL-01**: Private client portal for build progress tracking, milestone logs, and architectural document sharing.
- **CALC-01**: Interactive custom build ballpark estimation tool for prospective clients.

## Out of Scope

| Feature | Reason |
|---------|--------|
| E-commerce / Payment Processing | Custom luxury homes are quoted and contracted via formal tendering, not online checkouts |
| User Account Registration | Public showcase focuses on lead generation and architect partnership; client accounts deferred to v2 |
| Rewriting 3D Draco Models | Existing 3D assets will be referenced and loaded without changing geometry formats |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| LEG-01 | Phase 1 | Complete |
| LEG-02 | Phase 1 | Complete |
| LEG-03 | Phase 1 | Complete |
| DS-01 | Phase 2 | Complete |
| DS-02 | Phase 2 | Complete |
| DS-03 | Phase 2 | Complete |
| NAV-01 | Phase 3 | Complete |
| NAV-02 | Phase 3 | Complete |
| NAV-03 | Phase 3 | Complete |
| PORT-01 | Phase 4 | Complete |
| PORT-02 | Phase 4 | Complete |
| PORT-03 | Phase 4 | Complete |
| INFO-01 | Phase 5 | Complete |
| INFO-02 | Phase 5 | Complete |
| INFO-03 | Phase 5 | Complete |
| PERF-01 | Phase 6 | Complete |
| PERF-02 | Phase 6 | Complete |
| PERF-03 | Phase 6 | Complete |
