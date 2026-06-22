# Arsenal Guard

Production-ready Astro website for Arsenal Guard, a senior freelance QA service focused on Cypress, Playwright, CI/CD and European remote collaboration.

## Stack

- Astro 5 with strict TypeScript
- Tailwind CSS with custom navy/orange theme
- Astro Content Collections for services, blog and cases
- Native i18n routing for `fr` and `en`
- `@astrojs/sitemap`, `@astrojs/mdx`, `@astrojs/check`
- Resend-backed quote and contact forms via a Vercel Function

## Setup

```bash
npm install
npm run dev
```

Use the Vercel dev server when testing form submissions locally:

```bash
npm run dev:vercel
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
PUBLIC_PLAUSIBLE_DOMAIN=
RESEND_API_KEY=
CONTACT_TO_EMAIL=fetrajohny05@gmail.com
CONTACT_FROM_EMAIL="Arsenal Guard <contact@arsenalguard.com>"
CONTACT_MOCK_SEND=false
```

`RESEND_API_KEY` activates live form submission through the `/api/contact` Vercel Function.
Set `CONTACT_FROM_EMAIL` to an address on a domain verified in Resend.
Set `CONTACT_MOCK_SEND=true` locally to test the form UI without sending a real email.

## Content

Add blog articles in `src/content/blog` as MDX with frontmatter matching `src/content/config.ts`.

Update service pricing in `src/lib/site.ts`; content mirrors live in `src/content/services`.

Translations are centralized in `src/lib/i18n.ts`.

## Deployment

Deploy on Vercel with the default Astro preset:

1. Import the repository.
2. Set environment variables.
3. Build command: `npm run build`.
4. Output directory: `dist`.

The generated sitemap is available at `/sitemap-index.xml`; `robots.txt` points to the production sitemap.
