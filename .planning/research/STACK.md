# Stack Research

**Domain:** Luxury Architectural Builder Showcase Modernization (Next.js Refactoring)  
**Researched:** 2026-09-17  
**Confidence:** HIGH  

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js (App Router) | ^15.x / ^14.x | React Meta-Framework | High-performance SSG/SSR, built-in metadata API, image and font optimization |
| React | ^19.x / ^18.x | UI Library | Declarative component model, server components for static sections |
| TypeScript | ^5.x | Static Typing | Type-safe project schemas, prop validation, elimination of runtime data mismatches |
| CSS Modules & Custom Properties | Native | Styling & Design System | Zero-runtime CSS, encapsulates styles while leveraging global fluid tokens (`styles.css`) |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@studio-freight/lenis` / `lenis` | ^1.x | Smooth Inertia Scrolling | Exact parity with original site's smooth scrolling physics |
| `framer-motion` or `gsap` | ^11.x / ^3.x | Staggered Text Reveals & Transitions | Replicating the `.word-parent`/`.word-child` translateY text reveals seamlessly |
| `lucide-react` | ^0.4x | Iconography | High-quality SVG icons replacing legacy inline SVG sprites where appropriate |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| ESLint + Prettier | Code Quality & Formatting | Consistent modern code formatting |
| Sharp | Next.js Image Optimization Engine | High-speed WebP/AVIF generation |

## Installation

```bash
npx create-next-app@latest . --typescript --eslint --app --no-tailwind --src-dir --import-alias "@/*"
npm install lenis framer-motion lucide-react
```
