---
name: halla_design
description: Design system and guidelines for (주) 한라 (Halla Corp) website. Enforces a "Heavy, Industrial, Modern, Minimal" aesthetic.
---

# (주) 한라 (Halla Corp) Design System

This skill provides the design guidelines for building the Halla Corp website.
**Key Concepts**: Trust (신뢰), Weight (무게감), Industrial (산업), Modern Minimal (현대적 미니멀).

## 1. Color Palette

Use these variables in `tailwind.config.ts` or `globals.css`.

### Primary Rules
- **Heavy & Dark**: The background or main structural elements should feel "solid".
- **Metallic**: Use lighter greys to simulate steel/metal.

| Role | Color Name | Hex | Tailwind Class (approx) | Usage |
|------|------------|-----|-------------------------|-------|
| **Primary** | `halla-navy` | `#0f172a` | `bg-slate-900` | Main Headers, Footer, Primary Buttons |
| **Secondary** | `steel-grey` | `#94a3b8` | `text-slate-400` | Subtitles, Borders, Icons (inactive) |
| **Background**| `clean-white`| `#ffffff` | `bg-white` | Content Areas (Clean contrast) |
| **Surface** | `light-steel`| `#f8fafc` | `bg-slate-50` | Section Backgrounds |
| **Accent** | `laser-orange`| `#f97316` | `text-orange-500`| CTAs, Highlights (Laser welding spark) |

## 2. Typography

- **Font Family**: Use system sans-serif initially, or `Inter` / `Pretendard` if available.
- **Headings**:
  - `h1`: Bold, Tight tracking. `text-4xl md:text-6xl font-bold tracking-tight`.
  - `h2`: Semi-bold, large. `text-3xl font-semibold`.
  - `h3`: Medium weight. `text-xl font-medium text-slate-800`.
- **Body**:
  - Readable, generous line height. `text-slate-600 leading-relaxed`.

## 3. Component Styles

### Buttons
- **Primary**: Heavy, rectangular, no rounded corners (or very slight `rounded-sm`).
  - `bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors uppercase tracking-widest text-sm font-semibold`
- **Secondary / Outline**:
  - `border-2 border-slate-900 text-slate-900 px-8 py-3 hover:bg-slate-50 transition-colors uppercase tracking-widest text-sm`

### Cards (Portfolio/Products)
- Minimal borders, plenty of whitespace.
- `border border-slate-200 bg-white hover:shadow-xl transition-shadow duration-300 group`
- Images should have a "zoom on hover" effect: `overflow-hidden` container with `group-hover:scale-105` image.

### Layout / Sections
- **Container**: `max-w-7xl mx-auto px-6`
- **Section Spacing**: `py-20` or `py-24` (Generous vertical space to feel "Grand").
- **Grid**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`.

## 4. "Halla" Identity Rules (Do's and Don'ts)

- **DO** use high-contrast imagery (black/white with orange accents).
- **DO** create layouts that feel stable and grounded (avoid floating, bouncy elements).
- **DO** use technical looking icons (thin lines, precise).
- **DON'T** use soft, pastel colors (pinks, soft greens).
- **DON'T** use overly rounded buttons (`rounded-full` is forbidden except for circular icon wrappers).
- **DON'T** use "cute" or "playful" fonts.

## 5. Usage in Code

When generating components, reference this file.
Example:
"Create a Hero section using the Halla Design System."
-> *Agent should use `bg-slate-900`, `text-white`, `laser-orange` accents, and square buttons.*
