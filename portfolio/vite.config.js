import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/*.tmp', '**/*.~tmp', '**/node_modules/**'],
    },
  },
});
