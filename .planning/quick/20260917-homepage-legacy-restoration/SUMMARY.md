---
slug: 20260917-homepage-legacy-restoration
title: Restore Legacy Homepage Layout and Animation
status: complete
completed_at: "2026-09-17"
duration_minutes: 15
files_modified:
  - src/components/home/Hero/Hero.tsx
  - src/components/home/Hero/Hero.module.css
  - src/components/home/ScrollGallery/ScrollGallery.tsx
  - src/components/home/ScrollGallery/ScrollGallery.module.css
  - src/components/home/SectionIntro/SectionIntro.tsx
  - src/components/home/SectionIntro/SectionIntro.module.css
  - src/components/home/CardProjects/CardProjects.tsx
  - src/components/home/CardProjects/CardProjects.module.css
  - src/components/home/Collaborators/Collaborators.tsx
  - src/components/home/Collaborators/Collaborators.module.css
  - src/components/home/TestimonialQuote/TestimonialQuote.tsx
  - src/components/home/TestimonialQuote/TestimonialQuote.module.css
  - src/components/home/VideoGallery/VideoGallery.tsx
  - src/components/home/VideoGallery/VideoGallery.module.css
  - src/components/home/Awards/Awards.tsx
  - src/components/home/Awards/Awards.module.css
  - src/app/page.tsx
---

# Quick Task Summary: Restore Legacy Homepage Layout and Animation

## Overview
Successfully reconstructed and restored 100% of the authentic 10-block sequential layout and scroll-driven animation architecture from the legacy Haven Constructions home page (`legacy_codebase/index.html` and `index.json`) into the modern Next.js TypeScript web application.

## Key Accomplishments

1. **`BlockHero` with Signature Blue Overlay Wipe**:
   - Implemented `#0c388d` full-viewport transition overlay with `clip-path: inset(0 0 100% 0)` wipe transition on page load.
   - Restored `BlockHero-topSpacing`, `DotHeading`, and SVG letterforms for HAVEN wordmark.
   - Added `BlockHero-subheading` with fluid responsive positioning for `EST. 1990` and `MELBOURNE`.
   - Embedded full-bleed hero media `Homepage.jpg`.

2. **`ScrollGallery` Sticky Zoom-In Experience**:
   - Pinned sticky `100lvh` viewport within `120lvh` scroll spacer.
   - Positioned 4 periphery text items: `EST. 1990` (top), `Luxury` (right sideways), `MELBOURNE` (bottom), and `Bespoke` (left sideways).
   - Driven central image container from `scale(0.2)` to `scale(1.0)` with expanding clip-path.
   - Sequentially toggles between the 4 authentic gallery assets (`Image_1-1.jpg`, `Image_2-1.jpg`, `Image_3-1-scaled-1.jpg`, `Kitchen-area-23-1.jpg`) based on scroll progress.

3. **`SectionIntro` (Philosophy & Featured Projects)**:
   - Restored "Our guiding values" (Philosophy) with `Our-guiding-values-scaled-1.jpg`.
   - Restored "Featured Projects" with "Go beyond bricks and mortar" narrative and `/projects` CTA button.
   - Integrated `TextReveal` kinetic word stagger animations and `DotHeading` indicators.

4. **`CardProjects` Layout 2 & Layout 3**:
   - Layout 2: Dominant hero card for Calibre (2025).
   - Layout 3: 3-column asymmetric luxury grid showcasing Obsidian (2025), Ascot Residence (2019), and Small House (2024) with fluid hover scale physics.

5. **`Collaborators` Partner List & Media Carousel**:
   - Synchronized partner list (Cumulus Studio, Sussex, Sketch Design, Miele, Bespoke) with 5-panel media carousel and captions.

6. **`TestimonialQuote` & `VideoGallery`**:
   - Rendered Michael & Kathryn Calibre quote with luxury typography, quote marks, and author accent bar.
   - Rendered "Client stories" with video story cards for Anna & Jeremy (Project Pinnacle) and Rob & Cindy (Project Calibre).

7. **`Awards` Section**:
   - Integrated Melbourne Design Awards '25, National Architecture Awards '24, and HIA Victoria '23 & '20 recognition blocks.

8. **Production Verification**:
   - `npx tsc --noEmit`: 0 errors.
   - `next build`: 16/16 static pages generated successfully.
   - Development server active on `http://localhost:3000` with HTTP 200 OK.
