import { useI18n } from '../i18n/locale';
import { LANGS } from '../i18n/translations';

const LABELS = { es: 'ES', en: 'EN', et: 'ET' };

export const LanguageSwitcher = ({ variant = 'dark' }) => {
  const { lang, setLang, t } = useI18n();

  const base =
    variant === 'dark'
      ? 'inline-flex items-center rounded-lg border border-white/20 overflow-hidden'
      : 'inline-flex items-center rounded-lg border border-gray-200 overflow-hidden bg-white';

  const btnBase =
    'px-2.5 py-1 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset';

  return (
    <div
      className={base}
      role="group"
      aria-label={t.common.language}
      title={t.common.language}
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-current={active ? 'true' : undefined}
            className={`${btnBase} ${
              active
                ? variant === 'dark'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-600 text-white'
                : variant === 'dark'
                  ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
};
