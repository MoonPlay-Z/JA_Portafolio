import { useMemo, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, LANGS, DEFAULT_LANG } from './translations';
import { LanguageContext, localeFromPath, pathWithLocale } from './locale';

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = localeFromPath(location.pathname);

  // Mantiene el atributo lang del <html> sincronizado para SEO y accesibilidad
  useEffect(() => {
    document.documentElement.lang = translations[lang].meta.htmlLang;
  }, [lang]);

  const setLang = useCallback(
    (next) => {
      if (!LANGS.includes(next) || next === lang) return;
      navigate(pathWithLocale(location.pathname, next));
    },
    [lang, location.pathname, navigate]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      isDefault: lang === DEFAULT_LANG,
      /** Ruta localizada para un path interno (ej: '/cv') */
      link: (path) => pathWithLocale(path, lang),
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
