export type Lang = 'en' | 'mr';
export type L = Record<Lang, string>;
export const l = (en: string, mr: string): L => ({ en, mr });

export const LANGS: Lang[] = ['en', 'mr'];

/** Path with language prefix. Paths are written without a language, e.g. "/products/". */
export function href(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'mr' ? `/mr${clean}` : clean;
}

/** Marathi-medium digits for prose. Grades on packs stay in Latin digits, as printed. */
export function deva(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => '०१२३४५६७८९'[Number(d)]);
}

export const num = (lang: Lang, value: string | number) => (lang === 'mr' ? deva(value) : String(value));
