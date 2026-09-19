# Phase 3: Core Navigation & Layout Shell - Context

**Gathered:** 2026-09-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 3 delivers the foundational global layout shell for Haven Constructions:
1. **Sticky Dual-Mode Header (NAV-01):** Responsive floating navigation bar that transitions smoothly between a top transparent state and a compact, solid/frosted pill state on scroll (`scrollY > 50px`), with automatic hiding when the footer enters the viewport.
2. **Fullscreen Navigation Overlay (NAV-02):** Fullscreen architectural navigation drawer opening with staggered link reveals (`Home`, `Projects`, `About`, `Expertise`, `For Architects`, `Contact`), interactive dual-bar hamburger animation (±12deg rotation), contact CTAs (`0483 987 479`, `info@havenconstructions.com.au`), and scroll locking.
3. **Comprehensive Luxury Footer (NAV-03):** Editorial dark-theme footer containing the "Bespoke Luxury" dot-heading, geometric Haven emblem, quick navigation, social links (Instagram, Facebook), giant architectural "HAVEN" SVG backdrop, recently completed project card teaser (Calibre 2025), and Melbourne regional service tags (Essendon, Aberfeldie, Moonee Ponds, Ascot Vale).
4. **Layout Shell Integration:** Persistent integration of `<Header>` and `<Footer>` into `src/app/layout.tsx` across all pages.
</domain>

<decisions>
## Implementation Decisions

### Header Architecture & Scroll Physics
- **D-01:** Floating pill header component (`src/components/layout/Header/Header.tsx`) using `"use client"` with scroll-sensing hooks. Transitions between unscrolled mode (`max-width: 420px` / transparent background) and scrolled mode (`max-width: 320px` / solid luxury background with subtle border) via CSS transition. — **Reversibility:** costly
- **D-02:** Footer collision detection: When the footer enters the viewport, the header fades out gracefully (`opacity: 0; pointer-events: none`) matching the legacy site behavior (`.footerInView .NavigationBurger`). — **Reversibility:** reversible
- **D-03:** Kinetic hamburger button with dual animated lines that transition into an elegant angled cross (`transform: rotate(12deg)` and `transform: rotate(-12deg)`) on menu toggle. — **Reversibility:** reversible

### Navigation Overlay & Body Locking
- **D-04:** Fullscreen architectural drawer (`src/components/layout/NavigationOverlay/NavigationOverlay.tsx`) with staggered item transition delays (0s, 0.04s, 0.08s, 0.12s, 0.16s, 0.20s) for page links and secondary contact action buttons. — **Reversibility:** reversible
- **D-05:** Scroll locking integration: When the overlay is open, smooth scrolling is paused (`lenis.stop()` or `overflow: hidden`) and Escape key dismisses the menu. — **Reversibility:** reversible

### Luxury Footer Architecture
- **D-06:** Dark-themed footer component (`src/components/layout/Footer/Footer.tsx`) with `data-theme="dark"` containing dot-heading, navigation columns, social links, and the prominent architectural "HAVEN" SVG typography backdrop. — **Reversibility:** costly
- **D-07:** Melbourne suburb service credentials: Prominently feature Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale in the footer metadata section alongside Master Builders accreditation and copyright (`©13—26 Haven Constructions`). — **Reversibility:** reversible
- **D-08:** Recently completed project preview card: Embeds teaser card for `Calibre (2025)` linking to `/projects/calibre` with hover animation. — **Reversibility:** reversible

### Layout Integration
- **D-09:** Integrate `<Header />` and `<Footer />` inside `src/app/layout.tsx` inside `<SmoothScrollProvider>` so header, content, and footer coordinate seamlessly with Lenis smooth scrolling. — **Reversibility:** costly
</decisions>

<canonical_refs>
## Canonical References

### Legacy Source References
- `legacy_codebase/index.html` lines 301-456 — Markup structure for `NavigationBurger`, logo SVG, menu items, and contact links.
- `legacy_codebase/index.html` lines 7452-7740 — Markup for `NavigationFooter`, giant HAVEN SVG path vectors, and Calibre project card.
- `legacy_codebase/styles.css` lines 791-950 — Exact CSS transitions, dimensions, and animations for header pill and navigation burger.
- `legacy_codebase/styles.css` lines 868-940 — Footer styling and layout rules.

### Project Requirements
- `.planning/REQUIREMENTS.md` § NAV-01, NAV-02, NAV-03.
- `GEMINI.md` — Core value of preserving 100% of luxury layout, aesthetics, and fluid typography.
</canonical_refs>

<code_context>
## Existing Code Insights
- `src/app/layout.tsx`: Root layout with `SmoothScrollProvider` and `suisseFont` already configured.
- `src/styles/tokens.css`: All responsive typography and spacing tokens ready.
- `src/content/projects/calibre.json`: Structured content available for the footer project teaser card.
</code_context>

---

*Phase: 03-Core Navigation & Layout Shell*
*Context gathered: 2026-09-17*
