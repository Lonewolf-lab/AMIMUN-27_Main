# Phase 2: Design System Tokens & Kinetic Animation Engine - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-17
**Phase:** 02-Design System Tokens & Kinetic Animation Engine
**Areas discussed:** Lenis Smooth Scroll Provider, Kinetic Animation Engine (TextReveal), Design Tokens & Responsive Breakpoints

---

## Lenis Smooth Scroll Provider

| Option | Description | Selected |
|--------|-------------|----------|
| Declarative lenis/react Provider | Declarative 'lenis/react' Provider with 1.2s exponential easing, smooth wheel inertia, and automatic 'prefers-reduced-motion' fallback. | ✓ |
| Custom Vanilla Lenis hook | Custom Vanilla Lenis useEffect hook with manual RAF loop and window resize listener. | |

**User's choice:** Declarative `lenis/react` Provider with 1.2s exponential easing and reduced-motion fallback.

---

## TextReveal & Kinetic Animation Engine

| Option | Description | Selected |
|--------|-------------|----------|
| Hybrid CSS + IntersectionObserver | Reusable <TextReveal> component splitting words, attaching IntersectionObserver (threshold 0.15, once), triggering exact 1.4s cubic-bezier(0.23, 1, 0.32, 1) transition with 20ms stagger. Zero JS animation overhead. | ✓ |
| Framer Motion | <motion.span> component with staggered variants. | |
| GSAP SplitText | GSAP SplitText with ScrollTrigger. | |

**User's choice:** Hybrid CSS + IntersectionObserver for zero runtime JS animation overhead.
**Notes:** User also confirmed supporting polymorphic `as` prop (`h1`, `h2`, `h3`, `p`, `span`) and `baseDelay` offset.

---

## Design Tokens & Responsive Breakpoints

| Option | Description | Selected |
|--------|-------------|----------|
| Full responsive tokens | Embed media query overrides for navigation-height, space-section scales, and support [data-theme='dark'] / [data-theme='light'] scoped luxury theme tokens in tokens.css. | ✓ |
| Minimal tokens | Keep static clamp values without media query overrides. | |

**User's choice:** Full responsive tokens mirroring legacy media query overrides and scoped theme variables.

---

## The Agent's Discretion

- Module directory organization for components (`src/components/providers/`, `src/components/animations/`).
- IntersectionObserver root margin tuning.

## Deferred Ideas

- Phase 3: Header transitions between transparent and sticky compact states.
- Phase 4: Carousel component for project slides.
