import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9090,
  },
  plugins: [
    react(),
    tailwindcss(),
    viteMockServe({
      mockPath: './mock',
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
