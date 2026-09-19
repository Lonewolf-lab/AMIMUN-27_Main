# Phase 3: Core Navigation & Layout Shell - Research

**Researched:** 2026-09-17  
**Domain:** Responsive Navigation Architecture, Sticky Scroll Transitions, Fullscreen Overlay Drawers, Luxury Footer Typography  
**Confidence:** HIGH  

## Summary

Phase 3 implements the core navigation shell for Haven Constructions. This includes the floating sticky dual-mode header (`NAV-01`), fullscreen mobile/overlay drawer navigation (`NAV-02`), and luxury architectural footer (`NAV-03`).

Analysis of `legacy_codebase/index.html` and `legacy_codebase/styles.css` reveals:
1. **Header Pill Physics (`NAV-01`):** The header is a centered floating bar with fixed positioning (`inset-inline: 0; top: var(--space-s)`). At scroll position 0, it operates in a broader layout (`max-width: 420px`). When scrolled (`scrollY > 50px`), it smoothly contracts to a compact pill (`max-width: 320px`) with transition `max-width var(--ease-out) 1.4s, background-color var(--ease-out) 1s`. When the footer scrolls into view, the header gracefully fades out (`opacity: 0; pointer-events: none`).
2. **Kinetic Drawer & Button Animation (`NAV-02`):** The menu button consists of a "Menu" label and two horizontal 1px bars. On open, the bars translate and rotate into an angled cross (`rotate(12deg)` and `rotate(-12deg)`). The fullscreen drawer displays primary site links (`Home`, `Projects`, `About`, `Expertise`, `For Architects`, `Contact`) followed by contact links (`0483 987 479`, `info@havenconstructions.com.au`), each staggered by `0.04s` transition delay.
3. **Architectural Luxury Footer (`NAV-03`):** The footer is styled with `data-theme="dark"` and features:
   - Green/white dot heading: `● Bespoke Luxury`
   - Geometric Haven 7-part mosaic SVG logo
   - Quick navigation links & social channels (Instagram, Facebook)
   - High-fidelity vector path for the giant architectural "HAVEN" logo backdrop
   - Recently completed project teaser card for `Calibre (2025)`
   - Suburb service tags: `Essendon · Aberfeldie · Moonee Ponds · Ascot Vale`
   - Master Builders accreditation and copyright metadata

---

## Architectural Responsibility Map

| Component | Path | Responsibility |
|-----------|------|----------------|
| Header | `src/components/layout/Header/` | Sticky scroll state, pill width contraction, footer collision observer, burger toggle |
| NavigationOverlay | `src/components/layout/NavigationOverlay/` | Fullscreen modal menu, staggered links, contact actions, keyboard & scroll locking |
| Footer | `src/components/layout/Footer/` | Dark theme credentials, suburb tags, giant HAVEN vector, project teaser |
| Root Layout | `src/app/layout.tsx` | Shell orchestration wrapping all routes |

---

## Technical Implementations

### 1. Header Sticky Scroll & Footer Collision Hook
```tsx
// Scroll sensing hook for Header
const [isScrolled, setIsScrolled] = useState(false);
const [footerInView, setFooterInView] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });

  const footer = document.querySelector("footer");
  let observer: IntersectionObserver | null = null;
  if (footer) {
    observer = new IntersectionObserver(([entry]) => {
      setFooterInView(entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(footer);
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
    observer?.disconnect();
  };
}, []);
```

### 2. Burger Line Transformation
```css
/* Animated Hamburger Lines */
.menuButton div {
  width: 50px;
  height: 1px;
  background-color: var(--color-text-primary);
  transition: transform 0.3s var(--ease-out);
}

.isOpen .menuButton div:first-child {
  transform: translateY(4px) rotate(12deg);
}

.isOpen .menuButton div:last-child {
  transform: translateY(-4px) rotate(-12deg);
}
```

---

## Common Pitfalls & Mitigations

### Pitfall 1: Scroll Lock Causing Page Jump
**What goes wrong:** Setting `overflow: hidden` on `document.body` often causes layout shift if scrollbar width disappears.  
**Mitigation:** Apply `overscroll-behavior: contain` and clean scroll lock without modifying layout margin widths.

### Pitfall 2: SSR Mismatch on Active Route Highlighting
**What goes wrong:** Client navigation state differing from initial SSR render.  
**Mitigation:** Use `usePathname()` from `next/navigation` to synchronize active link states cleanly in client components.

---

## Validation Architecture

- **Automated compilation:** `npx tsc --noEmit` and `npm run build` exits 0.
- **Component existence:** Verification of `Header.tsx`, `NavigationOverlay.tsx`, and `Footer.tsx`.
- **Layout integration:** Inspection of `src/app/layout.tsx` mounting both `<Header />` and `<Footer />`.
