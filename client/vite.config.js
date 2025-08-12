import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'dev-portfolio-2025-production-b166.up.railway.app'
    ],
    port: process.env.PORT || 4173,
    host: '0.0.0.0'
  }
})
