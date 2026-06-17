Le document demandé est une pure synthèse de tout le matériel déjà fourni (analyses experts + synthèse stratégique + contenu final). Tout le contenu nécessaire est dans le prompt, je n'ai pas besoin d'explorer le code. Je produis directement le document Markdown final.

# Rapport de refonte contenu — Arsenal Guard

## 1. Diagnostic — Problèmes critiques identifiés

Les problèmes ci-dessous sont classés par impact sur la conversion (du plus bloquant au moins bloquant).

1. **Prix affichés en TTC à une audience B2B** — 100 % des tarifs (`site.ts` lignes 81, 120-122, 140, 173, 206, 244, 261-275 ; `ServicesPreview.astro:39`) sont libellés « TTC / incl. VAT ». Un CTO/PM achète en HT (TVA récupérable). Le TTC gonfle le prix perçu de +20 % et signale un fournisseur grand-public/freelance plutôt qu'un partenaire B2B. Contredit directement le brief commercial (en HT).
   **Impact :** prix perçu artificiellement élevé, perte de crédibilité B2B, incohérence catalogue.

2. **Faux témoignages + page Réalisations vide** — Citations placeholder inventées (« Mission QA livrée avec succès. Rapport détaillé en attente de validation client ») attribuées à Chanel/Sodexo/Hexaglobe (`Testimonials.astro:13-34`), et page Réalisations « coming soon » présente dans la nav. La preuve sociale devient un signal d'alerte : un CTO averti lit « name-dropping sans preuve ».
   **Impact :** destruction active de confiance, cul-de-sac au moment où le prospect cherche la réassurance.

3. **Point d'entrée commercial invisible et incohérent** — Le Hero vend 3 métiers (manuel/automation/CI-CD) sans hiérarchie ni prix. L'offre d'appel réelle (QA Snapshot dès 350 €) est enterrée en bas de page. Pire : un Hero bien meilleur existe déjà dans `i18n.ts:78-81` mais n'est PAS branché. Deux services du brief (Flaky Stabilization 1200 €, CI/CD Setup 1800 €) n'ont aucune page dédiée.
   **Impact :** le prospect ne sait pas par où commencer ni à quel prix ; abandon avant qualification.

4. **Redondance massive de la homepage (4 sections pour 1 idée)** — MissionMap, QualityLayer, HowItWorks et ValueProps racontent 4 fois le cycle RECON→GUARD→REPORT avec des métaphores différentes. SnapshotTeaser et AutomationBridge fragmentent l'info service avant la vraie section Services. 14 sections au total.
   **Impact :** 5 sections conceptuelles d'affilée avant toute offre concrète = principal point de décrochage.

5. **Argument coût/proximité enterré (section ~9-10)** — Le « 40-50 % d'économie vs staffing local », « 5+ ans », « UTC+3 » sont cachés dans la section Stack et /a-propos. C'est l'argument de conversion #1 pour un CTO sensible au cash burn, et il arrive trop tard.
   **Impact :** le prospect décroche avant d'atteindre le seul argument qui le ferait convertir.

6. **Stack « Terrain front » (Angular/RxJS/NgRx) = auto-goal de positionnement** — Ces technos CLIENT sont présentées comme l'arsenal QA (`Stack.astro:11`, `site.ts:62-65`). Un prospect React/Vue/Next conclut « ce n'est pas pour moi » ou « on va m'imposer Angular ». La section contredit son propre titre (« pas pour décorer une stack »).
   **Impact :** fuite des prospects non-Angular, confusion outils QA / technos client.

7. **Jargon militaire omniprésent comme langage fonctionnel** — Release Command, Doctrine, Sentinelles, Fortification, Recon, Gate, Ledger, Règles d'engagement… Le CTO doit traduire chaque section. Dissonance directe avec la promesse « sobre, sans bruit ».
   **Impact :** charge cognitive permanente qui retarde la compréhension de l'offre.

8. **Aucun CTA de faible engagement, aucun booking réel** — Les CTA Hero sont « Planifier un audit QA » (engageant) et « Voir l'approche » (vague). Pas de Calendly/Cal.com (le footer dit « Lien de prise de rendez-vous à ajouter prochainement »). Pas d'exemple de rapport téléchargeable alors que le livrable clé EST un rapport.
   **Impact :** le prospect tiède n'a aucune marche basse ; il doit payer pour voir la qualité.

9. **Structure solo vs équipe non assumée** — Le site alterne « nous/nos équipes » et un fondateur unique (Johny). Le « QA dédié 20j/mois » implique une capacité qu'un solo ne peut pas multiplier.
   **Impact :** doute sur la capacité réelle de livraison.

10. **Copy centré prestataire, pas client** — « On lit le terrain / on reconnaît / on fortifie » au lieu de « vous livrez sans régression / vous économisez X / vos devs gardent la main ». Le Hero lead empile des outils (Playwright/Cypress/CI) avant le bénéfice.
    **Impact :** le prospect ne se projette pas dans ce qu'il OBTIENT.

---

## 2. Décisions stratégiques

### Positionnement
**Nouvelle déclaration :** *« Un QA Engineer senior dédié qui sécurise vos releases — test manuel, automation E2E et garde CI/CD — au prix d'un freelance européen divisé par deux, sans recrutement ni engagement. »*

- **Une offre d'appel unique et martelée :** le test manuel + rapport priorisé sous 72h, dès 350 € HT, sans setup ni engagement. C'est la marche basse. Automation et garde CI/CD sont les paliers suivants — pas trois métiers au même niveau.
- **L'offshore Madagascar devient un pilier de valeur** (above-the-fold), pas une objection à désamorcer : 40-50 % d'économie, francophone natif, overlap UTC+3.
- **Structure solo assumée :** passer partout du « nous » au « je ». Arsenal Guard = Johny Fetramalala, interlocuteur unique et responsable du résultat.

### Vocabulaire
**Décision jargon militaire : abandonné comme langage fonctionnel, conservé uniquement comme accent visuel léger.**
- Titres H2, libellés de services, de nav et de CTA → langage business clair, orienté bénéfice client (« vous »).
- L'identité radar/sentinelle reste dans le VISUEL et un eyebrow occasionnel — jamais dans ce que le prospect doit décoder pour comprendre l'offre.

### Stack
- Retirer les technos CLIENT (Angular/RxJS/NgRx) des **deux sources simultanément** (`Stack.astro:11` ET `site.ts:62-65`) + page À propos.
- Ajouter une phrase de cadrage « framework-agnostique » qui transforme l'objection « on m'impose Angular » en argument de flexibilité.
- Restructurer en 4 catégories QA réelles et modernes : Automation E2E, API & intégration, CI/CD & gates, Reporting & signal.

### Navigation & conversion
- **Un seul CTA dominant** répété partout : « Demander un devis » (bouton orange unique).
- Ajouter un onglet « Tarifs » pour la qualification budgétaire directe.
- Retirer « Réalisations » (placeholder) et fusionner « Contact » dans le CTA/footer pour ne pas diluer le CTA principal.
- **Catalogue stabilisé :** un seul prix par service, en HT, cohérent entre brief / `site.ts` / ledger.
- Ajouter de vrais réducteurs de friction à côté de chaque CTA : « Sans engagement · Réponse sous 24h · NDA possible ».
- Mettre un vrai outil de booking (Calendly/Cal.com) et un exemple de rapport téléchargeable.

---

## 3. Nouvelle navigation

| Item | Href | Justification du changement |
|------|------|------------------------------|
| **Services** | `/services` | Conservé en premier (bon). Reste le point d'entrée principal vers l'offre. |
| **Tarifs** | `/services#tarifs` | **Ajouté.** Permet à la cible CTO/PM de qualifier le budget rapidement sans scroller toute la page Services. Lève le frein de qualification. |
| **À propos** | `/a-propos` | Conservé. Page de crédibilité du fondateur (à recentrer sur le solo). |
| **Blog** | `/blog` | Conservé. |
| **CTA :** Demander un devis | (formulaire devis) | **Unique CTA orange dominant**, répété dans le Hero et le CTA final. |

**Changements clés :**
- **« Réalisations » retiré** de la nav : page placeholder vide = cul-de-sac au pire moment (quand le prospect cherche la preuve). À réintégrer seulement avec 1-2 vrais cas chiffrés.
- **« Contact » fusionné** dans le CTA et le footer : évite deux entrées de conversion concurrentes (« Contact » + « Demander un devis ») qui diluaient le CTA principal.
- **Vocabulaire de nav 100 % standard** (pas de jargon militaire) pour ne pas créer de dissonance avec le contenu interne.

---

## 4. Homepage — Nouvelles sections (dans l'ordre)

Réduction de 14 à 8 sections, ordonnées pour le parcours arrivée → conversion.

### Section 1 — HERO
*Présence/ordre :* point d'entrée. H1 bénéfice d'abord + offre d'appel claire + CTA faible engagement. Réducteurs de risque sous le bouton.

- **Badge :** QA senior dédié · Test manuel + automation + CI/CD
- **H1 :** Vos parcours critiques testés à la main.
- **H1 accent :** Rapport priorisé livré sous 72h.
- **Lead :** Je sécurise vos releases : un QA senior teste vos parcours critiques, stabilise vos suites E2E et verrouille votre CI — sans recrutement, sans setup, sans engagement. Vous gardez la main, vos devs livrent plus vite.
- **CTA primaire :** Demander un devis
- **CTA secondaire :** Voir un exemple de rapport
- **Trust line :** 5+ ans d'expérience · Interventions sur des produits utilisés par Chanel, Sodexo et des SaaS européens · Réponse sous 24h
- **Visuel :** Radar / sentinelle conservé comme accent visuel uniquement : un écran sombre type signal de veille où trois parcours critiques (login, paiement, checkout) s'illuminent un à un en vert, et un point passe au orange (le bug détecté). Aucun libellé militaire — juste le geste visuel de la surveillance qui repère l'angle mort.

### Section 2 — PROOF STRIP + LOGOS
*Présence/ordre :* crédibilité + valeur dans les 5 premières secondes, juste sous le Hero. Logos enfin contextualisés.

- **Headline :** J'interviens sur des produits utilisés par des marques exigeantes et des SaaS européens
- **Sous-titre :** Chanel et Sodexo (via plateformes digitales) · Hexaglobe (streaming) · Ecomundo (SaaS conformité) · Les Aligneurs Français (santé). Des contextes où une régression en production coûte cher.
- **Chiffres remontés (proof strip) :**
  - **dès 350 € HT** — Premier diagnostic QA, livré sous 72h
  - **-40 à -50 %** — vs un QA freelance européen, qualité senior équivalente
  - **5+ ans** — QA senior, francophone natif, overlap UTC+3 avec l'Europe

### Section 3 — PROBLÈME
*Présence/ordre :* agitation du problème en langage concret. Fusionne ReleaseProblems + les KPIs de MissionMap (supprime le doublon).

- **Eyebrow :** Le problème
- **H2 :** Une release rate rarement par manque d'outils. Elle rate par angle mort.
- **Lead :** Vos devs écrivent du code, pas des tests. Et ce qui n'est pas testé finit toujours par casser le jour de la mise en prod — souvent sur le parcours qui rapporte.
- **Problème 1 — Tests flaky · « Vos suites E2E mentent »** : Vos tests passent au rouge un jour sur deux sans vraie raison. L'équipe finit par les ignorer, puis par les désactiver. Résultat : une suite verte qui ne protège plus rien.
- **Problème 2 — Régressions tardives · « Vous trouvez les régressions trop tard »** : Le bug remonte par un client, pas par un test. Chaque release devient une loterie où vos devs corrigent en urgence ce qu'un regard QA aurait attrapé avant le merge.
- **Problème 3 — Couverture trompeuse · « Votre CI est verte, votre prod est cassée »** : Le pipeline dit OK, mais le checkout plante en production. Vos tests ne couvrent pas les parcours qui comptent vraiment — et personne n'a le temps de combler le trou.

### Section 4 — POUR QUI
*Présence/ordre :* nouvelle section personas pour l'auto-identification et l'orientation vers la bonne offre.

- **Eyebrow :** Pour qui
- **H2 :** Conçu pour les équipes qui livrent vite et n'ont pas (encore) de QA dédié.
- **Lead :** Trois situations, une même réponse : un QA senior à la demande, sans le délai ni le coût d'un recrutement.
- **CTO / Lead dev · seed → Series B :** Vous livrez chaque semaine mais vous n'avez personne dédié à la qualité. Vous voulez un filet de sécurité QA sans alourdir la masse salariale ni ralentir les devs. Je m'intègre à votre cadence, vous gardez la roadmap.
- **PM / Engineering Manager · SaaS mid-size :** Vous cherchez un partenaire QA fiable et francophone, pas une agence offshore opaque. Vous voulez des tests maintenables que votre équipe peut reprendre, et un reporting lisible par le produit comme par la tech.
- **Tech Founder · avant lancement :** Vous lancez bientôt et une démo qui plante n'est pas une option. Vous voulez valider vos parcours critiques rapidement, à coût maîtrisé, avant d'exposer le produit à vos premiers utilisateurs ou investisseurs.

### Section 5 — MÉTHODE
*Présence/ordre :* UNE seule section méthode (ex-HowItWorks réécrite). Supprime QualityLayer et ValueProps redondants.

- **Eyebrow :** La méthode
- **H2 :** Une intervention QA lisible par le produit, la tech et le management.
- **Lead :** Pas de jargon, pas de boîte noire. Quatre temps clairs, du premier accès à la transmission à votre équipe.
- **1 · Je diagnostique :** Vous me donnez un accès staging et vos parcours critiques. Je teste à la main et je cartographie où le risque se concentre vraiment — sans accès au code source si vous préférez.
- **2 · Je priorise :** Je vous livre un rapport classé Critique / Majeur / Mineur, avec captures annotées. Vous savez exactement quoi corriger en premier et ce qui peut attendre. Pas un dump de tickets.
- **3 · Je sécurise :** Sur les parcours qui comptent, j'automatise des tests E2E stables (Playwright / Cypress) et je verrouille votre CI : si un test critique casse, le merge est bloqué. La régression n'atteint plus la prod.
- **4 · Je transmets :** Tests documentés, conventions claires, intégration Jira / Slack : vos devs reprennent la main quand ils le veulent. Vous repartez avec un actif, pas une dépendance.

### Section 6 — SERVICES + PRIX « à partir de »
*Présence/ordre :* ServicesPreview unifié absorbant SnapshotTeaser et AutomationBridge. 3 tiers lisibles, prix HT, mini-guide de choix.

- **Eyebrow :** Services & tarifs
- **H2 :** Commencez petit, montez en garantie quand vous en avez besoin.
- **Lead :** Une porte d'entrée à faible engagement, puis deux paliers selon votre cadence. Tous les prix sont en HT. Quel service pour quel besoin : un doute ponctuel → Ponctuel · des parcours à verrouiller → Automation E2E · une cadence à tenir → Garde mensuelle.

**Carte 1 — Porte d'entrée · Ponctuel — Test manuel & audit · à partir de 350 € HT**
Un QA senior teste vos parcours critiques à la main et vous livre un rapport de bugs priorisé sous 72h. Idéal pour valider avant une release, auditer un site en prod ou débloquer un sujet précis. Sans setup, sans engagement.
- Rapport PDF priorisé (Critique / Majeur / Mineur) sous 72h
- Captures annotées sur chaque bug critique et majeur
- Matrice de couverture pages × devices × navigateurs
- Débrief 30 min optionnel pour prioriser les corrections

**Carte 2 — Verrouiller · Automation E2E · à partir de 1 200 € HT**
Je stabilise vos tests flaky ou je monte une suite E2E propre (Playwright / Cypress) sur vos parcours critiques, puis je verrouille votre CI. Les régressions sont attrapées avant le merge, pas en production.
- Stabilisation de tests flaky : de instables à fiables
- Framework E2E + premiers tests critiques maintenables
- Quality gates CI/CD (GitHub Actions, GitLab CI)
- Documentation de reprise pour vos devs

**Carte 3 — Tenir la cadence · Garde mensuelle · à partir de 1 100 € HT/mois**
Un QA senior dédié à votre cadence de release : nouveaux tests, maintenance, support CI/CD et reporting qualité chaque mois. De 5 jours/mois à un QA dédié à temps plein, sans recrutement.
- Forfaits Starter / Growth / Pro selon votre cadence
- Nouveaux E2E + maintenance des tests existants
- Support des pipelines CI/CD
- Reporting qualité mensuel, sans engagement (résiliable au mois)

### Section 7 — PREUVE / RÉSULTATS
*Présence/ordre :* remplace le bloc Testimonials placeholder. **Section masquée tant qu'aucun verbatim ou résultat réel n'est disponible.** Dès qu'un cas existe, afficher 1-2 résultats anonymisés chiffrés (ex. « suite E2E passée de 18 % à 2 % de flaky en 5 jours », « audit livré en 72h, 3 bugs critiques interceptés avant prod »).
*Règle stricte : ne JAMAIS réafficher de fausses citations ou de cartes « en cours de validation ».*

### Section 8 — FAQ + CTA FINAL
*Présence/ordre :* FAQ allégée pour lever les objections, puis CTA orienté bénéfice client.

**FAQ — H2 :** Les questions que se posent les CTO avant de me confier leurs tests

- **Vous allez m'imposer un framework de test ou une stack front ?**
  Non. Je suis framework-agnostique : je m'intègre à votre stack front (React, Vue, Angular, Next, Svelte…), je ne l'impose pas. Côté tests E2E, je travaille surtout en Playwright et Cypress, et je m'adapte à ce que votre équipe peut maintenir ensuite.
- **Avez-vous besoin d'un accès à notre code source ?**
  Pas nécessairement. Pour un test manuel ou un audit produit, un accès staging (ou prod avec un compte dédié) suffit. Pour l'automation et le travail sur la CI, un accès au repo devient utile — toujours en lecture limitée et sous NDA si vous le souhaitez.
- **Comment garantissez-vous la confidentialité ?**
  NDA possible avant tout démarrage, accès limités au strict nécessaire, principe du moindre privilège et aucun partage de vos données. Je travaille avec des produits sensibles (santé, marques premium) : la confidentialité fait partie du métier.
- **Vos tests sont-ils repris par notre équipe ou je reste dépendant ?**
  Repris. Conventions, sélecteurs, fixtures et documentation sont pensés pour que vos devs s'approprient la suite. L'objectif est de vous laisser un actif maintenable, pas de créer une dépendance à vie.
- **Comment se passe la collaboration à distance depuis Madagascar ?**
  Je suis en UTC+3, soit un large recouvrement avec les heures de bureau européennes (France, Belgique, Suisse). Francophone natif, points hebdomadaires, backlog transparent et livrables visibles dans vos outils (Jira, Slack, Linear).
- **Sans engagement, ça veut dire quoi exactement ?**
  Les missions ponctuelles se règlent à la mission, sans suite obligatoire. Les forfaits mensuels sont résiliables au mois. Vous testez la collaboration sur un petit périmètre avant d'aller plus loin — vous ne vous engagez jamais à l'aveugle.
- **Comment choisir entre ponctuel, automation et garde mensuelle ?**
  Ponctuel pour un doute précis ou une validation avant release. Automation E2E quand vous avez des parcours critiques à verrouiller durablement (ou des tests flaky à stabiliser). Garde mensuelle quand vous livrez en continu et voulez un QA senior à votre cadence sans recruter.

**CTA FINAL**
- **Eyebrow :** Avant votre prochaine release
- **H2 :** Faites tester vos parcours critiques avant que vos clients ne le fassent à votre place.
- **Lead :** Décrivez votre besoin en quelques lignes : je reviens vers vous sous 24h avec un périmètre clair et un prix HT. Premier diagnostic possible dès 350 € HT, livré sous 72h.
- **CTA primaire :** Demander un devis
- **CTA secondaire :** Voir un exemple de rapport

---

## 5. Stack technique — Ce qui change

**Décision transverse :** corriger les **deux sources** (`Stack.astro:9-14` ET `site.ts:59-69`) **simultanément**, plus la page À propos, et fournir les deux locales FR/EN (règle i18n du projet). Déplacer la section Stack vers la page Services ou À propos — elle n'a pas sa place sur la home.

### Ce qui part (avec explication)
| Élément | Pourquoi |
|---------|----------|
| **Angular** | Techno frontend du client, pas un outil QA. Fait croire que le service est limité à Angular et inquiète tout prospect React/Vue/Next/Svelte. |
| **RxJS** | Librairie réactive de l'app cliente, aucune fonction QA. Détail d'implémentation interne d'un client. |
| **NgRx** | Gestion d'état Angular côté client. Encore plus niche : signale qu'on raisonne en dev Angular, pas en QA agnostique. |
| **Catégorie « Terrain front » / « Frontend terrain »** | Vide une fois Angular/RxJS/NgRx retirés (il ne reste que TypeScript, à migrer en automation). |
| **Console fictive « Release gate »** (auth-flow.spec / checkout-risk.map / ci-blockers) | Décorative, sans correspondance réelle, contredit le titre « pas pour décorer une stack ». À remplacer par un vrai extrait de rapport de tests ou de job CI. |
| **Pill « AI-assisted QA » vague** | Buzzword non outillé qui fragilise la crédibilité senior. À concrétiser (voir ci-dessous). |

### Ce qui reste
- **Cypress**, **Playwright**
- **TypeScript** — repositionné comme **langage des tests E2E** (pas comme techno front)
- **GitHub Actions**, **GitLab CI**
- Les 3 stats : **5+ ans**, **-40 à -50 % d'économie**, **UTC+3** — mais en remonter au moins une above-the-fold

### Ce qui arrive (avec justification)
- **Phrase de cadrage framework-agnostique** : « Je m'intègre à votre stack front (React, Vue, Angular, Next, Svelte…), je ne l'impose pas. » → transforme l'objection Angular en argument de flexibilité.
- **API & contract testing** (Postman/Bruno, supertest/REST-assured, Pact) → un QA senior 2026 teste les APIs, pas seulement l'UI.
- **Test data & environnements** (fixtures/factories, mocking MSW/WireMock, seed) → prouve la capacité à stabiliser durablement les flaky, cœur de l'offre.
- **Reporting & observabilité** (Allure, rapports Playwright HTML, intégration Jira/Slack) → matérialise la promesse « transmettre/REPORT ».
- **Visual / regression testing** (Playwright snapshots, Percy/Applitools) → répond au problème « régressions trop tardives ».
- **Perf/charge** (k6, Lighthouse CI) et **accessibilité** (axe-core) en couche avancée/optionnelle → différenciateur senior.
- **« AI-assisted QA » concrétisé** : génération/maintenance de tests, triage de flaky, exploration assistée.

### Nouvelles catégories (4)
- **Automation E2E & UI :** Playwright · Cypress · TypeScript (langage des tests E2E) · Visual regression (Playwright snapshots / Percy)
- **API & intégration :** Postman / Bruno · Contract testing (Pact) · Mocking & test data (MSW, fixtures)
- **CI/CD & quality gates :** GitHub Actions · GitLab CI · Tests bloquants / quality gates
- **Reporting & signal :** Allure / rapports Playwright HTML · Intégration Jira / Slack · AI-assisted QA (triage de flaky, maintenance de tests)

**Copy de section :**
- **Eyebrow :** Stack technique
- **H2 :** Les outils QA qui font le travail — pas pour décorer une stack.
- **Lead :** Framework-agnostique : je m'intègre à votre stack front (React, Vue, Angular, Next, Svelte…), je ne l'impose pas. Voici les outils que j'utilise réellement pour tester, automatiser et verrouiller vos releases.

---

## 6. Page À propos — Contenu révisé

### Changements clés
- **Solo assumé partout :** Arsenal Guard = Johny Fetramalala. Remplacer tout « nous/nos équipes » par « je ».
- **Madagascar transformé en avantage** (section dédiée argumentée), pas en objection.
- **Condenser :** « Pourquoi Arsenal Guard » et « Nos valeurs » se chevauchaient → fusionnés en 4 cartes uniques.
- **Vérifier/corriger le lien LinkedIn** codé en dur (`PageRenderer.astro:544`, `/in/johny-qa`) — un 404 sur la seule page de présentation du fondateur détruit sa crédibilité.

### Copy complet
- **Eyebrow :** À propos
- **Titre :** Un seul QA senior, entièrement responsable de votre qualité.
- **Lead :** Arsenal Guard, c'est moi : Johny Fetramalala, QA Engineer senior. Pas une agence, pas un pool de juniors offshore — un interlocuteur unique qui teste vos parcours, automatise ce qui compte et reste responsable du résultat de bout en bout.
- **Mission :** Ma mission est simple : permettre aux équipes produit européennes de livrer vite sans jouer leur réputation à chaque release. Je remplace l'angoisse du « est-ce que ça va casser en prod ? » par un signal clair sur ce qui marche, ce qui casse et ce qu'il faut corriger en premier — au prix d'un freelance européen divisé par deux.

**4 cartes « Pourquoi » :**
- **Un interlocuteur, pas un ticket dans une file :** Vous parlez directement à la personne qui teste votre produit. Pas de chef de projet intermédiaire, pas de relais qui dilue le contexte. Je connais votre produit et je reste responsable du résultat.
- **Expertise senior, tarif offshore assumé :** 5+ ans à tester des produits utilisés par Chanel, Sodexo et des SaaS européens. La même qualité qu'un QA senior européen, pour 40 à 50 % de moins — parce que je suis basé à Madagascar, pas parce que je fais moins bien.
- **Je vous laisse un actif, pas une dépendance :** Tests documentés, conventions claires, transmission à vos devs. L'objectif n'est jamais de vous rendre captif, mais de renforcer durablement votre capacité à livrer sans régression.
- **Sobre, lisible, sans bruit :** Un rapport priorisé plutôt qu'un dump de tickets. Un signal clair plutôt que du reporting cosmétique. Vous ne payez pas pour de l'activité, vous payez pour des décisions plus sûres.

**Section « Pourquoi un QA basé à Madagascar, c'est un avantage pour vous »**
Lead : L'offshore n'est pas un compromis ici, c'est un levier. Voici pourquoi la distance ne joue jamais contre vous.
- **Fuseau horaire aligné (UTC+3) :** Un large recouvrement avec les heures de bureau européennes. Vos questions du matin trouvent une réponse dans la journée, pas le lendemain.
- **Francophone natif :** Pas de barrière de langue, pas de malentendu sur un brief. Les échanges, rapports et débriefs se font dans un français clair et précis.
- **40 à 50 % d'économie vs staffing local :** Le coût de la vie à Madagascar permet un tarif divisé par deux face à un QA freelance européen, sans rogner sur la séniorité ni la qualité du livrable.
- **Formé à un standard international :** Master en informatique (ENI Fianarantsoa) et 5+ ans sur des produits à fort enjeu : les standards de test sont ceux attendus par une scale-up européenne, pas un niveau « low-cost ».

**Bio fondateur :** Je m'appelle Johny Fetramalala, QA Engineer senior basé à Antananarivo, Madagascar. Diplômé d'un Master en informatique de l'ENI Fianarantsoa, j'ai passé 5+ ans à sécuriser les releases de produits exigeants — des plateformes utilisées par Chanel et Sodexo aux SaaS européens comme Hexaglobe, Ecomundo et Les Aligneurs Français. J'ai créé Arsenal Guard pour offrir aux équipes produit ce qui m'a toujours semblé manquer côté client : un QA senior accessible, francophone et entièrement responsable, sans le coût ni le délai d'un recrutement. Quand vous travaillez avec Arsenal Guard, vous travaillez avec moi — du premier test au dernier rapport.

**CTA final :** Discutons de votre prochaine release.

---

## 7. Page Services — Contenu révisé

### Changements clés
- **Tous les prix en HT, un seul prix par service**, cohérent entre brief / `site.ts` / ledger.
- **Créer les pages services manquantes** présentes dans le ledger (`site.ts:262-264`) mais sans page dédiée : **Flaky Test Stabilization** et **CI/CD + Blocking Tests Setup** — désormais regroupées sous le tier « Automation E2E ».
- **Ancre `#tarifs`** sur la grille tarifaire (ciblée par la nav).
- **Titres de sections en langage clair** (supprimer « Reconnaître le terrain avant d'engager la suite », « Transformer le risque confirmé en garde-fou durable »).
- **Réducteurs de friction** affichés près des prix : « Sans engagement · Réponse sous 24h · NDA possible ».

### Copy complet
- **Titre Hero :** Du test manuel ponctuel au QA dédié, un seul partenaire pour sécuriser vos releases.
- **Lead Hero :** Commencez par un diagnostic à faible engagement dès 350 € HT, puis montez en garantie quand votre cadence l'exige. Tous les prix sont en HT, un seul prix par service, sans surprise.
- **Intro :** Un test manuel ponctuel pour auditer, valider ou sécuriser une livraison. Des interventions courtes — stabilisation de tests flaky, setup E2E, mise en place d'une CI bloquante — pour débloquer une situation précise. Des forfaits mensuels pour les équipes qui livrent en continu. Et un QA dédié quand la qualité devient un pilier de votre produit.

*(La grille de services/tiers et leur copy détaillé reprennent les 3 cartes de la Section 6 de la homepage : Ponctuel 350 € HT, Automation E2E 1 200 € HT, Garde mensuelle 1 100 € HT/mois — déclinés ici avec le détail complet des forfaits Starter / Growth / Pro et les pages dédiées Flaky Stabilization et CI/CD Setup.)*

---

## 8. Priorité d'implémentation

### P0 — Bloquants de confiance et de transaction (à faire immédiatement)
1. **Repasser 100 % des prix en HT** (`site.ts` lignes 81, 120-122, 140, 173, 206, 244, 261-275 ; `ServicesPreview.astro:39`). Aligner sur le brief. Stabiliser un seul prix par service.
2. **Supprimer les faux témoignages** (`Testimonials.astro`) et **retirer l'onglet Réalisations** de la nav. Masquer la section Preuve tant qu'aucun résultat réel n'existe.
3. **Vérifier/corriger le lien LinkedIn** (`PageRenderer.astro:544`).

### P1 — Positionnement & message d'entrée (impact conversion direct)
4. **Réécrire/brancher le Hero** (H1 bénéfice + offre d'appel 72h + CTA faible engagement + trust line + réducteurs de risque).
5. **Remonter le proof strip** (350 € HT, -40 à -50 %, 5+ ans, UTC+3) juste sous le Hero + logos contextualisés.
6. **Nettoyer la Stack** : retirer Angular/RxJS/NgRx des deux sources + À propos, ajouter la phrase framework-agnostique, restructurer en 4 catégories.
7. **Définir l'offre d'appel unique** et créer les pages services manquantes (Flaky Stabilization, CI/CD Setup).

### P2 — Structure & clarté de la home
8. **Fusionner les 4 sections redondantes** (MissionMap, QualityLayer, HowItWorks, ValueProps) en 1 section Méthode ; absorber SnapshotTeaser + AutomationBridge dans Services. Passer de 14 à 8 sections.
9. **Ajouter la section Personas** (Pour qui) et le **mini-guide « quel service pour quel besoin »**.
10. **Ajouter l'onglet Tarifs** + ancre `#tarifs` ; fusionner Contact dans le CTA/footer.
11. **Désarmer le jargon militaire** dans tous les titres H2, libellés de nav, services et CTA (conserver l'accent visuel radar uniquement).
12. **Réviser la page À propos** (solo assumé, section Madagascar, condensation).

### P3 — Réassurance & finition
13. **Brancher un vrai booking** (Calendly/Cal.com) pour le CTA secondaire « appel 15 min ».
14. **Publier un exemple de rapport** anonymisé (CTA secondaire « Voir un exemple de rapport »).
15. **Réducteurs de friction** (« Sans engagement · Réponse sous 24h · NDA possible ») à côté de chaque CTA et près des prix.
16. **Inverser le copy vers le « vous »** sur l'ensemble des pages restantes.
17. **Réintégrer la section Preuve / Réalisations** dès qu'1-2 vrais résultats chiffrés sont disponibles (avec accord NDA).

---

*Document directement utilisable pour l'implémentation. Tous les libellés de prix sont en HT. Règle i18n : fournir chaque chaîne en FR et EN, et corriger les sources dupliquées (`Stack.astro` + `site.ts`) simultanément.*