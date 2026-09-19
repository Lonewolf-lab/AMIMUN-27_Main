# Pitfalls & Mitigations

**Domain:** Cloned Site Refactoring & Modernization  
**Researched:** 2026-09-17  
**Confidence:** HIGH  

## Critical Pitfalls

### 1. File Locking & Monolithic Editor Crash
- **Risk:** Attempting to parse, format, or search through the 49.8 MB `index.html` within typical editor language servers can cause VS Code / IDE memory spikes and editor freezing.
- **Mitigation:** Isolate `index.html` immediately inside `legacy_codebase/` and add it to `.gitignore` or exclude it from search indexers. Extract CSS and JSON data into discrete files before component building.

### 2. Upstream Asset Disappearance
- **Risk:** Remote assets currently relying on `https://www.havenconstructions.com.au` 404 proxying will break if the live domain modifies URLs, updates build IDs, or imposes anti-scraping blocks.
- **Mitigation:** Ensure all essential media (hero images, project photographs, web fonts) are downloaded and stored locally in `public/assets/` during the asset extraction phase.

### 3. Scroll Inertia & Layout Shift Conflicts
- **Risk:** Lenis smooth scrolling can conflict with native anchor jumps, fixed sticky navbars, or dynamic accordion expansions if scroll events and heights aren't properly synchronized.
- **Mitigation:** Encapsulate Lenis in a dedicated client provider with `resize` listeners and ensure CSS `scroll-margin-top` is configured for sticky navigation.

### 4. Hydration Mismatches in Staggered Animations
- **Risk:** Splitting text into `.word-parent`/`.word-child` spans on the server vs client can cause React hydration errors.
- **Mitigation:** Wrap interactive kinetic text reveals in client components (`'use client'`) that initialize transforms after mount using `useEffect` or Framer Motion's declarative variants.
