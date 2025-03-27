import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5175,
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https://public.tableau.com;
        connect-src 'self' https://public.tableau.com;
        img-src 'self' data: https://public.tableau.com https://*.tableau.com;
        style-src 'self' 'unsafe-inline' https://public.tableau.com;
        frame-src 'self' https://public.tableau.com;
        font-src 'self' data:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
});
