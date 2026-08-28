import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Importa el plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Añádelo a los plugins
  ],
})