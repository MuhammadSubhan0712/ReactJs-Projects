import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: [
      'tsparticles',
      'react-tsparticles',
      'tsparticles-slim',
      'tsparticles-engine'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/tsparticles/, /node_modules/]
    }
  }
})