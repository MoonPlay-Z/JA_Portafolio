import React, { useState } from 'react';
import { proyectosData } from "../data/proyectosData";
import { DetalleProyecto } from "./DetalleProyecto";
import { useI18n } from '../i18n/locale';

export const CardProyectos = () => {
    const { lang, t } = useI18n();
    const [detalle, setDetalle] = useState(null);

    const Proyectos = proyectosData[lang] || proyectosData.es;

    return (
        <>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
            {Proyectos.map((proyecto) => (
                <div
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                    key={proyecto.id}
                >
                    {/* Contenedor de la Imagen con zoom */}
                    <div className="overflow-hidden aspect-video relative">
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src={proyecto.img}
                            alt={proyecto.alt}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        {/* Badge de tipo de proyecto */}
                        {proyecto.badge && (
                            <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md uppercase tracking-wide">
                                {proyecto.badge}
                            </span>
                        )}
                    </div>

                    {/* Información del Proyecto */}
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {proyecto.titulo}
                        </h3>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-3 text-justify flex-grow">
                            {proyecto.descripcion}
                        </p>

                        {/* Listado de Badges de Tecnologías */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {proyecto.tecnologias.map((tech, tIdx) => (
                                <span
                                    key={tIdx}
                                    className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded transition-colors hover:bg-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Botón de Enlace */}
                        <a
                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 shadow hover:shadow-md"
                            href={proyecto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.projects.viewProject}
                        </a>

                        {/* Botón de detalle */}
                        {proyecto.detalle && (
                            <button
                                onClick={() => setDetalle({ lang, datos: proyecto.detalle[lang] || proyecto.detalle.es })}
                                className="block w-full text-center bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-600 font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 mt-2"
                            >
                                {t.projects.viewCase}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>

        <DetalleProyecto proyecto={detalle} onClose={() => setDetalle(null)} />
        </>
    )
}
