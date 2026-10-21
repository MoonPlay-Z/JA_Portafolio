import { useEffect, useRef } from "react";
import { translations } from '../i18n/translations';
import {
  FaTimes,
  FaLayerGroup,
  FaShoppingCart,
  FaMobileAlt,
  FaUserShield,
  FaExternalLinkAlt,
  FaGithub,
  FaQuoteLeft,
  FaBoxes,
  FaCheckCircle,
  FaServer,
  FaGlobe
} from "react-icons/fa";

const iconosArquitectura = {
  Clientes: FaGlobe,
  Frontend: FaLayerGroup,
  Backend: FaServer,
  Datos: FaBoxes,
  "Servicios externos": FaExternalLinkAlt
};

const SectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2.5 mb-4">
    <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
      <Icon size={15} />
    </span>
    <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{children}</h3>
  </div>
);

const Chip = ({ children, tone = "slate" }) => {
  const tones = {
    slate: "bg-slate-100 text-slate-600",
    blue: "bg-blue-50 text-blue-700 border border-blue-100",
    green: "bg-green-50 text-green-700 border border-green-100"
  };
  return (
    <span className={`${tones[tone]} text-xs font-semibold px-2.5 py-1 rounded-md`}>{children}</span>
  );
};

export const DetalleProyecto = ({ proyecto, onClose }) => {
  // Ref para que el listener de teclado no dependa de la identidad de onClose
  // (si no, el efecto se re-ejecuta en cada render y salta el scroll).
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    // Solo bloqueamos el scroll si el modal está realmente abierto.
    // Antes, el useEffect corría en el mount y dejaba el body con overflow
    // hidden para siempre, aunque el modal nunca se abriera.
    if (!proyecto) return;

    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;

    // Compensamos el ancho de la scrollbar para evitar salto de layout
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKey = (e) => e.key === "Escape" && onCloseRef.current();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
      window.removeEventListener("keydown", onKey);
    };
  }, [proyecto]);

  if (!proyecto) return null;
  const lang = proyecto.lang || 'es';
  const t = translations[lang]?.detail || translations.es.detail;
  // Los datos del proyecto vienen indexados por idioma
  const d = proyecto.datos || proyecto;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${t.summary}: ${d.titulo}`}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        {d.headerEstilo === 'app' ? (
          /* Cabecera tipo app: gradiente + mockup de teléfono flotante */
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-900 text-white px-5 sm:px-8 py-6 sm:py-8">
            <button
              onClick={onClose}
              aria-label={t.close}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{d.titulo}</h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium mt-1">{d.subtitulo}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {d.badges.map((b) => (
                    <span key={b} className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              {/* Mockup del teléfono con la captura principal */}
              <div className="hidden sm:block w-28 lg:w-32 shrink-0">
                <div className="rounded-[1.4rem] border-[3px] border-white/25 bg-slate-900 p-1 shadow-2xl">
                  <img src={d.imagen} alt={d.titulo} className="w-full rounded-[1rem] block" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img src={d.portada || d.imagen} alt={d.titulo} className="w-full h-40 sm:h-52 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
            <button
              onClick={onClose}
              aria-label={t.close}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <FaTimes />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{d.titulo}</h2>
              <p className="text-sm sm:text-base text-blue-300 font-medium mt-1">{d.subtitulo}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {d.badges.map((b) => (
                  <Chip key={b} tone="blue">{b}</Chip>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-8 space-y-10">
          {/* Resumen */}
          <section>
            <SectionTitle icon={FaShoppingCart}>{t.summary}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.resumen.map((r) => (
                <div key={r.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-1.5">{r.titulo}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* El sistema en una voz */}
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-white/10 text-blue-300 flex items-center justify-center">
                <FaQuoteLeft />
              </span>
              <h3 className="text-xl font-extrabold tracking-tight">{t.voice}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed text-justify">{d.monologo}</p>
            {d.headerEstilo !== 'app' && d.capturas?.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-6">
                {d.capturas.map((c, i) => (
                  <img
                    key={i}
                    src={c}
                    alt={`${d.titulo} captura ${i + 1}`}
                    className="w-full h-28 sm:h-36 object-cover rounded-lg border border-white/10"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </section>

          {/* Capturas de la app en mockups de teléfono */}
          {d.headerEstilo === 'app' && d.capturas?.length > 0 && (
            <section>
              <SectionTitle icon={FaMobileAlt}>{t.screenshots}</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {d.capturas.map((c, i) => (
                  <figure key={i} className="flex flex-col items-center">
                    <div className="rounded-[1.5rem] border-[3px] border-slate-800 bg-slate-800 p-1.5 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={c}
                        alt={`${d.titulo} captura ${i + 1}`}
                        className="w-full rounded-[1.1rem] block"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-2.5 text-center text-xs font-semibold text-gray-500">
                      {t.captureNames[i] || `${d.titulo} ${i + 1}`}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Arquitectura */}
          <section>
            <SectionTitle icon={FaLayerGroup}>{t.architecture}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.arquitectura.map((a) => {
                const Icon = iconosArquitectura[a.nombre] || FaServer;
                return (
                  <div key={a.nombre} className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                        <Icon size={15} />
                      </span>
                      <h4 className="font-bold text-gray-900">{a.nombre}</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{a.detalle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {a.items.map((it) => (
                        <Chip key={it}>{it}</Chip>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Flujo de una venta */}
          <section>
            <SectionTitle icon={FaCheckCircle}>{t.flow}</SectionTitle>
            <ol className="space-y-3">
              {d.flujoVenta.map((f) => (
                <li key={f.paso} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                    {f.paso}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{f.titulo}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{f.detalle}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Autoactualización */}
          <section>
            <SectionTitle icon={FaMobileAlt}>{t.update}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {d.actualizacion.map((a, i) => (
                <div key={a.estado} className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    {i + 1}. {a.estado}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1.5">{a.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack tecnológico */}
          {d.stack?.length > 0 && (
            <section>
              <SectionTitle icon={FaServer}>{t.stack}</SectionTitle>
            <div className="space-y-5">
              {d.stack.map((g) => (
                <div key={g.capa}>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">{g.capa}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                          <th className="px-4 py-2.5 font-semibold">{t.technology}</th>
                          <th className="px-4 py-2.5 font-semibold">{t.version}</th>
                          <th className="px-4 py-2.5 font-semibold">{t.purpose}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {g.items.map(([tec, ver, uso], i) => (
                          <tr key={tec} className={i % 2 ? "bg-gray-50/60" : "bg-white"}>
                            <td className="px-4 py-2.5 font-semibold text-gray-800">{tec}</td>
                            <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">{ver}</td>
                            <td className="px-4 py-2.5 text-gray-600">{uso}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            </section>
            )}

          {/* Roles */}
          {d.roles?.length > 0 && (
          <section>
            <SectionTitle icon={FaUserShield}>{t.roles}</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-4 py-2.5 font-semibold">{t.role}</th>
                    <th className="px-4 py-2.5 font-semibold">{t.scopeLabel}</th>
                    <th className="px-4 py-2.5 font-semibold">{t.canDo}</th>
                  </tr>
                </thead>
                <tbody>
                  {d.roles.map(([rol, alcance, puede], i) => (
                    <tr key={rol} className={i % 2 ? "bg-gray-50/60" : "bg-white"}>
                      <td className="px-4 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{rol}</td>
                      <td className="px-4 py-2.5 text-gray-500">{alcance}</td>
                      <td className="px-4 py-2.5 text-gray-600">{puede}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* CTA */}
          <section className="flex flex-wrap gap-3 pt-2">
            {d.enlaces.map((e) => {
              const Icon = e.url.includes("github") ? FaGithub : FaExternalLinkAlt;
              return (
                <a
                  key={e.url}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors shadow hover:shadow-md"
                >
                  <Icon /> {e.etiqueta}
                </a>
              );
            })}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              <FaTimes /> Cerrar
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
