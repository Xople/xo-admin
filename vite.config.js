import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: {
      // Add your aliases here
      '@': path.resolve(__dirname, './src'), // Alias for the src directory
      '@components': path.resolve(__dirname, './src/components'), // Alias for components
      '@assets': path.resolve(__dirname, './src/assets'), // Alias for assets
    },
  },
})
