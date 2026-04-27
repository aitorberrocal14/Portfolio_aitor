import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '..', 'public', 'cv.pdf');

const NAVY = '#0f2a4a';
const SLATE = '#334155';
const SLATE_LIGHT = '#64748b';
const MUTED = '#94a3b8';
const BORDER = '#cbd5e1';

const MARGIN = 38;
const SIDEBAR_W = 165;

const doc = new PDFDocument({
  size: 'A4',
  margin: MARGIN,
  info: {
    Title: 'CV — Aitor Berrocal Lorda',
    Author: 'Aitor Berrocal Lorda',
    Subject: 'Curriculum Vitae',
  },
});
doc.pipe(createWriteStream(out));

const PAGE_W = doc.page.width;
const PAGE_H = doc.page.height;
const MAIN_X = MARGIN + SIDEBAR_W + 22;
const MAIN_W = PAGE_W - MAIN_X - MARGIN;

function hLine(x, y, w, color = BORDER, width = 0.5) {
  doc.strokeColor(color).lineWidth(width).moveTo(x, y).lineTo(x + w, y).stroke();
}

function sectionLabel(text, x, y, color = NAVY) {
  doc
    .font('Helvetica-Bold')
    .fontSize(7.5)
    .fillColor(color)
    .text(text.toUpperCase(), x, y, { characterSpacing: 1.6 });
  return doc.y + 4;
}

// =====================  HEADER  =====================
let y = MARGIN;

// Name
doc.font('Helvetica-Bold').fontSize(28).fillColor(NAVY);
doc.text('Aitor Berrocal Lorda', MARGIN, y);
y = doc.y + 2;

doc.font('Helvetica').fontSize(10).fillColor(SLATE_LIGHT);
doc.text('Sociólogo · Investigador social · Desarrollador de productos digitales', MARGIN, y, {
  width: PAGE_W - 2 * MARGIN,
});
y = doc.y + 10;

// Contact line
doc.font('Helvetica').fontSize(8.5).fillColor(SLATE);
const contactLine = 'Bilbao   ·   aitorberrocal13@gmail.com   ·   +34 688 634 112   ·   linkedin.com/in/aitor-berrocal-893b90329   ·   github.com/aitorberrocal14   ·   bercay.studio';
doc.text(contactLine, MARGIN, y, { width: PAGE_W - 2 * MARGIN });
y = doc.y + 10;

hLine(MARGIN, y, PAGE_W - 2 * MARGIN, NAVY, 0.8);
y += 12;

// Profile
doc.font('Helvetica').fontSize(9.5).fillColor(SLATE);
const profile =
  'Sociólogo especializado en investigación social, con experiencia en metodologías cuantitativas, cualitativas y mixtas, y con capacidad para diseñar y desarrollar productos digitales propios (aplicaciones web full-stack con integración de IA). Autor del TFM «Análisis del Proyecto de Resignificación y Reconfiguración de los Espacios de la Facultad de Ciencias Sociales y de la Comunicación de la EHU». Combino la mirada crítica y analítica de la sociología con la capacidad técnica para construir productos digitales, generando soluciones innovadoras en la intersección entre ciencias sociales y tecnología.';
doc.text(profile, MARGIN, y, {
  width: PAGE_W - 2 * MARGIN,
  align: 'justify',
  lineGap: 1.5,
});
y = doc.y + 14;

hLine(MARGIN, y, PAGE_W - 2 * MARGIN);
y += 10;

const COLS_TOP = y;

// =====================  SIDEBAR  =====================
let yL = COLS_TOP;

yL = sectionLabel('Idiomas', MARGIN, yL);
const langs = [
  ['Castellano', 'Nativo'],
  ['Euskera', 'Avanzado · B2 (2025)'],
  ['Inglés', 'Avanzado · B2 (2016)'],
];
langs.forEach(([n, l]) => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(NAVY);
  doc.text(n, MARGIN, yL);
  doc.font('Helvetica').fontSize(7.5).fillColor(MUTED);
  doc.text(l, MARGIN, doc.y, { width: SIDEBAR_W });
  yL = doc.y + 6;
});
yL += 4;

yL = sectionLabel('Investigación social', MARGIN, yL);
const research = [
  'Métodos cuanti, cuali y mixtos',
  'Entrevistas, grupos, observación',
  'Análisis de discurso',
  'Cartografías y mapeos',
  'Cartografía emocional',
  'Estadística multivariante',
  'IA generativa en research',
];
doc.font('Helvetica').fontSize(8).fillColor(SLATE);
research.forEach((line) => {
  doc.text('·  ' + line, MARGIN, yL, { width: SIDEBAR_W, lineGap: 1.5 });
  yL = doc.y + 1;
});
yL += 6;

yL = sectionLabel('Desarrollo & IA', MARGIN, yL);
const tech = [
  'Next.js · React · TypeScript',
  'Supabase · PostgreSQL · Vercel',
  'Stripe · APIs REST · Auth',
  'Anthropic Claude · OpenAI · Gemini',
  'Prompt engineering',
  'SPSS · Jamovi · Power BI · QGIS',
  'WordPress · Notion · Slack',
];
doc.font('Helvetica').fontSize(8).fillColor(SLATE);
tech.forEach((line) => {
  doc.text('·  ' + line, MARGIN, yL, { width: SIDEBAR_W, lineGap: 1.5 });
  yL = doc.y + 1;
});
yL += 6;

yL = sectionLabel('Certificaciones', MARGIN, yL);
const certs = [
  'Análisis Big Data en RRSS — UPV/EHU (2024)',
  'Prevención Riesgos Laborales (2023)',
  'Manipulador de alimentos (2024)',
  'Permiso de conducir B',
];
doc.font('Helvetica').fontSize(7.8).fillColor(SLATE);
certs.forEach((line) => {
  doc.text('·  ' + line, MARGIN, yL, { width: SIDEBAR_W, lineGap: 1.5 });
  yL = doc.y + 1;
});
yL += 6;

yL = sectionLabel('Voluntariado', MARGIN, yL);
const volunteer = [
  ['Itaka Escolapios', 'Monitor de tiempo libre · 2017–2021'],
  ['Colegio La Cartuja (Granada)', 'Apoyo educativo'],
  ['Emakume Migratu Feministak', 'Formador digital y de IA'],
];
volunteer.forEach(([title, sub]) => {
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY);
  doc.text(title, MARGIN, yL, { width: SIDEBAR_W });
  doc.font('Helvetica').fontSize(7.5).fillColor(MUTED);
  doc.text(sub, MARGIN, doc.y, { width: SIDEBAR_W, lineGap: 1.2 });
  yL = doc.y + 5;
});
yL += 4;

yL = sectionLabel('Aptitudes', MARGIN, yL);
const soft = [
  'Pensamiento crítico',
  'Comunicación y trabajo en equipo',
  'Adaptabilidad',
  'Empatía e iniciativa',
  'Autonomía técnica',
];
doc.font('Helvetica').fontSize(8).fillColor(SLATE);
soft.forEach((line) => {
  doc.text('·  ' + line, MARGIN, yL, { width: SIDEBAR_W, lineGap: 1.5 });
  yL = doc.y + 1;
});

// =====================  MAIN COLUMN  =====================
let yR = COLS_TOP;

yR = sectionLabel('Experiencia profesional', MAIN_X, yR);

function exp(period, role, org, bullets, x, y) {
  doc.font('Helvetica').fontSize(7.5).fillColor(MUTED);
  doc.text(period.toUpperCase(), x, y, { characterSpacing: 0.8, width: MAIN_W });
  y = doc.y + 1;
  doc.font('Helvetica-Bold').fontSize(10).fillColor(NAVY);
  doc.text(role, x, y, { width: MAIN_W });
  y = doc.y + 1;
  doc.font('Helvetica').fontSize(8.5).fillColor(SLATE_LIGHT);
  doc.text(org, x, y, { width: MAIN_W });
  y = doc.y + 4;
  doc.font('Helvetica').fontSize(8.5).fillColor(SLATE);
  bullets.forEach((b) => {
    doc.text('—  ' + b, x, y, { width: MAIN_W, lineGap: 1.8 });
    y = doc.y + 1;
  });
  return y + 8;
}

yR = exp(
  'Nov. 2025 — actualidad',
  'Técnico de Promoción Turística',
  'Bilbao Ekintza · Beca Plan de Empleo',
  [
    'Investigación y análisis de datos del sector turístico de Bilbao.',
    'Análisis de la distribución de establecimientos turísticos (hoteles, pensiones, VUT, albergues, apartamentos).',
    'Cartografías y dashboards con QGIS, Power BI y Excel para apoyar la toma de decisiones.',
  ],
  MAIN_X,
  yR
);

yR = exp(
  '2026 — actualidad',
  'Fundador',
  'Bercay Studio · Marca propia',
  [
    'Marca paraguas para proyectos propios y comerciales en producto digital e investigación.',
    'Productos: TÖCA (entrenamiento con IA para HYROX & CrossFit) y Mozkor (tracker de bebidas).',
    'Gestión integral: diseño, desarrollo, despliegue, modelo de negocio y propuestas comerciales.',
  ],
  MAIN_X,
  yR
);

yR = exp(
  'Oct. 2024 — Oct. 2025',
  'Investigador en prácticas (TFM)',
  'Innok Lab · UPV/EHU',
  [
    'TFM sobre resignificación de espacios de la Facultad de Ciencias Sociales (Campus Bizia Lab).',
    'Cartografía emocional, entrevistas en profundidad y observación.',
    'Análisis de material fotográfico y elaboración del informe final.',
  ],
  MAIN_X,
  yR
);

yR = exp(
  '2023 — 2025',
  'Responsable / Monitor socioeducativo',
  'BIRA Educación y Deporte',
  ['Coordinación de grupos de jóvenes y apoyo en actividades socioeducativas.'],
  MAIN_X,
  yR
);

yR += 2;
yR = sectionLabel('Otra experiencia laboral', MAIN_X, yR);
const other = [
  'Atención al cliente — Mercadona (2023–2025)',
  'Técnico de comedor — Gasca (2024–2025)',
  'Camarero de eventos — Aramark (2022–2024)',
  'Promotor — Fideliza S.L. (2017)',
];
doc.font('Helvetica').fontSize(8.5).fillColor(SLATE);
other.forEach((line) => {
  doc.text('·  ' + line, MAIN_X, yR, { width: MAIN_W, lineGap: 1.6 });
  yR = doc.y + 1;
});

yR += 6;
yR = sectionLabel('Formación', MAIN_X, yR);
const education = [
  ['Oct. 2024 — Oct. 2025', 'Máster en Modelos y Áreas de Investigación en Ciencias Sociales', 'Euskal Herriko Unibertsitatea · UPV/EHU', null],
  ['Sept. 2018 — Sept. 2024', 'Grado en Sociología', 'Euskal Herriko Unibertsitatea · UPV/EHU', 'Mención en Procesos, Redes y Estructuras Sociales'],
  ['Sept. 2015 — Jun. 2017', 'Bachillerato', 'Colegio Calasancio Escolapios · Bilbao', null],
];
education.forEach(([period, title, org, note]) => {
  doc.font('Helvetica').fontSize(7.5).fillColor(MUTED);
  doc.text(period.toUpperCase(), MAIN_X, yR, { characterSpacing: 0.8 });
  yR = doc.y + 1;
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(NAVY);
  doc.text(title, MAIN_X, yR, { width: MAIN_W });
  yR = doc.y + 1;
  doc.font('Helvetica').fontSize(8.3).fillColor(SLATE_LIGHT);
  doc.text(org, MAIN_X, yR, { width: MAIN_W });
  yR = doc.y + 1;
  if (note) {
    doc.font('Helvetica-Oblique').fontSize(8).fillColor(SLATE);
    doc.text(note, MAIN_X, yR, { width: MAIN_W });
    yR = doc.y + 1;
  }
  yR += 6;
});

// Footer
const footerY = PAGE_H - 24;
hLine(MARGIN, footerY - 6, PAGE_W - 2 * MARGIN);
doc.font('Helvetica').fontSize(7).fillColor(MUTED);
doc.text(
  'Última actualización: ' +
    new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }) +
    '   ·   bercay.studio',
  MARGIN,
  footerY,
  { width: PAGE_W - 2 * MARGIN, align: 'center' }
);

doc.end();

doc.on('end', () => {
  console.log('✓ public/cv.pdf generated');
});
