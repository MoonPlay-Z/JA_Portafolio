import gestorpos from "@/assets/gestorpos-web.png.asset.json";
import gestorposApp from "@/assets/gestorpos-app.jpg.asset.json";
import biomed from "@/assets/biomed.jpg.asset.json";
import uptp from "@/assets/uptp.jpg.asset.json";
import medica from "@/assets/plataforma-medica.jpg.asset.json";

export const personal = {
  name: "Juan Arcila",
  title: "Desarrollador Full-Stack Senior",
  email: "juanaac2003@gmail.com",
  whatsapp: "https://wa.me/584127723148",
  phone: "+58 412-7723148",
  linkedin: "https://linkedin.com/in/jadeveloper",
  github: "https://github.com/MoonPlay-Z",
  location: "Acarigua-Araure, Portuguesa, Venezuela",
};

export type StackItem = { name: string; version: string; use: string; icon: string };

export const stackGroups: { group: string; items: StackItem[] }[] = [
  {
    group: "Producción",
    items: [
      { name: "React", version: "^19.2.8", use: "UI", icon: "react" },
      { name: "react-dom", version: "^19.2.8", use: "Render", icon: "react" },
      { name: "react-router-dom", version: "^7.18.3", use: "Enrutado client-side", icon: "router" },
      { name: "react-icons", version: "^5.7.0", use: "Iconografía", icon: "react" },
      {
        name: "@material-tailwind/html",
        version: "^3.0.0-beta.7",
        use: "HTML de Material Tailwind",
        icon: "material",
      },
    ],
  },
  {
    group: "Desarrollo",
    items: [
      { name: "Vite", version: "^8.2.0", use: "Bundler / dev server", icon: "vite" },
      { name: "@vitejs/plugin-react", version: "^6.0.4", use: "JSX + Fast Refresh", icon: "vite" },
      { name: "Tailwind CSS", version: "^4.3.3", use: "Utilidades CSS", icon: "tailwind" },
      { name: "@tailwindcss/vite", version: "^4.3.3", use: "Tailwind con Vite", icon: "tailwind" },
      { name: "oxlint", version: "^1.75.0", use: "Linter", icon: "zap" },
      { name: "@types/react", version: "^19.2.x", use: "Tipados para editor", icon: "types" },
    ],
  },
  {
    group: "Backend y datos",
    items: [
      { name: "Node.js / Express", version: "4", use: "APIs REST", icon: "node" },
      { name: "NestJS + TypeScript", version: "—", use: "APIs empresariales", icon: "nest" },
      { name: "Prisma", version: "5", use: "ORM", icon: "prisma" },
      { name: "PostgreSQL", version: "—", use: "Base de datos relacional", icon: "postgres" },
      { name: "MongoDB", version: "—", use: "Base de datos documental", icon: "mongo" },
      { name: "PHP (MVC)", version: "—", use: "Sistemas académicos", icon: "php" },
    ],
  },
  {
    group: "Móvil, escritorio y calidad",
    items: [
      { name: "Capacitor", version: "6.2", use: "App Android (WebView)", icon: "capacitor" },
      { name: "Java + ML Kit", version: "—", use: "Puente nativo y escáner", icon: "android" },
      { name: "Electron", version: "—", use: "App de escritorio", icon: "electron" },
      { name: "Playwright", version: "—", use: "Pruebas E2E en 3 navegadores", icon: "playwright" },
      { name: "k6", version: "—", use: "Pruebas de carga", icon: "k6" },
      { name: "SCRUM / XP", version: "—", use: "Metodología", icon: "scrum" },
    ],
  },
];

export const skills = [
  { name: "React / Next.js", level: 90, icon: "react" },
  { name: "JavaScript / TypeScript", level: 90, icon: "typescript" },
  { name: "Scrum / XP", level: 90, icon: "scrum" },
  { name: "NestJS / Node.js", level: 85, icon: "nest" },
  { name: "PostgreSQL", level: 85, icon: "postgres" },
  { name: "MongoDB", level: 80, icon: "mongo" },
  { name: "Arquitectura e infraestructura", level: 80, icon: "layers" },
];

export type Project = {
  id: string;
  name: string;
  type: string;
  image: string;
  url: string;
  desc: string;
  stack: string[];
  year: string;
  role: string;
  ownership: string;
  problem: string;
  approach: string[];
  features: string[];
  outcomes: { value: string; label: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "gestorpos",
    image: gestorpos.url,
    name: "Gestor de Inventario & POS",
    type: "Desktop + Web",
    ownership: "Proyecto personal",
    stack: ["React 18", "Vite", "Node", "Express", "Prisma", "PostgreSQL", "JWT", "Electron"],
    url: "https://gestor-pos.netlify.app",
    desc: "Mi SaaS de POS e inventario offline-first: cobro en USD y VES, transacciones atómicas y roles por empresa.",
    year: "2026",
    role: "Creador y único desarrollador",
    problem:
      "Un comercio necesita cobrar y controlar su inventario aunque se caiga el internet, y en un país donde se cobra en bolívares con precios pensados en dólares.",
    approach: [
      "Multiempresa desde el modelo de datos: cada comercio ve solo sus productos, ventas y usuarios, con el mismo despliegue.",
      "Offline-first: la venta se registra en el equipo del vendedor y se sincroniza cuando hay conexión, con identificadores generados en el cliente para que el reintento no duplique una venta.",
      "Precios base en dólares y cobro en bolívares con la tasa guardada junto a la venta, para que un recibo no cambie de valor después.",
      "Transacciones atómicas: una venta descuenta inventario, registra el pago y deja el asiento de caja en la misma transacción de PostgreSQL.",
      "Sesiones con JWT y roles distintos para caja, administrador y dueño.",
    ],
    features: [
      "Punto de venta con carrito, descuentos y devoluciones",
      "Inventario con control de existencias y alertas",
      "Reportes de ventas por usuario, turno y método de pago",
      "Roles y permisos por empresa",
      "Cliente de escritorio con Electron",
    ],
    outcomes: [
      { value: "Offline", label: "la caja sigue cobrando sin internet" },
      { value: "USD + VES", label: "cobro en dos monedas con tasa guardada" },
      { value: "22", label: "tests unitarios de la lógica" },
      { value: "3", label: "navegadores cubiertos en Playwright" },
    ],
    gallery: [gestorpos.url, gestorposApp.url],
  },
  {
    id: "gestorpos-app",
    image: gestorposApp.url,
    name: "GestorPOS App Móvil",
    type: "Android",
    ownership: "Proyecto personal",
    stack: ["Capacitor", "Android", "Java", "ML Kit", "DownloadManager"],
    url: "https://gestor-pos.netlify.app",
    desc: "Mi app Android con escáner ML Kit y autoactualización de APK verificada con SHA-256 y firma.",
    year: "2026",
    role: "Creador y único desarrollador",
    problem:
      "El vendedor necesita cobrar y escanear en el mostrador, con el teléfono en la mano, sin depender de una tienda de aplicaciones para actualizarse.",
    approach: [
      "Capacitor sobre la misma interfaz web del POS: se reutiliza la lógica y se agrega solo lo que la web no puede hacer.",
      "Puente nativo en Java para la cámara: ML Kit lee el código en el dispositivo, sin subir la imagen a un servidor.",
      "Actualización automática del APK con DownloadManager, verificando SHA-256 y firma antes de instalar.",
    ],
    features: [
      "Escáner de códigos de barras con ML Kit",
      "Autoactualización de APK verificada (SHA-256 + firma)",
      "Misma lógica de venta y sincronización que el escritorio",
      "Funciona en el teléfono del vendedor, no solo en la caja",
    ],
    outcomes: [
      { value: "Nativo", label: "cámara y archivos con puente Java" },
      { value: "Sin tienda", label: "actualización propia verificada" },
      { value: "1 código", label: "mismo POS en web, escritorio y móvil" },
    ],
    gallery: [gestorposApp.url, gestorpos.url],
  },
  {
    id: "biomed",
    image: biomed.url,
    name: "Taller Electromedicina",
    type: "Web",
    ownership: "Proyecto personal",
    stack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    url: "https://biomed-sp.netlify.app",
    desc: "Plataforma propia para la gestión de un taller de equipos biomédicos.",
    year: "2023 – 2026",
    role: "Creador y único desarrollador",
    problem:
      "Un taller de equipos biomédicos llevaba el seguimiento de reparaciones fuera de un sistema: saber qué equipo entró, qué le hicieron y en qué estado está dependía de la memoria de cada técnico.",
    approach: [
      "Frontend en React con Tailwind, API en Node/Express y almacenamiento documental en MongoDB, que se adapta bien a fichas de equipo con campos distintos según el tipo de aparato.",
      "Órdenes de trabajo con estados, para que el seguimiento sea parte del flujo y no un reporte aparte.",
    ],
    features: [
      "Ficha por equipo con su historial",
      "Órdenes de trabajo con estados y responsable",
      "Vista de taller: qué está en reparación y qué está listo",
      "Interfaz responsive para usarla en el banco de trabajo",
    ],
    outcomes: [
      { value: "Historial", label: "cada equipo con su trazabilidad" },
      { value: "Estados", label: "reparación, pendiente y entregado" },
      { value: "Web", label: "accesible desde cualquier equipo del taller" },
    ],
    gallery: [biomed.url, medica.url],
  },
  {
    id: "uptp",
    image: uptp.url,
    name: "Sistema UPTP JJM",
    type: "Desktop + Web",
    ownership: "Proyecto personal",
    stack: ["PHP", "MVC", "PostgreSQL", "Bootstrap"],
    url: "https://uptpjjmontilla.com",
    desc: "Sistema propio de gestión académica universitaria: reportes, actas y títulos.",
    year: "2022 – 2025",
    role: "Creador y único desarrollador",
    problem:
      "Hacía falta que los reportes, actas y títulos de una universidad cuadraran entre sí, con fechas del ciclo académico que no se pueden mover.",
    approach: [
      "PHP con patrón MVC sobre PostgreSQL y Bootstrap en la interfaz, separando la lógica de reporte del resto del sistema.",
      "Entregas pequeñas con SCRUM y XP: los cambios entraban sin detener el servicio durante las semanas de actas y títulos.",
    ],
    features: [
      "Reportes por materia, sección y período",
      "Actas con cierre de evaluaciones",
      "Gestión de títulos",
      "Roles por departamento",
    ],
    outcomes: [
      { value: "Sin paradas", label: "cambios durante el ciclo académico" },
      { value: "Reportes", label: "actas y títulos del mismo dato" },
      { value: "3 años", label: "manteniendo el sistema en producción" },
    ],
    gallery: [uptp.url],
  },
  {
    id: "plataforma-medica",
    image: medica.url,
    name: "Plataforma Médica",
    type: "Web",
    ownership: "Proyecto personal",
    stack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    url: "https://biomed-sp.vercel.app",
    desc: "Plataforma médica propia con frontend React y API Node.",
    year: "2023",
    role: "Creador y único desarrollador",
    problem:
      "Hacer una plataforma médica con frontend React y API Node, desplegada de forma independiente del resto de los sistemas.",
    approach: [
      "Frontend React con Tailwind y API Node/Express sobre MongoDB, separando la interfaz del servicio para poder desplegarlas por separado.",
      "Autenticación de sesión en la API y datos de la plataforma servidos solo a usuarios con sesión válida.",
    ],
    features: [
      "Frontend React con Tailwind",
      "API Node/Express con sesión",
      "Despliegue independiente en Vercel",
      "Base documental en MongoDB",
    ],
    outcomes: [
      { value: "2 piezas", label: "interfaz y API desplegables por separado" },
      { value: "Sesión", label: "acceso controlado a los datos" },
      { value: "Vercel", label: "publicación continua" },
    ],
    gallery: [medica.url, biomed.url],
  },
];

export const experience = [
  {
    role: "Creador y único desarrollador",
    company: "GestorPOS (proyecto propio)",
    period: "Jun 2026 – presente",
    text: "SaaS POS multi-tenant con React, Node, Prisma y PostgreSQL; app Android con Capacitor; 22 tests unitarios, Playwright y k6.",
  },
  {
    role: "Desarrollador Web Full-Stack",
    company: "Proyectos propios",
    period: "Jun 2022 – presente",
    text: "Next.js con SSR/ISR, APIs NestJS + TypeScript, PostgreSQL/MongoDB y Tailwind CSS.",
  },
  {
    role: "Desarrollador de Sistemas Académicos",
    company: "UPTP Juan de Jesús Montilla",
    period: "Ago 2022 – Jun 2025",
    text: "PHP + MVC + PostgreSQL + Bootstrap; reportes, actas y títulos con SCRUM/XP.",
  },
  {
    role: "Desarrollador Web Full-Stack",
    company: "MPPP",
    period: "Mar 2020 – Jun 2022",
    text: "Plataforma de gestión de citas ciudadanas con Node.js y PostgreSQL.",
  },
  {
    role: "Técnico de Soporte e Infraestructura IT",
    company: "Compu-Ofertas",
    period: "Ene 2020 – presente",
    text: "Infraestructura y sistema interno de inventario con Node.js, Express y PostgreSQL.",
  },
];

export const education = {
  degree: "Ingeniería en Informática",
  place: "UPTP Juan de Jesús Montilla",
  period: "2020 – Jun 2025",
  languages: "Idiomas: español nativo, inglés conversacional.",
};

export const certifications = [
  {
    id: "valenvalley-2026",
    kind: "Certificado de asistencia",
    title: "ValenValley Hackathon 2026",
    summary:
      "26 horas de hackathon en equipo: idea, prototipo y demo. Participé con el equipo Bit & Byte.",
    team: "Bit & Byte",
    dates: "21 – 22 nov 2026 · 26 horas",
    place: "Linko Cowork, Torre El Camoruco, Valencia, Venezuela",
    issuer: "Emprende Más, C.A.",
    code: "VV-3RHV-GVUG-5XBE",
    verifyUrl: "https://valenvalley.com/verificar/VV-3RHV-GVUG-5XBE",
    pdfUrl: "/downloads/constancia-valenvalley-2026.pdf",
  },
];

export function findProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
