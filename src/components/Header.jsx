import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="w-full bg-black/90 p-4 sticky top-0 z-50 shadow-md print:hidden">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link to="/" className="text-2xl font-bold text-white sm:text-3xl">
                    JA<span className="bg-gradient-to-r from-blue-600 via-[#00F0FF] to-[#0088FF] bg-clip-text text-transparent">.dev</span>
                </Link>

                <nav className="font-bold text-white">
                    <ul className="flex flex-row gap-6 sm:gap-8">
                        <li className="hover:text-blue-400 transition-colors"><Link to="/">Inicio</Link></li>
                        <li className="hover:text-blue-400 transition-colors"><Link to="/cv">CV / Experiencia</Link></li>
                        <li className="hover:text-blue-400 transition-colors"><Link to="/contact">Contactar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};