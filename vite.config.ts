/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Brainyark-premium-jacket-ecommerce/', // Required for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add server configuration for SPA routing
  server: {
    historyApiFallback: true,
  }
});
