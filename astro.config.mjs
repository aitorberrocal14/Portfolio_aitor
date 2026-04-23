import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitorberrocal14.github.io',
  base: '/Portfolio_aitor',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
