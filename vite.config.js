import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import generateSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

    generateSitemap({
      hostname: 'https://technav.store',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})