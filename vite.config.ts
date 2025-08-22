import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    // port: 8480,
    proxy: {
      '/api': {
        // target: 'http://host.docker.internal:8480',
        target: 'http://localhost:8480',
        changeOrigin: true,
        secure: false,
      }
    }
  },
})
