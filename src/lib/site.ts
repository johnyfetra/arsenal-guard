import type { Lang } from './i18n';

export const site = {
	name: 'Arsenal Guard',
	tagline: 'Qualite. Automatisation. Impact.',
	url: 'https://arsenalguard.com',
	email: 'contact@arsenalguard.com',
	founder: 'Johny Fetramalala',
	location: 'Antananarivo, Madagascar',
};

export const valueProps = [
	{ icon: 'ShieldCheck', title: 'Qualite fiabilisee', text: 'Moins de bugs. Plus de confiance sur chaque livraison critique.' },
	{ icon: 'Workflow', title: 'Tests automatises', text: 'E2E fiables et scalables avec Cypress, Playwright et CI/CD.' },
	{ icon: 'TrendingUp', title: 'Impact business', text: 'ROI, efficacite et cadence de livraison mieux securisee.' },
];

export const steps = [
	'Audit eclair et cartographie des risques',
	'Setup framework et integration CI/CD',
	'Tests E2E sur parcours critiques',
	'Run mensuel: nouveaux scenarios et maintenance',
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
		deliverables: ['Cartographie des parcours critiques', 'Revue des tests existants', 'Backlog priorise', 'Restitution claire avec quick wins'],
		process: ['Kickoff technique de 45 minutes', 'Exploration produit et code', 'Analyse couverture et risques', 'Rapport de priorisation'],
		faq: [
			['Faut-il donner acces au code ?', 'Idealement oui pour evaluer la maintenabilite, mais un audit produit peut demarrer avec un acces staging.'],
			['Le rapport est-il actionnable ?', 'Oui: chaque recommandation est liee a un risque, un effort estime et une priorite.'],
		],
	},
	{
		id: 'tests-automatises',
		title: 'E2E Framework Setup + 3 tests',
		kicker: 'Automatisation',
		description: 'Bootstrap Cypress ou Playwright avec les premiers tests critiques, conventions et documentation equipe.',
		duration: '7 jours',
		price: '1 600 EUR HT',
		for: 'Equipe qui veut demarrer proprement l automatisation sans creer une suite fragile.',
		deliverables: ['Architecture Cypress ou Playwright', '3 tests E2E critiques', 'Fixtures et patterns maintenables', 'Documentation de reprise'],
		process: ['Choix outil selon contexte', 'Installation et conventions', 'Implementation des scenarios', 'Passage de relais equipe'],
		faq: [
			['Cypress ou Playwright ?', 'Le choix depend du produit, de la CI, des navigateurs cibles et des competences internes.'],
			['Les tests seront-ils repris par mon equipe ?', 'Oui, la structure et la documentation sont concues pour etre appropriees par vos devs.'],
		],
	},
	{
		id: 'forfait-mensuel',
		title: 'Forfait QA mensuel',
		kicker: 'Run QA',
		description: 'Service QA recurrent sans engagement long: nouveaux tests, maintenance, support CI/CD et reporting qualite.',
		duration: '5 a 15 jours/mois',
		price: 'A partir de 1 100 EUR HT/mois',
		for: 'Startup ou SaaS qui livre souvent et veut un QA senior sans recrutement temps plein.',
		deliverables: ['3 a 5 nouveaux E2E par mois', 'Maintenance tests existants', 'Support pipelines CI/CD', 'Reporting qualite mensuel'],
		process: ['Plan mensuel', 'Implementation cadencee', 'Stabilisation continue', 'Bilan et priorites suivantes'],
		faq: [
			['Peut-on arreter chaque mois ?', 'Oui, les forfaits sont sans engagement et annulables mensuellement.'],
			['Comment choisir Starter, Growth ou Pro ?', 'Le volume depend de votre cadence release, dette QA et nombre de parcours critiques.'],
		],
	},
	{
		id: 'qa-dedie',
		title: 'Dedicated Senior QA',
		kicker: 'Engagement dedie',
		description: 'Un QA senior dedie a votre equipe pour les besoins soutenus, avec option supervision lead.',
		duration: '20 jours/mois, minimum 3 mois',
		price: '3 800 EUR HT/mois',
		for: 'Equipe scale-up qui a besoin d un vrai ownership QA sur plusieurs sprints.',
		deliverables: ['QA senior integre a vos rituels', 'Strategie de test durable', 'Automation et manuel cible', 'Reporting risques release'],
		process: ['Onboarding produit', 'Definition strategie', 'Execution sprint par sprint', 'Amelioration continue'],
		faq: [
			['Quel fuseau horaire ?', 'Madagascar permet un recouvrement confortable avec l Europe, notamment France, Belgique et Suisse.'],
			['Y a-t-il une supervision ?', 'Oui, une option Senior QA + Lead supervision est disponible a 4 500 EUR HT/mois.'],
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
	['Pourquoi un QA freelance plutot qu un recrutement ?', 'Vous obtenez un impact rapide, une expertise senior et une flexibilite budgetaire sans cycle de recrutement long.'],
	['Comment se passe la collaboration a distance avec Madagascar ?', 'Avec un recouvrement Europe confortable, des points hebdomadaires, un backlog transparent et des livrables visibles dans vos outils.'],
	['Quel est le delai de mise en place ?', 'Un audit peut demarrer en quelques jours. Un forfait mensuel demande generalement une semaine d onboarding.'],
	['Vos tests sont-ils maintenables ?', 'Oui. Les conventions, selectors, fixtures et rapports sont penses pour etre repris par vos developpeurs.'],
	['Comment garantir la confidentialite ?', 'NDA possible, acces limites, principe du moindre privilege et aucun partage de donnees client.'],
	['Quelles sont vos modalites de paiement ?', 'Facturation HT, virement bancaire, acompte possible sur les missions ponctuelles.'],
	['Travaillez-vous avec des startups pre-amorcage ?', 'Oui si le perimetre est clair: audit, MVP critique ou mise en place E2E legere.'],
	['Comment choisir ponctuel ou forfait ?', 'Ponctuel pour debloquer un sujet cible. Forfait pour accompagner une cadence de livraison continue.'],
];

export const localizedServiceIntro: Record<Lang, string> = {
	fr: 'Des interventions courtes pour debloquer, des forfaits mensuels pour tenir la cadence, et du QA dedie quand la qualite devient un pilier produit.',
	en: 'Short missions to unblock, monthly retainers to keep pace, and dedicated QA when quality becomes a product pillar.',
	es: 'Misiones cortas para desbloquear, planes mensuales para sostener el ritmo y QA dedicado cuando la calidad es clave.',
	de: 'Kurze Einsatze zum Entblocken, monatliche Retainer fur Tempo und Dedicated QA, wenn Qualitat produktkritisch wird.',
	it: 'Missioni brevi per sbloccare, piani mensili per mantenere ritmo e QA dedicato quando la qualita diventa centrale.',
};
