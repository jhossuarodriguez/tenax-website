// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    inlineStylesheets: 'always'
  },

  adapter: vercel(),

  image: {
    responsiveStyles: true
  },

  integrations: [react()],

  site: 'https://tenaxconstruction.com.do'
});