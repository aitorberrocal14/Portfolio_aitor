export const es = {
  meta: {
    role: 'Sociólogo · Investigador social · Trabajo aplicado con IA · Creador de productos digitales',
    tagline:
      'Investigación social rigurosa, integración aplicada de IA y capacidad real de construir productos con LLMs en producción.',
    keywords:
      'sociólogo, investigación social, AI research, AI policy, AI governance, AI safety, prompt engineering, LLMs, métodos digitales, think tank, Bilbao, Aitor Berrocal, Bercay Studio, TÖCA, Mozkor',
  },
  nav: {
    about: 'Sobre mí',
    services: 'Áreas de trabajo',
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
    titleA: 'Investigo lo social.',
    titleB: 'Trabajo',
    titleC: 'con IA.',
    lead: [
      { kind: 'name', value: 'Aitor Berrocal Lorda' },
      { kind: 'text', value: ' — sociólogo e investigador social, con conocimiento aplicado de IA y experiencia construyendo productos digitales con LLMs. Combino ' },
      { kind: 'em', value: 'rigor metodológico' },
      { kind: 'text', value: ' y ' },
      { kind: 'em', value: 'capacidad de ejecución' },
      { kind: 'text', value: '.' },
    ],
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Hablemos',
  },
  about: {
    number: '01',
    kicker: 'Sobre mí',
    title: 'Investigación social, IA y producto.',
    description:
      'Tres facetas que se refuerzan: la mirada del sociólogo, el criterio sobre IA y la práctica real de construir con ella.',
    paragraphs: [
      'Soy **sociólogo formado en investigación social**, con un máster en herramientas de investigación aplicada (UPV/EHU) y experiencia en metodologías cuantitativas, cualitativas y mixtas. Autor de un TFM sobre la _resignificación de los espacios_ de la Facultad de Ciencias Sociales.',
      'Trabajo de forma aplicada con IA: prompt engineering, integración de LLMs (Claude, OpenAI, Gemini) y evaluación práctica de outputs. Sigo de cerca el campo de AI safety y governance como lector activo.',
      'Y construyo: **TÖCA, Mozkor y otros productos** con IA bajo la marca propia [Bercay Studio](https://bercay.studio). Productos reales, en producción, con usuarios.',
      'Mi interés profesional está en el cruce entre **ciencias sociales, métodos digitales e IA**, y en cómo las personas se relacionan con sistemas de IA en su vida cotidiana.',
    ],
    cards: [
      { k: 'A', title: 'Investigar', body: 'Métodos mixtos, trabajo de campo, análisis e informes con rigor académico.' },
      { k: 'B', title: 'Trabajar con IA', body: 'Prompt engineering, integración de LLMs y evaluación práctica de outputs.' },
      { k: 'C', title: 'Construir', body: 'Productos web full-stack con IA en producción: Next.js, Supabase, Stripe.' },
    ],
    photoBadgeNow: 'Bilbao · 2026',
    cvLabel: 'Descargar CV (PDF)',
  },
  services: {
    number: '02',
    kicker: 'Áreas de trabajo',
    title: 'En qué trabajo.',
    description:
      'Mi trabajo se mueve entre tres áreas que se cruzan más de lo que parece: la investigación social, el trabajo aplicado con IA y la creación de productos digitales. No son compartimentos: cada proyecto suele activar dos o las tres a la vez.',
    items: [
      {
        number: '01',
        title: 'Investigación social',
        description:
          'Diseño y ejecución de estudios con metodologías cuantitativas, cualitativas y mixtas. Me formé como sociólogo en la UPV/EHU, con un máster centrado en herramientas de investigación aplicada y un TFM cualitativo sobre la resignificación de espacios universitarios. Me interesa especialmente la investigación en proyectos donde lo digital o la IA forman parte del fenómeno a estudiar.',
        deliverables: [],
      },
      {
        number: '02',
        title: 'Trabajo aplicado con IA',
        description:
          'Integración de modelos de lenguaje en productos reales, prompt engineering, evaluación práctica de outputs y seguimiento del campo de AI safety y governance como lector activo. Trabajo a diario con Claude, OpenAI y Gemini, y me interesa especialmente cómo se diseñan productos con IA que tienen sentido y son sostenibles más allá del hype.',
        deliverables: [],
      },
      {
        number: '03',
        title: 'Producto digital',
        description:
          'Desarrollo de productos web full-stack con IA en producción. Bajo Bercay Studio he construido y lanzado TÖCA y Mozkor, gestionando todo el ciclo: arquitectura, integración de LLMs, pagos, despliegue y mantenimiento. La experiencia construyendo productos reales es la que me da criterio para investigar la IA con los pies en el suelo.',
        deliverables: [],
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
          'Aplicación full-stack para registrar y gestionar el consumo de bebidas, desarrollada en solitario, con base de datos relacional, autenticación y despliegue en producción.',
        tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
        highlights: [
          'Modelo de datos relacional en PostgreSQL',
          'Autenticación y almacenamiento con Supabase',
          'Interfaz cuidada con Next.js + TypeScript',
        ],
        cover: { tagline: 'Registra. Entiende. Decide.', urlLabel: 'mozkor-app.bercay.studio' },
      },
      {
        id: 'bercay',
        title: 'Bercay Studio',
        subtitle: 'Marca paraguas para proyectos propios',
        description:
          'Marca bajo la que desarrollo proyectos propios y encargos de cliente en producto digital e investigación. Web, identidad y gestión integral: diseño, desarrollo, despliegue y modelo de negocio.',
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
          'Estudio del proyecto Resignificación y Reconfiguración de los Espacios de la Facultad de Ciencias Sociales y de la Comunicación de la UPV/EHU, en colaboración con Innok Lab y Campus Bizia Lab.',
        tags: ['Cartografía emocional', 'Entrevistas', 'Observación', 'Análisis visual'],
        highlights: [
          'Cartografía emocional como técnica central',
          'Entrevistas en profundidad y observación',
          'Análisis de material fotográfico del estudio',
        ],
        cover: { tagline: 'Cómo se habita una facultad.', urlLabel: 'UPV/EHU · 2025' },
      },
      {
        id: 'turismo-bilbao',
        title: 'Distribución turística de Bilbao',
        subtitle: 'Bilbao Ekintza · Técnico de Promoción Turística',
        description:
          'Investigación y análisis de datos sobre la distribución de los alojamientos turísticos de Bilbao (hoteles, pensiones, viviendas de uso turístico, albergues y apartamentos). Cartografías y dashboards para apoyar la toma de decisiones.',
        tags: ['QGIS', 'Power BI', 'Excel', 'Cartografía'],
        highlights: [
          'Mapeo de alojamientos turísticos',
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
    title: 'Recorrido profesional.',
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
          'Marca propia bajo la que desarrollo productos digitales con IA y proyectos de investigación social aplicada, con disponibilidad para servicios de investigación y consultoría. TÖCA y Mozkor como productos actuales en producción. Gestión integral: diseño, desarrollo, despliegue, marketing y modelo de negocio.',
      },
      {
        period: 'Oct. 2024 — Oct. 2025',
        role: 'Investigador en prácticas (TFM)',
        org: 'Innok Lab · UPV/EHU',
        description:
          'Desarrollo del TFM sobre la resignificación de los espacios de la Facultad de Ciencias Sociales, en colaboración con Campus Bizia Lab. Cartografía emocional, entrevistas, observación y análisis visual.',
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
      { label: 'IA', items: ['Claude', 'ChatGPT', 'Gemini', 'Prompt engineering', 'Integración de LLMs', 'Evaluación de outputs'] },
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
    title: 'Construyamos',
    titleItalic: 'algo',
    description:
      'Si tienes un proyecto en mente — investigación, producto con IA, o ambos — cuéntamelo. Suelo responder en menos de 24 horas.',
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
