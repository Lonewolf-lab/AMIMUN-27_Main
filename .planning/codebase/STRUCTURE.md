---
last_mapped_commit: 32aacc2d2a42ff409b8d282a030dde82dab10ebb
last_mapped_at: 2026-09-17
---
# Directory Structure

**Analysis Date:** 2026-09-17

## Directory Layout

```
.
├── index.html                                # Main cloned HTML document (49MB+, contains inline assets)
├── styles.css                                # Primary custom CSS stylesheets with responsive tokens
├── server.py                                 # Local Python proxy dev server (auto-caching)
├── icons/                                    # Favicon and UI iconography
├── _next/                                    # Next.js static export build artifacts
│   ├── data/                                 # Static page data JSON for client routing
│   │   └── G9U8tHBk031x0vfc7LJ4H/            # Next.js build ID folder
│   │       ├── about.json                    # About Haven Constructions
│   │       ├── contact.json                  # Contact information and forms
│   │       ├── expertise.json                # Services & building expertise
│   │       ├── for-architects.json           # Architect collaboration page
│   │       ├── index.json                    # Homepage data
│   │       ├── projects.json                 # Project portfolio directory
│   │       └── projects/                     # Individual case studies
│   │           ├── ascot-residence.json
│   │           ├── calibre.json
│   │           ├── obsidian.json
│   │           └── small-house.json
│   ├── image/                                # Next.js image optimization output / cached images
│   └── static/                               # Static CSS, JS chunks, and media
│       ├── css/                              # Extracted CSS stylesheets
│       │   └── 633680bc817e63fe.css
│       ├── chunks/                           # Webpack bundles (Lenis, React, Three.js, etc.)
│       │   ├── pages/                        # Page-specific chunk bundles
│       │   └── *.js
│       ├── media/                            # Custom typography (.woff2)
│       └── G9U8tHBk031x0vfc7LJ4H/            # Build manifest & SSG manifest scripts
└── .planning/                                # GSD project planning & codebase documentation
    └── codebase/                             # Codebase architecture documentation
```

## Key Files & Locations

- **Server Entrypoint:** `server.py`
- **Frontend Entrypoint:** `index.html`
- **Global Design Tokens:** `styles.css`
- **Data Stores:** `_next/data/G9U8tHBk031x0vfc7LJ4H/`
