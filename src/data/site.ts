export const site = {
  name: 'Aitor Berrocal',
  role: 'Sociólogo · Investigador social · Desarrollador con IA',
  tagline:
    'Uno los métodos de la investigación social con el desarrollo de software e IA para crear productos con sentido.',
  location: 'España',
  email: 'aitorberrocal13@gmail.com',
  // Número de WhatsApp en formato internacional sin "+" ni espacios (ej: 34612345678)
  whatsapp: '34600000000',
  socials: {
    github: 'https://github.com/aitorberrocal14',
    linkedin: 'https://www.linkedin.com/in/aitor-berrocal-lorda-893b90329',
  },
};

export const marqueeItems = [
  'Sociología',
  'Investigación social',
  'Métodos mixtos',
  'Análisis de datos',
  'NLP',
  'IA generativa',
  'Prompt engineering',
  'Desarrollo web',
  'TypeScript',
  'Python',
  'Astro',
  'Next.js',
  'UX con datos',
  'Producto + personas',
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
  accent: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'mozkor',
    title: 'Mozkor.app',
    subtitle: 'Tracker B2B de consumo',
    description:
      'Aplicación B2B para hostelería que digitaliza el seguimiento de consumo por cliente y ayuda a la toma de decisiones en tiempo real.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Producto'],
    category: 'software',
    year: '2025',
    accent: 'from-navy-700 to-navy-500',
    highlights: [
      'Diseño de producto end-to-end',
      'Dashboard con métricas en vivo',
      'Modelo de datos relacional',
    ],
  },
  {
    id: 'oniria',
    title: 'Oniria',
    subtitle: 'Dream tracker con IA',
    description:
      'App para registrar y analizar sueños usando IA para detectar patrones recurrentes, símbolos y conexiones con el estado anímico.',
    tags: ['IA', 'React Native', 'LLMs', 'Psicología'],
    category: 'software',
    year: '2025',
    accent: 'from-navy-600 to-navy-400',
    highlights: [
      'Análisis semántico con LLMs',
      'Privacidad y cifrado',
      'Onboarding conversacional',
    ],
  },
  {
    id: 'bercay',
    title: 'Bercay Studio',
    subtitle: 'Web corporativa',
    description:
      'Sitio web para el estudio Bercay diseñado como vitrina de trabajos y canal de captación de clientes.',
    tags: ['Astro', 'Tailwind', 'SEO', 'Motion'],
    category: 'software',
    year: '2025',
    accent: 'from-navy-800 to-navy-600',
    highlights: ['100/100 Lighthouse', 'Contenido editable en MDX', 'Motion sutil'],
  },
  {
    id: 'toca',
    title: 'Toca.app',
    subtitle: 'Seguimiento fitness',
    description:
      'Aplicación de fitness enfocada en planificación semanal y adherencia, con coach IA que adapta rutinas.',
    tags: ['IA', 'TypeScript', 'Producto', 'Mobile'],
    category: 'software',
    year: '2025',
    accent: 'from-navy-500 to-navy-300',
    highlights: ['Coach IA personalizado', 'Planificador semanal', 'Notificaciones inteligentes'],
  },
  {
    id: 'discurso',
    title: 'Polarización digital',
    subtitle: 'Análisis de discurso online',
    description:
      'Estudio sobre dinámicas de polarización en comunidades online, combinando etnografía digital con análisis asistido por IA.',
    tags: ['Etnografía', 'NLP', 'IA', 'Discurso'],
    category: 'investigacion',
    year: '2024',
    accent: 'from-navy-700 to-navy-500',
    highlights: [
      'Corpus de +20k mensajes',
      'Codificación con LLMs',
      'Mapas de discurso',
    ],
  },
  {
    id: 'encuestas',
    title: 'Dinámicas sociales',
    subtitle: 'Estudio cuantitativo',
    description:
      'Investigación por encuesta con trabajo de campo y análisis estadístico para caracterizar actitudes sobre tecnología y sociedad.',
    tags: ['Encuesta', 'SPSS', 'Python', 'Estadística'],
    category: 'investigacion',
    year: '2024',
    accent: 'from-navy-600 to-navy-400',
    highlights: ['Muestreo probabilístico', 'Análisis multivariante', 'Informe público'],
  },
  {
    id: 'rag-academico',
    title: 'Asistente académico',
    subtitle: 'RAG para literatura científica',
    description:
      'Herramienta interna que sistematiza literatura académica, resume artículos y genera códigos iniciales para análisis cualitativo.',
    tags: ['RAG', 'OpenAI', 'Investigación', 'Productividad'],
    category: 'investigacion',
    year: '2025',
    accent: 'from-navy-800 to-navy-600',
    highlights: ['Indexado de +500 papers', 'Citas trazables', 'Codificación asistida'],
  },
  {
    id: 'etnografia',
    title: 'Etnografía digital',
    subtitle: 'Comunidades online',
    description:
      'Trabajo de campo en plataformas digitales para entender prácticas cotidianas y lenguajes compartidos en comunidades específicas.',
    tags: ['Etnografía', 'Observación', 'Cualitativa'],
    category: 'investigacion',
    year: '2023',
    accent: 'from-navy-500 to-navy-300',
    highlights: ['Inmersión +6 meses', 'Diario de campo', 'Informe etnográfico'],
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
      'Diseño estudios a medida, trabajo de campo y análisis con métodos cuantitativos, cualitativos o mixtos.',
    deliverables: [
      'Diseño metodológico',
      'Trabajo de campo',
      'Análisis y visualización',
      'Informe ejecutivo',
    ],
  },
  {
    number: '02',
    title: 'Desarrollo con IA',
    description:
      'Construyo productos web y apps apalancados en modelos de lenguaje, desde el prototipo hasta producción.',
    deliverables: [
      'Discovery + prototipo',
      'Arquitectura y stack',
      'Integración de LLMs',
      'Deploy y mantenimiento',
    ],
  },
  {
    number: '03',
    title: 'Consultoría híbrida',
    description:
      'Cuando un problema necesita las dos miradas: entender a las personas y construir la solución.',
    deliverables: [
      'Research operativo',
      'Traducción a producto',
      'Prototipado rápido',
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
    period: '2024 — actualidad',
    role: 'Desarrollador de software con IA',
    org: 'Proyectos propios',
    description:
      'Diseño y desarrollo de apps y herramientas apalancadas en modelos de lenguaje, desde el prototipo hasta la puesta en producción.',
  },
  {
    period: '2022 — 2024',
    role: 'Investigador social',
    org: 'Proyectos académicos y consultoría',
    description:
      'Investigación cuantitativa y cualitativa sobre fenómenos sociales contemporáneos, con foco en la relación entre tecnología y sociedad.',
  },
  {
    period: '2018 — 2022',
    role: 'Grado en Sociología',
    org: 'Universidad',
    description:
      'Formación en métodos de investigación social, estadística, teoría sociológica y análisis de datos.',
  },
];

export const stats = [
  { value: '5+', label: 'años combinando investigación y tecnología' },
  { value: '12', label: 'proyectos en software e investigación' },
  { value: '∞', label: 'curiosidad aplicada' },
];
