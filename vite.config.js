import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ command, ssrBuild }) => ({
  base: '/',
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // IMPORTANT
  build: ssrBuild
    ? {
        ssr: true,
        outDir: "dist/server",
        rollupOptions: {
          input: "./src/entry-server.jsx",
           output: {
          format: "cjs"
        }
        },
      }
    : {
        outDir: "dist/client",
        rollupOptions: {
          input: "./index.html",
        },
      },

  ssr: {
    noExternal: [
      'swiper',
      'gsap',
      'react-router-dom',
      '@remix-run/router',
      'react-helmet-async'
    ],
    target: 'node',
    format: 'cjs'
  }
}));
