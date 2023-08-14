import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // ...
  integrations: [tailwind()],
  root: '../astro_blog',
});