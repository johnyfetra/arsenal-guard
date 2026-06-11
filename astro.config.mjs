// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: process.env.PUBLIC_SITE_URL ?? 'https://arsenalguard.com',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: 'fr',
				locales: {
					fr: 'fr-FR',
					en: 'en-GB',
				},
			},
		}),
	],
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
