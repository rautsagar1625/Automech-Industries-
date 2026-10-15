# Automech Industries — Industrial Manufacturing & Fabrication Platform

Production-quality frontend web platform for **Automech Industries**, an industrial structural steel fabrication and manufacturing services provider operating from **Dahigaon, Solapur district, Maharashtra, India**, continuously under this name since **1997**.

---

## 1. Business Context & Engineering Scope

Automech Industries serves industrial procurement, project engineering, and EPC supply-chain departments across India.

### Core Capabilities

- **Heavy Equipment Support Structures & Skids**: Motor stools, pump skids, fan bases, and vibration-isolated mounting pedestals.
- **Boiler Equipment Support Structures**: Staging platforms, column-and-beam support framing, burner access galleries, and ducting trestles.
- **Filtration Equipment Support Structures**: Support towers, skid bases, hopper access staging, and cyclone separator framing.
- **Access & Safety Systems**: Industrial stair towers, maintenance walkways, cat ladders, handrails, and kick-plates (toe-boards).
- **Custom Industrial Fabrication**: Heavy built-up girders, pipe racks, non-pressure hoppers, and duct transition pieces.
- **On-Site Setup & Assembly**: Field erection, bolted assembly, alignment, and site welding supported by specialist subcontractor teams.

### Strict Business & Representation Boundaries

- **No Complete OEM Equipment Claim**: Automech Industries specializes in structural steel support systems, equipment framing, walkways, and site setup. The company does **not** claim to manufacture complete boilers, pressure vessels, or proprietary filtration OEM machinery.
- **Strict Brand Integrity**: No unverified client names or unauthorized trademarks are displayed without verified consent.
- **No Fabricated Statistics or Certifications**: No artificial metrics, unverified ISO certificates, or fabricated project lists are introduced.
- **Visual Accuracy**: Illustrations and renders represent structural engineering types and are not misrepresented as photographs of actual client facilities.
- **Contact Placeholders**: Domain, email, phone numbers, and physical coordinates use explicit, clearly identifiable internal placeholders pending final business sign-off.

---

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, TypeScript)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS custom properties design tokens
- **Typography**: [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) loading **Space Grotesk** (display/headings) & **Inter** (sans text) with monospace fallback
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation Ready**: [GSAP](https://gsap.com/) + `@gsap/react` + `ScrollTrigger` + [Motion](https://motion.dev/) (with SSR-safe `useSafeGSAP` & `useReducedMotion`)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers`
- **Quality Tooling**: ESLint (Flat Config) & Prettier with Tailwind CSS sorting plugin

---

## 3. Directory Layout

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── about/          # Company heritage (Est. 1997) & Dahigaon base
│   │   ├── capabilities/   # Detailed scope of structural fabrication
│   │   ├── industries/     # Sectors served & procurement alignments
│   │   ├── vision/         # Engineering precision & safety principles
│   │   ├── careers/        # Fabrication craftsmen & site assembly roles
│   │   ├── contact/        # Works office coordinates & placeholder desk
│   │   ├── request-quote/  # RFQ technical spec & tonnage submission portal
│   │   └── layout.tsx      # Marketing shell layout (Header + Main + Footer)
│   ├── globals.css         # Theme tokens, font variables, accessibility rules
│   ├── layout.tsx          # Root HTML layout with Google fonts & metadata
│   ├── not-found.tsx       # Accessible 404 page
│   └── page.tsx            # Foundation homepage
├── components/
│   ├── animations/         # Animation components (Step 2+)
│   ├── forms/              # RFQ submission form with Zod validation
│   ├── layout/             # Header, Footer, and responsive navigation
│   ├── sections/           # Modular page sections (Step 2+)
│   └── ui/                 # Accessible primitives (Button, etc.)
├── config/
│   └── site.ts             # Central business facts, nav structure & metadata
├── content/
│   ├── capabilities.ts     # Typed structural capability data models
│   └── industries.ts       # Typed industry sector data models
├── hooks/
│   ├── use-gsap-animation.ts # Reduced-motion aware, scoped GSAP hook
│   └── use-reduced-motion.ts # SSR-safe useSyncExternalStore motion hook
├── lib/
│   ├── animations/gsap.ts  # Safe client GSAP & ScrollTrigger initializer
│   └── utils.ts            # clsx and tailwind-merge helper (cn)
├── styles/
└── types/
    ├── enquiry.ts          # Zod validation schema & RFQ type models
    └── index.ts            # Core site navigation & capability interfaces
public/
├── fonts/
├── images/
│   ├── capabilities/
│   ├── hero/
│   └── industries/
└── videos/
docs/
└── ARCHITECTURE.md         # Component hierarchy, tokens & animation strategy
```

---

## 4. Design Tokens

Configured via CSS custom properties in `src/app/globals.css` and exposed via `@theme`:

| Token                 | CSS Variable          | Hex Value | Purpose                                                        |
| --------------------- | --------------------- | --------- | -------------------------------------------------------------- |
| **Graphite**          | `--graphite`          | `#080D13` | Deep industrial background & base surface                      |
| **Slate**             | `--slate`             | `#283A4C` | Structural framing accents, borders & secondary elements       |
| **Industrial Orange** | `--industrial-orange` | `#E76B30` | Safety/industrial high-visibility accent, active states & CTAs |
| **Steel White**       | `--steel-white`       | `#E5EAF0` | Metallic contrast text, headings & readable content            |
| **White**             | `--white`             | `#FFFFFF` | Crisp emphasis highlights & white text                         |

---

## 5. Local Development Instructions

### Prerequisites

- Node.js `v20.x` or higher (tested on `v25.x`)
- npm `v10.x` or higher

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Typecheck & Lint

```bash
npm run typecheck
npm run lint
```

### Formatting

```bash
npm run format:check
npm run format
```

### Production Build

```bash
npm run build
npm run start
```

---

## 6. Implementation Status

- [x] **Step 1: Repository Setup Only** (App Router, TypeScript, Tailwind tokens, navigation, typed content models, placeholders, build validation).
- [ ] **Step 2: Design System & Cinematic Visual Foundation** (Deferred to Step 2 instruction).
