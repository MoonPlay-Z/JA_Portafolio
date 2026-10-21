import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/locale';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
    const { t, link } = useI18n();

    const items = [
        { label: t.nav.home, to: link('/') },
        { label: t.nav.cv, to: link('/cv') },
        { label: t.nav.contact, to: link('/contact') },
    ];

    return (
        <header className="w-full bg-black/90 p-4 sticky top-0 z-50 shadow-md print:hidden">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link to={link('/')} className="text-2xl font-bold text-white sm:text-3xl">
                    {t.header.brand}
                </Link>

                <div className="flex items-center gap-4 sm:gap-6">
                    <nav className="font-bold text-white">
                        <ul className="flex flex-row gap-5 sm:gap-7">
                            {items.map((item) => (
                                <li key={item.to} className="hover:text-blue-400 transition-colors">
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LanguageSwitcher variant="dark" />
                </div>
            </div>
        </header>
    );
};
