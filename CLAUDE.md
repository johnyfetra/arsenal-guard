---
project_name: 'arsenal-guard'
user_name: 'Macbook'
date: '2026-06-11'
sections_completed:
  - technology_stack
  - language_rules
  - framework_rules
  - animation_rules
  - i18n_rules
  - quality_rules
  - workflow_rules
  - anti_patterns
status: 'complete'
optimized_for_llm: true
ide: claude-code
---

# Project Context for AI Agents — Arsenal Guard

_Critical rules and patterns to follow when implementing code. Focus on non-obvious details that would otherwise be missed._

---

## Technology Stack & Versions

| Layer | Technology | Version |
|---|---|---|
| Framework | Astro (SSG) | ^5.18.1 |
| Language | TypeScript (strict) | ^5.9.3 |
| Styling | Tailwind CSS | ^3.4.19 |
| Animations | GSAP + ScrollTrigger | ^3.15.0 |
| Icons | lucide-astro | latest |
| Fonts | @fontsource/inter, @fontsource/jetbrains-mono | self-hosted |
| i18n | Custom (src/lib/i18n.ts copy object) | — |
| Content | Astro Content Collections (MDX blog, MD services) | — |
| Validation | Zod | — |
| Deployment | Vercel (static) | — |

---

## Critical Implementation Rules

### Language-Specific Rules

- **TypeScript strict mode** — zero `any`, no implicit returns, explicit types on all public APIs
- **No `!` non-null assertions** — use proper null guards or optional chaining
- **`import type`** for type-only imports (`import type { Lang } from '../../lib/i18n'`)
- Component props defined via `interface Props` inside `---` frontmatter of `.astro` files

### Framework-Specific Rules (Astro)

- **`.astro` components only** — never ship React/Vue/Svelte islands unless explicitly needed; keep bundle minimal
- **`is:inline`** for scripts that must run synchronously in `<head>` (theme detection, `reveal-ready` class); use `<script>` (Vite-bundled) for anything that imports npm packages
- **No hardcoded user-visible text** — all strings come from i18n JSON files via `copy[lang].xxx` or `{lang === 'fr' ? ... : ...}` for inline bilingual
- **Static routes only** — `src/pages/index.astro` (FR default), `src/pages/[...slug].astro` (other locales)
- **Content Collections** — blog articles prefixed by locale number (`01-03` = FR, `11-13` = EN); validate frontmatter with Zod schema in `content/config.ts`
- **Mobile-first** — Tailwind breakpoints: base (mobile) → `sm:` → `md:` → `lg:`

### i18n Rules

- Default locale: **`fr`** (no URL prefix); other locale: `/en/`
- **Single source of truth**: `src/lib/i18n.ts` — `copy` object contains all translations keyed by lang
- `type Lang = 'fr' | 'en'` from `src/lib/i18n.ts`
- Every new page or section **must** have translations in both FR and EN
- SEO: hreflang tags in `<head>` for both locales (handled by `BaseHead`)
- DE/ES/IT are out of scope for v1 (deferred to Phase 4)

### Animation Rules (GSAP System)

The animation system lives in `src/scripts/animations.ts` — a single Vite-bundled module imported via `<script>` in `Layout.astro`.

**Architecture — never break these invariants:**

1. **One ScrollTrigger per `<section>`**, not per element. `onEnter` fires all elements in that section with staggered `delay`.
2. **`gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 })`** to show already-visible elements — NOT `clearProps`. CSS class `opacity:0` is not cleared by `clearProps` (inline styles override class rules; `clearProps` only removes inline styles).
3. **Batch `getBoundingClientRect()` reads** before any loop — avoids layout thrashing.
4. **`force3D: true`** globally — GPU compositing on all tweens.
5. **`overwrite: 'auto'`** globally — prevents conflicting tweens.

**Adding new animated elements:**

- Add the element's selector to the `revealSelectors` array in the `is:inline` script at the bottom of `Layout.astro`
- Add a matching `cfg()` branch in `animations.ts` if the element needs a custom animation style
- Add `.reveal` class in CSS: `opacity: 0` initial state via `.reveal-ready .reveal { opacity: 0 }` in `globals.css`

**Counter data attributes:**
```html
<!-- Simple: counts 0 → 5, displays "5+" -->
<p data-counter="5" data-counter-suffix="+">5+</p>

<!-- Range: counts 0 → 50%, snaps to "40–50%" on complete -->
<p data-counter="50" data-counter-suffix="%" data-counter-final="40–50%">40–50%</p>

<!-- Prefix: counts UTC+0 → UTC+3 -->
<p data-counter="3" data-counter-prefix="UTC+">UTC+3</p>
```

**`prefers-reduced-motion`**: Respected — all elements immediately shown at opacity 1, no tweens run.

**Failsafe**: 1500ms timeout forces all `.reveal` and `.stack-pill` elements visible in case GSAP throws before setup completes.

### CSS / Styling Rules

- **Theme**: default dark (`data-theme="dark"` on `<html>`), class-based toggle (`dark:` variant)
- **Design tokens** (in `globals.css`):
  - Primary navy: `#0F1F44`
  - Accent orange: `#E67E22` — used for CTAs and highlights
  - Dark bg: `#050B1A`
  - Cream: `#FAFAF7` (light mode bg)
- **`reveal-ready` class**: Added to `<html>` synchronously in HEAD inline script if `prefers-reduced-motion` is not set — gates all CSS-based reveal initial states
- **`.stat-number`**: Has `white-space: nowrap` — required to prevent `40–50%` breaking at the en-dash
- **`.stack-pill`**: Transform managed by GSAP; opacity managed by CSS (`.reveal-ready .stack-pill { opacity: 0 }`)
- **`.scroll-float`**: Lightweight parallax via `--scroll-shift` CSS custom property, no GSAP
- **`will-change: transform`** on `.scroll-float` only — don't add it globally

### Code Quality Rules

- `astro check` must pass (zero TypeScript errors)
- `eslint .` must pass (zero lint errors)
- Lighthouse target: ≥ 95 all categories
- WCAG 2.1 AA accessibility — all images have alt text from translations, all interactive elements focusable
- **No external render-blocking scripts**
- **No unnecessary dependencies** — keep bundle minimal, prefer Astro components over JS islands

### Development Workflow Rules

```bash
npm run dev      # Dev server (http://localhost:4321)
npm run build    # Production build → dist/
npm run check    # astro check (TypeScript)
npm run lint     # ESLint
npm run format   # Prettier
npm run preview  # Preview production build
```

- Node ≥ 18 required
- Git branch: `main` is production; rebase-merge workflow (`git pull --rebase`)
- **Before `git pull --rebase`**: stash any unstaged deletions to avoid conflicts
- Vercel deploys automatically from `main`
- **Commit messages**: follow Conventional Commits — `type(scope): description` — imperative, ≤72 chars, no period, no AI signature. Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `perf`, `test`
- **Context file sync**: `CLAUDE.md`, `AGENTS.md`, `.github/copilot-instructions.md` must always be identical in content. Update all three together, commit in one shot.

---

## Critical Don't-Miss Rules

| Rule | Why it bites you |
|---|---|
| Never use `clearProps` to show hidden elements | `clearProps` only removes GSAP inline styles — CSS class-based `opacity:0` survives. Use `gsap.set(el, { opacity: 1, ... })` instead |
| Never hardcode user-visible text | Both FR/EN locales must match; missing key silently renders `undefined` |
| Don't add `.reveal` to children of `.reveal` | `setupReveals()` filters out nested reveals; they'd be invisible forever |
| `is:inline` ≠ `<script>` | `is:inline` runs synchronously, can't import npm packages. Use `<script>` for GSAP and any npm import |
| `data-counter-final` is required for range values | Without it, `40–50%` would display as `50%` after counter completes |
| `white-space: nowrap` on stat numbers | En-dashes are line-break opportunities — long values wrap without it |

---

## BMAD Agent Instructions

This project uses **BMAD Method v6.8.0** with the BMM module. Agents and skills are in `.agents/skills/`.

**Available agents** (invoke by role-playing as them):
- `bmad-agent-analyst` (Mary) — business analysis, research
- `bmad-agent-pm` (John) — product management, PRDs
- `bmad-agent-ux-designer` (Sally) — UX design, user flows
- `bmad-agent-architect` (Winston) — system architecture
- `bmad-agent-dev` (Amelia) — senior software engineer, implementation
- `bmad-agent-tech-writer` (Paige) — documentation

**Orchestration**: I (Claude) act as the BMAD orchestrator interface. User gives high-level needs → I clarify → build a plan → delegate to the appropriate BMAD agent skill.

**Key artifacts** in `_bmad-output/`:
- `project-context.md` — canonical project context (this file is the Claude Code version)
- `planning-artifacts/product-brief.md` — business brief, personas, pricing tiers

**Output folder**: `_bmad-output/` (planning artifacts in `planning-artifacts/`, implementation artifacts in `implementation-artifacts/`)

---

## Usage Guidelines

**For AI Agents:**
- Read this file before implementing any code
- Follow ALL rules exactly as documented — especially the GSAP invariants and i18n requirements
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge

**For Humans:**
- Keep this file lean; remove rules that become obvious over time
- Update when technology stack or patterns change
- The BMAD `project-context.md` in `_bmad-output/` is superseded by this file for Claude Code sessions

Last Updated: 2026-06-11
