import React from 'react';
import { cvData } from '../data/cvData';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './CV.module.css';
import { useI18n } from '../i18n/locale';

export const CV = () => {
  // El idioma del CV ahora viene de la URL (/cv, /en/cv, /et/cv)
  const { lang, link, t } = useI18n();
  const data = cvData[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      
      {/* Barra de Control (no imprimible) */}
      <div className={`${styles.printHidden} max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow`}>
        <Link to={link('/')} className="flex items-center text-blue-600 hover:text-blue-800 font-medium gap-2">
          <FaArrowLeft /> {t.common.backHome}
        </Link>

        {/* Idioma actual */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm font-semibold">{t.common.language}:</span>
          <span className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white border border-blue-600">
            {t.meta.label}
          </span>
        </div>

        {/* Botón de descarga en PDF */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow transition-colors"
        >
          <FaDownload /> {data.contact.downloadButton}
        </button>
      </div>

      {/* Contenedor del Currículum (estilizado para pantalla e impresión) */}
      <div id="cv-print-area" className={`${styles.printArea} max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200`}>
        
        {/* Encabezado Principal / Banner */}
        <div className={`${styles.header} bg-gradient-to-r from-slate-800 to-blue-950 text-white p-8 sm:p-12`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className={`${styles.headerName} text-4xl font-extrabold tracking-tight sm:text-5xl`}>{data.personal.name}</h1>
              <p className={`${styles.headerRole} text-xl text-blue-400 font-semibold mt-2`}>{data.personal.title}</p>
            </div>
            
            {/* Datos Personales en el Header */}
            <div className={`${styles.headerContact} flex flex-col gap-2.5 text-sm text-gray-300 w-full md:w-auto border-t border-slate-700 pt-4 md:border-t-0 md:pt-0 md:items-end`}>
              <a href={`mailto:${data.personal.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope className="text-blue-400" /> {data.personal.email}
              </a>
              <a href={`tel:${data.personal.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhone className="text-blue-400" /> {data.personal.phone}
              </a>
              <a href={data.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaLinkedin className="text-blue-400" /> {data.personal.linkedin}
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" /> {data.personal.location}
              </div>
            </div>
          </div>
        </div>

        {/* Cuerpo del CV (Diseño de 2 Columnas) */}
        <div className={`${styles.body} grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200`}>
          
          {/* Columna Izquierda (Perfil, Competencias, Idiomas) */}
          <div className={`${styles.sidebar} p-8 bg-slate-50 md:col-span-1`}>
            
            {/* Perfil */}
            <div className={`${styles.section} mb-8`}>
              <h2 className={`${styles.sectionTitle} text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider`}>
                {data.profile.title}
              </h2>
              <p className={`${styles.bodyText} text-sm text-gray-600 leading-relaxed text-justify`}>
                {data.profile.description}
              </p>
            </div>

            {/* Competencias / Habilidades */}
            <div className={`${styles.section} mb-8`}>
              <h2 className={`${styles.sectionTitle} text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider`}>
                {data.skills.title}
              </h2>
              <div className="space-y-3">
                {data.skills.categories.map((skill, idx) => (
                  <div key={idx} className={`${styles.skillRow} flex items-center gap-3`}>
                    <span className={`${styles.skillBadge} bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full`}>
                      {skill.name}
                    </span>
                    <span className={`${styles.skillLevel} text-sm text-gray-600`}>
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className={`${styles.section} mb-6`}>
              <h2 className={`${styles.sectionTitle} text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider`}>
                {data.languages.title}
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {data.languages.items.map((langItem, idx) => (
                  <li key={idx} className="flex justify-between font-medium">
                    <span>{langItem.name}</span>
                    <span className={langItem.highlight ? "text-blue-600 font-semibold" : "text-gray-500"}>
                      {langItem.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Columna Derecha (Experiencia, Educación, Cursos) */}
          <div className={`${styles.main} p-8 md:col-span-2`}>
            
            {/* Experiencia Laboral */}
            <div className={styles.section}>
              <h2 className={`${styles.sectionTitle} text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-6 uppercase tracking-wider`}>
                {data.experience.title}
              </h2>
              <div className="space-y-8">
                {data.experience.items.map((job, idx) => (
                  <div key={idx} className={`${styles.job} relative pl-6 border-l-2 border-gray-200 last:border-l-0`}>
                    {/* Punto indicador de la línea de tiempo */}
                    <span className={`${styles.keepColor} absolute -left-1.5 top-1.5 bg-blue-600 w-3 h-3 rounded-full`}></span>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className={`${styles.jobRole} text-base font-bold text-gray-800`}>
                        {job.role}
                      </h3>
                      <span className={`${styles.period} text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold mt-1 sm:mt-0`}>
                        {job.period}
                      </span>
                    </div>
                    
                    <h4 className={`${styles.jobCompany} text-sm font-semibold text-blue-600 mb-3`}>
                      {job.company}
                    </h4>
                    
                    <ul className={`${styles.bullets} list-disc pl-5 text-xs text-gray-600 space-y-1.5 text-justify`}>
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div className={`${styles.section} mb-8`}>
              <h2 className={`${styles.sectionTitle} text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider`}>
                {data.education.title}
              </h2>
              <div className="space-y-4">
                {data.education.items.map((edu, idx) => (
                  <div key={idx} className={`${styles.block} flex justify-between items-start`}>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-xs text-gray-600 mt-1">{edu.institution} | {edu.location}</p>
                    </div>
                    <span className={`${styles.period} text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold`}>
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cursos y Certificaciones */}
            <div className={styles.section}>
              <h2 className={`${styles.sectionTitle} text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider`}>
                {data.courses.title}
              </h2>
              <div className="space-y-6">
                {data.courses.items.map((course, idx) => (
                  <div key={idx} className={styles.block}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{course.name}</h3>
                        <p className="text-xs text-blue-600 font-semibold">{course.institution}</p>
                      </div>
                      <span className={`${styles.period} text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold`}>
                        {course.date}
                      </span>
                    </div>
                    <ul className={`${styles.bullets} list-disc pl-5 text-xs text-gray-600 space-y-1`}>
                      {course.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
