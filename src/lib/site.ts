import type { Lang } from './i18n';

export interface Tier {
	label: string;
	price: string;
	featured?: boolean;
}

export interface Service {
	id: string;
	title: string;
	kicker: string;
	description: string;
	perks?: string[];
	duration: string;
	price: string;
	for: string;
	deliverables: string[];
	process: string[];
	faq: [string, string][];
	featuredOnHome?: boolean;
	tiers?: Tier[];
	nextStep?: { serviceId: string; label: Record<string, string> };
}

export const site = {
	name: 'Arsenal Guard',
	tagline: 'QA à la demande pour équipes qui livrent sans vouloir recruter un testeur à temps plein',
	url: 'https://arsenalguard.com',
	email: 'contact@arsenalguard.com',
	founder: 'Johny Fetramalala',
	location: 'Antananarivo, Madagascar',
};

export const valueProps = [
	{
		icon: 'FileSearch',
		title: 'Un rapport clair, pas un dump de tickets',
		text: 'Chaque bug est documenté, priorisé et illustré. Pas de bruit — juste ce qui bloque vraiment.',
	},
	{
		icon: 'Zap',
		title: 'Aucun setup, aucun outil à apprendre',
		text: "Vous partagez un accès staging. On s'occupe du reste. Livraison sous 48 à 72h ouvrées.",
	},
	{
		icon: 'Eye',
		title: 'Le regard tiers que votre équipe ne peut pas avoir',
		text: 'Un testeur externe voit ce que la familiarité masque : parcours brisés, incohérences UX, anomalies critiques.',
	},
];

export const steps = [
	'Cadrage en 15 minutes — brief, périmètre, tier confirmé',
	'Test manuel structuré — parcours réels, documentation en temps réel',
	'Rapport priorisé sous 72h — PDF structuré avec captures annotées et recommandations',
	'Suivi selon votre besoin — débrief optionnel 30 min + prochaine étape si pertinente',
];

export const stack = [
	'Playwright',
	'Cypress',
	'TypeScript',
	'GitHub Actions',
	'GitLab CI',
	'Postman',
	'axe-core',
	'AI-assisted QA',
];

export const clientRefs = ['Chanel', 'Sodexo', 'Hexaglobe', 'Ecomundo', 'Les Aligneurs Francais'];

export const services: Service[] = [
	{
		id: 'test-manuel-ponctuel',
		title: 'QA Snapshot',
		kicker: 'Tests manuels',
		description:
			'Un testeur humain parcourt vos pages et documente chaque anomalie — sans prérequis technique, livré sous 48 à 72 heures.',
		duration: '1 à 5 jours selon le tier',
		price: 'À partir de 350 €',
		for: "Pour toute équipe ou organisation qui veut un regard externe sur son produit web : audit d'un site en production, validation avant une release, test d'un parcours ciblé, ou partenaire QA ponctuel à appeler quand le besoin se présente. Sans setup. Sans engagement.",
		deliverables: [
			'Rapport de bugs structuré PDF (Critique / Majeur / Mineur / Cosmétique)',
			"Captures d'écran annotées pour chaque bug Critique et Majeur",
			'Matrice de couverture — pages × devices × browsers',
			'Recommandations UX quick wins',
			'Synthèse exécutive + roadmap de fix priorisée (tier Complet uniquement)',
		],
		process: [
			'Cadrage (J0) — brief, accès staging, définition du périmètre',
			'Préparation (J1) — rédaction de la checklist de couverture',
			'Exécution (J1–Jn) — tests exploratoires et scénarisés, documentation en temps réel',
			'Rapport (Jn) — livraison PDF avec captures annotées',
			'Débrief (Jn+1, optionnel) — appel 30 min pour prioriser les corrections',
		],
		faq: [
			[
				"Quelle différence avec l'Express QA Audit ?",
				"L'Express QA Audit est un diagnostic stratégique : il cartographie votre couverture de test et priorise ce qu'il faut automatiser. Le QA Snapshot est une exécution opérationnelle : un testeur humain parcourt vos pages et documente les anomalies réelles. Les deux sont complémentaires.",
			],
			[
				"Avez-vous besoin d'accès au code source ?",
				"Non. Un accès à votre environnement de test (staging, préprod ou production avec compte dédié) suffit. Le code source n'est jamais requis.",
			],
			[
				'Que se passe-t-il si le périmètre dépasse le tier choisi ?',
				"Un devis d'avenant est soumis avant de continuer. Aucune heure supplémentaire n'est facturée sans votre validation explicite.",
			],
			[
				'Les bugs sont-ils créés directement dans notre outil (Jira, Linear…) ?',
				'Par défaut, le rapport est livré en PDF. Sur demande, les bugs peuvent être créés dans votre outil de ticketing (Jira, Linear, GitHub Issues) — inclus sans surcoût pour les tiers Standard et Complet.',
			],
			[
				'Ce service couvre-t-il les applications mobiles ?',
				"Oui, via émulateur navigateur (responsive) ou sur device physique si vous fournissez un accès. Les tiers restent basés sur le nombre d'écrans testés.",
			],
		],
		tiers: [
			{ label: '3–4 pages testées · ~1,5 jour', price: '350 €', featured: false },
			{ label: '5–7 pages testées · ~2,5 jours', price: '550 €', featured: true },
			{ label: "Jusqu'à 20 pages · ~5 jours", price: '950 €', featured: false },
		],
		nextStep: {
			serviceId: 'tests-automatises',
			label: {
				fr: 'Automatisez les parcours critiques identifiés lors du test manuel',
				en: 'Automate the critical journeys identified during the manual test',
			},
		},
		featuredOnHome: false,
	},
	{
		id: 'audit-qa',
		title: 'Express QA Audit',
		kicker: 'Audit ponctuel',
		description:
			'Audit rapide de votre plateforme: parcours critiques, couverture actuelle et recommandations actionnables.',
		duration: '3 jours',
		price: '600 €',
		for: 'CTO ou lead dev qui veut une photographie fiable du risque produit avant une release.',
		deliverables: [
			'Cartographie des parcours critiques',
			'Revue des tests existants',
			'Backlog priorisé',
			'Restitution claire avec quick wins',
		],
		process: [
			'Kickoff technique de 45 minutes',
			'Exploration produit et code',
			'Analyse couverture et risques',
			'Rapport de priorisation',
		],
		faq: [
			[
				'Faut-il donner accès au code ?',
				'Idéalement oui pour évaluer la maintenabilité, mais un audit produit peut démarrer avec un accès staging.',
			],
			[
				'Le rapport est-il actionnable ?',
				'Oui: chaque recommandation est liée à un risque, un effort estimé et une priorité.',
			],
		],
		featuredOnHome: true,
	},
	{
		id: 'tests-automatises',
		title: 'Framework tests opérationnel en 7 jours',
		kicker: 'Socle E2E',
		description:
			'Cypress ou Playwright configuré, documenté, intégré CI. Conventions d\'équipe et 3 tests critiques inclus.',
		perks: ['Framework Cypress ou Playwright', 'Conventions et docs d\'équipe', '3 tests critiques livrés'],
		duration: '7 jours',
		price: '1 600 €',
		for: "Équipe qui veut démarrer proprement l'automatisation sans créer une suite fragile.",
		deliverables: [
			'Architecture Cypress ou Playwright',
			'3 tests E2E critiques',
			'Fixtures et patterns maintenables',
			'Documentation de reprise',
		],
		process: [
			'Choix outil selon contexte',
			'Installation et conventions',
			'Implémentation des scénarios',
			'Passage de relais équipe',
		],
		faq: [
			[
				'Cypress ou Playwright ?',
				'Le choix dépend du produit, de la CI, des navigateurs cibles et des compétences internes.',
			],
			[
				'Les tests seront-ils repris par notre équipe ?',
				'Oui, la structure et la documentation sont conçues pour être appropriées par vos devs.',
			],
		],
		featuredOnHome: true,
	},
	{
		id: 'forfait-mensuel',
		title: 'QA continu sans engagement',
		kicker: 'Garde mensuelle',
		description:
			'Tests, maintenance CI/CD et reporting qualité chaque mois. Volume flexible, zéro engagement long terme.',
		perks: ['Nouveaux tests chaque sprint', 'Maintenance pipeline CI/CD', 'Rapport qualité mensuel'],
		duration: '5 à 15 jours/mois',
		price: 'Dès 1 100 €/mois',
		for: 'Startup ou SaaS qui livre souvent et veut un QA senior sans recrutement temps plein.',
		deliverables: [
			'3 à 5 nouveaux E2E par mois',
			'Maintenance tests existants',
			'Support pipelines CI/CD',
			'Reporting qualité mensuel',
		],
		process: ['Plan mensuel', 'Implémentation cadencée', 'Stabilisation continue', 'Bilan et priorités suivantes'],
		faq: [
			['Peut-on arrêter chaque mois ?', 'Oui, les forfaits sont sans engagement et annulables mensuellement.'],
			[
				'Comment choisir Starter, Growth ou Pro ?',
				'Le volume dépend de votre cadence release, dette QA et nombre de parcours critiques.',
			],
		],
		featuredOnHome: true,
	},
	{
		id: 'qa-dedie',
		title: 'Un QA intégré à votre équipe',
		kicker: 'QA Dédié',
		description: 'Un QA embarqué au quotidien dans votre squad. Leadership qualité, supervision lead en option.',
		perks: ['Intégration équipe complète', 'Option supervision QA lead', 'Engagement 3 mois minimum'],
		duration: '20 jours/mois',
		price: '3 800 €/mois',
		for: "Équipe scale-up qui a besoin d'un vrai ownership QA sur plusieurs sprints.",
		deliverables: [
			'QA intégré à vos rituels',
			'Stratégie de test durable',
			'Automation et manuel ciblé',
			'Reporting risques release',
		],
		process: ['Onboarding produit', 'Définition stratégie', 'Exécution sprint par sprint', 'Amélioration continue'],
		faq: [
			[
				'Quel fuseau horaire ?',
				"Madagascar permet un recouvrement confortable avec l'Europe, notamment France, Belgique et Suisse.",
			],
			['Y a-t-il une supervision ?', 'Oui, une option Senior QA + Lead supervision est disponible à 4 500 €/mois.'],
		],
	},
];

export type PunctualRow = [string, string, string] | { name: string; duration: string; tiers: [string, string][] };

export const punctualOffers: PunctualRow[] = [
	{
		name: 'QA Snapshot',
		duration: '1 à 5 jours',
		tiers: [
			['3–4 pages', '350 €'],
			['5–7 pages ⭐', '550 €'],
			["Jusqu'à 20 pages", '950 €'],
		],
	},
	['Express QA Audit', '3 jours', '600 €'],
	['Flaky Test Stabilization', '5-6 jours', '1 200 €'],
	['E2E Framework Setup + 3 tests', '7 jours', '1 600 €'],
	['CI/CD + Blocking Tests Setup', '8 jours', '1 800 €'],
];

export const plans = [
	{ name: 'Starter', volume: '5 jours/mois', price: '1 100 €/mois', featured: false },
	{ name: 'Growth', volume: '10 jours/mois', price: '2 000 €/mois', featured: true },
	{ name: 'Pro', volume: '15 jours/mois', price: '2 850 €/mois', featured: false },
];

export const dedicated = [
	['Dedicated Senior QA', '20 jours/mois', '3 800 €/mois'],
	['Senior QA + Lead supervision', '20 jours/mois', '4 500 €/mois'],
];

export const faq = [
	[
		`Avez-vous besoin d'accès au code source ?`,
		`Non. Pour un test manuel ou un audit, un accès à votre environnement staging (ou une URL de production avec un compte dédié) suffit. L'accès au code devient utile uniquement pour la mise en place de tests automatisés.`,
	],
	[
		`Vous allez m'imposer un framework front ou une techno particulière ?`,
		`Pas du tout. Je suis framework-agnostique : je m'intègre à votre stack existante (React, Vue, Angular, Next, Svelte…). Côté tests automatisés, je travaille en Playwright et Cypress — les deux sont maintenables par vos devs.`,
	],
	[
		`Combien de temps pour démarrer ?`,
		`Un test manuel peut démarrer dès le lendemain du cadrage. Il suffit de partager un accès staging et de définir les parcours à couvrir. Pas de setup, pas d'onboarding long.`,
	],
	[
		`Que contient exactement le rapport livré ?`,
		`Un rapport PDF structuré avec chaque bug classé Critique / Majeur / Mineur / Cosmétique, des captures annotées sur chaque bug critique, une matrice de couverture, et un plan d'action priorisé avec estimation. Vous savez exactement quoi corriger en premier et pourquoi.`,
	],
	[
		`Comment garantissez-vous la confidentialité ?`,
		`NDA possible avant tout démarrage, accès limités au strict nécessaire, principe du moindre privilège et aucun partage de vos données. Je travaille régulièrement sur des produits sensibles (santé, marques premium) : la confidentialité fait partie du métier.`,
	],
	[
		`Les tests automatisés seront-ils repris par notre équipe ?`,
		`C'est l'objectif. Les conventions, sélecteurs, fixtures et documentation sont pensés pour que vos devs s'approprient la suite sans dépendance. Vous repartez avec un actif maintenable, pas une boîte noire.`,
	],
	[
		`Comment fonctionne la collaboration à distance depuis Madagascar ?`,
		`Je suis en UTC+3, soit un large recouvrement avec les heures de bureau européennes. Francophone natif, points hebdomadaires, backlog transparent et livrables visibles dans vos outils (Jira, Slack, Linear).`,
	],
	[
		`Quelle est la différence entre le test manuel et l'audit QA ?`,
		`Le test manuel ponctuel, c'est un testeur humain qui parcourt vos pages et documente les anomalies réelles. L'audit QA est un diagnostic stratégique : il cartographie votre couverture actuelle et priorise ce qu'il faudrait automatiser. Les deux sont complémentaires — l'audit sert souvent de point de départ avant d'aller plus loin.`,
	],
];

export const localizedServiceIntro: Record<Lang, { label: string; sub: string }[]> = {
	fr: [
		{ label: 'Audit de release', sub: 'Vérifiez la qualité avant chaque mise en production.' },
		{ label: 'Mission de déblocage', sub: 'Résolvez un point bloquant critique en quelques jours.' },
		{ label: 'Forfait QA mensuel', sub: 'Livrez chaque sprint avec une couverture QA continue.' },
		{ label: 'Ingénieur QA dédié', sub: 'Un QA intégré à votre équipe pour les projets exigeants.' },
	],
	en: [
		{ label: 'Targeted release audit', sub: 'Spot quality issues before your next deployment goes live.' },
		{ label: 'Fast unblock sprint', sub: 'Resolve a critical blocker in days, not weeks.' },
		{ label: 'Monthly QA retainer', sub: 'Ship every sprint backed by continuous QA coverage.' },
		{ label: 'Dedicated QA engineer', sub: 'A QA engineer embedded within your product team.' },
	],
};
