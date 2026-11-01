import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Memaksa Vite menggunakan mode stabil standar dan menghindari rolldown error
    rollupOptions: {
      // Pastikan output bersih
    },
    chunkSizeWarningLimit: 1000,
  },
})