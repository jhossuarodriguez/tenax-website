# Turner Construction — Design System Reference

Extracted from the production CSS/HTML of https://www.turnerconstruction.com/ (`style.css`, ~372KB minified). Values below are taken directly from the shipped stylesheet, not guessed.

## Color Palette

| Color | Hex | Usage frequency (rule count) | Likely role |
|---|---|---|---|
| White | `#fff` | 142 | Primary background, text-on-dark |
| Light gray | `#dcdcdc` | 74 | Borders, dividers |
| Near-black | `#17171b` | 73 | Primary text / dark surfaces |
| Blue (brand) | `#0b5dd0` | 68 | Primary accent / links / CTAs |
| Warm gray | `#73737b` | 41 | Secondary/muted text |
| Orange-red | `#ff4026` | 26 | Alert/highlight accent (nav arrows, badges) |
| Off-white | `#f6f6f6` | 13 | Section background alternation |
| Pale blue | `#bfd2e4` | 7 | Tint backgrounds |
| Dark navy | `#012471` | 4 | Deep accent, footer/hero overlays |
| Black | `#000` | 4 | Overlays, shadows |
| Neutral gray | `#333` | 4 | Body text alt |

**Overlay/rgba tokens** (used for scrims over hero imagery and video):
- `rgba(0,0,0,.5)` — standard dark image overlay
- `rgba(23,23,27,.95)` — near-opaque dark panel (mobile nav / modals)
- `rgba(11,93,208,.35)` and `rgba(11,93,208,0)` — blue gradient fade (brand-colored gradient overlays, often paired for a gradient-to-transparent effect)
- `rgba(5,5,5,.53)` — photo caption scrims
- `rgba(233,235,239,.2)` — light hairline separators

**Design takeaway:** this is a two-color system (near-black + brand blue) on a white/off-white base, with orange-red reserved as a single "alert" accent.

## Typography

**Font families (all self-hosted via `@font-face`, not Google Fonts):**

| Family | Weight role |
|---|---|
| `apercu-extralight-pro` | Lightest display text |
| `apercu-light-pro` | Light body/subheads, underlined inline links (`font-size:19px`) |
| `apercu-regular-pro` | Default body copy |
| `apercu-medium-pro` | UI labels, uppercase nav/button text |
| `apercu-bold-pro` | Headlines, emphasis |
| `Rockness W05 Regular` | Display/script accent font (used sparingly, e.g. hero flourish text) — paired with `sans-serif` fallback |
| `Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif` | System fallback stack found in one rule (likely legacy/email-safe context) |

Headings (`h1–h6`) carry no font-size/family defaults in the base reset (`margin:0` only) — all real typographic styling is applied via utility/component classes (e.g. `.title`, `.para`), not bare tag selectors. This is a **component-scoped typography system**, not a global heading scale.

Text-transform pattern: uppercase + letter-spacing (`letter-spacing:.06em`) is the standard treatment for nav links and button labels.

## Spacing & Layout

**Container widths:**
- `max-width:1024px` — dominant content container (385 occurrences — this is effectively "the" content width)
- `max-width:719px` — narrow/article-width container
- `max-width:1920px` — full-bleed/media container
- `max-width:1480px`, `max-width:1650px` — wide section wrappers

**Named wrapper classes:**
- `.wrapper-1419` — primary section wrapper: `max-width:1200px; padding:0 30px` (desktop) → `padding:0 20px` (mobile)
- `.wrapper-40pad` — `padding:0 40px` (desktop) → `0 20px` (mobile); vertical rhythm via `padding-top:3.65vw` (desktop, viewport-relative) vs `25px` fixed (mobile) — i.e. **fluid spacing scales with vw on desktop, fixed px on mobile**
- `.wrapper-widget` — `max-width:1650px; padding:0 40px`
- `.wrapper-960` — large hero/section spacer: `padding-top:120px` desktop / `6.25vw` at wider breakpoints

**Border treatment:** `1px solid #dcdcdc` is the standard hairline divider color, used consistently between `.btn-link` items and section separators (paired with `margin-top:60px` for section-level separation).

## Border Radius

| Value | Count | Usage |
|---|---|---|
| `8px` | 37 | Default corner radius — cards, buttons, panels |
| `100%` | 13 | Circular elements (avatars, icon badges) |
| `50%` | 3 | Circular (alt syntax) |
| `100px` / `50px` | 3 / 1 | Pill-shaped buttons/tags |
| `4px`, `3px`, `2px` | 1 each | Small UI elements (tooltips, chips) |

`8px` is the system's baseline radius.

## Buttons

Two primary button/link patterns:

- **`.btn-type`** — solid card-style button: `background-color:#fff; border-radius:8px; padding:20px 35px; display:inline-block` — a white pill/card treatment, not a filled-color CTA.
- **`.btn-link`** — highly contextual flex-based link pattern reused across nav, footer, and cards with varying padding (`10px 0`, `15px 20px`, `25px 0`, `40px 20px`, `60px 60px 60px 0`) depending on placement. Common traits across variants:
  - `display:flex; align-items:center; justify-content:center|flex-start|flex-end`
  - Text style: `font-family:apercu-medium-pro; font-size:14px; letter-spacing:.06em; text-transform:uppercase; color:#73737b`
  - Underlined variant: `font-family:apercu-light-pro; font-size:19px; text-decoration:underline; text-transform:none` — used for inline "read more" style links, distinct from the uppercase nav/button treatment.
  - Dividers: `border-right:1px solid #dcdcdc` / `border-bottom:1px solid #dcdcdc` used to separate adjacent link items in a row/column list (e.g. footer nav columns, related-link grids).
  - On dark backgrounds: `border-top:1px solid hsla(0,0%,100%,.25)` — same divider concept, inverted for dark surfaces.

## Motion / Transitions

Consistent, restrained transition system — almost everything uses `.3s ease-in-out` or a `1s cubic-bezier(0,0,.25,1)` for entrance animation:

| Transition | Count | Use |
|---|---|---|
| `color .3s ease-in-out` | 108 | Text/link hover |
| `transform .3s ease-in-out` (+ `-webkit-` prefix) | 84 each | Hover scale/translate on cards, icons |
| `opacity .3s ease-in-out` | 48 | Fade hover states |
| `transform 1s cubic-bezier(0,0,.25,1) 0s, opacity .1s ease 0s` | 40 | Scroll-reveal entrance animation (image/content reveal — fast opacity fade-in, slower eased transform) |
| `transform 1s cubic-bezier(0,0,.25,1) 0s, opacity 1s ease 0s` | 28 | Slower full fade+move entrance variant |

Two-speed system: **0.3s ease-in-out** for micro-interactions (hover), **1s cubic-bezier(0,0,.25,1)** for on-scroll content reveals.

## Structural Observations (from HTML)

- Sticky header with logo, mega-menu dropdowns (Company/Services/Projects/News/Careers), and search.
- Hero section pattern: full-bleed image/video background + dark scrim overlay (`rgba(0,0,0,.5)` or `rgba(23,23,27,.95)`) + large bold headline with an emphasized (bold) keyword inline.
- Expandable content cards below hero (accordion-style "A Project / A Career / A Better Future").
- Project/news cards: thumbnail image top, text block below, "Read More" link, subtle shadow, consistent `8px` radius.
- Footer: multi-column grid — company info, social links, quick nav, contact/compliance hotline — divided by the standard `#dcdcdc` hairline rule.

## Relevance to Tenax's design system

Points of alignment already present in `src/styles/global.css`:
- Restrained chromatic-accent-as-signal-only philosophy (Turner: blue `#0b5dd0` + orange-red `#ff4026` as sparing accents on a neutral base — same discipline as Tenax reserving `primary`/`orchid-bloom`/etc. for tiles/signals).
- Uppercase, letter-spaced labels for nav/button text (Turner's `.btn-link` uppercase treatment ≈ Tenax's `font-mono` uppercase tracked labels).
- Component-scoped typography rather than global heading-tag styling — both systems style via classes/tokens, not bare `h1–h6`.
- Two-tier transition speed (fast hover vs. slower scroll-reveal) — matches the split already encoded in Tenax's `revealOnScroll` vs. hover-state CSS transitions.

Notable difference: Turner's base palette is light (white/off-white surfaces, dark text) with blue accents, whereas Tenax's system is a **dark** editorial theme (`obsidian`/`abyss`/`graphite` surfaces, `pure`/`fog`/`ash` text) — so container widths, radius (`8px`), and motion timing are portable references, but colors are not.
