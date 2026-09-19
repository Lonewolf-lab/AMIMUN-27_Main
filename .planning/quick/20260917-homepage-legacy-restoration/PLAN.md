---
slug: 20260917-homepage-legacy-restoration
title: Restore Legacy Homepage Layout and Animation
type: quick
status: in-progress
created: 2026-09-17
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
must_haves:
  truths:
    - "Hero renders with signature blue #0c388d overlay clip-path wipe animation, DotHeading, rising wordmark, EST. 1990 / MELBOURNE subheadings, and full-bleed media."
    - "ScrollGallery renders sticky 100vh frame with 120vh spacer, 4 periphery text labels, and scroll-driven scaling 4-image stack."
    - "Philosophy and Featured Projects render as SectionIntro blocks with kinetic text-reveal and authentic typography."
    - "CardProjects renders Layout 2 (Calibre 2025) and Layout 3 (Obsidian, Ascot Residence, Small House)."
    - "Collaborators renders partner list and interactive media carousel."
    - "TestimonialQuote renders Michael & Kathryn Calibre quote with luxury typography."
    - "VideoGallery renders client stories (Anna & Jeremy / Rob & Cindy)."
    - "Awards renders Melbourne Design Awards, National Architecture Awards, and HIA Victoria badges."
    - "'npx tsc --noEmit' and 'npm run build' pass with zero errors."
---

# Quick Task: Restore Legacy Homepage Layout and Animation

## Objective
Reconstruct 100% of the authentic layout, component architecture, and signature scroll-driven animations from the legacy Haven Constructions home page (`legacy_codebase/index.html` and `index.json`) into the modern Next.js TypeScript application.

## Tasks

### Task 1: Upgrade Hero with Blue Overlay & Subheading
- Enhance `src/components/home/Hero/Hero.tsx` and `Hero.module.css` to include the signature `#0c388d` overlay wipe animation (`clip-path: inset(0 0 100%)`).
- Include the `BlockHero-subheading` containing `EST. 1990` and `MELBOURNE`.
- Stagger the letter path transforms and embed the hero background media.

### Task 2: Build ScrollGallery Component
- Create `src/components/home/ScrollGallery/ScrollGallery.tsx` and `ScrollGallery.module.css`.
- Implement sticky `100lvh` container within `120lvh` scroll spacer.
- Add 4 periphery text labels: `EST. 1990` (top), `Luxury` (right), `MELBOURNE` (bottom), `Bespoke` (left).
- Implement scroll-driven scaling (`scale(0.2)` -> `scale(1.0)`) and cycling through the 4 legacy images.

### Task 3: Build SectionIntro Component (Philosophy & Featured Projects)
- Create `src/components/home/SectionIntro/SectionIntro.tsx` and `SectionIntro.module.css`.
- Support "Our guiding values" (Philosophy) with `Our-guiding-values-scaled-1.jpg`.
- Support "Featured Projects" with "Go beyond bricks and mortar" and `/projects` CTA.

### Task 4: Build CardProjects Component (Layout 2 & Layout 3)
- Create `src/components/home/CardProjects/CardProjects.tsx` and `CardProjects.module.css`.
- Layout 2: Featured hero project card (Calibre, 2025).
- Layout 3: 3-column asymmetric layout (Obsidian, Ascot Residence, Small House).

### Task 5: Build Collaborators Component
- Create `src/components/home/Collaborators/Collaborators.tsx` and `Collaborators.module.css`.
- Partner list with Cumulus Studio, Sussex, Sketch Design, Miele, Bespoke.
- Image carousel with captions and navigation controls.

### Task 6: Build TestimonialQuote & VideoGallery Components
- Create `src/components/home/TestimonialQuote/TestimonialQuote.tsx` and `TestimonialQuote.module.css`.
- Create `src/components/home/VideoGallery/VideoGallery.tsx` and `VideoGallery.module.css`.

### Task 7: Build Awards Component
- Create `src/components/home/Awards/Awards.tsx` and `Awards.module.css`.
- Render Melbourne Design Awards '25, National Architecture Awards '24, HIA Victoria '23 & '20.

### Task 8: Assemble Page & Validate
- Update `src/app/page.tsx` with all 10 sections in exact legacy sequence.
- Run `npx tsc --noEmit && npm run build` and verify.
