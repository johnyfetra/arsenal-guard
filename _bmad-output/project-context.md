# Project Context — Arsenal Guard

## Project Overview

Marketing website for Arsenal Guard, a freelance QA Engineering service targeting European companies. Multi-language (FR/EN/DE/ES/IT), statically generated, optimized for SEO and performance.

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generation)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3+ with custom theme
- **Content**: Astro Content Collections (MDX for blog, MD for services)
- **i18n**: astro-i18next + JSON translation files per locale
- **Animations**: GSAP (ScrollTrigger)
- **Icons**: lucide-astro
- **Fonts**: @fontsource/inter, @fontsource/jetbrains-mono (self-hosted)
- **Forms**: Web3Forms or Resend (external API, no backend)
- **Validation**: Zod
- **Deployment**: Vercel (static)

## Project Structure

```
arsenal-guard/
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── sections/     # Hero, ValueProps, ServicesPreview, FAQ, etc.
│   │   ├── ui/           # Button, Card, Badge, Container, ThemeToggle
│   │   ├── forms/        # ContactForm, QuoteForm
│   │   ├── seo/          # BaseHead
│   │   └── i18n/         # LanguageSwitcher
│   ├── content/
│   │   ├── services/     # MD files per service
│   │   ├── blog/         # MDX articles (prefixed by locale: 01-*, 11-*)
│   │   └── cases/        # Case studies (placeholder)
│   ├── i18n/
│   │   └── {fr,en,de,es,it}/  # JSON namespaces: common, home, services, about, quote, seo
│   ├── lib/              # i18n.ts, site.ts utilities
│   ├── pages/            # index.astro, [...slug].astro, 404.astro
│   ├── styles/           # globals.css (Tailwind base)
│   └── types/            # TypeScript type definitions
├── public/               # Static assets (robots.txt)
└── _bmad-output/         # BMAD planning & implementation artifacts
```

## Coding Conventions

- **Components**: `.astro` files, PascalCase naming
- **Translations**: JSON files in `src/i18n/{locale}/{namespace}.json`
- **Content**: Frontmatter with Zod schema validation in `content/config.ts`
- **Routing**: Dynamic `[...slug].astro` for i18n, static `index.astro` for FR homepage
- **CSS**: Tailwind utility classes, custom properties in `globals.css` for theme colors
- **Dark mode**: Default dark, class-based toggle (`dark:` variant)
- **Responsive**: Mobile-first (sm → md → lg breakpoints)

## Design System

### Colors
- Primary navy: `#0F1F44` (background dark)
- Accent orange: `#E67E22` (CTAs, highlights)
- Cream: `#FAFAF7` (light mode background)
- Dark bg: `#050B1A`

### Typography
- Headings: Inter 700/800
- Body: Inter 400/500
- Code: JetBrains Mono

### Components
- Cards: subtle border + soft shadow + 16px border-radius
- Buttons: primary (orange gradient), secondary (navy outline), ghost
- Sections: alternating dark navy / gradient backgrounds
- Animations: fade-in-up on scroll via GSAP

## i18n Strategy

- Default locale: `fr` (no URL prefix)
- Other locales: `/en/`, `/es/`, `/de/`, `/it/`
- All pages must have translations in all 5 locales
- SEO: hreflang tags in `<head>` for all page variants
- Blog articles: prefixed by locale number (01-03 = FR, 11-13 = EN)

## Quality Targets

- Lighthouse: ≥ 95 all categories
- TTFB < 200ms
- Core Web Vitals: all green
- Zero TypeScript errors (`astro check`)
- Zero lint errors (`eslint .`)
- WCAG 2.1 AA accessibility

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run check      # TypeScript checking
npm run lint       # ESLint
npm run format     # Prettier
npm run preview    # Preview production build
```

## Deployment

- Static build (`astro build`) → `dist/`
- Deploy to Vercel (zero-config for Astro static)
- Sitemap auto-generated via `@astrojs/sitemap`
- robots.txt in `public/`

## Important Rules

1. All text visible to users MUST come from translation JSON files (never hardcoded)
2. New pages must support all 5 locales
3. Images must have alt text (from translations)
4. Forms must validate client-side (Zod) before submission
5. No external scripts that block rendering
6. Prefer Astro components over client-side JS islands
7. Keep bundle size minimal — no unnecessary dependencies
