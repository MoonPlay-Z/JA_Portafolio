import React from 'react';
import biomedImage from "../assets/biomed-sp-1.webp";
import uptpJJM from "../assets/UPTP-Portada.webp";

export const CardProyectos = () => {
    const Proyectos = [
        {
            img: biomedImage,
            alt: "Proyecto Biomed",
            titulo: "Proyecto Biomed",
            descripcion: "Plataforma de gestión para el sector de biomedicina, con flujos interactivos de pacientes y reportes.",
            tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            link: "https://biomed-sp.netlify.app/"
        },
        {
            img: uptpJJM,
            alt: "Sistema UPTP JJM",
            titulo: "Sistema UPTP JJM",
            descripcion: "Sistema institucional de gestión académica, registro de calificaciones y generación de actas.",
            tecnologias: ["PHP", "MVC", "PostgreSQL", "Routes", "SEO"],
            link: "https://uptp.sytes.net/"
        },
        {
            img: biomedImage,
            alt: "Gestión Académica",
            titulo: "Gestión Académica",
            descripcion: "Panel de administración y control de procesos educativos con sincronización en tiempo real.",
            tecnologias: ["PHP", "MVC", "Node.js", "Express", "MongoDB"],
            link: "https://biomed-sp.vercel.app/"
        },
        {
            img: biomedImage,
            alt: "Plataforma Médica",
            titulo: "Plataforma Médica",
            descripcion: "Portal web responsivo y optimizado para la reserva de citas y gestión de expedientes de salud.",
            tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            link: "https://biomed-sp.vercel.app/"
        }
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
            {Proyectos.map((proyecto, index) => (
                <div 
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group" 
                    key={index}
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
                            Ver Proyecto
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
