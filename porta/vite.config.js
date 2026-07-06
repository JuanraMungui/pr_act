import { defineConfig } from 'vite';

// El repo se llama "work" -> GitHub Pages sirve el sitio en /work/
// Si cambias el nombre del repositorio, actualiza este valor.
export default defineConfig({
  base: '/work/',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true
  }
});