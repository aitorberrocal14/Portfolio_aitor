export const site = {
  name: 'Aitor Berrocal Lorda',
  shortName: 'Aitor Berrocal Lorda',
  location: 'Bilbao',
  email: 'aitorberrocal14@gmail.com',
  // Número personal: NO expuesto en la UI. Solo se usa para el enlace wa.me.
  whatsapp: '34688634112',
  photo: 'about/aitor.jpg',
  socials: {
    github: 'https://github.com/aitorberrocal14',
    linkedin: 'https://www.linkedin.com/in/aitor-berrocal-893b90329',
  },
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

/**
 * Metadatos de proyecto independientes del idioma (URL, color, año, monograma).
 * El contenido traducible (título, descripción, highlights, tagline) vive en src/i18n/{lang}.ts.
 */
export const projectMeta: Record<string, { url?: string; year: string; bg: string; fg: string; monogram: string }> = {
  toca: {
    url: 'https://toca-app.bercay.studio',
    year: '2025',
    bg: '#ff6b35',
    fg: '#ffffff',
    monogram: 'TÖ',
  },
  mozkor: {
    url: 'https://mozkor-app.bercay.studio',
    year: '2025',
    bg: '#c69214',
    fg: '#fff9e6',
    monogram: 'MZ',
  },
  bercay: {
    url: 'https://bercay.studio',
    year: '2026',
    bg: '#0f2a4a',
    fg: '#dbe4f2',
    monogram: 'BS',
  },
  tfm: {
    year: '2024–2025',
    bg: '#5d4e37',
    fg: '#f3ecdb',
    monogram: 'TFM',
  },
  'turismo-bilbao': {
    year: '2025–2026',
    bg: '#0e7490',
    fg: '#e0f3f7',
    monogram: 'BI',
  },
};
