import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import bannerImage from '../assets/banner.webp';

export const Banner = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[560px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      
      <div className="relative text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 sm:py-16">
        
        {/* Nombre y Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
          Juan Arcila
        </h1>
        <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-4">
          Ingeniero en Informática &amp; Desarrollador Full-Stack Senior
        </p>
        <p className="text-sm sm:text-base text-blue-300 font-medium mb-6">
          React.js · Next.js · NestJS · Node.js · PostgreSQL · TypeScript
        </p>

        {/* Mensaje profesional para reclutadores */}
        <div className="max-w-2xl mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6">
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed text-justify">
            Ingeniero de software con +5 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. 
            Especializado en arquitectura frontend con <strong className="text-blue-400">React.js/Next.js</strong> y backend con <strong className="text-blue-400">NestJS/Node.js</strong> y <strong className="text-blue-400">PostgreSQL</strong>. 
            Disponible para oportunidades de contratación directa, freelance o consultoría técnica en equipos de desarrollo ágiles (SCRUM/XP).
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-xs font-bold">Disponibilidad Inmediata</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-gray-300">Remoto · Híbrido · Relocalización</span>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Link to="/cv" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
            Ver Currículum / CV
          </Link>
          <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm sm:text-base">
            Contactar
          </Link>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mr-1">Connect:</span>
          <a 
            href="https://linkedin.com/in/jadeveloper" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn de Juan Arcila"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-500 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="https://github.com/MoonPlay-Z" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub de Juan Arcila"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-700 border border-white/20 hover:border-gray-500 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="mailto:arcila.juan10@gmail.com" 
            aria-label="Enviar correo a Juan Arcila"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 border border-white/20 hover:border-red-500 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
          >
            <FaEnvelope size={18} />
          </a>
          <a 
            href="https://wa.me/584127723148" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactar por WhatsApp"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 border border-white/20 hover:border-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}