import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  const publicBase = process.env.VITE_PUBLIC_BASE ?? (isGitHubPages ? '/dotzero/' : '/');

  return {
    base: publicBase,
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          dotzero: path.resolve(__dirname, 'index.html'),
          universalSystems: path.resolve(__dirname, 'universal-systems.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
