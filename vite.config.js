import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':   ['react', 'react-dom'],
          'motion-vendor':  ['framer-motion'],
          'ui-vendor':      ['lucide-react', 'react-scroll', 'react-type-animation'],
          'particles':      ['@tsparticles/react', '@tsparticles/slim'],
        },
      },
    },
  },
})
