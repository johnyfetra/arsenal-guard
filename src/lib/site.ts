import type { Lang } from './i18n';

export const site = {
	name: 'Arsenal Guard',
	tagline: 'Service QA premium pour produits SaaS européens',
	url: 'https://arsenalguard.com',
	email: 'contact@arsenalguard.com',
	founder: 'Johny Fetramalala',
	location: 'Antananarivo, Madagascar',
};

export const valueProps = [
	{ icon: 'ShieldCheck', title: 'Qualité fiabilisée', text: 'Moins de bugs. Plus de confiance sur chaque livraison critique.' },
	{ icon: 'Workflow', title: 'Tests automatisés', text: 'E2E fiables et scalables avec Cypress, Playwright et CI/CD.' },
	{ icon: 'TrendingUp', title: 'Impact business', text: 'ROI, efficacité et cadence de livraison mieux sécurisée.' },
];

export const steps = [
	'Audit éclair et cartographie des risques',
	'Setup framework et intégration CI/CD',
	'Tests E2E sur parcours critiques',
	'Run mensuel: nouveaux scénarios et maintenance',
];

export const stack = ['Cypress', 'Playwright', 'TypeScript', 'Angular', 'RxJS', 'NgRx', 'GitLab CI', 'GitHub Actions', 'AI-assisted QA'];

export const clientRefs = ['Chanel', 'Sodexo', 'Hexaglobe', 'Ecomundo', 'Les Aligneurs Francais'];

export const services = [
	{
		id: 'audit-qa',
		title: 'Express QA Audit',
		kicker: 'Audit ponctuel',
		description: 'Audit rapide de votre plateforme: parcours critiques, couverture actuelle et recommandations actionnables.',
		duration: '3 jours',
		price: '600 EUR HT',
		for: 'CTO ou lead dev qui veut une photographie fiable du risque produit avant une release.',
		deliverables: ['Cartographie des parcours critiques', 'Revue des tests existants', 'Backlog priorisé', 'Restitution claire avec quick wins'],
		process: ['Kickoff technique de 45 minutes', 'Exploration produit et code', 'Analyse couverture et risques', 'Rapport de priorisation'],
		faq: [
			['Faut-il donner accès au code ?', 'Idéalement oui pour évaluer la maintenabilité, mais un audit produit peut démarrer avec un accès staging.'],
			['Le rapport est-il actionnable ?', 'Oui: chaque recommandation est liée à un risque, un effort estimé et une priorité.'],
		],
	},
	{
		id: 'tests-automatises',
		title: 'E2E Framework Setup + 3 tests',
		kicker: 'Automatisation',
		description: 'Bootstrap Cypress ou Playwright avec les premiers tests critiques, conventions et documentation équipe.',
		duration: '7 jours',
		price: '1 600 EUR HT',
		for: 'Équipe qui veut démarrer proprement l’automatisation sans créer une suite fragile.',
		deliverables: ['Architecture Cypress ou Playwright', '3 tests E2E critiques', 'Fixtures et patterns maintenables', 'Documentation de reprise'],
		process: ['Choix outil selon contexte', 'Installation et conventions', 'Implémentation des scénarios', 'Passage de relais équipe'],
		faq: [
			['Cypress ou Playwright ?', 'Le choix dépend du produit, de la CI, des navigateurs cibles et des compétences internes.'],
			['Les tests seront-ils repris par notre équipe ?', 'Oui, la structure et la documentation sont conçues pour être appropriées par vos devs.'],
		],
	},
	{
		id: 'forfait-mensuel',
		title: 'Forfait QA mensuel',
		kicker: 'Run QA',
		description: 'Service QA récurrent sans engagement long: nouveaux tests, maintenance, support CI/CD et reporting qualité.',
		duration: '5 à 15 jours/mois',
		price: 'A partir de 1 100 EUR HT/mois',
		for: 'Startup ou SaaS qui livre souvent et veut un QA senior sans recrutement temps plein.',
		deliverables: ['3 à 5 nouveaux E2E par mois', 'Maintenance tests existants', 'Support pipelines CI/CD', 'Reporting qualité mensuel'],
		process: ['Plan mensuel', 'Implémentation cadencée', 'Stabilisation continue', 'Bilan et priorités suivantes'],
		faq: [
			['Peut-on arrêter chaque mois ?', 'Oui, les forfaits sont sans engagement et annulables mensuellement.'],
			['Comment choisir Starter, Growth ou Pro ?', 'Le volume dépend de votre cadence release, dette QA et nombre de parcours critiques.'],
		],
	},
	{
		id: 'qa-dedie',
		title: 'Dedicated Senior QA',
		kicker: 'Engagement dédié',
		description: 'Un QA senior dédié à votre équipe pour les besoins soutenus, avec option supervision lead.',
		duration: '20 jours/mois, minimum 3 mois',
		price: '3 800 EUR HT/mois',
		for: 'Équipe scale-up qui a besoin d’un vrai ownership QA sur plusieurs sprints.',
		deliverables: ['QA senior intégré à vos rituels', 'Stratégie de test durable', 'Automation et manuel ciblé', 'Reporting risques release'],
		process: ['Onboarding produit', 'Définition stratégie', 'Exécution sprint par sprint', 'Amélioration continue'],
		faq: [
			['Quel fuseau horaire ?', 'Madagascar permet un recouvrement confortable avec l’Europe, notamment France, Belgique et Suisse.'],
			['Y a-t-il une supervision ?', 'Oui, une option Senior QA + Lead supervision est disponible à 4 500 EUR HT/mois.'],
		],
	},
];

export const punctualOffers = [
	['Express QA Audit', '3 jours', '600 EUR HT'],
	['Flaky Test Stabilization', '5-6 jours', '1 200 EUR HT'],
	['E2E Framework Setup + 3 tests', '7 jours', '1 600 EUR HT'],
	['CI/CD + Blocking Tests Setup', '8 jours', '1 800 EUR HT'],
];

export const plans = [
	{ name: 'Starter', volume: '5 jours/mois', price: '1 100 EUR HT/mois', featured: false },
	{ name: 'Growth', volume: '10 jours/mois', price: '2 000 EUR HT/mois', featured: true },
	{ name: 'Pro', volume: '15 jours/mois', price: '2 850 EUR HT/mois', featured: false },
];

export const dedicated = [
	['Dedicated Senior QA', '20 jours/mois', '3 800 EUR HT/mois'],
	['Senior QA + Lead supervision', '20 jours/mois', '4 500 EUR HT/mois'],
];

export const faq = [
	['Pourquoi un service QA plutôt qu’un recrutement ?', 'Vous obtenez un impact rapide, une expertise senior et une flexibilité budgétaire sans cycle de recrutement long.'],
	['Comment se passe la collaboration à distance avec Madagascar ?', 'Avec un recouvrement Europe confortable, des points hebdomadaires, un backlog transparent et des livrables visibles dans vos outils.'],
	['Quel est le délai de mise en place ?', 'Un audit peut démarrer en quelques jours. Un forfait mensuel demande généralement une semaine d’onboarding.'],
	['Vos tests sont-ils maintenables ?', 'Oui. Les conventions, selectors, fixtures et rapports sont pensés pour être repris par vos développeurs.'],
	['Comment garantir la confidentialité ?', 'NDA possible, accès limités, principe du moindre privilège et aucun partage de données client.'],
	['Quelles sont vos modalités de paiement ?', 'Facturation HT, virement bancaire, acompte possible sur les missions ponctuelles.'],
	['Travaillez-vous avec des startups pré-amorçage ?', 'Oui si le périmètre est clair: audit, MVP critique ou mise en place E2E légère.'],
	['Comment choisir ponctuel ou forfait ?', 'Ponctuel pour débloquer un sujet ciblé. Forfait pour accompagner une cadence de livraison continue.'],
];

export const localizedServiceIntro: Record<Lang, string> = {
	fr: 'Des interventions courtes pour débloquer, des forfaits mensuels pour tenir la cadence, et du QA dédié quand la qualité devient un pilier produit.',
	en: 'Short missions to unblock, monthly retainers to keep pace, and dedicated QA when quality becomes a product pillar.',
};
