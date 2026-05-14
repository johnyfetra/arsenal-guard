export const languages = ['fr', 'en'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
	fr: 'Français',
	en: 'English',
};

export const languageFlags: Record<Lang, string> = {
	fr: '🇫🇷',
	en: '🇬🇧',
};

export const defaultLang: Lang = 'fr';

export function langPrefix(lang: Lang) {
	return lang === defaultLang ? '' : `/${lang}`;
}

export function localizedPath(lang: Lang, path = '/') {
	const normalized = path === '/' ? '' : `/${path.replace(/^\/|\/$/g, '')}`;
	return `${langPrefix(lang)}${normalized || '/'}`.replace(/\/$/, '') || '/';
}

export function detectLangFromSlug(slug?: string): { lang: Lang; path: string } {
	const parts = (slug ?? '').split('/').filter(Boolean);
	const maybeLang = parts[0] as Lang | undefined;
	if (maybeLang && languages.includes(maybeLang)) {
		return { lang: maybeLang, path: parts.slice(1).join('/') };
	}
	return { lang: defaultLang, path: parts.join('/') };
}

type CopyShape = {
	nav: Record<string, string>;
	hero: Record<string, string>;
	sections: Record<string, string>;
	descriptions: Record<string, string>;
};

const pageTitles: Record<Lang, Record<string, string>> = {
	fr: {
		home: 'Arsenal Guard — Service QA premium pour livraisons logicielles fiables',
		services: 'Services QA premium Cypress et Playwright',
		about: 'À propos d’Arsenal Guard — Notre mission qualité',
		cases: 'Réalisations QA',
		blog: 'Blog QA automation',
		quote: 'Demander un devis QA',
		contact: 'Contact Arsenal Guard',
		legal: 'Mentions légales',
		privacy: 'Politique de confidentialité',
	},
	en: {
		home: 'Arsenal Guard — Premium QA service for reliable software releases',
		services: 'Premium QA services with Cypress and Playwright',
		about: 'About Arsenal Guard — Our quality mission',
		cases: 'QA case studies',
		blog: 'QA automation blog',
		quote: 'Request a QA quote',
		contact: 'Contact Arsenal Guard',
		legal: 'Legal notice',
		privacy: 'Privacy policy',
	},
};

export const copy = {
	fr: {
		nav: { services: 'Services', about: 'À propos', cases: 'Réalisations', blog: 'Blog', contact: 'Contact', quote: 'Demander un devis' },
		hero: {
			badge: 'Service QA premium · Équipe francophone/anglophone',
			title: 'Arsenal Guard sécurise',
			accent: 'vos livraisons logicielles.',
			subtitle: 'Tests automatisés, intégration CI/CD et expertise QA dédiée. Nous fiabilisons vos releases sans ralentir vos équipes.',
			primary: 'Demander un devis',
			secondary: 'Voir les services',
			trust: 'Notre approche a fait ses preuves sur des produits utilisés par Chanel, Sodexo et des plateformes SaaS européennes',
		},
		sections: {
			value: 'Qualité logicielle, sans bruit inutile',
			how: 'Une collaboration claire en quatre temps',
			stack: 'Stack moderne, choix techniques pragmatiques',
			pricing: 'Forfaits mensuels',
			faq: 'Questions fréquentes',
			cta: 'Sécurisez vos prochaines livraisons.',
			ctaLead: 'Discutons de votre projet en 15 minutes et identifions les tests qui réduisent vraiment votre risque release.',
		},
		descriptions: {
			home: 'Arsenal Guard est un service de QA dédié pour startups et scale-ups européennes. Tests automatisés Cypress et Playwright, CI/CD, et expertise francophone offshore. Sécurisez vos prochaines releases.',
			services: 'Audits, automatisation E2E, stabilisation de tests flaky, forfaits mensuels et QA dédiée pour équipes européennes.',
			about: 'Découvrez Arsenal Guard, service de QA premium dédié aux scale-ups européennes. Notre mission, nos valeurs et l’équipe qui sécurise vos livraisons logicielles.',
			cases: 'Les réalisations Arsenal Guard seront publiées après validation client.',
			blog: 'Guides concrets pour mieux piloter la qualité logicielle, les tests E2E et l’automatisation QA.',
			quote: 'Décrivez votre besoin QA et recevez une proposition sous 24h ouvrées.',
			contact: 'Contactez Arsenal Guard pour un audit, un forfait QA mensuel ou une mission dédiée.',
			legal: 'Mentions légales et informations éditeur du site Arsenal Guard.',
			privacy: 'Politique de confidentialité et traitement des données de contact.',
		},
	},
	en: {
		nav: { services: 'Services', about: 'About', cases: 'Work', blog: 'Blog', contact: 'Contact', quote: 'Request a quote' },
		hero: {
			badge: 'Premium QA service · French-speaking team · European clients',
			title: 'Arsenal Guard secures',
			accent: 'your software releases.',
			subtitle: 'Automated tests, CI/CD integration and dedicated QA expertise. We make your releases reliable without slowing your teams down.',
			primary: 'Request a quote',
			secondary: 'View services',
			trust: 'Our approach has proven itself on products used by Chanel, Sodexo and European SaaS platforms',
		},
		sections: {
			value: 'Software quality without theatre',
			how: 'A clear four-step collaboration',
			stack: 'Modern stack, pragmatic choices',
			pricing: 'Monthly plans',
			faq: 'FAQ',
			cta: 'Secure your next releases.',
			ctaLead: 'Let’s discuss your project in 15 minutes and identify the tests that truly reduce release risk.',
		},
		descriptions: {
			home: 'Arsenal Guard helps CTOs and product teams automate critical testing with Cypress, Playwright and CI/CD.',
			services: 'Audits, E2E automation, flaky test stabilization, monthly retainers and dedicated QA for European teams.',
			about: 'Discover Arsenal Guard, a premium QA service for European scale-ups. Our mission, values and the team securing your software releases.',
			cases: 'Arsenal Guard case studies will be published after client approval.',
			blog: 'Practical guides for better software quality, E2E tests and QA automation.',
			quote: 'Describe your QA needs and receive a proposal within one business day.',
			contact: 'Contact Arsenal Guard for an audit, a monthly QA plan or a dedicated mission.',
			legal: 'Legal notice and publisher information for Arsenal Guard.',
			privacy: 'Privacy policy and contact data processing information.',
		},
	},
} satisfies Record<Lang, CopyShape>;

export function getPageTitle(lang: Lang, key: keyof (typeof pageTitles)['fr']) {
	return pageTitles[lang][key];
}

export const routeMap = {
	home: '',
	services: 'services',
	audit: 'services/audit-qa',
	automation: 'services/tests-automatises',
	retainer: 'services/forfait-mensuel',
	dedicated: 'services/qa-dedie',
	about: 'a-propos',
	cases: 'realisations',
	blog: 'blog',
	quote: 'demander-un-devis',
	contact: 'contact',
	legal: 'mentions-legales',
	privacy: 'politique-confidentialite',
} as const;
