# Product Brief — Arsenal Guard

## 1. Vision Statement

Arsenal Guard est un service freelance de QA Engineering premium, basé à Madagascar, servant des clients européens (principalement francophones). Le site web est la vitrine commerciale : il doit générer des demandes de devis et positionner Johny Fetramalala comme un expert QA de confiance.

**Tagline** : "Qualité. Automatisation. Impact."

## 2. Problem Statement

Les startups et PME européennes (seed → Series B) ont besoin de QA fiable sans embaucher à temps plein. Les alternatives offshore existantes manquent souvent de qualité, de communication francophone, et de transparence. Arsenal Guard comble ce gap avec un expert senior francophone à tarif compétitif.

## 3. Target Users

| Persona | Description | Besoin |
|---------|-------------|--------|
| **CTO / Lead Dev** | Startup européenne (seed → Series B) | QA fiable sans recrutement full-time |
| **Product Manager / Engineering Manager** | SaaS mid-size | Partenariat QA offshore de qualité |
| **Tech Founder** | Lancement produit | Validation QA rapide avant release |

## 4. Core Value Propositions

1. **Expert francophone senior** — 5+ ans d'expérience, clients prestigieux (Chanel, Sodexo)
2. **Tarif compétitif** — Qualité premium à coût offshore (Madagascar)
3. **Flexibilité** — Du ponctuel (3 jours) au dédié full-time, sans engagement long
4. **Stack moderne** — Cypress, Playwright, TypeScript, CI/CD, IA-assisted testing
5. **Transparence** — Reporting mensuel, pas de marketing fluff

## 5. Product Overview

### Site marketing multilingue (5 langues : FR, EN, DE, ES, IT)

**Pages principales :**
- Homepage (hero + value props + services preview + CTA)
- 4 pages services détaillées (audit, tests auto, forfait mensuel, QA dédié)
- Page À propos
- Blog (3 articles initiaux MDX)
- Réalisations (placeholder "Coming soon")
- Formulaire de devis multi-étapes
- Page contact
- Pages légales (mentions légales, confidentialité)
- Page 404 custom

### Offres commerciales

#### Tier 1 — Missions ponctuelles
| Offre | Durée | Prix |
|-------|--------|------|
| Express QA Audit | 3 jours | 600 € HT |
| Flaky Test Stabilization | 5-6 jours | 1 200 € HT |
| E2E Framework Setup + 3 tests | 7 jours | 1 600 € HT |
| CI/CD + Blocking Tests Setup | 8 jours | 1 800 € HT |

#### Tier 2 — Forfaits mensuels
| Plan | Volume | Prix |
|------|--------|------|
| Starter | 5 jours/mois | 1 100 € HT/mois |
| Growth | 10 jours/mois | 2 000 € HT/mois |
| Pro | 15 jours/mois | 2 850 € HT/mois |

#### Tier 3 — QA Dédié
| Profil | Prix |
|--------|------|
| Senior QA dédié (20j/mois) | 3 800 € HT/mois |
| Senior QA + Lead supervision | 4 500 € HT/mois |

## 6. Success Metrics

- Lighthouse score ≥ 95 sur toutes les catégories
- Time to First Byte < 200ms
- Taux de conversion formulaire devis > 3%
- SEO : ranking page 1 sur "QA freelance" + "tests automatisés freelance"
- Support 5 langues fonctionnel et SEO-friendly (hreflang)

## 7. Brand Identity

- **Tone** : Professionnel, expert, confiant — humain et accessible
- **Style** : Direct, concret, orienté résultats
- **Palette** : Navy profond (#0F1F44) + Orange énergie (#E67E22) + Crème (#FAFAF7)
- **Typo** : Inter (headings + body), JetBrains Mono (code)
- **Mode par défaut** : Dark mode

## 8. Constraints & Assumptions

- Budget : projet personnel, pas de SaaS payants (Web3Forms ou Resend gratuit)
- Déploiement : Vercel ou Cloudflare Pages (gratuit)
- Analytics : Cloudflare Web Analytics ou Plausible (RGPD-friendly)
- Pas de backend custom, formulaires via API externe
- Contenu initial en français, traduit dans les 4 autres langues
- Références clients existantes : Chanel, Sodexo, Hexaglobe, Ecomundo, Les Aligneurs Français

## 9. Technical Stack (Decided)

- **Framework** : Astro 5 (SSG)
- **Styling** : Tailwind CSS 3+
- **Language** : TypeScript (strict)
- **Content** : Astro Content Collections (MDX blog, MD services)
- **i18n** : astro-i18next + JSON translation files
- **Icons** : lucide-astro
- **Animations** : GSAP
- **Fonts** : @fontsource/inter, @fontsource/jetbrains-mono
- **Forms** : Web3Forms ou Resend
- **Validation** : Zod
