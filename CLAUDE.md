# Hapaii — Project Reference for AI Assistants

## Project Overview

**Hapaii** is a standalone AI integration & consulting brand targeting entrepreneurs and small business owners. The name derives from the Hawaiian "hāpai" (to lift/carry) and "hapa" (mixed/hybrid), with "AI" embedded in the word — the brand story is *human + AI, blended and carried forward together*.

**Site type:** Marketing / landing page (no authenticated app at this stage)
**Domain:** hapaii.com
**Goal:** Establish brand presence, communicate services, and capture leads via a contact form

---

## Tech Stack

- **Framework:** React 18 (Vite 6)
- **Styling:** Tailwind CSS 3 + CSS variables
- **Icons:** lucide-react
- **Animations:** framer-motion (available, use sparingly)
- **Routing:** react-router-dom v6 (minimal — single page with anchor links)
- **Contact form:** mailto: for now; Supabase Edge Function added later
- **No backend required** for initial build

---

## Design System

### Mode
**Light mode** — warm off-white backgrounds. This deliberately differentiates Hapaii from cold, dark-themed AI brands and reinforces the human/approachable positioning.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Page background | `#FAFAF8` | Primary section backgrounds |
| Alt section background | `#F3EFE8` | Alternating sections for visual rhythm |
| Card background | `#FFFFFF` | Cards, modals |
| Card border | `#E8E2D9` | Card edges |
| Dark section bg | `#0F172A` | Footer, CTA banner (ink navy) |
| Primary text | `#0F172A` | Headlines, important content |
| Secondary text | `#64748B` | Body text, descriptions |
| Muted text | `#94A3B8` | Labels, hints, captions |
| **Primary accent** | `#D97706` (amber-600) | CTAs, highlights, icons, section labels |
| Accent gradient | amber-600 → orange-500 | Primary buttons, active badges |

### Typography
- **Display / Headings font:** Fraunces (variable optical serif, Google Fonts) — weights 400, 600, 700, 900
- **Body font:** DM Sans (Google Fonts) — weights 400, 500, 600
- Headings: `font-display font-bold` or `font-black`, `text-slate-900`
- Body: `font-sans text-slate-600`, `text-sm` or `text-base`
- Section labels: `text-xs font-semibold uppercase tracking-widest text-amber-600`
- **Do NOT use Inter, Roboto, Arial, or system fonts** — see frontend-design-skill.md

### Border Radius
- Cards / panels: `rounded-2xl`
- Buttons: `rounded-full`
- Inputs: `rounded-xl`
- Icon containers: `rounded-xl`

### Spacing Convention
- Section padding: `py-24` (standard), `py-20` (secondary)
- Container max-width: `max-w-6xl mx-auto px-6`
- Card padding: `p-6`
- Grid gap: `gap-5` or `gap-6`

---

## Component Patterns

### Primary Button (CTA)
```jsx
<button className="bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition text-sm">
  Book a Free Call
</button>
```

### Ghost / Secondary Button
```jsx
<button className="bg-transparent border border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full hover:bg-slate-100 transition text-sm">
  See How It Works
</button>
```

### Card
```jsx
<div className="bg-white border border-[#E8E2D9] rounded-2xl p-6 hover:-translate-y-1 transition duration-200">
```

### Section Label
```jsx
<span className="text-xs font-semibold uppercase tracking-widest text-amber-600 block mb-3">
  What We Do
</span>
```

### Icon Container
```jsx
<div className="p-2.5 bg-amber-50 rounded-xl shrink-0">
  <Icon size={20} className="text-amber-600" />
</div>
```

### Text Gradient (Accent)
```css
.text-gradient {
  background: linear-gradient(135deg, #D97706, #EA580C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Input Field
```jsx
<input className="w-full bg-white border border-[#E8E2D9] rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition" />
```

### Modal Overlay
```jsx
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div className="bg-white border border-[#E8E2D9] rounded-2xl p-6 w-full max-w-md shadow-2xl">
```

---

## Architecture

### File Structure
```
src/
├── App.jsx                  # Root: ContactModal state, renders all sections
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives + custom utilities
└── components/
    ├── Navbar.jsx            # Sticky header (transparent → white on scroll)
    ├── Hero.jsx              # Headline + subhead + dual CTAs
    ├── Services.jsx          # 4-service card grid
    ├── WhyHapaii.jsx         # Brand story + 4 differentiators
    ├── Process.jsx           # 4-step "How We Work" timeline
    ├── ForWho.jsx            # 3 persona/industry cards
    ├── Testimonials.jsx      # 6-card grid (placeholder content)
    ├── CtaBanner.jsx         # Dark full-width CTA section
    ├── Footer.jsx            # 4-column dark footer
    └── ContactModal.jsx      # Overlay contact form
```

### Section Order (top → bottom in App.jsx)
1. `<Navbar />` — logo + nav links + "Book a Free Call" (opens modal)
2. `<Hero />` — "Lift your business with AI." headline
3. `<Services id="services" />` — 4 service cards
4. `<WhyHapaii id="about" />` — brand story + differentiators
5. `<Process id="process" />` — 4-step timeline
6. `<ForWho />` — entrepreneur/SMB personas
7. `<Testimonials id="testimonials" />` — social proof
8. `<CtaBanner />` — dark section, "Book a Free Call" CTA
9. `<Footer />` — dark footer
10. `<ContactModal />` — global overlay, toggled via `showModal` state

---

## Services

Four services to feature throughout the site:

| Service | Tagline |
|---|---|
| **AI Integration** | Connect AI tools into your existing workflows |
| **Automation Setup** | Eliminate repetitive manual tasks |
| **AI Strategy & Consulting** | Roadmap for where AI fits your business |
| **Training & Workshops** | Teach your team to use AI confidently |

---

## Brand Voice & Messaging

- **Tone:** Warm, plain-language, no jargon — speaks entrepreneur, not engineer
- **Positioning:** Practical AI implementation, not hype or slide decks
- **Key messages:**
  - "Human + AI, carried forward together"
  - "Lift your business with AI" (plays on hāpai meaning)
  - "We speak entrepreneur, not engineer"
  - "Hands-on implementation, not slide decks"
- **Avoid:** Cold tech language, acronym soup, enterprise-speak

---

## Navbar Behavior
- Transparent background at page top
- On scroll: white background + `shadow-sm` + `border-b border-slate-100`
- Mobile: hamburger menu, links stack vertically
- CTA button always visible: "Book a Free Call"

---

## ContactModal
- Triggered from: Navbar CTA, CtaBanner CTA
- Fields: Name, Email, Business Type (select: Solopreneur / Service Business / Growing Team / Other), Message
- Submit: `mailto:hello@hapaii.com` for now
- Success state: checkmark + "We'll be in touch within 1 business day."
- Close: X button or click backdrop

---

## Responsive Design
- **Mobile:** < 640px — single column, hamburger nav
- **Tablet:** 640px–1024px — 2-col grids
- **Desktop:** > 1024px — full layouts (4-col services, 3-col testimonials, etc.)

---

## Design Philosophy

See `frontend-design-skill.md` for full guidance. Key principles applied to Hapaii:

- **Aesthetic direction:** Editorial/organic warmth — like a high-end lifestyle brand that does AI. Serif headlines at display size are rare in this space; that's the differentiator.
- **Typography:** Fraunces (display serif, warm, characterful) + DM Sans (body, clean). This pairing is the visual identity.
- **Atmosphere:** Warm grain texture on backgrounds. Shadow-based card depth, not just borders. No flat solid backgrounds.
- **One unforgettable thing:** Fraunces headlines in amber at large scale. Nobody in AI consulting uses a serif. That's intentional.
- **Motion:** One well-orchestrated hero reveal (staggered fade-up). Hover states on cards and buttons. No scattered micro-animations.

---

## Do's and Don'ts

### Do
- Keep the light-mode palette consistent — `#FAFAF8` base, amber accent
- Use `max-w-6xl mx-auto px-6` for all section containers
- Alternate section backgrounds for visual rhythm
- Use `rounded-full` for all buttons
- Keep copy warm and jargon-free
- Use Inter font (loaded via Google Fonts in index.html)

### Don't
- Don't use dynamic Tailwind class construction (e.g., `bg-${color}-500`) — use full class names
- Don't use dark backgrounds except Footer and CtaBanner
- Don't use external HTTP libraries — use native `fetch`
- Don't add pages or routing complexity at this stage — it's a single-page site with anchor links
- Don't import lucide-react icons without verifying they exist in the installed version

---

## Dev Commands

```bash
npm run dev      # Start local dev server (localhost:5173)
npm run build    # Production build → /dist
npm run preview  # Preview production build
```
