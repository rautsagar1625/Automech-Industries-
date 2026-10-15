# Architecture & Technical Strategy — Automech Industries

## 1. Executive Architecture Summary

The Automech Industries website is built as an ultra-high-performance, accessible B2B industrial marketing and procurement platform. It uses the Next.js App Router with TypeScript and Tailwind CSS 4, prioritizing:

- **Server-First Execution**: Server Components (RSC) by default for fast Time to First Byte (TTFB), minimal client JavaScript bundles, and high search engine discoverability.
- **Strict Business & Scope Integrity**: Structural steel framing and access systems scope strictly demarcated from complete equipment manufacture. Authentic heritage since 1997 with zero fabricated data, contacts, or unverified claims.
- **Hardware-Accelerated Animation Infrastructure**: Safe client-side hooks combining Motion for React and GSAP ScrollTrigger with zero hydration mismatches and full `prefers-reduced-motion` accessibility.
- **Accessible Design System**: WCAG AA text contrast ratios, fluid clamp typography, full-screen mobile menu with focus trapping, and keyboard skip-to-content navigation.

---

## 2. Route Architecture & Grouping

```
src/app/
├── (marketing)/                # Route group sharing MarketingLayout shell
│   ├── about/page.tsx          # /about — Operational Heritage since 1997 & Dahigaon works
│   ├── capabilities/page.tsx   # /capabilities — Detailed engineering & fabrication scope
│   ├── industries/page.tsx     # /industries — Procurement sectors & plant structures
│   ├── vision/page.tsx         # /vision — Manufacturing discipline & expansion vision
│   ├── careers/page.tsx        # /careers — Trade craftsman roles & recruitment guidelines
│   ├── contact/page.tsx        # /contact — Works office coordinates & procurement desk
│   ├── request-quote/page.tsx  # /request-quote — RFQ specifications & BOM submission
│   └── layout.tsx              # Shared layout with Header, Main container, and Footer
├── globals.css                 # CSS variables, Tailwind @theme, fluid clamps, reduced-motion
├── layout.tsx                  # Global HTML root layout, Space Grotesk + Inter, skip link
├── not-found.tsx               # Accessible 404 handler with design system styling
└── page.tsx                    # Polished foundation preview homepage
```

### Route Design Principles

- **Route Groups `(marketing)`**: Enables route co-location while sharing layout scaffolding without cluttering URL pathnames.
- **Static Site Generation (SSG)**: All routes prerender statically into pure HTML and CSS during build time, resulting in optimal Core Web Vitals (LCP, INP, CLS).
- **Metadata Management**: Each route exports static or dynamic `Metadata` objects derived from `src/config/site.ts` with standardized OpenGraph tags, semantic titles, and search engine directives.

---

## 3. Component Architecture & Server vs. Client Boundaries

```
src/components/
├── layout/
│   ├── header.tsx              # 'use client' (transparent-to-solid header, mobile drawer)
│   ├── footer.tsx              # Server Component (directory links, verified address & scope)
│   └── copyright-year.tsx      # 'use client' (prerender-safe dynamic year generation)
├── ui/
│   ├── button.tsx              # Reusable button (CVA, orange glow, active states)
│   ├── badge.tsx               # Monospace technical eyebrow & spec badge
│   └── section-header.tsx      # Fluid title + eyebrow + description wrapper
├── forms/
│   └── quote-request-form.tsx  # 'use client' (React Hook Form + Zod schema validation)
├── animations/
│   ├── FadeReveal.tsx          # 'use client' (viewport fade-up with reduced-motion fallback)
│   ├── StaggerReveal.tsx       # 'use client' (container & child stagger orchestration)
│   ├── TextReveal.tsx          # 'use client' (masked typographic reveal)
│   ├── SectionDivider.tsx      # Architectural hairline divider with engineering pip
│   └── AnimatedLink.tsx        # Industrial hover-underline micro-interaction link
└── sections/                   # Reserved for future modular page sections
```

### Server vs. Client Rules

1. **Server Components by Default**: All layout containers, static text, marketing summaries, metadata, and structural grids run on the server.
2. **Client Components Only When Interactive**: Client components (`"use client"`) are restricted to:
   - Interactive UI elements requiring DOM event handlers (e.g., mobile hamburger drawer in `header.tsx`).
   - Browser API listeners (e.g. `useSyncExternalStore` for media queries in `use-reduced-motion.ts`, scroll listener in `header.tsx`).
   - Form state management and schema validation (`quote-request-form.tsx`).
   - Viewport animation primitives (`FadeReveal`, `StaggerReveal`, `TextReveal`).

---

## 4. Design Tokens & Fluid Typography

Design tokens are codified in `src/app/globals.css` using CSS custom properties and registered with Tailwind CSS 4's `@theme` directive:

### Color Palette

- **Graphite (`--graphite`: `#080D13`)**: Primary deep background creating an industrial aesthetic.
- **Secondary Surface (`--surface-secondary`: `#111923`)**: Raised container and card background.
- **Structural Slate (`--slate`: `#283A4C`)**: Hairline borders, structural framing, and blueprint grid.
- **Industrial Orange (`--industrial-orange`: `#E76B30`)**: High-visibility safety accent, active states, and CTAs.
- **Steel White (`--steel-white`: `#E5EAF0`)**: Metallic neutral for high-contrast typography (>13:1 ratio on graphite).
- **Pure White (`--white`: `#FFFFFF`)**: Crisp highlight for primary headings and emphasis.

### Fluid Typography System

- **Display**: `clamp(2.25rem, 5vw + 1rem, 4.5rem)` (`.text-fluid-display`) — Impactful, tight leading, never overflows on 320px mobile.
- **H1**: `clamp(1.875rem, 3.5vw + 0.75rem, 3.25rem)` (`.text-fluid-h1`)
- **H2**: `clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)` (`.text-fluid-h2`)
- **H3**: `clamp(1.25rem, 1.5vw + 0.25rem, 1.625rem)` (`.text-fluid-h3`)
- **Body Large**: `clamp(1rem, 0.5vw + 0.875rem, 1.125rem)` (`.text-fluid-body-lg`)
- **Technical Monospace**: `11px-12px` uppercase tracking-widest with monospace fallback.

---

## 5. Desktop Header & Mobile Navigation

### Desktop Header

- **Top of Page**: Transparent/translucent appearance (`glass-header-top`) showcasing subtle hero background.
- **On Scroll (>20px)**: Transitions smoothly to graphite glass (`glass-header-scrolled`) with backdrop-blur, subtle bottom border, and shadow.
- **Scroll Detection**: Uses a passive scroll listener throttled with `window.requestAnimationFrame` to eliminate unnecessary re-renders.
- **Wordmark & Mark**: "AUTOMECH INDUSTRIES" alongside a precision SVG truss diamond icon.
- **Active Route Indication**: Animated underline indicator powered by Motion for React.

### Mobile Navigation Drawer

- **Full-Screen Panel**: Expansive dark panel with blueprint grid background and staggered item entrance.
- **Accessibility**:
  - `role="dialog"`, `aria-modal="true"`, `aria-expanded`, `aria-controls`.
  - Focus trap keeps Tab and Shift+Tab cycles strictly within the open drawer.
  - Escape key immediately dismisses drawer and restores focus to the menu trigger.
  - Background scrolling is locked (`overflow: hidden` on body).
  - Automatically closes on link selection and route transitions.

---

## 6. Global Motion System & Accessibility

Small, focused animation primitives built in `src/components/animations/`:

1. **`FadeReveal`**: Subtle fade-up (default 16px offset, 0.5s duration) when entering viewport.
2. **`StaggerReveal` & `StaggerItem`**: Staggers list/grid items with a 0.08s interval.
3. **`TextReveal`**: Line-clipped typography reveal for headings while retaining semantic HTML tags.
4. **`SectionDivider`**: Architectural hairline divider line with precision pip and coordinate labels.
5. **`AnimatedLink`**: Micro-interaction link with animated primary underline and external arrow indicator.

### Reduced Motion & SSR Safety

- **CSS Overrides**: Global `@media (prefers-reduced-motion: reduce)` clamps all durations to `0.01ms`.
- **Reactive Detection**: `useReducedMotion()` uses `useSyncExternalStore` for hydration-safe detection.
- **Graceful Degradation**: If reduced motion is requested, all animation components bypass motion transforms and render immediately at full opacity.
- **Unmount Hygiene**: All Motion and GSAP hooks automatically revert their timelines and listeners upon component unmount.

---

## 7. Business Positioning & Integrity

1. **Continuous Operation**: Operating under the name Automech Industries continuously since 1997.
2. **Manufacturing Scope**: Structural steel support systems, equipment staging, walkways, stairs, and on-site assembly. Does not manufacture complete boiler units or complete filtration machinery.
3. **Strategic Expansion**: Actively positioning to expand into machinery manufacturing and larger turnkey projects, supported by specialist subcontractors for complex components.
4. **Public UI Truthfulness**: No fake phone numbers, fake emails, or fake certifications published on public pages.
5. **Confidentiality**: Zero unverified client endorsements or unauthorized trademark logos.
