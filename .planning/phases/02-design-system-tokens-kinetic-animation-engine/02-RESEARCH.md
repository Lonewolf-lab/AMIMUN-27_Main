# Phase 2: Design System Tokens & Kinetic Animation Engine - Research

**Researched:** 2026-09-17  
**Domain:** Kinetic Typography, Smooth Inertia Scrolling, Design Token Systems  
**Confidence:** HIGH  

## Summary

Phase 2 establishes the core aesthetic motion layer and expanded responsive design tokens for Haven Constructions. The goal is 100% visual and physics parity with the legacy cloned site's smooth scrolling and kinetic text-reveal transitions.

Research into the legacy site (`legacy_codebase/styles.css` lines 1-180) and modern Next.js 15 App Router motion standards reveals two critical technical requirements:
1. **Lenis Smooth Scroll Engine:** The official `lenis` package (v1.3.26 by Darkroom Engineering) provides first-class React support via `lenis/react` (`ReactLenis`). Mounting `ReactLenis` as a root client provider with an exponential easing curve `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` and a duration of 1.2s replicates the exact inertia damping of the legacy site. To satisfy accessibility requirements, reduced-motion preferences (`prefers-reduced-motion: reduce`) must bypass the RAF loop and restore native scrolling.
2. **Kinetic TextReveal Engine:** The legacy site implements word-by-word staggered reveal through CSS selectors matching `[animation="text-reveal"] .word-parent .word-child`. Each word is housed in an overflow-clipped parent with the child translated `translateY(100%)`. When the section becomes `.active`, the child transitions to `translateY(0)` over 1.4s with `cubic-bezier(0.23, 1, 0.32, 1)` and a 20ms stagger per word. Implementing this as a reusable React component powered by an `IntersectionObserver` enables pure GPU-accelerated CSS transitions with zero JavaScript animation loop overhead during scrolling.

**Primary recommendation:** Install `lenis@^1.3.26`, build `SmoothScrollProvider.tsx` in `src/components/providers/`, construct a polymorphic `<TextReveal>` component in `src/components/animations/TextReveal.tsx`, and expand `src/styles/tokens.css` with responsive breakpoint overrides and dark/light luxury theme tokens.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Smooth Scrolling | `lenis/react` (`ReactLenis`) | CSS fallback (`html.lenis`) | Client component provider manages smooth scroll event synchronization |
| Kinetic Motion | GPU CSS Transition (`transform`) | React `IntersectionObserver` | Viewport entry detection triggers CSS classes; CSS engine handles fluid 60fps render |
| Design Tokens | CSS Custom Properties (`src/styles/tokens.css`) | CSS Modules (`*.module.css`) | Centralized single source of truth for spacing, typography, and responsive scales |
| Accessibility | Media Query (`prefers-reduced-motion`) | React State | Bypasses motion and smooth scroll if user requests reduced motion |

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `lenis` | 1.3.26 [VERIFIED: npm registry] | Smooth scrolling runtime & React wrapper (`lenis/react`) | Industry standard smooth scroll library; zero dependencies; native keyboard & trackpad support |
| `react` | 19.x [VERIFIED] | UI Framework | Component architecture for polymorphic TextReveal |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Vanilla CSS Tokens | Native | Typography & Spacing scales | Universal tokens across all components |
| Native `IntersectionObserver` | Web API | Viewport entry detection | Zero-dependency trigger for animations |

**Installation:**
```bash
npm install lenis
```

---

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | Verdict | Disposition |
|---------|----------|-----|-----------|-------------|---------|-------------|
| `lenis` | npm | 2 yrs | ~300k/wk | github.com/darkroomengineering/lenis | [OK] | Approved |

**Packages removed due to [SLOP] verdict:** None  
**Packages flagged as suspicious [SUS]:** None  

---

## Architecture Patterns

### System Architecture Diagram

```
+--------------------------------------------------------------------------+
| Root Layout (src/app/layout.tsx)                                         |
|                                                                          |
|  +--------------------------------------------------------------------+  |
|  | <SmoothScrollProvider> ("use client")                              |  |
|  |   - Lenis options: duration 1.2s, exponential easing               |  |
|  |   - Accessibility: prefers-reduced-motion bypass                   |  |
|  |                                                                    |  |
|  |   +-------------------------------------------------------------+  |  |
|  |   | Page Component (src/app/page.tsx)                           |  |  |
|  |   |                                                             |  |  |
|  |   |   +-----------------------------------------------------+   |  |  |
|  |   |   | <TextReveal as="h1" baseDelay={100}>                |   |  |  |
|  |   |   |   - IntersectionObserver triggers .active           |   |  |  |
|  |   |   |   - CSS handles 1.4s cubic-bezier stagger           |   |  |  |
|  |   |   +-----------------------------------------------------+   |  |  |
|  |   +-------------------------------------------------------------+  |  |
|  +--------------------------------------------------------------------+  |
+--------------------------------------------------------------------------+
```

### Component Implementations

#### 1. SmoothScrollProvider
```tsx
// src/components/providers/SmoothScrollProvider.tsx
"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

#### 2. TextReveal Component
```tsx
// src/components/animations/TextReveal.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./TextReveal.module.css";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  baseDelay?: number;
}

export function TextReveal({
  children,
  as: Component = "span",
  className = "",
  baseDelay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={`${styles.revealContainer} ${isActive ? styles.active : ""} ${className}`}
      data-animation="text-reveal"
    >
      {words.map((word, i) => (
        <span key={i} className={styles.wordParent}>
          <span
            className={styles.wordChild}
            style={{
              transitionDelay: `${baseDelay + i * 20}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
}
```

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth Inertia Scrolling | Custom wheel event listener with deltaY calculations | `lenis` | Native momentum, trackpad vs mousewheel differentiation, nested scrolling, and touch physics are extraordinarily complex to hand-roll |
| Kinetic Stagger Animation | JavaScript frame-by-frame ticker | Pure CSS `transition-delay` with `transform` | CSS transitions run on the browser's compositor thread and do not drop frames during scroll |

---

## Common Pitfalls

### Pitfall 1: Server Component hydration mismatch with Lenis
**What goes wrong:** Next.js throws hydration errors if `ReactLenis` wraps Server Components improperly.  
**Why it happens:** Lenis attaches to the DOM window and document which do not exist on the server.  
**How to avoid:** Ensure `SmoothScrollProvider` is marked `"use client"` and only accesses browser APIs in `useEffect`.

### Pitfall 2: Word spacing collapse in inline-block spans
**What goes wrong:** Wrapping words in `<span>` tags can eliminate inter-word spacing.  
**Why it happens:** Removing whitespace between JSX elements collapses natural text spaces.  
**How to avoid:** Append `"\u00A0"` (non-breaking space) or use `margin-right: 0.28em` on `.wordParent`.

---

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | TypeScript Compiler (`tsc --noEmit`) + Next.js Build (`next build`) |
| Config file | `tsconfig.json`, `next.config.ts` |
| Quick run command | `npx tsc --noEmit` |
| Full suite command | `npm run build` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DS-01 | Tokens CSS contains complete fluid typography and responsive media queries | Structural | `test -f src/styles/tokens.css && grep -q -- "--step-10" src/styles/tokens.css` | ✅ |
| DS-02 | Lenis SmoothScrollProvider mounted and builds without errors | Build | `test -f src/components/providers/SmoothScrollProvider.tsx && npm run build` | ❌ Wave 0 |
| DS-03 | TextReveal component exports and renders staggered text reveal | Unit/Build | `test -f src/components/animations/TextReveal.tsx && npx tsc --noEmit` | ❌ Wave 0 |

---

## Metadata
**Confidence:** HIGH  
**Date:** 2026-09-17  
**Valid until:** 2026-10-17  
