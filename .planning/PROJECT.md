# Haven Constructions — Luxury Home Builder Showcase Modernization

## What This Is

A complete, high-fidelity modernization and refactoring of the Haven Constructions custom luxury home builder showcase (serving Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale) from an exported, monolithic static bundle into a clean, maintainable Next.js (App Router) + React + TypeScript web application.

## Core Value

Preserve 100% of the premium visual layout, luxury aesthetics, fluid typography, smooth scrolling physics (Lenis), and staggered text-reveal animations while transitioning to a modular, high-performance React component architecture.

## Business Context

- **Customer:** High-net-worth clients seeking custom luxury home builders and architectural collaborations in Melbourne's inner northwest (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale).
- **Revenue Model:** High-value residential construction contracts and architect partnerships.
- **Success Metric:** Flawless visual luxury fidelity, sub-second load times, 100/100 Lighthouse performance, and clean modular code.

## Requirements

### Validated (Existing Capabilities)

- ✓ Luxury home builder brand identity and Melbourne regional positioning — existing
- ✓ High-definition project portfolio showcase (Ascot Residence, Calibre, Obsidian, Small House) — existing
- ✓ Structured pages for About, Expertise, Architect Partnerships, and Contact inquiries — existing
- ✓ Custom fluid typography scale and responsive spacing system (`styles.css`) — existing
- ✓ Lenis smooth inertia scrolling and staggered text-reveal animation logic — existing
- ✓ Local fallback reverse-caching mechanism for remote media assets (`server.py`) — existing

### Active (Modernization Scope)

- [ ] Isolate current cloned artifacts into `legacy_codebase/` as a clean reference baseline
- [ ] Initialize modern Next.js (App Router) + React 19 + TypeScript project structure
- [ ] Extract and organize static assets (fonts, images, project data JSONs) from legacy artifacts
- [ ] Establish design system tokens with modular CSS / CSS Modules matching original fluid clamp scales
- [ ] Rebuild responsive header navigation, sticky nav states, and mobile overlay menu
- [ ] Implement Lenis smooth scroll and GSAP/Motion staggered text-reveal animation engine
- [ ] Componentize homepage hero, statement sections, showcase slider, and stats counters
- [ ] Componentize portfolio project case studies (`ascot-residence`, `calibre`, `obsidian`, `small-house`)
- [ ] Componentize About, Expertise, For Architects, and Contact interactive inquiry form
- [ ] Implement SEO metadata, OpenGraph tags, and semantic schema markup for local Melbourne builder ranking

### Out of Scope

- Backend CMS integration (headless Strapi / Sanity / WordPress) — initial phase focuses on static data hydration from existing JSON manifests
- Full online client portal / quote calculator — not part of current showcase scope
- Complete 3D canvas rewrite — existing Draco 3D assets will be preserved and loaded modularly

## Context

- The existing codebase was cloned and captured as a single 49.8 MB `index.html` with external CSS and `_next/` static data JSONs.
- `legacy_codebase/` will retain the original files (`index.html`, `server.py`, `styles.css`, `_next/`, `icons/`) so any specific DOM structure, class name, or animation timing can be verified against the source.
- Upstream origin is `https://www.havenconstructions.com.au`.

## Constraints

- **Tech Stack:** Next.js (App Router), React 19, TypeScript, CSS Modules / Vanilla CSS tokens, Lenis, GSAP / Framer Motion.
- **Visual Fidelity:** The layout, typography scales, colors, padding, and animations must exactly match the legacy live site.
- **Performance:** Eliminate monolithic file bloat, optimize fonts and media with Next.js Image/Font optimization.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router + TypeScript | Provides native SSG/SSR, built-in image & font optimization, and superior SEO for a luxury builder | ✓ Good |
| Modular CSS with exact tokens | Preserves existing fluid clamp typography and spacing system without introducing framework opinion drift | ✓ Good |
| Isolate legacy codebase into `legacy_codebase/` | Prevents file collisions with the new Next.js structure while keeping a 1:1 reference on disk | ✓ Good |
| Lenis + GSAP / Motion for animations | Matches the exact inertia scrolling and staggered text reveals from the original production site | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-17 after initialization*
