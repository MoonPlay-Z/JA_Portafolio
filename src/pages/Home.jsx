import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from './banner';
import { Proyectos } from './Proyectos';
import { useI18n } from '../i18n/locale';

export const Home = () => {
  const { t, link } = useI18n();

  return (
    <main className="flex-grow bg-gray-50">
      <Banner />

      {/* Sección de Resumen Técnico y Disponibilidad */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Resumen Técnico enfocado en el stack */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {t.home.summaryTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg text-justify">
                {t.home.summaryP1}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg text-justify">
                {t.home.summaryP2}
              </p>
              
              {/* Badges de Tecnologías */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['React.js', 'Next.js', 'NestJS', 'Node.js', 'PostgreSQL', 'TypeScript', 'MongoDB', 'SCRUM / XP'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 transition-colors hover:bg-blue-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjeta de Disponibilidad Profesional */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-slate-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-slate-700 pb-3">
                  {t.home.statusTitle}
                </h3>
                
                <ul className="space-y-4">
                  {/* Disponibilidad Inmediata */}
                  <li className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-bold text-green-400">{t.home.available}</span>
                  </li>
                  
                  {/* Remoto, Híbrido, Presencial */}
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-sm font-medium">{t.home.remote}</span>
                  </li>
                  
                  {/* Relocalización */}
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span className="text-sm font-medium">{t.home.relocation}</span>
                  </li>
                  
                  {/* Permiso de trabajo */}
                  <li className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-lg border border-slate-700/30">
                    <span className="text-amber-400 font-bold">⚠</span>
                    <span className="text-xs text-gray-300 leading-normal">
                      {t.home.visaWarning}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4">
                <Link to={link('/cv')} className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors shadow">
                  {t.home.cvButton}
                </Link>
                <Link to={link('/contact')} className="flex-1 text-center bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold py-2.5 px-4 rounded-lg text-sm transition-colors">
                  {t.home.contactButton}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {t.home.projectsTitle}
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm">
            {t.home.projectsSubtitle}
          </p>
        </div>
        <Proyectos />
      </section>
    </main>
  );
};
