<<<<<<< HEAD
/// <reference types="node" />
=======
>>>>>>> ae1d8fef7780f103e8ec632f116839234babd98c
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Brainyark-premium-jacket-ecommerce/', // Required for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
<<<<<<< HEAD
  },
  // Add server configuration for SPA routing
  server: {
    historyApiFallback: true,
=======
>>>>>>> ae1d8fef7780f103e8ec632f116839234babd98c
  }
});
