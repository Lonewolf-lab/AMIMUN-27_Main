# Architecture Research

**Domain:** Modern Next.js App Router Architecture for Luxury Showcase  
**Researched:** 2026-09-17  
**Confidence:** HIGH  

## Target Component Architecture

```
src/
├── app/
│   ├── layout.tsx                     # Root layout, Lenis provider, global tokens, metadata
│   ├── page.tsx                       # Homepage (Hero, Statement, Projects Grid, Testimonials)
│   ├── about/page.tsx                 # About Haven Constructions
│   ├── expertise/page.tsx             # Craftsmanship & Building Methodologies
│   ├── for-architects/page.tsx        # Architect Partnership Portal
│   ├── contact/page.tsx               # Inquiry form & contact info
│   └── projects/
│       ├── page.tsx                   # Full portfolio index
│       └── [slug]/page.tsx            # Dynamic SSG project case study pages
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Sticky dual-mode navigation
│   │   ├── Footer.tsx                 # Footer with local suburb SEO & credentials
│   │   ├── MobileMenu.tsx             # Fullscreen overlay navigation
│   │   └── SmoothScroll.tsx           # Lenis client wrapper
│   ├── ui/
│   │   ├── TextReveal.tsx             # Word-staggered translateY reveal animation
│   │   ├── ProjectCard.tsx            # Portfolio item with hover zoom
│   │   ├── ImageGallery.tsx           # Responsive image grid / carousel
│   │   └── InquiryForm.tsx            # Client consultation submission
│   └── sections/
│       ├── Hero.tsx                   # Full-bleed hero with kinetic headline
│       ├── Statement.tsx              # Brand ethos & luxury narrative
│       └── FeaturedProjects.tsx       # Horizontal or grid portfolio showcase
├── content/                           # Migrated from _next/data/
│   ├── site.json                      # Global company details, hours, contact
│   └── projects/                      # Individual project data schemas
│       ├── ascot-residence.json
│       ├── calibre.json
│       ├── obsidian.json
│       └── small-house.json
└── styles/
    ├── globals.css                    # CSS variables, fluid clamp typography, reset
    └── modules/                       # Scoped CSS modules for complex components
```

## Legacy Isolation Strategy

1. Create a top-level directory: `legacy_codebase/`.
2. Move:
   - `index.html` (monolithic 49MB clone)
   - `server.py`
   - `styles.css`
   - `_next/`
   - `icons/`
3. The root directory remains pristine for the Next.js workspace setup.
4. Data from `legacy_codebase/_next/data/G9U8tHBk031x0vfc7LJ4H/` is extracted directly into `src/content/`.
