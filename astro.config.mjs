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
  site: 'https://www.tenaxconstruction.com.do',
  output: 'server',
  trailingSlash: "never",
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

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    react(),
  ],
})