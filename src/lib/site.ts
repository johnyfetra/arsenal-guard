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
	tagline: 'Release Command QA pour produits SaaS européens',
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
	'Cypress',
	'Playwright',
	'TypeScript',
	'Angular',
	'RxJS',
	'NgRx',
	'GitLab CI',
	'GitHub Actions',
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
		price: 'À partir de 350 € TTC',
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
			{ label: '3–4 pages testées · ~1,5 jour', price: '350 € TTC', featured: false },
			{ label: '5–7 pages testées · ~2,5 jours', price: '550 € TTC', featured: true },
			{ label: "Jusqu'à 20 pages · ~5 jours", price: '950 € TTC', featured: false },
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
		price: '600 € TTC',
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
		title: 'E2E Framework Setup + 3 tests',
		kicker: 'Automatisation',
		description:
			'Bootstrap Cypress ou Playwright avec les premiers tests critiques, conventions et documentation équipe.',
		duration: '7 jours',
		price: '1 600 € TTC',
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
		title: 'Forfait QA mensuel',
		kicker: 'Run QA',
		description:
			'Service QA récurrent sans engagement long: nouveaux tests, maintenance, support CI/CD et reporting qualité.',
		duration: '5 à 15 jours/mois',
		price: 'À partir de 1 100 € TTC/mois',
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
		title: 'Dedicated Senior QA',
		kicker: 'Engagement dédié',
		description: 'Un QA senior dédié à votre équipe pour les besoins soutenus, avec option supervision lead.',
		duration: '20 jours/mois, minimum 3 mois',
		price: '3 800 € TTC/mois',
		for: "Équipe scale-up qui a besoin d'un vrai ownership QA sur plusieurs sprints.",
		deliverables: [
			'QA senior intégré à vos rituels',
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
			['Y a-t-il une supervision ?', 'Oui, une option Senior QA + Lead supervision est disponible à 4 500 € TTC/mois.'],
		],
	},
];

export type PunctualRow = [string, string, string] | { name: string; duration: string; tiers: [string, string][] };

export const punctualOffers: PunctualRow[] = [
	{
		name: 'QA Snapshot',
		duration: '1 à 5 jours',
		tiers: [
			['3–4 pages', '350 € TTC'],
			['5–7 pages ⭐', '550 € TTC'],
			["Jusqu'à 20 pages", '950 € TTC'],
		],
	},
	['Express QA Audit', '3 jours', '600 € TTC'],
	['Flaky Test Stabilization', '5-6 jours', '1 200 € TTC'],
	['E2E Framework Setup + 3 tests', '7 jours', '1 600 € TTC'],
	['CI/CD + Blocking Tests Setup', '8 jours', '1 800 € TTC'],
];

export const plans = [
	{ name: 'Starter', volume: '5 jours/mois', price: '1 100 € TTC/mois', featured: false },
	{ name: 'Growth', volume: '10 jours/mois', price: '2 000 € TTC/mois', featured: true },
	{ name: 'Pro', volume: '15 jours/mois', price: '2 850 € TTC/mois', featured: false },
];

export const dedicated = [
	['Dedicated Senior QA', '20 jours/mois', '3 800 € TTC/mois'],
	['Senior QA + Lead supervision', '20 jours/mois', '4 500 € TTC/mois'],
];

export const faq = [
	[
		'Mon produit est déjà en production. Le QA Snapshot est-il utile pour moi ?',
		"Absolument. Le QA Snapshot est conçu pour tous les produits en ligne — pas seulement pour les lancements. Audit d'un site existant, validation avant une mise à jour critique, regard tiers sur un parcours client : toutes ces situations sont couvertes, quelle que soit la maturité de votre produit.",
	],
	[
		'Je suis développeur ou chef de projet en agence. Puis-je utiliser le Snapshot pour mes livrables clients ?',
		'Oui. Beaucoup de nos clients sont des agences ou des freelances qui veulent livrer avec un rapport de bugs indépendant avant la réception. Le QA Snapshot devient votre assurance qualité externe, sans temps interne à y consacrer.',
	],
	[
		"Pourquoi un service QA plutôt qu'un recrutement ?",
		'Vous obtenez un impact rapide, une expertise senior et une flexibilité budgétaire sans cycle de recrutement long.',
	],
	[
		'Comment se passe la collaboration à distance avec Madagascar ?',
		'Avec un recouvrement Europe confortable, des points hebdomadaires, un backlog transparent et des livrables visibles dans vos outils.',
	],
	[
		'Quel est le délai de mise en place ?',
		"Un audit peut démarrer en quelques jours. Un forfait mensuel demande généralement une semaine d'onboarding.",
	],
	[
		'Vos tests sont-ils maintenables ?',
		'Oui. Les conventions, selectors, fixtures et rapports sont pensés pour être repris par vos développeurs.',
	],
	[
		'Comment garantir la confidentialité ?',
		'NDA possible, accès limités, principe du moindre privilège et aucun partage de données client.',
	],
	[
		'Quelles sont vos modalités de paiement ?',
		'Facturation TTC, virement bancaire, acompte possible sur les missions ponctuelles.',
	],
	[
		'Travaillez-vous avec des startups pré-amorçage ?',
		'Oui si le périmètre est clair: audit, MVP critique ou mise en place E2E légère.',
	],
	[
		'Comment choisir ponctuel ou forfait ?',
		'Ponctuel pour débloquer un sujet ciblé. Forfait pour accompagner une cadence de livraison continue.',
	],
];

export const localizedServiceIntro: Record<Lang, string> = {
	fr: 'Un test manuel ponctuel pour auditer, valider ou sécuriser une livraison — des interventions courtes pour débloquer une situation précise — des forfaits mensuels pour les équipes qui livrent en continu — et du QA dédié quand la qualité devient un pilier produit.',
	en: 'A one-off manual test to audit, validate or secure a delivery — short missions to unblock a specific situation — monthly retainers for teams shipping continuously — and dedicated QA when quality becomes a product pillar.',
};
