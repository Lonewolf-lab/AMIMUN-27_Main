---
slug: 20260917-legacy-preloader-animation
title: Implement Authentic Legacy Preloader & Opening Animation Choreography
status: in-progress
created_at: "2026-09-17"
---

# Quick Task: Implement Authentic Legacy Preloader & Opening Animation Choreography

## Objective
Recreate 100% of the authentic preloader and opening hero choreography discovered in the legacy Next.js bundle (`pages/_app-535ca2b29532a6a5.js` modules 849, 592, and 7388):
1. The 7-piece Haven geometric logo mark assembly in the viewport center (`scale(2)`).
2. The upward flight and scale-down transition of the logo to the navigation header at `delay: 0.9s`.
3. The synchronized full-viewport `#0C388D` blue mask and rising HAVEN letterforms in the hero at `delay: 0.9s`.
4. The curtain wipe transition (`clip-path: inset(0 0 100%)`) at `delay: 1.2s`.
5. The media entrance and subheading fade-in at `delay: 1.4s - 1.5s`.
6. Navigation "Let's Talk" CTA entrance at `delay: 1.8s`.

## Architecture & Legacy Analysis
- **Module 7388**:
  - Global animation anchor `VG = 0.9s`.
  - Ease bezier: `[0.65, 0.05, 0, 1]` and `[0.76, 0, 0.24, 1]`.
- **Module 592 (`c.A` - 7-Piece Geometric Logo)**:
  - 7 SVG elements (3 rects, 4 paths).
  - Stagger delays: `[0, 1, 2, 2, 3, 3, 4] * 0.25s` from initial scale 0 to 1.
  - Hover animation reverses and re-draws pieces dynamically.
- **Module 849 (`iA.A` - Page Transition & Preloader Curtain)**:
  - Centers logo at `top: 50%`, `y: -150%`, `scale: 2`.
  - At `delay: 0.9s`, smoothly translates to `top: 0, y: 0, scale: 1` over `0.8s`.
  - At `delay: 1.2s`, wipes `#0C388D` curtain up (`clip-path: inset(0 0 100%)`).

## Implementation Plan

### Task 1: Create `AnimatedLogo` Component
Create `src/components/layout/Header/AnimatedLogo.tsx` with:
- 7 distinct geometric SVG pieces conforming to `viewBox="0 0 36 36"`.
- Framer Motion animation triggers with exact `[0, 0.25, 0.5, 0.5, 0.75, 0.75, 1.0]s` sequential scale-in.
- Interactive hover ripple effect matching legacy behavior.

### Task 2: Create Preloader & Page Entrance System
Create `src/components/layout/Preloader/Preloader.tsx` and `Preloader.module.css`:
- Displays the fullscreen preloader backdrop on initial load (`isInitialLoad`).
- Centers the `AnimatedLogo` with `scale(2)`.
- Keyframes the upward transition to the navigation header at `0.9s` duration `0.8s`.
- Wipes the `#0C388D` curtain upward at `1.2s`.
- Dispatches completion state so the page unlocks Lenis smooth scrolling and interactions cleanly.

### Task 3: Refine `Hero.tsx` Opening Timing
Harmonize `Hero.tsx` and `Hero.module.css`:
- Blue overlay `.overlay` wipes at `1.2s` (`delay: 1.2s, duration: 0.6s`).
- Haven letterforms rise from `100lvh` to `0` at `0.9s` (`duration: 0.8s`).
- Subheading fades in from `100px` at `1.5s`.
- Zero hydration mismatch.

### Task 4: Verification & Build Check
- Run `npx tsc --noEmit` to verify type safety.
- Test in browser on `http://localhost:3000`.
- Verify smooth, luxurious 60fps opening sequence.
