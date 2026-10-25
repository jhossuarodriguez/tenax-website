// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Base de las URL absolutas: canónicos, Open Graph, JSON-LD, sitemap y robots.txt.
  site: 'https://www.tenaxconstruction.com.do',
  // Todos los enlaces internos terminan en "/"; vercel.json usa la misma regla para no redirigir cada clic.
  trailingSlash: 'always',
  // Las páginas siguen siendo estáticas; el adaptador solo hace falta para /api/cotizacion (prerender = false).
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()]
  }
});
