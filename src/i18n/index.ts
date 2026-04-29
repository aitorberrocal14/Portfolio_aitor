import { es } from './es';
import { eu } from './eu';
import { en } from './en';

export const dicts = { es, eu, en } as const;
export type Lang = keyof typeof dicts;
export const defaultLang: Lang = 'es';

export const languageMeta: Record<Lang, { short: string; name: string; htmlLang: string; locale: string }> = {
  es: { short: 'ES', name: 'Castellano', htmlLang: 'es', locale: 'es_ES' },
  eu: { short: 'EU', name: 'Euskara', htmlLang: 'eu', locale: 'eu_ES' },
  en: { short: 'EN', name: 'English', htmlLang: 'en', locale: 'en_US' },
};

/** Extract the language from a pathname like `/Portfolio_aitor/eu/...`. */
export function getLang(url: URL): Lang {
  const p = url.pathname;
  if (/\/eu(\/|$)/.test(p)) return 'eu';
  if (/\/en(\/|$)/.test(p)) return 'en';
  return 'es';
}

export function getDict(url: URL) {
  return dicts[getLang(url)];
}

/** Build a URL for another locale, preserving the base path. */
export function buildLangUrl(currentUrl: URL, targetLang: Lang, baseUrl: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  if (targetLang === defaultLang) return base;
  return `${base}${targetLang}/`;
}

export const notesSegment: Record<Lang, string> = {
  es: 'notas',
  eu: 'oharrak',
  en: 'notes',
};

/** Build the URL for the notes index in a given locale. */
export function notesUrl(lang: Lang, baseUrl: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  const root = lang === defaultLang ? base : `${base}${lang}/`;
  return `${root}${notesSegment[lang]}/`;
}

export type Dict = typeof es;
