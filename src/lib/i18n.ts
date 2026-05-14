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
		home: 'Arsenal Guard — Service QA premium pour livraisons logicielles fiables',
		services: 'Services QA premium Cypress et Playwright',
		about: 'A propos d Arsenal Guard — Notre mission qualite',
		cases: 'Realisations QA',
		blog: 'Blog QA automation',
		quote: 'Demander un devis QA',
		contact: 'Contact Arsenal Guard',
		legal: 'Mentions legales',
		privacy: 'Politique de confidentialite',
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
	es: {
		home: 'Arsenal Guard — Servicio QA premium para entregas fiables',
		services: 'Servicios QA premium con Cypress y Playwright',
		about: 'Sobre Arsenal Guard — Nuestra mision de calidad',
		cases: 'Casos QA',
		blog: 'Blog de automatizacion QA',
		quote: 'Solicitar presupuesto QA',
		contact: 'Contacto Arsenal Guard',
		legal: 'Aviso legal',
		privacy: 'Politica de privacidad',
	},
	de: {
		home: 'Arsenal Guard — Premium QA Service fur verlassliche Releases',
		services: 'Premium QA Services mit Cypress und Playwright',
		about: 'Uber Arsenal Guard — Unsere Qualitatsmission',
		cases: 'QA Referenzen',
		blog: 'QA Automation Blog',
		quote: 'QA Angebot anfragen',
		contact: 'Kontakt Arsenal Guard',
		legal: 'Impressum',
		privacy: 'Datenschutzerklarung',
	},
	it: {
		home: 'Arsenal Guard — Servizio QA premium per release affidabili',
		services: 'Servizi QA premium con Cypress e Playwright',
		about: 'Arsenal Guard — La nostra missione qualita',
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
			badge: 'Service QA premium · Equipe francophone · Clients europeens',
			title: 'Arsenal Guard securise',
			accent: 'vos livraisons logicielles.',
			subtitle: 'Tests automatises, integration CI/CD et expertise QA dediee. Nous fiabilisons vos releases sans ralentir vos equipes.',
			primary: 'Demander un devis',
			secondary: 'Voir les services',
			trust: 'Notre approche a fait ses preuves sur des produits utilises par Chanel, Sodexo et plateformes SaaS europeennes',
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
			home: 'Arsenal Guard est un service de QA dedie pour startups et scale-ups europeennes. Tests automatises Cypress et Playwright, CI/CD, et expertise francophone offshore. Securisez vos prochaines releases.',
			services: 'Audits, automatisation E2E, stabilisation de tests flaky, forfaits mensuels et QA dedie pour equipes europeennes.',
			about: 'Decouvrez Arsenal Guard, service de QA premium dedie aux scale-ups europeennes. Notre mission, nos valeurs, et l equipe qui securise vos livraisons logicielles.',
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
			badge: 'Premium QA service · French-speaking team · European clients',
			title: 'Arsenal Guard secures',
			accent: 'your software releases.',
			subtitle: 'Automated tests, CI/CD integration and dedicated QA expertise. We make your releases reliable without slowing your teams down.',
			primary: 'Request a quote',
			secondary: 'View services',
			trust: 'Our approach has proven itself on products used by Chanel, Sodexo and European SaaS platforms',
		},
		sections: { value: 'Software quality without theatre', how: 'A clear four-step collaboration', stack: 'Modern stack, pragmatic choices', pricing: 'Monthly plans', faq: 'FAQ', cta: 'Secure your next releases.' },
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
	es: {
		nav: { services: 'Servicios', about: 'Acerca de', cases: 'Casos', blog: 'Blog', contact: 'Contacto', quote: 'Solicitar presupuesto' },
		hero: {
			badge: 'Servicio QA premium · Equipo francofono · Clientes europeos',
			title: 'Arsenal Guard protege',
			accent: 'sus entregas de software.',
			subtitle: 'Tests automatizados, integracion CI/CD y experiencia QA dedicada. Hacemos fiables sus releases sin frenar a sus equipos.',
			primary: 'Solicitar presupuesto',
			secondary: 'Ver servicios',
			trust: 'Nuestro enfoque ha demostrado su valor en productos usados por Chanel, Sodexo y plataformas SaaS europeas',
		},
		sections: { value: 'Calidad sin ruido innecesario', how: 'Colaboracion clara en cuatro pasos', stack: 'Stack moderno, decisiones pragmaticas', pricing: 'Planes mensuales', faq: 'FAQ', cta: 'Asegure sus proximas entregas.' },
		descriptions: {
			home: 'Arsenal Guard ayuda a CTOs y equipos producto a automatizar pruebas criticas con Cypress, Playwright y CI/CD.',
			services: 'Auditorias, automatizacion E2E, estabilizacion de tests flaky, planes mensuales y QA dedicado.',
			about: 'Descubra Arsenal Guard, servicio QA premium dedicado a scale-ups europeas. Nuestra mision, valores y equipo.',
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
			badge: 'Premium QA Service · Frankophones Team · Europaische Kunden',
			title: 'Arsenal Guard sichert',
			accent: 'Ihre Software-Releases.',
			subtitle: 'Automatisierte Tests, CI/CD Integration und dedizierte QA Expertise. Wir machen Releases verlasslich, ohne Teams auszubremsen.',
			primary: 'Angebot anfragen',
			secondary: 'Services ansehen',
			trust: 'Unser Ansatz hat sich bei Produkten bewahrt, die von Chanel, Sodexo und europaischen SaaS Plattformen genutzt werden',
		},
		sections: { value: 'Softwarequalitat ohne Theater', how: 'Klare Zusammenarbeit in vier Schritten', stack: 'Moderner Stack, pragmatische Entscheidungen', pricing: 'Monatliche Pakete', faq: 'FAQ', cta: 'Sichern Sie Ihre nachsten Releases.' },
		descriptions: {
			home: 'Arsenal Guard hilft CTOs und Produktteams, kritische Tests mit Cypress, Playwright und CI/CD zu automatisieren.',
			services: 'Audits, E2E Automatisierung, Stabilisierung flaky Tests, Retainer und Dedicated QA.',
			about: 'Entdecken Sie Arsenal Guard, einen Premium-QA-Service fur europaische Scale-ups. Unsere Mission, Werte und unser Team.',
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
			badge: 'Servizio QA premium · Team francofono · Clienti europei',
			title: 'Arsenal Guard protegge',
			accent: 'le vostre release software.',
			subtitle: 'Test automatizzati, integrazione CI/CD ed esperienza QA dedicata. Rendiamo affidabili le release senza rallentare i team.',
			primary: 'Richiedi preventivo',
			secondary: 'Vedi servizi',
			trust: 'Il nostro approccio ha dato prova di valore su prodotti usati da Chanel, Sodexo e piattaforme SaaS europee',
		},
		sections: { value: 'Qualita software senza rumore', how: 'Collaborazione chiara in quattro passi', stack: 'Stack moderno, scelte pragmatiche', pricing: 'Piani mensili', faq: 'FAQ', cta: 'Rendete sicure le prossime release.' },
		descriptions: {
			home: 'Arsenal Guard aiuta CTO e team prodotto ad automatizzare test critici con Cypress, Playwright e CI/CD.',
			services: 'Audit, automazione E2E, stabilizzazione test flaky, piani mensili e QA dedicato.',
			about: 'Scoprite Arsenal Guard, servizio QA premium per scale-up europee. Missione, valori e team.',
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
