export const languages = {
  es: 'ES',
  eu: 'EU',
  en: 'EN',
} as const;

export const languagesLong = {
  es: 'Castellano',
  eu: 'Euskera',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

type Translations = Record<Lang, Record<string, string>>;

export const ui: Translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',

    'hero.available': 'Disponible para nuevos proyectos',
    'hero.title.1': 'Investigo lo social',
    'hero.title.2': 'y',
    'hero.title.3': 'construyo',
    'hero.title.4': 'con IA.',
    'hero.intro': 'Soy sociólogo e investigador social. Fundador de Bercay Studio, donde diseño y desarrollo aplicaciones web con integración de IA. Combino rigor metodológico con capacidad técnica para crear productos en la intersección entre ciencias sociales y tecnología.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Hablemos',
    'hero.stat1.value': 'Máster',
    'hero.stat1.label': 'Investigación en Ciencias Sociales · UPV/EHU',
    'hero.stat2.value': '3',
    'hero.stat2.label': 'productos digitales en Bercay Studio',
    'hero.stat3.value': 'B2',
    'hero.stat3.label': 'euskera · inglés',

    'section.01': 'Sobre mí',
    'section.02': 'Proyectos',
    'section.03': 'Experiencia',
    'section.04': 'Formación',
    'section.05': 'Contacto',

    'about.title': 'Dos lenguajes, una misma curiosidad.',
    'about.description': 'La mirada crítica y analítica de la sociología, unida a la capacidad técnica para construir productos digitales.',
    'about.p1': 'Sociólogo especializado en <strong>investigación social</strong>, con experiencia en metodologías cuantitativas, cualitativas y mixtas.',
    'about.p2': 'Autor del TFM <em>"Análisis del Proyecto de Resignificación y Reconfiguración de los Espacios de la Facultad de Ciencias Sociales y de la Comunicación de la EHU"</em>, realizado en el grupo Innok Lab en colaboración con Campus Bizia Lab.',
    'about.p3': 'En paralelo, diseño y desarrollo <strong>aplicaciones web full-stack</strong> con integración de IA. Fundador de Bercay Studio, la marca bajo la que lanzo productos propios como TÖCA y Mozkor.',

    'projects.title': 'Proyectos realizados',
    'projects.description': 'Productos digitales e investigación social. Desliza horizontalmente y entra en cada proyecto para ver el caso completo.',
    'projects.software': 'Producto digital',
    'projects.research': 'Investigación social',
    'projects.branch': 'Rama',
    'projects.drag': 'Desliza',
    'projects.seeCase': 'Ver caso →',
    'projects.openWeb': 'Abrir web',
    'projects.back': 'Volver a todos los proyectos',
    'projects.role': 'Rol',
    'projects.year': 'Año',
    'projects.stack': 'Stack técnico',
    'projects.methods': 'Metodologías',
    'projects.highlights': 'Highlights',
    'projects.context': 'Contexto',
    'projects.visitExternal': 'Visitar proyecto online',

    'experience.title': 'Experiencia profesional.',
    'experience.description': 'Roles en los que he combinado investigación, análisis de datos y desarrollo de producto.',
    'experience.present': 'Actualidad',

    'education.title': 'Formación y competencias.',
    'education.description': 'Base académica, certificaciones e idiomas.',
    'education.studies': 'Estudios',
    'education.certificates': 'Certificaciones',
    'education.languages': 'Idiomas',
    'education.tools': 'Herramientas',
    'education.volunteering': 'Voluntariado',

    'contact.title': 'Hagamos algo',
    'contact.title2': 'juntos',
    'contact.description': 'Si tienes un proyecto en mente —investigación social, producto con IA o ambos— cuéntamelo. Suelo responder en menos de 24 horas.',
    'contact.email.cta': 'Escríbeme',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Bilbao, España',
    'contact.availability.label': 'Disponibilidad',
    'contact.availability.value': 'Colaboraciones y freelance',
    'contact.languages.label': 'Idiomas',
    'contact.languages.value': 'Castellano · Euskera · Inglés',

    'footer.tagline': 'Investigación social + producto digital con IA.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con Astro y Tailwind.',

    'lang.select': 'Idioma',
  },
  eu: {
    'nav.about': 'Niri buruz',
    'nav.projects': 'Proiektuak',
    'nav.experience': 'Esperientzia',
    'nav.education': 'Formakuntza',
    'nav.contact': 'Kontaktua',
    'nav.cta': 'Hitz egin dezagun',

    'hero.available': 'Proiektu berrietarako prest',
    'hero.title.1': 'Gizartea ikertzen dut',
    'hero.title.2': 'eta',
    'hero.title.3': 'eraikitzen',
    'hero.title.4': 'dut IA-rekin.',
    'hero.intro': 'Soziologoa eta gizarte-ikertzailea naiz. Bercay Studio-ren sortzailea; IA integratuta duten web aplikazioak diseinatu eta garatzen ditut. Zorroztasun metodologikoa eta trebetasun teknikoa uztartzen ditut gizarte-zientzien eta teknologiaren arteko produktuak sortzeko.',
    'hero.cta.projects': 'Ikusi proiektuak',
    'hero.cta.contact': 'Hitz egin dezagun',
    'hero.stat1.value': 'Master',
    'hero.stat1.label': 'Gizarte Zientzietako Ikerketa · UPV/EHU',
    'hero.stat2.value': '3',
    'hero.stat2.label': 'produktu digital Bercay Studio-n',
    'hero.stat3.value': 'B2',
    'hero.stat3.label': 'euskara · ingelesa',

    'section.01': 'Niri buruz',
    'section.02': 'Proiektuak',
    'section.03': 'Esperientzia',
    'section.04': 'Formakuntza',
    'section.05': 'Kontaktua',

    'about.title': 'Bi hizkuntza, jakin-mina bera.',
    'about.description': 'Soziologiaren begirada kritiko eta analitikoa, produktu digitalak eraikitzeko trebetasun teknikoarekin batera.',
    'about.p1': 'Soziologoa, <strong>gizarte-ikerketan</strong> espezializatua, metodologia kuantitatibo, kualitatibo eta mistoetan eskarmentuduna.',
    'about.p2': 'EHUko Gizarte eta Komunikazio Zientzien Fakultateko espazioen berresanguratze eta birkonfigurazio proiektuaren analisia egin nuen Master Amaierako Lanean, Innok Lab ikerketa taldean eta Campus Bizia Lab-ekin elkarlanean.',
    'about.p3': 'Paraleloki, IA integratuta duten <strong>web aplikazio full-stack-ak</strong> diseinatu eta garatzen ditut. Bercay Studio-ren sortzailea naiz; bertatik TÖCA eta Mozkor bezalako produktu propioak plazaratu ditut.',

    'projects.title': 'Egindako proiektuak',
    'projects.description': 'Produktu digitalak eta gizarte-ikerketa. Labaindu horizontalki eta sartu proiektu bakoitzean kasu osoa ikusteko.',
    'projects.software': 'Produktu digitala',
    'projects.research': 'Gizarte-ikerketa',
    'projects.branch': 'Adarra',
    'projects.drag': 'Labaindu',
    'projects.seeCase': 'Ikusi kasua →',
    'projects.openWeb': 'Ireki weba',
    'projects.back': 'Itzuli proiektu guztietara',
    'projects.role': 'Rola',
    'projects.year': 'Urtea',
    'projects.stack': 'Stack teknikoa',
    'projects.methods': 'Metodologiak',
    'projects.highlights': 'Nabarmenak',
    'projects.context': 'Testuingurua',
    'projects.visitExternal': 'Bisitatu proiektua sarean',

    'experience.title': 'Lan esperientzia.',
    'experience.description': 'Ikerketa, datuen analisia eta produktu-garapena uztartu ditudan rolak.',
    'experience.present': 'Gaur egun',

    'education.title': 'Formakuntza eta gaitasunak.',
    'education.description': 'Oinarri akademikoa, ziurtagiriak eta hizkuntzak.',
    'education.studies': 'Ikasketak',
    'education.certificates': 'Ziurtagiriak',
    'education.languages': 'Hizkuntzak',
    'education.tools': 'Tresnak',
    'education.volunteering': 'Boluntariotza',

    'contact.title': 'Egin dezagun',
    'contact.title2': 'elkarrekin',
    'contact.description': 'Buruan proiekturen bat baduzu —gizarte-ikerketa, IAdun produktua edo biak— kontatu iezadazu. 24 ordu baino lehenago erantzuten dut.',
    'contact.email.cta': 'Idatzidazu',
    'contact.location.label': 'Kokalekua',
    'contact.location.value': 'Bilbo, Espainia',
    'contact.availability.label': 'Eskuragarritasuna',
    'contact.availability.value': 'Lankidetzak eta freelance',
    'contact.languages.label': 'Hizkuntzak',
    'contact.languages.value': 'Gaztelania · Euskara · Ingelesa',

    'footer.tagline': 'Gizarte-ikerketa + produktu digitala IA-rekin.',
    'footer.rights': 'Eskubide guztiak erreserbatuta.',
    'footer.madeWith': 'Astro eta Tailwind-ekin egina.',

    'lang.select': 'Hizkuntza',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s talk',

    'hero.available': 'Available for new projects',
    'hero.title.1': 'I research the social',
    'hero.title.2': 'and',
    'hero.title.3': 'build',
    'hero.title.4': 'with AI.',
    'hero.intro': 'I\'m a sociologist and social researcher. Founder of Bercay Studio, where I design and develop full-stack web apps with AI integration. I combine methodological rigor with technical execution to build products at the intersection of social science and technology.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.stat1.value': 'MSc',
    'hero.stat1.label': 'Social Sciences Research · UPV/EHU',
    'hero.stat2.value': '3',
    'hero.stat2.label': 'digital products at Bercay Studio',
    'hero.stat3.value': 'B2',
    'hero.stat3.label': 'Basque · English',

    'section.01': 'About',
    'section.02': 'Projects',
    'section.03': 'Experience',
    'section.04': 'Education',
    'section.05': 'Contact',

    'about.title': 'Two languages, the same curiosity.',
    'about.description': 'The critical and analytical lens of sociology, paired with the technical ability to build digital products.',
    'about.p1': 'Sociologist specialised in <strong>social research</strong>, with experience in quantitative, qualitative and mixed methods.',
    'about.p2': 'Author of the master\'s thesis <em>"Analysis of the Resignification and Reconfiguration Project of the Spaces of the Faculty of Social and Communication Sciences at UPV/EHU"</em>, conducted within Innok Lab research group in collaboration with Campus Bizia Lab.',
    'about.p3': 'In parallel, I design and develop <strong>full-stack web applications</strong> with AI integration. Founder of Bercay Studio, the umbrella brand under which I launch my own products such as TÖCA and Mozkor.',

    'projects.title': 'Selected work',
    'projects.description': 'Digital products and social research. Scroll horizontally and open each project for the full case study.',
    'projects.software': 'Digital product',
    'projects.research': 'Social research',
    'projects.branch': 'Track',
    'projects.drag': 'Swipe',
    'projects.seeCase': 'Open case →',
    'projects.openWeb': 'Open site',
    'projects.back': 'Back to all projects',
    'projects.role': 'Role',
    'projects.year': 'Year',
    'projects.stack': 'Tech stack',
    'projects.methods': 'Methods',
    'projects.highlights': 'Highlights',
    'projects.context': 'Context',
    'projects.visitExternal': 'Visit live project',

    'experience.title': 'Professional experience.',
    'experience.description': 'Roles where I\'ve combined research, data analysis and product development.',
    'experience.present': 'Present',

    'education.title': 'Education and skills.',
    'education.description': 'Academic background, certifications and languages.',
    'education.studies': 'Studies',
    'education.certificates': 'Certifications',
    'education.languages': 'Languages',
    'education.tools': 'Tools',
    'education.volunteering': 'Volunteering',

    'contact.title': 'Let\'s build something',
    'contact.title2': 'together',
    'contact.description': 'If you have a project in mind —social research, AI-powered product, or both— let me know. I usually reply within 24 hours.',
    'contact.email.cta': 'Email me',
    'contact.location.label': 'Location',
    'contact.location.value': 'Bilbao, Spain',
    'contact.availability.label': 'Availability',
    'contact.availability.value': 'Freelance and collaborations',
    'contact.languages.label': 'Languages',
    'contact.languages.value': 'Spanish · Basque · English',

    'footer.tagline': 'Social research + digital product with AI.',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Built with Astro and Tailwind.',

    'lang.select': 'Language',
  },
};

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['es']): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const parts = url.pathname.split('/').filter(Boolean);
  // With base "/Portfolio_aitor", parts[0] is "Portfolio_aitor"
  const candidate = parts[1] ?? parts[0];
  if (candidate && candidate in languages) return candidate as Lang;
  return defaultLang;
}
