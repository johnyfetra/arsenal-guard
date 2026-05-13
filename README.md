# Arsenal Guard

Production-ready Astro website for Arsenal Guard, a senior freelance QA service focused on Cypress, Playwright, CI/CD and European remote collaboration.

## Stack

- Astro 5 with strict TypeScript
- Tailwind CSS with custom navy/orange theme
- Astro Content Collections for services, blog and cases
- Native i18n routing for `fr`, `en`, `es`, `de`, `it`
- `@astrojs/sitemap`, `@astrojs/mdx`, `@astrojs/check`
- Web3Forms-ready quote and contact forms

## Setup

```bash
npm install
npm run dev
```

Run checks and production build:

```bash
npm run check
npm run build
npm run preview
```

## Environment

Copy `.env.example` and fill values as needed:

```bash
PUBLIC_SITE_URL=https://arsenalguard.com
PUBLIC_WEB3FORMS_KEY=
PUBLIC_PLAUSIBLE_DOMAIN=
RESEND_API_KEY=
NOTION_API_KEY=
NOTION_DATABASE_ID=
```

`PUBLIC_WEB3FORMS_KEY` activates live form submission. Without it, forms show a local readiness message.

## Content

Add blog articles in `src/content/blog` as MDX with frontmatter matching `src/content/config.ts`.

Update service pricing in `src/lib/site.ts`; content mirrors live in `src/content/services`.

Translations are centralized in `src/lib/i18n.ts`, with JSON files under `src/i18n/{fr,en,es,de,it}` for future CMS or translator workflows.

## Deployment

Deploy on Vercel with the default Astro preset:

1. Import the repository.
2. Set environment variables.
3. Build command: `npm run build`.
4. Output directory: `dist`.

The generated sitemap is available at `/sitemap-index.xml`; `robots.txt` points to the production sitemap.
