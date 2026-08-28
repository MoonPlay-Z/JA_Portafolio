import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CV = () => {
  const [lang, setLang] = useState('es'); // Idioma inicial: español
  const data = cvData[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      
      {/* Barra de Control (no imprimible) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow print:hidden">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-medium gap-2">
          <FaArrowLeft /> Volver al Inicio
        </Link>
        
        {/* Selector de idioma */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm font-semibold">Idioma / Keel:</span>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setLang('es')}
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                lang === 'es'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              Español
            </button>
            <button
              onClick={() => setLang('en')}
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b ${
                lang === 'en'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('et')}
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                lang === 'et'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              Eesti
            </button>
          </div>
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
      <div id="cv-print-area" className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 print:shadow-none print:border-none print:w-full">
        
        {/* Encabezado Principal / Banner */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-950 text-white p-8 sm:p-12 print:bg-slate-900 print:text-white print:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl print:text-3xl">{data.personal.name}</h1>
              <p className="text-xl text-blue-400 font-semibold mt-2 print:text-lg">{data.personal.title}</p>
            </div>
            
            {/* Datos Personales en el Header */}
            <div className="flex flex-col gap-2.5 text-sm text-gray-300 w-full md:w-auto border-t border-slate-700 pt-4 md:border-t-0 md:pt-0 md:items-end">
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
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Columna Izquierda (Perfil, Competencias, Idiomas, Datos Adicionales) */}
          <div className="p-8 bg-slate-50 md:col-span-1 print:p-4 print:bg-white">
            
            {/* Perfil (Solo visible aquí en pantallas móviles si se quiere, pero para consistencia se muestra arriba o a la derecha) */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider">
                {data.profile.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                {data.profile.description}
              </p>
            </div>

            {/* Competencias / Habilidades */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider">
                {data.skills.title}
              </h2>
              <div className="space-y-3">
                {data.skills.categories.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider">
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
          <div className="p-8 md:col-span-2 print:p-4">
            
            {/* Experiencia Laboral */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-6 uppercase tracking-wider">
                {data.experience.title}
              </h2>
              <div className="space-y-8">
                {data.experience.items.map((job, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                    {/* Punto indicador de la línea de tiempo */}
                    <span className="absolute -left-1.5 top-1.5 bg-blue-600 w-3 h-3 rounded-full"></span>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="text-base font-bold text-gray-800">
                        {job.role}
                      </h3>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold mt-1 sm:mt-0 print:border print:border-gray-300">
                        {job.period}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-blue-600 mb-3">
                      {job.company}
                    </h4>
                    
                    <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1.5 text-justify">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider">
                {data.education.title}
              </h2>
              <div className="space-y-4">
                {data.education.items.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-xs text-gray-600 mt-1">{edu.institution} | {edu.location}</p>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold print:border print:border-gray-300">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cursos y Certificaciones */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 uppercase tracking-wider">
                {data.courses.title}
              </h2>
              <div className="space-y-6">
                {data.courses.items.map((course, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{course.name}</h3>
                        <p className="text-xs text-blue-600 font-semibold">{course.institution}</p>
                      </div>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-semibold print:border print:border-gray-300">
                        {course.date}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
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

      {/* Estilos CSS específicos para la impresión (esconder elementos interactivos y ajustar a A4) */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          /* Esconder absolutamente todo en la página */
          body * {
            visibility: hidden !important;
          }
          /* Hacer visible únicamente el contenedor del CV y todos sus elementos internos */
          #cv-print-area, #cv-print-area * {
            visibility: visible !important;
          }
          /* Posicionar y estirar el CV al tope izquierdo de la página para la impresión */
          #cv-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:w-full {
            width: 100% !important;
            max-width: 100% !important;
          }
          .print\\:bg-slate-900 {
            background-color: #0f172a !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:text-white {
            color: white !important;
          }
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          .print\\:p-4 {
            padding: 1rem !important;
          }
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:border {
            border: 1px solid #e2e8f0 !important;
          }
          /* Ajuste para que imprima las barras de habilidades */
          .bg-blue-600 {
            background-color: #2563eb !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .bg-gray-200 {
            background-color: #e5e7eb !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
    </div>
  );
};
