import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.lokmangalbiotech.com',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/pdf/') && !page.includes('/credits/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-IN', mr: 'mr-IN' } },
    }),
  ],
  image: {
    responsiveStyles: false,
  },
});
