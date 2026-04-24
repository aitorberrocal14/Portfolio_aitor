export const site = {
  name: 'Aitor Berrocal Lorda',
  shortName: 'Aitor Berrocal Lorda',
  role: 'Sociólogo · Investigador social · Desarrollador de productos digitales',
  tagline:
    'Uno la mirada crítica y analítica de la sociología con la capacidad técnica para construir productos digitales con IA.',
  location: 'Bilbao',
  email: 'aitorberrocal14@gmail.com',
  // Número personal: NO expuesto en la UI. Solo se usa para el enlace wa.me.
  whatsapp: '34688634112',
  currentlyAt: 'Bilbao Ekintza',
  // Ruta relativa a /public. Cambia a 'about/aitor.jpg' cuando subas la foto real.
  photo: 'about/aitor.jpg',
  socials: {
    github: 'https://github.com/aitorberrocal14',
    linkedin: 'https://www.linkedin.com/in/aitor-berrocal-893b90329',
  },
  sites: [
    { label: 'bercay.studio', url: 'https://bercay.studio' },
    { label: 'toca-app.bercay.studio', url: 'https://toca-app.bercay.studio' },
    { label: 'mozkor-app.bercay.studio', url: 'https://mozkor-app.bercay.studio' },
  ],
};

export const marqueeItems = [
  'Sociología',
  'Investigación social',
  'Métodos mixtos',
  'Cartografía emocional',
  'QGIS',
  'Power BI',
  'SPSS',
  'Jamovi',
  'Python',
  'Next.js',
  'TypeScript',
  'Supabase',
  'IA generativa',
  'Prompt engineering',
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: 'software' | 'investigacion';
  url?: string;
  repo?: string;
  year: string;
  highlights: string[];
  cover: {
    bg: string;
    fg: string;
    tagline: string;
    monogram: string;
    urlLabel?: string;
  };
};

export const projects: Project[] = [
  {
    id: 'toca',
    title: 'TÖCA',
    subtitle: 'Entrenamiento con IA · HYROX & CrossFit',
    description:
      'Aplicación que genera planes de entrenamiento personalizados mediante IA para deportistas de HYROX y CrossFit. Ciclo completo: idea, diseño técnico, desarrollo full-stack, lanzamiento y mantenimiento.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'LLMs', 'TypeScript'],
    category: 'software',
    year: '2025',
    url: 'https://toca-app.bercay.studio',
    highlights: [
      'Planes personalizados generados con IA',
      'Autenticación, pagos con Stripe y suscripciones',
      'Desplegada en Vercel con arquitectura serverless',
    ],
    cover: {
      bg: '#ff6b35',
      fg: '#ffffff',
      tagline: 'Tu plan HYROX, en segundos.',
      monogram: 'TÖ',
      urlLabel: 'toca-app.bercay.studio',
    },
  },
  {
    id: 'mozkor',
    title: 'Mozkor',
    subtitle: 'Tracker de bebidas',
    description:
      'Aplicación de trackeo y gestión de bebidas desarrollada de forma autónoma full-stack, con base de datos relacional, autenticación y despliegue en producción.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
    category: 'software',
    year: '2025',
    url: 'https://mozkor-app.bercay.studio',
    highlights: [
      'Modelo de datos relacional en PostgreSQL',
      'Autenticación y almacenamiento con Supabase',
      'UI cuidada construida en Next.js + TypeScript',
    ],
    cover: {
      bg: '#c69214',
      fg: '#fff9e6',
      tagline: 'Trackea. Entiende. Decide.',
      monogram: 'MZ',
      urlLabel: 'mozkor-app.bercay.studio',
    },
  },
  {
    id: 'bercay',
    title: 'Bercay Studio',
    subtitle: 'Marca paraguas de proyectos propios',
    description:
      'Marca bajo la que desarrollo y presento proyectos propios y comerciales en producto digital e investigación. Web, identidad y gestión integral: diseño, desarrollo, despliegue y modelo de negocio.',
    tags: ['Astro', 'Branding', 'Producto', 'Estrategia'],
    category: 'software',
    year: '2026',
    url: 'https://bercay.studio',
    highlights: [
      'Marca e identidad propia',
      'Sitio web como hub de proyectos',
      'Propuestas comerciales asociadas',
    ],
    cover: {
      bg: '#0f2a4a',
      fg: '#dbe4f2',
      tagline: 'Research + Product Studio.',
      monogram: 'BS',
      urlLabel: 'bercay.studio',
    },
  },
  {
    id: 'tfm',
    title: 'Resignificación de espacios',
    subtitle: 'TFM · Máster en Ciencias Sociales · UPV/EHU',
    description:
      'Análisis del Proyecto de Resignificación y Reconfiguración de los Espacios de la Facultad de Ciencias Sociales y de la Comunicación de la EHU, en colaboración con el grupo Innok Lab y Campus Bizia Lab.',
    tags: ['Cartografía emocional', 'Entrevistas', 'Observación', 'Análisis visual'],
    category: 'investigacion',
    year: '2024–2025',
    highlights: [
      'Cartografía emocional como técnica central',
      'Entrevistas en profundidad y observación',
      'Análisis de material fotográfico del estudio',
    ],
    cover: {
      bg: '#5d4e37',
      fg: '#f3ecdb',
      tagline: 'Cómo habita una facultad.',
      monogram: 'TFM',
      urlLabel: 'UPV/EHU · 2025',
    },
  },
  {
    id: 'turismo-bilbao',
    title: 'Distribución turística de Bilbao',
    subtitle: 'Bilbao Ekintza · Técnico de Promoción Turística',
    description:
      'Investigación y análisis de datos sobre la distribución de los establecimientos turísticos de Bilbao (hoteles, pensiones, VUT, albergues, apartamentos). Cartografías y dashboards para apoyar la toma de decisiones.',
    tags: ['QGIS', 'Power BI', 'Excel', 'Cartografía'],
    category: 'investigacion',
    year: '2025–2026',
    highlights: [
      'Mapeo de establecimientos turísticos',
      'Dashboards e informes interactivos en Power BI',
      'Visualizaciones territoriales con QGIS',
    ],
    cover: {
      bg: '#0e7490',
      fg: '#e0f3f7',
      tagline: 'Bilbao turística, en datos.',
      monogram: 'BI',
      urlLabel: 'Bilbao Ekintza',
    },
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
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
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  description: string;
};

export const experience: ExperienceItem[] = [
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
    description:
      'Coordinación de grupos de jóvenes y apoyo en actividades socioeducativas.',
  },
];

export type EducationItem = {
  period: string;
  title: string;
  org: string;
  note?: string;
};

export const education: EducationItem[] = [
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
];

export const certifications = [
  'Análisis de Big Data en Redes Sociales — UPV/EHU (2024)',
  'Prevención de Riesgos Laborales (2023)',
  'Manipulador de Alimentos (2024)',
  'Permiso de conducir B',
];

export const languages = [
  { name: 'Castellano', level: 'Nativo' },
  { name: 'Euskera', level: 'Avanzado · B2 (2025)' },
  { name: 'Inglés', level: 'Avanzado · B2 (2016)' },
];

export type ToolGroup = {
  label: string;
  items: string[];
};

export const tools: ToolGroup[] = [
  {
    label: 'Análisis de datos',
    items: ['SPSS', 'Jamovi', 'Excel'],
  },
  {
    label: 'Visualización y cartografía',
    items: ['Power BI', 'QGIS'],
  },
  {
    label: 'Cualitativa',
    items: ['Whisper', 'Otter.ai'],
  },
  {
    label: 'Desarrollo',
    items: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe'],
  },
  {
    label: 'IA',
    items: ['Claude', 'ChatGPT', 'Gemini', 'Prompt engineering'],
  },
  {
    label: 'Gestión',
    items: ['Notion', 'Trello', 'Slack', 'MS Teams'],
  },
];

export const stats = [
  { value: '3+', label: 'productos digitales propios en marcha' },
  { value: 'TFM', label: 'defendido en UPV/EHU (2025)' },
  { value: 'Bilbao', label: 'base de operaciones' },
];
