import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // No exponer sourcemaps en producción (seguridad)
    sourcemap: false,

    // Separar chunks para mejor caching del navegador
    // Los assets de React (vendor) tienen hash propio y se cachean por separado
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
          }
        },
      },
    },

    // Umbral de advertencia de chunk (500 KB)
    chunkSizeWarningLimit: 500,
  },
})