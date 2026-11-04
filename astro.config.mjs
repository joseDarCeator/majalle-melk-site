// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://mohamad-sadeghi.ir',

  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(articles-backup|index-\d+(-backup)?|index-before-v\d+)\/?$/.test(page),
    }),
  ],

  adapter: cloudflare(),
});