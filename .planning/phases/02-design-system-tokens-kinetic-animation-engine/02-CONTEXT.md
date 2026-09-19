# Phase 2: Design System Tokens & Kinetic Animation Engine - Context

**Gathered:** 2026-09-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 2 delivers the design system token infrastructure and core kinetic motion engine for Haven Constructions:
1. Expands `src/styles/tokens.css` with complete fluid clamp scales (`--step--2` to `--step-10`, `--space-3xs` to `--space-5xl`), responsive breakpoint overrides (768px, 1280px), and luxury dark/light theme tokens (`[data-theme='light']`, `[data-theme='dark']`).
2. Implements Lenis smooth scrolling via `lenis/react` with calibrated luxury inertia physics (1.2s exponential decay) and `prefers-reduced-motion` accessibility support.
3. Builds a reusable, polymorphic `<TextReveal>` component that splits text into words with `word-parent` and `word-child` spans, triggers on viewport entry via IntersectionObserver, and executes the exact 1.4s `cubic-bezier(0.23, 1, 0.32, 1)` transition with 20ms staggered delays matching `[animation="text-reveal"]`.
</domain>

<decisions>
## Implementation Decisions

### Lenis Smooth Scroll Configuration
- **D-01:** Declarative `lenis/react` Provider (`src/components/providers/SmoothScrollProvider.tsx`) wrapping the root layout, with 1.2s duration, exponential decay easing `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`, and automatic disabling when `prefers-reduced-motion: reduce` is detected. — **Reversibility:** reversible
- **D-02:** Global Lenis styling integration in `src/styles/globals.css` ensuring `html.lenis`, `html.lenis body`, and `[data-lenis-prevent]` behave identically to the legacy site. — **Reversibility:** reversible

### Kinetic Animation Engine (TextReveal)
- **D-03:** Hybrid CSS + React IntersectionObserver architecture: `<TextReveal>` component (`src/components/animations/TextReveal.tsx`) splits children into words, wraps each word in `.word-parent` and `.word-child`, and observes viewport entry (threshold 0.15, once). When active, pure GPU CSS transitions drive the animation, avoiding runtime JS per-frame overhead. — **Reversibility:** costly — Impacts all heading and body reveal animations throughout phases 3-5.
- **D-04:** Exact animation calibration matching legacy site: 1.4s duration, `cubic-bezier(0.23, 1, 0.32, 1)`, and 20ms (`0.02s`) stagger per word. — **Reversibility:** reversible
- **D-05:** Polymorphic component API: `<TextReveal>` accepts an `as` prop (`h1`, `h2`, `h3`, `h4`, `p`, `span`, `div`) and an optional `baseDelay` (in ms) to allow coordinated section reveals. — **Reversibility:** reversible

### Design Tokens & Responsive Architecture
- **D-06:** Responsive media query overrides in `src/styles/tokens.css` for tablet (>=768px) and desktop (>=1280px) viewports:
  - `--navigation-height`: 44px mobile / 84px desktop
  - `--space-section-large`: 120px mobile / 200px tablet / `calc(var(--space-4xl) * 1.4)` desktop
  - `--space-section-medium`: `var(--space-2xl)` mobile / `var(--space-3xl)` tablet / `var(--space-4xl)` desktop
  - `--variable-radius`: 14px mobile / 16px desktop — **Reversibility:** costly
- **D-07:** Luxury theme tokens supporting light mode (default) and dark mode (for project showcases like Obsidian) via scoped CSS variables under `[data-theme='dark']` and `[data-theme='light']`. — **Reversibility:** reversible

### The Agent's Discretion
- Module structure for animation utilities (`src/components/animations/` vs `src/components/ui/`).
- IntersectionObserver root margin tuning (e.g. `0px 0px -50px 0px` for early triggering).
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Legacy Source References
- `legacy_codebase/styles.css` lines 1-180 — Source of truth for all clamp tokens, breakpoint queries, `[animation="text-reveal"]` keyframe transitions, and Lenis CSS rules.
- `legacy_codebase/index.html` — Source of truth for `[data-animated]` and `[animation="text-reveal"]` markup structure.

### Project Guidelines
- `.planning/REQUIREMENTS.md` § DS-01, DS-02, DS-03 — Formal requirements for tokens, Lenis, and TextReveal.
- `GEMINI.md` — Design aesthetic and styling conventions (Vanilla CSS, smooth scrolling physics, staggered text-reveal animations).
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/styles/tokens.css`: Initial clamp scale already exists from Phase 1; will be enriched with responsive overrides and theme variables.
- `src/styles/globals.css`: Global stylesheet imported into root layout.
- `src/app/layout.tsx`: Root layout where `SmoothScrollProvider` will be mounted.

### Established Patterns
- Client component isolation: Interactive client-side hooks (`lenis`, `IntersectionObserver`) wrapped in dedicated client components (`"use client"`), keeping Server Components pure.
</code_context>

<specifics>
## Specific Ideas
- Demonstrate `<TextReveal>` and smooth scrolling immediately on `src/app/page.tsx` with sample hero text and long scrollable section so visual parity can be verified.
</specifics>

<deferred>
## Deferred Ideas
- Phase 3: Header navigation with scroll-direction sensing and compact sticky state.
- Phase 4: Carousel sliders and dynamic case study galleries.
</deferred>

---

*Phase: 02-Design System Tokens & Kinetic Animation Engine*
*Context gathered: 2026-09-17*
