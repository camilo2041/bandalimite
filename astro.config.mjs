import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});
