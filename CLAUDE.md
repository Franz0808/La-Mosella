# La Mosella v2 — Codebase Guide

Artisanal soap manufacturer website for Marion Muszarsky. Single-page React app with Art Nouveau (Jugendstil) design language.

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin — no `tailwind.config.ts`, all theme tokens live in `src/index.css` under `@theme`
- **Motion** (Framer Motion fork) for animations
- **Lucide React** for icons
- No React Router — navigation is pure state (`activeSection` in `App.tsx`)

## Folder Structure

```
src/
├── App.tsx               # Root component, manages activeSection state + routing logic
├── main.tsx              # React entry point
├── types.ts              # Soap interface + ActiveSection type
├── data.ts               # SOAPS array (4 products) + GENERAL_INFOS object
├── index.css             # Global styles, Tailwind @theme tokens, all custom CSS classes
├── assets/images/        # All images (PNG) — referenced as /src/assets/images/<name>
└── components/
    ├── InteractiveFresco.tsx  # Home/hero page
    ├── SoapsCatalog.tsx       # Soap catalog page
    ├── AboutUs.tsx            # About Marion + inquiry form
    ├── WhyHandmade.tsx        # Educational content (Jugendstil tabs)
    ├── Header.tsx             # Sticky nav bar (desktop + mobile hamburger)
    ├── Footer.tsx             # Footer with links + contact info
    └── ContactModal.tsx       # Overlay contact form (z-50)
```

## Routing / Navigation

Navigation is **state-based**, not URL-based. `App.tsx` holds:

```ts
const [activeSection, setActiveSection] = useState<ActiveSection>('home');
```

`ActiveSection = 'home' | 'soaps' | 'about' | 'benefits'`

| Value | Component rendered |
|---|---|
| `'home'` | `<InteractiveFresco />` |
| `'soaps'` | `<SoapsCatalog />` |
| `'about'` | `<AboutUs />` |
| `'benefits'` | `<WhyHandmade />` |

Every component that needs to navigate receives `onNavigate: (section: ActiveSection) => void` as a prop. Page changes auto-scroll to top.

## Key Components

### InteractiveFresco.tsx
Hero/landing page. **Dual layout:**
- **Desktop (`md:block`):** Full-width background image (`La Mosella Langing Page Picture v2.png`) with 3 medallion hotspots positioned via `left`/`top` percentages. Hotspot positions: Seifenkatalog `28%/45%`, Über mich `52%/32%`, La Mosella `76%/50%`. Animated ping rings + hover popup cards.
- **Mobile (`md:hidden`):** Stacked sections in order: Über mich → Seifenkatalog → La Mosella.

Hotspot images (the icons inside the white circles):
- Seifenkatalog → `Icon Soapes.png`
- Über mich → `Icon about me.png`
- La Mosella → `Icon La Mosella.png`

Floating bubbles (15 items) are generated once in `useEffect` with random positions/sizes.

### SoapsCatalog.tsx
Displays all soaps from `data.ts`. Filter buttons by category (`Blumig | Kräuterig | Frisch | Sanft`), search bar. Click a soap card to open a detail modal with ingredients table, oil composition, benefits, INCI list.

### AboutUs.tsx
Two-column layout (7-col grid on large screens): left side = Marion's story + 4 value boxes; right side = portrait image + contact/inquiry form.

### WhyHandmade.tsx
Two-tab interface: "Die 5 Säulen" (benefit cards from `GENERAL_INFOS.vorteile`) and "Handgemacht vs. Industrie" (comparison table).

### Header.tsx
Sticky (`top-0 z-40`). Desktop: 4 nav links. Mobile: hamburger menu. Contains "Kontakt" button that opens `ContactModal`.

### ContactModal.tsx
Fixed overlay (`z-50`). Form with name, email, soap interest dropdown, message. Shows success animation on submit.

## Design System (index.css)

### Color Tokens (`@theme`)
| Token | Hex | Use |
|---|---|---|
| `vanilla` | `#FDFBF2` | Page background |
| `vanilla-dark` | `#FAF5E0` | Subtle section bg |
| `moss` | `#3A5A3A` | Primary green (text, buttons, borders) |
| `moss-light` | `#5B7B5B` | Hover states |
| `moss-dark` | `#243B24` | Dark text, footer |
| `gold` | `#C09E5A` | Accent, decorative elements |
| `gold-light` | `#DEC28C` | Lighter gold variant |

### Custom Utility Classes
| Class | What it does |
|---|---|
| `.jugendstil-border` | Double-frame border (moss outer + gold inner) |
| `.jugendstil-line` | Horizontal ornamental divider with `❦` center ornament |
| `.jugendstil-corner` | Gold L-shaped corner brackets (top-left + bottom-right) |
| `.fresco-glow` | Subtle moss-colored box-shadow |
| `.bubble-soft` | Floating soap bubble sphere (radial gradient + backdrop blur) |
| `.page-enter` | Fade-in + slide-up animation on page load |

### Typography
- `font-serif` → Cormorant Garamond (headings, ornamental text)
- `font-sans` → Inter (body text)

## Data (data.ts)

**`SOAPS`** — array of 4 `Soap` objects:
- Lavendeltraum, Weinbergpfirsich, Moseltraube, Wilde Kamille
- Each has: name, description, ingredients (German + INCI), oil composition with percentages, category, price, skinType, colorTheme

**`GENERAL_INFOS`** — object with:
- `vorteile`: 5 benefit cards used in WhyHandmade
- `geschichte`: Brand story text blocks used in AboutUs

## Images (src/assets/images/)
| File | Used in |
|---|---|
| `La Mosella Langing Page Picture v2.png` | InteractiveFresco desktop background |
| `Icon Soapes.png` | Seifenkatalog medallion |
| `Icon about me.png` | Über mich medallion |
| `Icon La Mosella.png` | La Mosella medallion |
| `La Mosella Soaps.png` | General soap product image |
| `marion_portrait_1779655251734.png` | AboutUs portrait |

Images are referenced with the `/src/assets/images/` prefix (Vite serves them directly in dev).
