export const site = {
  name: 'Aitor Berrocal',
  role: 'Sociólogo · Investigador social · Desarrollador con IA',
  tagline:
    'Uno los métodos de la investigación social con el desarrollo de software e IA para crear productos con sentido.',
  location: 'España',
  email: 'tu-email@ejemplo.com',
  socials: {
    github: 'https://github.com/aitorberrocal14',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: '',
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'investigacion';
  url?: string;
  repo?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    title: 'App móvil con IA generativa',
    description:
      'Aplicación construida apoyándome en modelos de lenguaje para automatizar flujos repetitivos y acelerar la entrega de valor al usuario final.',
    tags: ['Next.js', 'LLMs', 'Prompt design', 'UX'],
    category: 'software',
    year: '2025',
  },
  {
    title: 'Análisis cuantitativo de datos sociales',
    description:
      'Estudio sobre dinámicas sociales combinando encuestas, entrevistas y procesamiento asistido por IA para codificar respuestas abiertas a gran escala.',
    tags: ['Python', 'Pandas', 'NLP', 'Sociología'],
    category: 'investigacion',
    year: '2024',
  },
  {
    title: 'Asistente conversacional para investigación',
    description:
      'Herramienta interna que ayuda a sistematizar literatura académica, resumir artículos y generar códigos iniciales para análisis cualitativo.',
    tags: ['RAG', 'OpenAI', 'Astro', 'Supabase'],
    category: 'software',
    year: '2025',
  },
  {
    title: 'Informe etnográfico digital',
    description:
      'Trabajo de campo en comunidades online con análisis de discurso asistido por IA para detectar patrones narrativos y polarización.',
    tags: ['Etnografía', 'Análisis de discurso', 'IA'],
    category: 'investigacion',
    year: '2023',
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
