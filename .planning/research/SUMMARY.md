# Research Summary

**Domain:** Haven Constructions Showcase Modernization  
**Researched:** 2026-09-17  

## Executive Summary

Modernizing Haven Constructions into a pristine Next.js (App Router) + TypeScript application provides an ideal balance of visual fidelity, luxury performance, and clean developer experience. By isolating the legacy 50MB bundle into `legacy_codebase/`, we eliminate file-lock risks and create a clean foundation for modular React components while retaining the original fluid typography tokens, Lenis smooth scrolling, and kinetic text reveals.

## Key Recommendations

1. **Stack:** Next.js (App Router) + React 19 + TypeScript with native CSS Modules and global custom properties.
2. **Animation Engine:** Lenis for inertia scrolling + Framer Motion / GSAP for word-by-word staggered reveal animations.
3. **Data Strategy:** Extract existing JSON payloads from `_next/data/` into structured TypeScript content schemas (`content/projects/*.json`).
4. **Asset Strategy:** Download and localize all high-res photography and `.woff2` font files to decouple from `https://www.havenconstructions.com.au`.
5. **Phase Decomposition:** Standard granularity:
   - Phase 1: Legacy Quarantine & Next.js Bootstrap
   - Phase 2: Design System & Animation Engine
   - Phase 3: Core Navigation & Layout Shell
   - Phase 4: Homepage & Brand Statement Componentization
   - Phase 5: Portfolio & Project Case Study Pages
   - Phase 6: Informational Pages (About, Expertise, Architects, Contact)
   - Phase 7: Asset Optimization, Performance & Verification
