// @ts-check
import path from 'node:path'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: 'https://tenaxconstruction.com.do',
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  build: {
    inlineStylesheets: 'always',
  },

  image: {
    responsiveStyles: true,
  },

  integrations: [react(), sitemap()],
})