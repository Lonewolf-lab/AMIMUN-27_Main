# Phase 5 Context: Informational Pages & Consultation Form

## Requirements & Scope
- **INFO-01**: Build `/about` page with Haven history, leadership profile, and philosophy narrative.
- **INFO-02**: Build `/expertise` and `/for-architects` pages detailing tender process, architectural collaboration, and construction standards.
- **INFO-03**: Build interactive `/contact` page with consultation inquiry form (project location, architectural status, project scope, budget range).

## Architecture Decisions
- **Page Assembly Strategy**: Leverage extracted structured content from `src/content/pages/*.json` (`about.json`, `expertise.json`, `for-architects.json`, `contact.json`) via `getPageContent(slug)` from `@/lib/content`.
- **Kinetic Typography**: Apply `<TextReveal>` for section headings and intro statements on all informational pages to maintain fluid editorial brand cadence.
- **Rich Media & Galleries**: Next.js `Image` with remote whitelisting, explicit aspect ratios (`16/10`, `1/1`, `4/5`), blur placeholders, and responsive layout grids.
- **Consultation Form Architecture**: Interactive client-side React form with luxury selection pills for location, architectural progress stage, project scope, and budget tier. Pure CSS Modules and accessible semantic inputs with instant inline validation and executive confirmation states.

## Geographic Presence
Highlight Haven Constructions' focused specialization across Melbourne's premier northwest enclaves:
- Essendon
- Aberfeldie
- Moonee Ponds
- Ascot Vale
