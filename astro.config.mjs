// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    // Lenis solo se importa desde <script> de componentes; sin esto Vite lo descubre tarde en dev
    // y puede servir una copia desactualizada (504) que rompe el scroll y el reveal.
    optimizeDeps: { include: ['lenis'] }
  }
});