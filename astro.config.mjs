// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Las páginas siguen siendo estáticas; el adaptador solo hace falta para /api/cotizacion (prerender = false).
  adapter: vercel(),
  devToolbar: { enabled: false },
  // Excavación se fusionó con Movimiento de tierra al rehacer los servicios con las fotos de obra.
  redirects: { '/servicios/excavacion': '/servicios/movimiento-tierra' },
  vite: {
    plugins: [tailwindcss()]
  }
});