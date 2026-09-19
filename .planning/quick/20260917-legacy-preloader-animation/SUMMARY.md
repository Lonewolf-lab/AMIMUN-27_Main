---
slug: 20260917-legacy-preloader-animation
title: Implement Authentic Legacy Preloader & Opening Animation Choreography
status: complete
completed_at: "2026-09-17"
duration_minutes: 12
files_modified:
  - src/components/layout/Header/AnimatedLogo.tsx
  - src/components/layout/Header/AnimatedLogo.module.css
  - src/components/layout/Preloader/Preloader.tsx
  - src/components/layout/Preloader/Preloader.module.css
  - src/components/layout/Header/Header.tsx
  - src/components/home/Hero/Hero.tsx
  - src/components/home/Hero/Hero.module.css
  - src/app/layout.tsx
---

# Quick Task Summary: Implement Authentic Legacy Preloader & Opening Animation Choreography

## Overview
Decompiled and successfully recreated 100% of the authentic preloader and opening hero choreography from the legacy Next.js application (`pages/_app-535ca2b29532a6a5.js` modules 849, 592, and 7388) into the modernized Next.js TypeScript web application.

## Key Accomplishments

1. **`AnimatedLogo` 7-Piece Geometric SVG System**:
   - Reconstructed the authentic 7 geometric vector pieces (3 rects and 4 path polygons) from module 592 (`c.A`).
   - Implemented staggered assembly keyframes with exact timing delays:
     - Piece 0 (top-left rect): `0s`
     - Piece 1 (center path): `0.25s`
     - Piece 2 (top-right rect): `0.5s`
     - Piece 3 (middle-left path): `0.5s` (`scaleX`)
     - Piece 4 (middle-right path): `0.75s`
     - Piece 5 (bottom-left rect): `0.75s` (`scaleY`)
     - Piece 6 (bottom-right rect): `1.0s` (`scaleY`)
   - Added interactive hover ripple effect that collapses and expands pieces dynamically.

2. **Full-Viewport Preloader & Opening Curtain**:
   - Implemented `Preloader.tsx` and `Preloader.module.css` with signature brand blue `#0C388D` backdrop.
   - Positioned `AnimatedLogo` in center viewport at `scale(2.2)`.
   - At `0.9s` (anchor `VG = 0.9s`), smoothly docks the logo upward toward the navigation header over `0.8s` with ease `cubic-bezier(0.76, 0, 0.24, 1)`.
   - At `1.25s`, executes upward curtain wipe (`clip-path: inset(0 0 100% 0)`).
   - At `1.85s`, smoothly unmounts and resumes Lenis smooth scrolling.

3. **Synchronized Hero Unveil Sequence**:
   - Synchronized `Hero.tsx` with the preloader timeline:
     - `0.9s`: HAVEN wordmark letterforms rise from `100lvh` to `0` over `0.8s` with `cubic-bezier(0.19, 1, 0.22, 1)`.
     - `1.25s`: Blue overlay wipes upward (`clip-path: inset(0 0 100% 0)`).
     - `1.4s`: Hero architectural media rises from `50lvh` to `0`.
     - `1.5s`: Subheadings `EST. 1990` and `MELBOURNE` fade and rise from `100px` to `0`.

4. **SSR & Zero Hydration Mismatch**:
   - Preloader renders on initial SSR so the `#0C388D` curtain is painted on frame 0 with zero flash of unstyled content.
   - `npx tsc --noEmit`: 0 errors.
   - `npm run build`: 16/16 static pages generated successfully.
   - Dev server running on `http://localhost:3000` with HTTP 200 OK.
