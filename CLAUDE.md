# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working agreement for this repo

- **Do not run `pnpm build` / `astro build`.** The Vercel adapter's post-build step fails on this Windows machine with an `EPERM` symlink error unrelated to code changes, and the build is not needed to verify normal edits.
- **Do not use browser automation (claude-in-chrome) or start the dev server to visually debug.** The user reviews visual/behavioral changes themselves. Make the code changes and let the user verify in-browser.

## Commands

- `pnpm dev` — start the Astro dev server
- `pnpm preview` — preview a production build
- `pnpm exec eslint .` — lint (eslint is configured via `eslint.config.mjs` with `eslint-plugin-astro`, but no `lint` script is wired up in `package.json`)

There is no test suite in this repo.

## Architecture

This is an [Astro](https://astro.build) marketing site for Tenax Construction (a Dominican construction company), deployed on Vercel with `output: 'server'` (SSR, adapter `@astrojs/vercel`). Styling is Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — theme is defined entirely in `src/styles/global.css` using an `@theme` block). The `@/*` import alias maps to `src/*` (configured in both `astro.config.mjs` and `tsconfig.json`).

### Design system

`src/styles/global.css` defines the full token set (`@theme`) for a dark, editorial design system: chromatic accent colors (`primary`, `orchid-bloom`, `periwinkle`, `pale-iris`, `cyan-signal`, `deep-iris`) reserved for feature/category tiles and data signals only, dark surface colors (`obsidian`, `abyss`, `graphite`, `steel`, `silver`), and text colors (`fog`, `ash`, `cloud`, `pure`, `void`). Three font families: `font-display` (DM Serif Display, for serif headlines), `font-sans` (Inter, body/UI), `font-mono` (Roboto Mono, uppercase tracked labels). White-fill/black-text (`bg-pure text-void`) is the only primary CTA treatment; chromatic colors are not used for body text or buttons. `DESIGN.md` at the repo root is the original style reference this system was adapted from — consult it before making visual changes.

Google Fonts are loaded via `<link>` tags in `src/layouts/Layout.astro` (not self-hosted).

### Animation

GSAP (with `ScrollTrigger`) drives all animation. `src/lib/motion.ts` exports shared helpers (`revealOnScroll`, `staggerOnScroll`, `heroReveal`, `countUpOnScroll`) built on top of `gsap`/`ScrollTrigger`, which is registered once in that module. Components import from `@/lib/motion` inside their own `<script>` tag rather than re-registering GSAP or duplicating animation logic. Since pages are full (non-SPA) navigations, animation setup listens for `DOMContentLoaded`; a couple of components also listen for `astro:page-load` defensively.

### Page/component structure

- `src/layouts/Layout.astro` — shared shell (SEO meta tags, JSON-LD, fonts, `Header`/`Footer`), takes `canonical`/`title`/`description`/`noindex`/`footerLinks` props.
- `src/components/` — homepage sections (`Banner`, `About`, `OurServices`, `Projects`, `Numbers`, `News`) plus `Header`/`Footer` used sitewide. Section components are self-contained (data + markup + `<script>` for their own animations).
- `src/components/consts/` — static content data (`Images.ts` for banner/project images, `Services.ts` for the services catalog, `News.ts`) consumed by both components and their corresponding dynamic pages.
- `src/pages/` — file-based routing. Dynamic routes (`servicios/[id].astro`, `projects/[id].astro`) use `getStaticPaths` sourced from the consts files and `prerender = true`; most static-content pages (`nosotros`, `FAQ`, `contacto`, `cotizacion`) use `prerender = false` since they render through the SSR adapter.
- `src/pages/api/cotizacion.ts` — form submission endpoint for the quote request form; sends two emails via `nodemailer` through Gmail SMTP (`SMTP_USER`/`SMTP_PASS` env vars), one to the business and one confirmation to the client.
- SVG icons in `src/assets/icons/` are imported and used as Astro components (e.g. `import Grua from '@/assets/icons/grua.svg'` → `<Grua class="..." />`). For an icon to respond to Tailwind text-color utilities, its `fill`/`stroke` attributes must be `currentColor` (or unset, which defaults to black) — check this when adding new icons.
