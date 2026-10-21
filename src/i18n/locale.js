import { createContext, useContext } from 'react';
import { LANGS, DEFAULT_LANG } from './translations';

// Contexto de idioma (separado del Provider para mantener Fast Refresh limpio)
export const LanguageContext = createContext(null);

/** Extrae el idioma del path: /en/cv -> en, /cv -> es (por defecto) */
export function localeFromPath(pathname) {
  const segment = pathname.split('/')[1];
  return LANGS.includes(segment) ? segment : DEFAULT_LANG;
}

/** Construye un path con prefijo de idioma: ('/cv', 'en') -> '/en/cv' */
export function pathWithLocale(pathname, lang) {
  const rest = pathname.replace(/^\/(es|en|et)/, '') || '';
  const clean = rest.startsWith('/') ? rest : `/${rest}`;
  return lang === DEFAULT_LANG ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n debe usarse dentro de <LanguageProvider>');
  return ctx;
}
