// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    inlineStylesheets: 'always'
  },

  image: {
    responsiveStyles: true
  },

  integrations: [react()],

  env: {
    schema: {
      SMTP_USER: envField.string({
        context: 'server',
        access: 'secret',
      }),

      SMTP_PASS: envField.string({
        context: 'server',
        access: 'secret',
      }),

      SMTP_HOST: envField.string({
        context: 'server',
        access: 'secret',
      })
    }
  },

  site: 'https://tenaxconstruction.com.do'
});