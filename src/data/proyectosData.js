import biomedImage from "../assets/biomed-sp-1.webp";
import uptpJJM from "../assets/UPTP-Portada.webp";
import gestorPOS from "../assets/GestorPOS.webp";
import gestorPOSApp from "../assets/GestorPOS app.jpeg";
import { gestorposData } from "./gestorposData";
import { gestorposAppData } from "./gestorposAppData";

// Lista de proyectos destacados con sus textos en los 3 idiomas del sitio.
export const proyectosData = {
  es: [
    {
      id: "gestorpos",
      img: gestorPOS,
      alt: "Gestor de Inventario & POS SaaS",
      titulo: "Gestor de Inventario & POS",
      descripcion:
        "Plataforma SaaS multi-tenant de punto de venta y gestión de inventario. Arquitectura fullstack con API REST, autenticación JWT, control de roles y empaquetado como aplicación de escritorio cross-platform con Electron.",
      tecnologias: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT", "Electron", "SCRUM"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Desktop + Web",
      detalle: gestorposData
    },
    {
      id: "gestorpos-app",
      img: gestorPOSApp,
      alt: "GestorPOS App Móvil",
      titulo: "GestorPOS App Móvil",
      descripcion:
        "Aplicación Android nativa con Capacitor para el POS y el inventario: escáner ML Kit, pantalla completa y autoactualización verificada (SHA-256 + firma).",
      tecnologias: ["Capacitor", "Android", "Java", "ML Kit", "DownloadManager"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Android",
      detalle: gestorposAppData
    },
    {
      id: "biomed",
      img: biomedImage,
      alt: "Proyecto Taller Electromidicina",
      titulo: "Proyecto Taller Electromidicina",
      descripcion:
        "Plataforma de gestión para el sector de biomedicina, con flujos interactivos de pacientes y reportes.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.netlify.app/",
      badge: "Web"
    },
    {
      id: "uptp",
      img: uptpJJM,
      alt: "Sistema UPTP JJM",
      titulo: "Sistema UPTP JJM",
      descripcion:
        "Sistema institucional de gestión académica, registro de calificaciones y generación de actas universitarias.",
      tecnologias: ["PHP", "MVC", "PostgreSQL", "Bootstrap", "Routes"],
      link: "https://uptpjjmontilla.com/",
      badge: "Desktop + Web"
    },
    {
      id: "plataforma-medica",
      img: biomedImage,
      alt: "Plataforma Médica",
      titulo: "Plataforma Médica",
      descripcion:
        "Portal web responsivo y optimizado para la reserva de citas y gestión de expedientes de salud.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.vercel.app/",
      badge: "Web"
    }
  ],

  en: [
    {
      id: "gestorpos",
      img: gestorPOS,
      alt: "Inventory & POS SaaS",
      titulo: "Inventory & POS Manager",
      descripcion:
        "Multi-tenant point of sale and inventory management SaaS. Fullstack architecture with a REST API, JWT authentication, role-based access control and packaging as a cross-platform desktop app with Electron.",
      tecnologias: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT", "Electron", "SCRUM"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Desktop + Web",
      detalle: gestorposData
    },
    {
      id: "gestorpos-app",
      img: gestorPOSApp,
      alt: "GestorPOS Mobile App",
      titulo: "GestorPOS Mobile App",
      descripcion:
        "Native Android app built with Capacitor for the POS and inventory: ML Kit barcode scanner, full-screen mode and verified self-update (SHA-256 + signature).",
      tecnologias: ["Capacitor", "Android", "Java", "ML Kit", "DownloadManager"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Android",
      detalle: gestorposAppData
    },
    {
      id: "biomed",
      img: biomedImage,
      alt: "Electromedicine Workshop Project",
      titulo: "Electromedicine Workshop Project",
      descripcion:
        "Management platform for the biomedicine sector, with interactive patient workflows and reporting.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.netlify.app/",
      badge: "Web"
    },
    {
      id: "uptp",
      img: uptpJJM,
      alt: "UPTP JJM System",
      titulo: "UPTP JJM System",
      descripcion:
        "Institutional academic management system: grade registration and automated generation of university transcripts.",
      tecnologias: ["PHP", "MVC", "PostgreSQL", "Bootstrap", "Routes"],
      link: "https://uptpjjmontilla.com/",
      badge: "Desktop + Web"
    },
    {
      id: "plataforma-medica",
      img: biomedImage,
      alt: "Medical Platform",
      titulo: "Medical Platform",
      descripcion:
        "Responsive web portal optimized for appointment booking and health record management.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.vercel.app/",
      badge: "Web"
    }
  ],

  et: [
    {
      id: "gestorpos",
      img: gestorPOS,
      alt: "Laohalduse ja kassa SaaS",
      titulo: "Laohalduse ja kassa SaaS",
      descripcion:
        "Mitme ettevõtja kassa- ja laohalduse SaaS. Täislahenduse arhitektuur REST API-ga, JWT-autentimisega, rollipõhise juurdepääsukontrolliga ja Electroniga ristplatvormse töölauarakendusena pakendatuna.",
      tecnologias: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT", "Electron", "SCRUM"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Desktop + Web",
      detalle: gestorposData
    },
    {
      id: "gestorpos-app",
      img: gestorPOSApp,
      alt: "GestorPOS mobiilirakendus",
      titulo: "GestorPOS mobiilirakendus",
      descripcion:
        "Capacitoriga ehitatud looduslik Androidi rakendus kassa ja laohalduse jaoks: ML Kit voodikoodi skanner, täisekraanirežiim ning kontrollitud iseuuendus (SHA-256 + allkiri).",
      tecnologias: ["Capacitor", "Android", "Java", "ML Kit", "DownloadManager"],
      link: "https://gestor-pos.netlify.app/",
      badge: "Android",
      detalle: gestorposAppData
    },
    {
      id: "biomed",
      img: biomedImage,
      alt: "Elektromeditsiini meistri projekt",
      titulo: "Elektromeditsiini meistri projekt",
      descripcion:
        "Biomeditsiinisektori haldusplatvorm interaktiivsete patsiendivoogude ja aruandlusega.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.netlify.app/",
      badge: "Web"
    },
    {
      id: "uptp",
      img: uptpJJM,
      alt: "UPTP JJM süsteem",
      titulo: "UPTP JJM süsteem",
      descripcion:
        "Akadeemiline haldussüsteem: hinnete registreerimine ja ülikooli õpingukaartide automaatne genereerimine.",
      tecnologias: ["PHP", "MVC", "PostgreSQL", "Bootstrap", "Routes"],
      link: "https://uptpjjmontilla.com/",
      badge: "Desktop + Web"
    },
    {
      id: "plataforma-medica",
      img: biomedImage,
      alt: "Meditsiiniline platvorm",
      titulo: "Meditsiiniline platvorm",
      descripcion:
        "Responsiivne veebportaal, mis on optimeeritud vastuvõtuaegade broneerimiseks ja terviseandmete haldamiseks.",
      tecnologias: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      link: "https://biomed-sp.vercel.app/",
      badge: "Web"
    }
  ]
};
