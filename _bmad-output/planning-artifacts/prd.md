# PRD — Arsenal Guard Website

> Version: 1.0
> Status: Active
> Last updated: 2026-06-11
> Track: BMad Method

---

## 1. Executive Summary

Arsenal Guard est un site marketing statique (Astro 5 SSG) pour un service freelance de QA Engineering ciblant les entreprises européennes. Le site doit générer des demandes de devis et positionner l'expertise QA de Johny Fetramalala.

**Scope actuel** : FR + EN uniquement (DE/ES/IT différés à une phase ultérieure).

---

## 2. Current State Assessment

### Built & Working (13 pages, 33 routes au build)
- Homepage complète (FR + EN) avec toutes les sections
- 4 pages services détaillées + listing
- Page À propos avec bio fondateur
- Blog (3 articles FR + 3 articles EN, listing, pagination)
- Formulaire devis multi-étapes (4 steps)
- Formulaire contact
- Pages légales (placeholder)
- 404 custom
- Dark/light theme toggle avec persistence
- SEO complet (hreflang, OG, structured data, sitemap)
- Security headers (vercel.json)
- GSAP animations avec reduced motion support
- Mobile responsive avec menu hamburger

### Partial / Incomplet
- Forms : hardcodés en français (pas traduits en EN)
- Testimonials : placeholders "en cours de validation"
- Cases : placeholder "coming soon"
- Legal/Privacy : contenu minimal
- JSON translation files : stubs inutilisés (le vrai système est dans i18n.ts)
- OG image : 1200×1200 carré au lieu de 1200×630 recommandé

### Missing
- Analytics (Plausible/Cloudflare)
- Booking link (Calendly/Cal.com)
- Validation Zod côté client sur les formulaires

---

## 3. Requirements

### R1 — Form Localization (P0)
**As a** English visitor, **I want** the forms to display in my language **so that** I can understand and complete them.

**Acceptance Criteria:**
- ContactForm accepte un prop `lang` et affiche labels/boutons/statuts en FR ou EN
- QuoteForm accepte un prop `lang` et affiche tous les labels/steps en FR ou EN
- Les messages d'erreur/succès sont traduits
- Les options (project types, budgets) sont traduites

### R2 — Cleanup i18n Architecture (P1)
**As a** developer, **I want** un système i18n cohérent **so that** je puisse facilement maintenir et étendre les traductions.

**Acceptance Criteria:**
- Suppression des fichiers JSON stubs inutilisés (`src/i18n/fr/*.json`, `src/i18n/en/*.json`)
- Tout le contenu traduit vit dans `src/lib/i18n.ts` (single source of truth)
- Les composants utilisant des ternaires `lang === 'fr'` migrent vers le système `copy`
- Documentation dans project-context.md mise à jour

### R3 — Analytics Integration (P1)
**As a** business owner, **I want** to track visitor behavior **so that** I can measure conversions and optimize.

**Acceptance Criteria:**
- Script Plausible (ou Cloudflare Web Analytics) intégré dans Layout
- Configurable via variable d'env `PUBLIC_PLAUSIBLE_DOMAIN`
- Tracking custom event sur `quote_submitted` (déjà dispatché dans QuoteForm)
- RGPD-compliant (pas de cookies)
- Script ne bloque pas le rendu (async/defer)

### R4 — OG Image Fix (P1)
**As a** user sharing the site on social media, **I want** une preview correctement formatée **so that** le partage est attractif.

**Acceptance Criteria:**
- Image OG au format 1200×630px
- Design branded (navy + orange + logo + tagline)
- Meta tag `og:image:width` corrigé de 1200 à 1200, `og:image:height` de 1200 à 630

### R5 — Legal Pages Content (P2)
**As a** visitor, **I want** des pages légales complètes **so that** le site est conforme RGPD.

**Acceptance Criteria:**
- Mentions légales : éditeur, hébergeur, responsable publication
- Politique de confidentialité : données collectées (Web3Forms), durée conservation, droits utilisateur
- Contenu bilingue FR/EN
- Pas de contenu placeholder

### R6 — Testimonials & Social Proof (P2)
**As a** prospect, **I want** voir des témoignages réels **so that** je suis rassuré sur la qualité du service.

**Acceptance Criteria:**
- Minimum 3 témoignages réels (ou retirer la section temporairement)
- Nom, poste, entreprise, quote, avatar (ou initiales)
- Bilingue (FR testimonials sur page FR, EN sur page EN)

### R7 — Booking Integration (P3)
**As a** prospect prêt à discuter, **I want** pouvoir réserver un créneau **so that** je peux planifier un call rapidement.

**Acceptance Criteria:**
- Lien vers Cal.com ou Calendly fonctionnel
- Intégré sur la page contact et après soumission du formulaire devis
- Pas d'embed iframe (lien externe suffit pour v1)

### R8 — Performance Optimization (P2)
**As a** mobile user, **I want** un site rapide **so that** je ne quitte pas avant le chargement.

**Acceptance Criteria:**
- Hero SVG grid : réduire de 2624 `<rect>` à ~400 ou lazy-load
- Lighthouse Performance ≥ 95 sur mobile
- LCP < 2.5s sur 3G simulé
- Pas de layout shift (CLS = 0)

### R9 — Blog SEO Enhancements (P3)
**As a** content marketer, **I want** les articles bien référencés **so that** ils attirent du trafic organique.

**Acceptance Criteria:**
- Breadcrumbs structured data sur articles
- `dateModified` dans le schema Article
- Table des matières générée automatiquement
- Liens "article suivant / précédent"
- Temps de lecture estimé

### R10 — Error States & UX Polish (P3)
**As a** user, **I want** des feedback clairs **so that** je sais quoi faire en cas de problème.

**Acceptance Criteria:**
- Form : message clair si API key manquante (redirection vers email direct)
- 404 : suggestions de pages pertinentes
- Loading states visuels sur les boutons de soumission

---

## 4. Out of Scope (v1)

- Langues DE/ES/IT (phase 2)
- Case studies réels (dépend de validation client)
- Blog CMS headless (Contentful, Sanity, etc.)
- E-commerce / paiement en ligne
- Chat widget
- A/B testing
- Backend API custom

---

## 5. Technical Decisions

| Décision | Choix | Raison |
|----------|-------|--------|
| Framework | Astro 5 SSG | Zéro JS par défaut, performance maximale |
| Styling | Tailwind CSS 3 | Productivité, cohérence, poids minime |
| i18n | Custom (i18n.ts) | Simple, type-safe, pas de runtime overhead |
| Forms | Web3Forms | Gratuit, pas de backend à maintenir |
| Animations | GSAP + ScrollTrigger | Smooth, performant, reduced motion support |
| Deploy | Vercel (static) | Zero-config, CDN global, gratuit |
| Analytics | Plausible | RGPD-compliant, léger, pas de cookies |

---

## 6. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance (mobile) | ≥ 95 | Lighthouse CI |
| Lighthouse SEO | 100 | Lighthouse CI |
| Lighthouse Accessibility | ≥ 95 | Lighthouse CI |
| Core Web Vitals (LCP) | < 2.5s | Vercel Analytics |
| Form submission rate | > 3% visitors | Plausible custom events |
| Build time | < 5s | CI pipeline |
| TypeScript errors | 0 | `astro check` |

---

## 7. Priority Roadmap

```
Phase 1 (Current Sprint) — P0/P1
├── R1: Form localization
├── R2: i18n cleanup
├── R3: Analytics integration
└── R4: OG image fix

Phase 2 — P2
├── R5: Legal pages content
├── R6: Testimonials (real or remove)
└── R8: Performance optimization

Phase 3 — P3
├── R7: Booking integration
├── R9: Blog SEO enhancements
└── R10: Error states & UX polish

Phase 4 (Future)
├── Langues DE/ES/IT
├── Case studies
└── Blog CMS integration
```
