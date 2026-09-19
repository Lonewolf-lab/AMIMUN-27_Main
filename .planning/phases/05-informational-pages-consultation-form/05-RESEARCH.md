# Phase 5 Research: Informational Pages & Consultation Form

## 1. Content Analysis & Page Block Patterns

Inspecting `src/content/pages/about.json`, `expertise.json`, and `for-architects.json` reveals consistent structural patterns across Haven's brand storytelling:
1. **Section Intro (`type: "section-intro"`)**:
   - `subheading`: Category label (e.g., "About us", "Our story", "Expertise", "Our Process", "For Architects").
   - `heading`: Large editorial statement (e.g., "Defined by precision, modernity and quiet luxury", "Three generations. One philosophy.", "Guided by precision and craft").
   - `content`: Rich narrative copy formatted as HTML paragraphs.
2. **Full-Bleed Image / Video Block (`type: "image"`, `imageWidth: "full"`)**:
   - High-resolution hero/atmosphere photography (`Hero-Image_SML.jpg`, `Hero-Fallback.jpg`, `Hero.jpg`).
3. **Three-Column Gallery Block (`type: "image-three-column"`)**:
   - 3 vertical/square craft photography cards (`Three-Gen_1.jpg`, `Image_1.jpg`, `1-of-3.jpg`, etc.) demonstrating joinery and construction details.

## 2. Shared Component Architecture for Informational Pages

Creating modular section components in `src/components/common/` or `src/components/narrative/`:
- `<PageHeader subtitle="..." title="..." intro="..." />`: Fluid padding, `<TextReveal>` heading, and editorial styling.
- `<FullBleedMedia imageSrc="..." alt="..." priority? />`: Responsive full-width container with subtle rounded corners and aspect ratio.
- `<ThreeColumnGrid images={[...]} />`: 3-column responsive image gallery.
- `<NarrativeBlock heading="..." content="..." />`: Two-column or centered editorial text container.

## 3. Consultation Inquiry Form Specifications (INFO-03)

Prospective luxury home clients and architects require a seamless, intuitive inquiry experience without clumsy reloads:
- **Project Location**: Selection pills for `Essendon`, `Aberfeldie`, `Moonee Ponds`, `Ascot Vale`, and `Other Melbourne`.
- **Architectural Status**:
  - `Concept / Planning Phase`
  - `Town Planning / Permits Approved`
  - `Detailed Construction Drawings Ready`
  - `Tender Stage`
  - `Require Architect Recommendation`
- **Project Scope**:
  - `New Custom Luxury Home`
  - `Major Architectural Renovation & Extension`
  - `Bespoke Multi-Residential`
- **Investment Tier / Budget**:
  - `$1.5M – $2.5M`
  - `$2.5M – $4.0M`
  - `$4.0M – $6.0M`
  - `$6.0M+`
- **Contact Details**: Name, Email, Phone, Project Notes.
- **State Management**: React client component (`"use client"`) with validation and instant animated success acknowledgment detailing response timeframe (within 24–48 hours).
- **Studio Details**: Displaying phone (`0483 987 479`), email (`info@havenconstructions.com.au`), and studio office in West Footscray.
