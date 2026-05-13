export const languages = ['fr', 'en', 'es', 'de', 'it'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
	fr: 'Francais',
	en: 'English',
	es: 'Espanol',
	de: 'Deutsch',
	it: 'Italiano',
};

export const languageFlags: Record<Lang, string> = {
	fr: 'FR',
	en: 'EN',
	es: 'ES',
	de: 'DE',
	it: 'IT',
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
		home: 'QA freelance senior pour livraisons fiables',
		services: 'Services QA freelance Cypress et Playwright',
		about: 'A propos de Johny Fetramalala',
		cases: 'Realisations QA',
		blog: 'Blog QA automation',
		quote: 'Demander un devis QA',
		contact: 'Contact Arsenal Guard',
		legal: 'Mentions legales',
		privacy: 'Politique de confidentialite',
	},
	en: {
		home: 'Senior freelance QA for reliable releases',
		services: 'Freelance QA services with Cypress and Playwright',
		about: 'About Johny Fetramalala',
		cases: 'QA case studies',
		blog: 'QA automation blog',
		quote: 'Request a QA quote',
		contact: 'Contact Arsenal Guard',
		legal: 'Legal notice',
		privacy: 'Privacy policy',
	},
	es: {
		home: 'QA freelance senior para entregas fiables',
		services: 'Servicios QA freelance con Cypress y Playwright',
		about: 'Sobre Johny Fetramalala',
		cases: 'Casos QA',
		blog: 'Blog de automatizacion QA',
		quote: 'Solicitar presupuesto QA',
		contact: 'Contacto Arsenal Guard',
		legal: 'Aviso legal',
		privacy: 'Politica de privacidad',
	},
	de: {
		home: 'Senior Freelance QA fur verlassliche Releases',
		services: 'Freelance QA Services mit Cypress und Playwright',
		about: 'Uber Johny Fetramalala',
		cases: 'QA Referenzen',
		blog: 'QA Automation Blog',
		quote: 'QA Angebot anfragen',
		contact: 'Kontakt Arsenal Guard',
		legal: 'Impressum',
		privacy: 'Datenschutzerklarung',
	},
	it: {
		home: 'QA freelance senior per release affidabili',
		services: 'Servizi QA freelance con Cypress e Playwright',
		about: 'Chi e Johny Fetramalala',
		cases: 'Case study QA',
		blog: 'Blog QA automation',
		quote: 'Richiedere un preventivo QA',
		contact: 'Contatto Arsenal Guard',
		legal: 'Note legali',
		privacy: 'Privacy policy',
	},
};

export const copy = {
	fr: {
		nav: { services: 'Services', about: 'A propos', cases: 'Realisations', blog: 'Blog', contact: 'Contact', quote: 'Demander un devis' },
		hero: {
			badge: 'Senior QA Engineer · Madagascar based · EU-focused',
			title: 'QA Engineer Senior',
			accent: 'qui fiabilise vos livraisons.',
			subtitle: 'Tests automatises robustes, integration CI/CD, et expertise francophone a cout offshore. Securisez vos releases sans ralentir votre rythme.',
			primary: 'Demander un devis',
			secondary: 'Voir les services',
			trust: 'Approche eprouvee chez Chanel, Sodexo et plateformes SaaS europeennes',
		},
		sections: {
			value: 'Qualite logicielle, sans bruit inutile',
			how: 'Une collaboration claire en quatre temps',
			stack: 'Stack moderne, choix techniques pragmatiques',
			pricing: 'Forfaits mensuels',
			faq: 'Questions frequentes',
			cta: 'Securisez vos prochaines livraisons.',
		},
		descriptions: {
			home: 'Arsenal Guard aide les CTOs et equipes produit a automatiser les tests critiques avec Cypress, Playwright et CI/CD.',
			services: 'Audits, automatisation E2E, stabilisation de tests flaky, forfaits mensuels et QA dedie pour equipes europeennes.',
			about: 'Parcours, valeurs et expertise de Johny Fetramalala, fondateur d Arsenal Guard.',
			cases: 'Les realisations Arsenal Guard seront publiees apres validation client.',
			blog: 'Guides concrets pour mieux piloter la qualite logicielle, les tests E2E et l automatisation QA.',
			quote: 'Decrivez votre besoin QA et recevez une proposition sous 24h ouvrees.',
			contact: 'Contactez Arsenal Guard pour un audit, un forfait QA mensuel ou une mission dediee.',
			legal: 'Mentions legales et informations editeur du site Arsenal Guard.',
			privacy: 'Politique de confidentialite et traitement des donnees de contact.',
		},
	},
	en: {
		nav: { services: 'Services', about: 'About', cases: 'Work', blog: 'Blog', contact: 'Contact', quote: 'Request a quote' },
		hero: {
			badge: 'Senior QA Engineer · Madagascar based · EU-focused',
			title: 'Senior QA Engineer',
			accent: 'for reliable releases.',
			subtitle: 'Robust automated tests, CI/CD integration, and French-speaking offshore expertise. Secure your releases without slowing your team down.',
			primary: 'Request a quote',
			secondary: 'View services',
			trust: 'Proven approach on Chanel, Sodexo and European SaaS platforms',
		},
		sections: { value: 'Software quality without theatre', how: 'A clear four-step collaboration', stack: 'Modern stack, pragmatic choices', pricing: 'Monthly plans', faq: 'FAQ', cta: 'Secure your next releases.' },
		descriptions: {
			home: 'Arsenal Guard helps CTOs and product teams automate critical testing with Cypress, Playwright and CI/CD.',
			services: 'Audits, E2E automation, flaky test stabilization, monthly retainers and dedicated QA for European teams.',
			about: 'Background, values and expertise of Johny Fetramalala, founder of Arsenal Guard.',
			cases: 'Arsenal Guard case studies will be published after client approval.',
			blog: 'Practical guides for better software quality, E2E tests and QA automation.',
			quote: 'Describe your QA needs and receive a proposal within one business day.',
			contact: 'Contact Arsenal Guard for an audit, a monthly QA plan or a dedicated mission.',
			legal: 'Legal notice and publisher information for Arsenal Guard.',
			privacy: 'Privacy policy and contact data processing information.',
		},
	},
	es: {
		nav: { services: 'Servicios', about: 'Acerca de', cases: 'Casos', blog: 'Blog', contact: 'Contacto', quote: 'Solicitar presupuesto' },
		hero: {
			badge: 'Senior QA Engineer · Madagascar based · EU-focused',
			title: 'QA Engineer Senior',
			accent: 'para entregas fiables.',
			subtitle: 'Tests automatizados robustos, CI/CD y experiencia francofona offshore. Proteja sus releases sin frenar al equipo.',
			primary: 'Solicitar presupuesto',
			secondary: 'Ver servicios',
			trust: 'Enfoque probado en Chanel, Sodexo y plataformas SaaS europeas',
		},
		sections: { value: 'Calidad sin ruido innecesario', how: 'Colaboracion clara en cuatro pasos', stack: 'Stack moderno, decisiones pragmaticas', pricing: 'Planes mensuales', faq: 'FAQ', cta: 'Asegure sus proximas entregas.' },
		descriptions: {
			home: 'Arsenal Guard ayuda a CTOs y equipos producto a automatizar pruebas criticas con Cypress, Playwright y CI/CD.',
			services: 'Auditorias, automatizacion E2E, estabilizacion de tests flaky, planes mensuales y QA dedicado.',
			about: 'Trayectoria, valores y experiencia de Johny Fetramalala, fundador de Arsenal Guard.',
			cases: 'Los casos de Arsenal Guard se publicaran tras validacion del cliente.',
			blog: 'Guias practicas sobre calidad de software, E2E y automatizacion QA.',
			quote: 'Describa su necesidad QA y reciba una propuesta en 24h laborables.',
			contact: 'Contacte Arsenal Guard para auditoria, plan mensual o QA dedicado.',
			legal: 'Aviso legal e informacion del editor de Arsenal Guard.',
			privacy: 'Politica de privacidad y tratamiento de datos de contacto.',
		},
	},
	de: {
		nav: { services: 'Services', about: 'Uber uns', cases: 'Referenzen', blog: 'Blog', contact: 'Kontakt', quote: 'Angebot anfragen' },
		hero: {
			badge: 'Senior QA Engineer · Madagascar based · EU-focused',
			title: 'Senior QA Engineer',
			accent: 'fur verlassliche Releases.',
			subtitle: 'Robuste automatisierte Tests, CI/CD Integration und frankophone Offshore Expertise. Sichern Sie Releases ohne Tempoverlust.',
			primary: 'Angebot anfragen',
			secondary: 'Services ansehen',
			trust: 'Bewahrter Ansatz bei Chanel, Sodexo und europaischen SaaS Plattformen',
		},
		sections: { value: 'Softwarequalitat ohne Theater', how: 'Klare Zusammenarbeit in vier Schritten', stack: 'Moderner Stack, pragmatische Entscheidungen', pricing: 'Monatliche Pakete', faq: 'FAQ', cta: 'Sichern Sie Ihre nachsten Releases.' },
		descriptions: {
			home: 'Arsenal Guard hilft CTOs und Produktteams, kritische Tests mit Cypress, Playwright und CI/CD zu automatisieren.',
			services: 'Audits, E2E Automatisierung, Stabilisierung flaky Tests, Retainer und Dedicated QA.',
			about: 'Werdegang, Werte und Expertise von Johny Fetramalala, Grunder von Arsenal Guard.',
			cases: 'Arsenal Guard Referenzen werden nach Kundenfreigabe veroffentlicht.',
			blog: 'Praxisleitfaden fur Softwarequalitat, E2E Tests und QA Automatisierung.',
			quote: 'Beschreiben Sie Ihren QA Bedarf und erhalten Sie innerhalb eines Werktags ein Angebot.',
			contact: 'Kontaktieren Sie Arsenal Guard fur Audit, Retainer oder Dedicated QA.',
			legal: 'Impressum und Anbieterinformationen fur Arsenal Guard.',
			privacy: 'Datenschutzerklarung und Verarbeitung von Kontaktdaten.',
		},
	},
	it: {
		nav: { services: 'Servizi', about: 'Chi siamo', cases: 'Progetti', blog: 'Blog', contact: 'Contatto', quote: 'Richiedi preventivo' },
		hero: {
			badge: 'Senior QA Engineer · Madagascar based · EU-focused',
			title: 'QA Engineer Senior',
			accent: 'per release affidabili.',
			subtitle: 'Test automatizzati robusti, integrazione CI/CD ed esperienza francofona offshore. Proteggete le release senza rallentare.',
			primary: 'Richiedi preventivo',
			secondary: 'Vedi servizi',
			trust: 'Approccio provato con Chanel, Sodexo e piattaforme SaaS europee',
		},
		sections: { value: 'Qualita software senza rumore', how: 'Collaborazione chiara in quattro passi', stack: 'Stack moderno, scelte pragmatiche', pricing: 'Piani mensili', faq: 'FAQ', cta: 'Rendete sicure le prossime release.' },
		descriptions: {
			home: 'Arsenal Guard aiuta CTO e team prodotto ad automatizzare test critici con Cypress, Playwright e CI/CD.',
			services: 'Audit, automazione E2E, stabilizzazione test flaky, piani mensili e QA dedicato.',
			about: 'Percorso, valori ed esperienza di Johny Fetramalala, fondatore di Arsenal Guard.',
			cases: 'I case study Arsenal Guard saranno pubblicati dopo approvazione cliente.',
			blog: 'Guide pratiche su qualita software, E2E e automazione QA.',
			quote: 'Descrivete il bisogno QA e ricevete una proposta entro un giorno lavorativo.',
			contact: 'Contattate Arsenal Guard per audit, piano mensile o QA dedicato.',
			legal: 'Note legali e informazioni editoriali di Arsenal Guard.',
			privacy: 'Privacy policy e trattamento dei dati di contatto.',
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
