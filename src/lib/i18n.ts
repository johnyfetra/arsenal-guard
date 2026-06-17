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
		home: "Arsenal Guard — Test manuel & audit QA à la demande, sans engagement",
		services: "Services QA — test manuel, audit, automatisation E2E",
		about: "À propos d'Arsenal Guard — QA senior à la demande depuis Madagascar",
		cases: "Réalisations QA",
		blog: "Blog QA — tests, automatisation et qualité logicielle",
		quote: "Demander un devis QA — réponse sous 24h",
		contact: "Contact Arsenal Guard",
		legal: "Mentions légales",
		privacy: "Politique de confidentialité",
	},
	en: {
		home: "Arsenal Guard — Manual testing & QA audit on demand, no commitment",
		services: "QA services — manual testing, audit, E2E automation",
		about: "About Arsenal Guard — Senior QA on demand from Madagascar",
		cases: "QA case studies",
		blog: "QA blog — testing, automation and software quality",
		quote: "Request a QA quote — reply within 24h",
		contact: "Contact Arsenal Guard",
		legal: "Legal notice",
		privacy: "Privacy policy",
	},
};

export const copy = {
	fr: {
		nav: {
			services: 'Services',
			about: 'À propos',
			cases: 'Réalisations',
			blog: 'Blog',
			contact: 'Contact',
			quote: 'Demander un devis',
		},
		hero: {
			badge: 'Test manuel · Rapport sous 72h · Sans engagement',
			title: 'Vos bugs détectés avant vos utilisateurs.',
			accent: 'Rapport priorisé livré sous 72h.',
			subtitle:
				"Toutes les entreprises n'ont pas besoin d'un QA à temps plein. Parfois, il suffit d'un regard externe ciblé — audit, tests manuels, couverture des parcours critiques — pour sécuriser une livraison sans recruter.",
			primary: 'Demander un audit',
			secondary: 'Voir les formules',
			trust: "5+ ans d'expérience · Chanel, Sodexo et SaaS européens · Dès 350 € HT · Sans engagement",
		},
		sections: {
			value: 'Un QA à la demande, sans recrutement',
			how: 'Une intervention courte qui apporte une vraie valeur',
			stack: 'Stack QA moderne, framework-agnostique',
			pricing: 'Formules test manuel',
			faq: 'Questions fréquentes',
			cta: 'Faites tester vos parcours critiques.',
			ctaLead:
				'Décrivez votre besoin en quelques lignes. Je reviens vers vous sous 24h avec un périmètre clair et un prix HT.',
		},
		descriptions: {
			home: "Arsenal Guard — test manuel, audit QA et automatisation E2E à la demande, sans engagement. Rapport priorisé sous 72h. Dès 350 € HT.",
			services:
				"Test manuel ponctuel, audit QA, automatisation E2E et forfaits mensuels — un QA senior à la demande pour les équipes qui veulent livrer sans recruter.",
			about:
				"Arsenal Guard, c'est Johny Fetramalala, QA Engineer senior basé à Madagascar. 5+ ans d'expérience, francophone natif, 40-50 % moins cher qu'un QA européen, disponible à la demande.",
			cases: "Les réalisations Arsenal Guard seront publiées après validation client.",
			blog: "Guides concrets pour mieux piloter la qualité logicielle, les tests E2E et l'automatisation QA.",
			quote: "Décrivez votre besoin QA et recevez une proposition sous 24h ouvrées.",
			contact: "Contactez Arsenal Guard pour un audit QA, un test manuel ou une mission d'automatisation.",
			legal: "Mentions légales et informations éditeur du site Arsenal Guard.",
			privacy: "Politique de confidentialité et traitement des données de contact.",
		},
	},
	en: {
		nav: {
			services: 'Services',
			about: 'About',
			cases: 'Work',
			blog: 'Blog',
			contact: 'Contact',
			quote: 'Request a quote',
		},
		hero: {
			badge: 'Manual testing · Report in 72h · No commitment',
			title: 'Your bugs caught before your users do.',
			accent: 'Prioritized report delivered in 72h.',
			subtitle:
				"Not every company needs a full-time QA engineer. Sometimes a targeted external review — audit, manual testing, critical journey coverage — is all it takes to ship safely without hiring.",
			primary: 'Request an audit',
			secondary: 'See the plans',
			trust: '5+ years experience · Chanel, Sodexo and European SaaS · From €350 excl. VAT · No commitment',
		},
		sections: {
			value: 'QA on demand, no hiring required',
			how: 'A short intervention that delivers real value',
			stack: 'Modern QA stack, framework-agnostic',
			pricing: 'Manual test plans',
			faq: 'FAQ',
			cta: 'Get your critical journeys tested.',
			ctaLead: 'Describe your need in a few lines. I get back to you within 24h with a clear scope and a price.',
		},
		descriptions: {
			home: 'Arsenal Guard — manual testing, QA audit and E2E automation on demand, no commitment. Prioritized report in 72h. From €350 excl. VAT.',
			services:
				'One-off manual testing, QA audit, E2E automation and monthly retainers — a senior QA on demand for teams that want to ship without hiring.',
			about:
				'Arsenal Guard is Johny Fetramalala, a senior QA Engineer based in Madagascar. 5+ years experience, native French speaker, 40-50% less than a European QA, available on demand.',
			cases: 'Arsenal Guard case studies will be published after client approval.',
			blog: 'Practical guides for better software quality, E2E tests and QA automation.',
			quote: 'Describe your QA needs and receive a proposal within one business day.',
			contact: 'Contact Arsenal Guard for a QA audit, manual testing or an automation mission.',
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
	snapshot: 'services/test-manuel-ponctuel',
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
