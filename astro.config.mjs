import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://virtual.fio.unicen.edu.ar',
  base: 'https://virtual.fio.unicen.edu.ar',
});