export const es = {
  meta: {
    role: 'Sociólogo · Investigador social · Desarrollador de productos digitales',
    tagline:
      'Uno la mirada crítica y analítica de la sociología con la capacidad técnica para construir productos digitales con IA.',
    keywords:
      'sociólogo, investigación social, desarrollo IA, Next.js, Bilbao, portfolio, Aitor Berrocal, Bercay Studio, TÖCA, Mozkor',
  },
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    projects: 'Proyectos',
    experience: 'Experiencia',
    tools: 'Herramientas',
    education: 'Formación',
    contact: 'Contacto',
    cta: 'Hablemos',
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    downloadCv: 'Descargar CV',
  },
  hero: {
    availability: 'Disponible para colaborar',
    titleA: 'Investigo lo social',
    titleB: 'construyo',
    titleC: 'con IA',
    lead: [
      { kind: 'text', value: 'Soy ' },
      { kind: 'name', value: 'Aitor Berrocal Lorda' },
      { kind: 'text', value: '. Sociólogo, investigador social y desarrollador de productos digitales con IA. Combino ' },
      { kind: 'em', value: 'rigor metodológico' },
      { kind: 'text', value: ' con ' },
      { kind: 'em', value: 'velocidad de ejecución' },
      { kind: 'text', value: '.' },
    ],
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Hablemos',
  },
  about: {
    number: '01',
    kicker: 'Sobre mí',
    title: 'Dos lenguajes, una misma curiosidad.',
    description:
      'Un pie en la investigación social y otro en el desarrollo de producto con IA — y me interesa especialmente lo que pasa entre los dos.',
    paragraphs: [
      'Soy **sociólogo especializado en investigación social**, con experiencia en metodologías cuantitativas, cualitativas y mixtas. Autor del TFM sobre la _resignificación de los espacios_ de la Facultad de Ciencias Sociales de la UPV/EHU.',
      'En paralelo, diseño y desarrollo **aplicaciones web full-stack con integración de IA**: TÖCA y Mozkor, bajo la marca propia [Bercay Studio](https://bercay.studio).',
      'Mi trabajo se construye en la intersección entre ciencias sociales y tecnología: mirada crítica + capacidad de ejecución.',
    ],
    cards: [
      { k: 'A', title: 'Investigar', body: 'Diseño metodológico, trabajo de campo, análisis e informes.' },
      { k: 'B', title: 'Analizar', body: 'SPSS, Jamovi, Power BI, QGIS. Cartografías y visualizaciones.' },
      { k: 'C', title: 'Construir', body: 'Next.js, Supabase, Stripe y LLMs (Claude · OpenAI · Gemini).' },
    ],
    photoBadgeNow: 'Bilbao · 2026',
    cvLabel: 'Descargar CV (PDF)',
  },
  services: {
    number: '02',
    kicker: 'Cómo trabajo',
    title: 'Tres formas de colaborar.',
    description:
      'Dependiendo del punto de partida, entro por una u otra puerta: investigación, producto o ambas.',
    items: [
      {
        number: '01',
        title: 'Investigación social',
        description:
          'Diseño y ejecuto estudios con metodologías cuantitativas, cualitativas o mixtas. Desde el diseño metodológico hasta el informe final.',
        deliverables: [
          'Diseño metodológico',
          'Trabajo de campo (entrevistas, grupos, cartografía)',
          'Análisis e interpretación',
          'Informe sociológico final',
        ],
      },
      {
        number: '02',
        title: 'Producto digital con IA',
        description:
          'Construyo aplicaciones web full-stack con integración de modelos de lenguaje, desde la idea hasta producción y mantenimiento.',
        deliverables: [
          'Arquitectura y stack Next.js · Supabase',
          'Integración de LLMs (Claude · OpenAI · Gemini)',
          'Pagos con Stripe y autenticación',
          'Despliegue y mantenimiento',
        ],
      },
      {
        number: '03',
        title: 'Consultoría híbrida',
        description:
          'Cuando un problema necesita las dos miradas: entender a las personas con rigor metodológico y construir la solución con tecnología.',
        deliverables: [
          'Research operativo',
          'Traducción a producto',
          'Prototipado rápido con IA',
          'Acompañamiento estratégico',
        ],
      },
    ],
  },
  projects: {
    number: '03',
    kicker: 'Trabajo seleccionado',
    title: 'Proyectos que cruzan investigación y tecnología.',
    description:
      'Lo que construyo bajo Bercay Studio y lo que investigo en entornos académicos y aplicados.',
    softwareKicker: '— Rama 01',
    softwareTitle: 'Software & IA',
    researchKicker: '— Rama 02',
    researchTitle: 'Investigación social',
    countLabel: (n: number) => `${n} ${n === 1 ? 'proyecto' : 'proyectos'}`,
    openLabel: 'Abrir',
    visitLabel: 'Visitar sitio',
    noUrlLabel: 'Sin enlace',
    items: [
      {
        id: 'toca',
        title: 'TÖCA',
        subtitle: 'Entrenamiento con IA · HYROX & CrossFit',
        description:
          'Aplicación que genera planes de entrenamiento personalizados mediante IA para deportistas de HYROX y CrossFit. Ciclo completo: idea, diseño técnico, desarrollo full-stack, lanzamiento y mantenimiento.',
        tags: ['Next.js', 'Supabase', 'Stripe', 'LLMs', 'TypeScript'],
        highlights: [
          'Planes personalizados generados con IA',
          'Autenticación, pagos con Stripe y suscripciones',
          'Desplegada en Vercel con arquitectura serverless',
        ],
        cover: { tagline: 'Tu plan HYROX, en segundos.', urlLabel: 'toca-app.bercay.studio' },
      },
      {
        id: 'mozkor',
        title: 'Mozkor',
        subtitle: 'Tracker de bebidas',
        description:
          'Aplicación de trackeo y gestión de bebidas desarrollada de forma autónoma full-stack, con base de datos relacional, autenticación y despliegue en producción.',
        tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
        highlights: [
          'Modelo de datos relacional en PostgreSQL',
          'Autenticación y almacenamiento con Supabase',
          'UI cuidada construida en Next.js + TypeScript',
        ],
        cover: { tagline: 'Trackea. Entiende. Decide.', urlLabel: 'mozkor-app.bercay.studio' },
      },
      {
        id: 'bercay',
        title: 'Bercay Studio',
        subtitle: 'Marca paraguas de proyectos propios',
        description:
          'Marca bajo la que desarrollo y presento proyectos propios y comerciales en producto digital e investigación. Web, identidad y gestión integral: diseño, desarrollo, despliegue y modelo de negocio.',
        tags: ['Astro', 'Branding', 'Producto', 'Estrategia'],
        highlights: [
          'Marca e identidad propia',
          'Sitio web como hub de proyectos',
          'Propuestas comerciales asociadas',
        ],
        cover: { tagline: 'Research + Product Studio.', urlLabel: 'bercay.studio' },
      },
      {
        id: 'tfm',
        title: 'Resignificación de espacios',
        subtitle: 'TFM · Máster en Ciencias Sociales · UPV/EHU',
        description:
          'Análisis del Proyecto de Resignificación y Reconfiguración de los Espacios de la Facultad de Ciencias Sociales y de la Comunicación de la EHU, en colaboración con el grupo Innok Lab y Campus Bizia Lab.',
        tags: ['Cartografía emocional', 'Entrevistas', 'Observación', 'Análisis visual'],
        highlights: [
          'Cartografía emocional como técnica central',
          'Entrevistas en profundidad y observación',
          'Análisis de material fotográfico del estudio',
        ],
        cover: { tagline: 'Cómo habita una facultad.', urlLabel: 'UPV/EHU · 2025' },
      },
      {
        id: 'turismo-bilbao',
        title: 'Distribución turística de Bilbao',
        subtitle: 'Bilbao Ekintza · Técnico de Promoción Turística',
        description:
          'Investigación y análisis de datos sobre la distribución de los establecimientos turísticos de Bilbao (hoteles, pensiones, VUT, albergues, apartamentos). Cartografías y dashboards para apoyar la toma de decisiones.',
        tags: ['QGIS', 'Power BI', 'Excel', 'Cartografía'],
        highlights: [
          'Mapeo de establecimientos turísticos',
          'Dashboards e informes interactivos en Power BI',
          'Visualizaciones territoriales con QGIS',
        ],
        cover: { tagline: 'Bilbao turística, en datos.', urlLabel: 'Bilbao Ekintza' },
      },
    ],
  },
  experience: {
    number: '04',
    kicker: 'Trayectoria',
    title: 'Dónde he estado trabajando.',
    items: [
      {
        period: 'Nov. 2025 — actualidad',
        role: 'Técnico de Promoción Turística',
        org: 'Bilbao Ekintza · Beca Plan de Empleo',
        description:
          'Investigación y análisis de datos del sector turístico de Bilbao. Cartografías y visualizaciones con QGIS, Power BI y Excel para apoyar la toma de decisiones en promoción turística.',
      },
      {
        period: '2026 — actualidad',
        role: 'Fundador',
        org: 'Bercay Studio · Marca propia',
        description:
          'Marca paraguas bajo la que desarrollo proyectos propios y comerciales en producto digital e investigación. TÖCA y Mozkor como productos actuales. Gestión integral: diseño, desarrollo, despliegue y modelo de negocio.',
      },
      {
        period: 'Oct. 2024 — Oct. 2025',
        role: 'Investigador en prácticas (TFM)',
        org: 'Innok Lab · UPV/EHU',
        description:
          'Desarrollo del TFM sobre resignificación de espacios de la Facultad de Ciencias Sociales, en colaboración con Campus Bizia Lab. Cartografía emocional, entrevistas, observación y análisis visual.',
      },
      {
        period: '2023 — 2025',
        role: 'Responsable / Monitor socioeducativo',
        org: 'BIRA Educación y Deporte',
        description: 'Coordinación de grupos de jóvenes y apoyo en actividades socioeducativas.',
      },
    ],
  },
  tools: {
    number: '05',
    kicker: 'Herramientas',
    title: 'Caja de herramientas.',
    description: 'Lo que uso en el día a día para investigar, analizar y construir.',
    groups: [
      { label: 'Análisis de datos', items: ['SPSS', 'Jamovi', 'Excel'] },
      { label: 'Visualización y cartografía', items: ['Power BI', 'QGIS'] },
      { label: 'Cualitativa', items: ['Whisper', 'Otter.ai'] },
      { label: 'Desarrollo', items: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe'] },
      { label: 'IA', items: ['Claude', 'ChatGPT', 'Gemini', 'Prompt engineering'] },
      { label: 'Gestión', items: ['Notion', 'Trello', 'Slack', 'MS Teams'] },
    ],
  },
  education: {
    number: '06',
    kicker: 'Formación',
    title: 'Credenciales.',
    description:
      'Formación académica en sociología, certificaciones aplicadas y competencia lingüística.',
    items: [
      {
        period: 'Oct. 2024 — Oct. 2025',
        title: 'Máster en Modelos y Áreas de Investigación en Ciencias Sociales',
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
      },
      {
        period: 'Sept. 2018 — Sept. 2024',
        title: 'Grado en Sociología',
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
        note: 'Mención en Procesos, Redes y Estructuras Sociales',
      },
      {
        period: '2015 — 2017',
        title: 'Bachillerato',
        org: 'Colegio Calasancio Escolapios · Bilbao',
      },
    ],
    certificationsLabel: 'Certificaciones',
    certifications: [
      'Análisis de Big Data en Redes Sociales — UPV/EHU (2024)',
      'Prevención de Riesgos Laborales (2023)',
      'Manipulador de Alimentos (2024)',
      'Permiso de conducir B',
    ],
    languagesLabel: 'Idiomas',
    languages: [
      { name: 'Castellano', level: 'Nativo' },
      { name: 'Euskera', level: 'Avanzado · B2 (2025)' },
      { name: 'Inglés', level: 'Avanzado · B2 (2016)' },
    ],
  },
  contact: {
    number: '07',
    kicker: 'Contacto',
    title: 'Hagamos algo',
    titleItalic: 'juntos',
    description:
      'Si tienes un proyecto en mente —investigación, producto con IA o ambos— cuéntamelo. Suelo responder en menos de 24 horas.',
    labels: {
      location: 'Ubicación',
      availability: 'Disponibilidad',
      availabilityValue: 'Freelance · colaboraciones',
      languages: 'Idiomas',
    },
  },
  footer: {
    tagline: 'Investigación social + producto con IA.',
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con Astro, Tailwind y mucho Fraunces.',
  },
  projectsData: {
    online: 'Online',
    livePreview: 'Live preview',
  },
} as const;
