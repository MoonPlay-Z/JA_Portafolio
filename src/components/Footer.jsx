import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna 1: Información */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wider">JA Developer</h2>
            <p className="text-sm text-gray-400">
              Construyendo experiencias digitales excepcionales con React y Tailwind CSS.
            </p>
          </div>

          
          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/MoonPlay-Z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Copyright y cierre con entidad HTML &copy; y año dinámico */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="break-words text-center sm:text-left">&copy; {new Date().getFullYear()} ING. Juan Arcila. Todos los derechos reservados.</p>
          
        </div>

      </div>
    </footer>
  );
}

