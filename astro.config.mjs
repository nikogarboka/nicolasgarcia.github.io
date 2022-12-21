import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://github.com/nikogarboka/nikogarboka.github.io',
  base: '/nikogarboka.github.io',
});