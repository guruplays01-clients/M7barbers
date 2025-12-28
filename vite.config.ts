import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 REQUIRED for Netlify

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
