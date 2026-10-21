export const cvData = {
  es: {
    personal: {
      name: "Juan Arcila",
      title: "Ingeniero en Informática | Desarrollador Full-Stack Senior (React, Next.js, NestJS, PostgreSQL) | Remoto & Relocalización Europa",
      email: "juanaac2003@gmail.com",
      phone: "+58 412-7723148",
      linkedin: "linkedin.com/in/jadeveloper",
      linkedinUrl: "https://linkedin.com/in/jadeveloper",
      location: "Venezuela",
      github: "https://github.com/MoonPlay-Z",
    },
    profile: {
      title: "Perfil Profesional",
      description: "Ingeniero en Informática y Desarrollador Full-Stack con una sólida trayectoria en desarrollo web, especializado en la creación de aplicaciones altamente escalables con React.js, Next.js, NestJS, Node.js y PostgreSQL. Amplia competencia en la arquitectura y optimización de bases de datos relacionales y no relacionales, así como en la aplicación de metodologías ágiles (SCRUM y XP) en entornos de desarrollo de alto rendimiento. Profesional responsable, proactivo y orientado al detalle, con habilidades de liderazgo técnico y el compromiso de involucrarse en todo el ciclo de vida del software para asegurar la excelencia tecnológica.",
    },
    education: {
      title: "Formación Académica",
      items: [
        {
          degree: "Ingeniería en Informática",
          institution: "Universidad UPTP Juan de Jesús Montilla",
          location: "Venezuela",
          period: "2020 - Jun 2025",
        }
      ]
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        {
          role: "Creador y Lead Developer — GestorPOS (POS e Inventario SaaS)",
          company: "GestorPOS · Proyecto propio (plataforma multiempresa)",
          period: "Jun 2026 - Presente",
          responsibilities: [
            "Diseñé y construí desde cero GestorPOS, un SaaS multi-inquilino de punto de venta y gestión de inventario para Venezuela: frontend en React 18 y Vite, API REST en Node.js/Express sobre Prisma y PostgreSQL.",
            "Modelé el núcleo transaccional: ventas idempotentes mediante requestId, bloqueo de filas con SELECT … FOR UPDATE y aritmética monetaria exacta con decimal.js, blindando la integridad ante operaciones concurrentes.",
            "Implementé la lógica multimoneda: cada empresa opera con su propia tasa del BCV y todos los importes se normalizan a USD, con tolerancia de redondeo explícita en los pagos.",
            "Construí el POS offline-first con cola de ventas en el dispositivo y reintento automático al recuperar la conexión, operándolo con una sola mano desde el teléfono.",
            "Desarrollé la app Android con Capacitor (escáner nativo con ML Kit, pantalla completa y descarga nativa) e implementé un sistema de autoactualización que verifica SHA-256, paquete, versión y firma antes de instalar el APK.",
            "Definí el modelo de acceso por roles (SUPER_ADMIN, EMPRESA, CAJA, INVENTARIO, VISOR) más una API B2B autenticada por X-Api-Key, con rate limiting y rotación de refresh tokens.",
            "Aseguré la calidad con 22 pruebas unitarias del dominio (node:test), suites E2E en Playwright sobre tres navegadores y escenarios de carga concurrentes con k6.",
            "Orquesté el despliegue continuo en Netlify (SPA, manifiesto y distribución del APK) con la API en Render y PostgreSQL en Neon, bajo metodología ágil SCRUM/XP."
          ]
        },
        {
          role: "Desarrollador de Sistemas de Gestión Académica",
          company: "Universidad UPTP Juan de Jesús Montilla",
          period: "Ago 2022 - Jun 2025",
          responsibilities: [
            "Lideré el desarrollo y mantenimiento del Sistema de Administración y Registro de Calificaciones, construido con PHP bajo arquitectura MVC con sistema de enrutamiento (Routes) y frontend con Bootstrap.",
            "Diseñé y optimicé la arquitectura de base de datos relacional con PostgreSQL, garantizando la integridad de datos académicos de múltiples sedes.",
            "Desarrollé e implementé módulos críticos para la generación automatizada de reportes académicos, actas de notas y títulos universitarios.",
            "Trabajé bajo metodologías ágiles (SCRUM/XP) coordinando con equipos multidisciplinarios para cumplir con los plazos institucionales."
          ]
        },
        {
          role: "Desarrollador Web Full-Stack",
          company: "MPPP (Ministerio del Poder Popular de Planificación)",
          period: "Mar 2020 - Jun 2022",
          responsibilities: [
            "Diseñé, desarrolló y desplegó una plataforma web corporativa de Gestión y Control de Citas ciudadanas.",
            "Implementé el backend utilizando Node.js (con arquitectura modular inspirada en NestJS) y PostgreSQL, optimizando las consultas SQL complejas para reducir tiempos de respuesta.",
            "Garanticé un flujo seguro de autenticación y manejo de datos confidenciales de usuarios."
          ]
        },
        {
          role: "Desarrollador Web Freelance",
          company: "Proyectos Independientes (React, Next.js & NestJS)",
          period: "Jun 2022 - Presente",
          responsibilities: [
            "Desarrollo de extremo a extremo de plataformas e-commerce y aplicaciones web modernas utilizando Next.js para mejorar el SEO y rendimiento (SSR/ISR).",
            "Construcción de APIs robustas utilizando NestJS (TypeScript) con persistencia de datos en PostgreSQL y MongoDB.",
            "Optimización de diseño responsivo móvil (Mobile-first) y aplicación de mejores prácticas de UI/UX con Tailwind CSS."
          ]
        },
        {
          role: "Técnico de Soporte e Infraestructura IT (Medio Tiempo)",
          company: "Compu-Ofertas",
          period: "Ene 2020 - Presente",
          responsibilities: [
            "Ejecución de mantenimiento preventivo y correctivo de infraestructura de hardware y software corporativa.",
            "Diseño y desarrollo de un software interno para el control y automatización de inventario utilizando Node.js, Express y PostgreSQL.",
            "Diagnóstico de fallos técnicos en servidores locales, redes de datos y periféricos para minimizar tiempos de inactividad."
          ]
        }
      ]
    },
    skills: {
      title: "Competencias Técnicas",
      categories: [
        { name: "React.js / Next.js", level: 90 },
        { name: "NestJS / Node.js", level: 85 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Metodologías Ágiles (Scrum / XP)", level: 90 },
        { name: "Arquitectura e Infraestructura de Sistemas", level: 80 }
      ]
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Español", level: "Nativo", highlight: true },
        { name: "Inglés", level: "Conversacional", highlight: false }
      ]
    },
    courses: {
      title: "Cursos y Certificaciones",
      items: [
        {
          name: "Curso de React y PHP en Udemy (Desarrollo y Consumo de APIs)",
          institution: "Desarrollo Constante",
          date: "Ago 2025",
          details: [
            "Integración avanzada de aplicaciones frontend en React con APIs y bases de datos.",
            "Implementación de arquitectura RESTful y seguridad en el intercambio de datos."
          ]
        }
      ]
    },
    contact: {
      title: "Contacto",
      downloadButton: "Descargar CV (PDF)",
      sendMailButton: "Enviar Correo",
      whatsappButton: "Contactar por WhatsApp",
    }
  },
  en: {
    personal: {
      name: "Juan Arcila",
      title: "Software Engineer | Senior Full-Stack Developer (React, Next.js, NestJS, PostgreSQL) | Remote & EU Relocation",
      email: "juanaac2003@gmail.com",
      phone: "+58 412-7723148",
      linkedin: "linkedin.com/in/jadeveloper",
      linkedinUrl: "https://linkedin.com/in/jadeveloper",
      location: "Venezuela",
      github: "https://github.com/MoonPlay-Z",
    },
    profile: {
      title: "Professional Profile",
      description: "Computer Science Engineer and Full-Stack Developer with a robust background in web development, specializing in building highly scalable applications using React.js, Next.js, NestJS, Node.js, and PostgreSQL. Open to remote opportunities worldwide and relocation to Europe. Extensive experience in designing and optimizing relational and NoSQL databases, alongside a strong track record of applying agile methodologies (SCRUM and XP) in high-performance environments. Responsible, detail-oriented professional with technical leadership capabilities and a proactive commitment to the full software development lifecycle to deliver excellence.",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "B.S. in Computer Science Engineering",
          institution: "UPTP Juan de Jesús Montilla University",
          location: "Venezuela",
          period: "2020 - Jun 2025",
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          role: "Creator & Lead Developer — GestorPOS (Point of Sale & Inventory SaaS)",
          company: "GestorPOS · Own project (multi-tenant platform)",
          period: "Jun 2026 - Present",
          responsibilities: [
            "Designed and built GestorPOS from scratch, a multi-tenant point of sale and inventory SaaS for Venezuela: React 18 and Vite frontend with a REST API on Node.js/Express over Prisma and PostgreSQL.",
            "Modeled the transactional core: idempotent sales via requestId, row-level locking with SELECT … FOR UPDATE and exact monetary arithmetic with decimal.js, hardening integrity under concurrent operations.",
            "Implemented the multi-currency logic: each company operates with its own BCV exchange rate and all amounts are normalized to USD, with explicit rounding tolerance on payments.",
            "Built the offline-first POS with an on-device sales queue and automatic retry once connectivity returns, operable single-handed from a phone.",
            "Developed the Android app with Capacitor (native ML Kit barcode scanner, full-screen mode, native downloads) and a self-update system that verifies SHA-256, package, version and signature before installing the APK.",
            "Defined the role-based access model (SUPER_ADMIN, EMPRESA, CAJA, INVENTARIO, VISOR) plus a B2B API secured with X-Api-Key, including rate limiting and refresh token rotation.",
            "Ensured quality with 22 domain unit tests (node:test), Playwright E2E suites across three browsers and concurrent load scenarios with k6.",
            "Orchestrated continuous deployment on Netlify (SPA, manifest and APK distribution) with the API on Render and PostgreSQL on Neon, under SCRUM/XP agile delivery."
          ]
        },
        {
          role: "Academic Management Systems Developer",
          company: "UPTP Juan de Jesús Montilla University",
          period: "Aug 2022 - Jun 2025",
          responsibilities: [
            "Led the development and maintenance of the student grade management system, built with PHP using MVC architecture with a custom routing system (Routes) and Bootstrap on the frontend.",
            "Designed and optimized the PostgreSQL relational database architecture, ensuring data consistency across multiple branches.",
            "Developed critical modules for automated academic report generation, transcripts, and degree verification.",
            "Collaborated under agile methodologies (SCRUM/XP) with cross-functional teams to ensure timely deliveries."
          ]
        },
        {
          role: "Full-Stack Web Developer",
          company: "MPPP (Ministry of People's Power for Planning)",
          period: "Mar 2020 - Jun 2022",
          responsibilities: [
            "Designed, coded, and deployed a citizen-facing appointment scheduling and control system.",
            "Built modular backend services using Node.js and PostgreSQL, tuning complex SQL queries for optimal database performance.",
            "Implemented security protocols for user authentication and sensitive data handling."
          ]
        },
        {
          role: "Freelance Web Developer",
          company: "Independent Projects (React, Next.js & NestJS)",
          period: "Jun 2022 - Present",
          responsibilities: [
            "Engineered end-to-end e-commerce platforms and modern web applications leveraging Next.js for server-side rendering (SSR/ISR) and SEO performance.",
            "Created robust APIs using NestJS (TypeScript) with data persistence in PostgreSQL and MongoDB.",
            "Implemented responsive design and UI/UX best practices using Tailwind CSS."
          ]
        },
        {
          role: "IT Support & Systems Maintenance Technician (Part-Time)",
          company: "Compu-Ofertas",
          period: "Jan 2020 - Present",
          responsibilities: [
            "Maintained corporate hardware and software infrastructures, maximizing IT operational uptime.",
            "Designed and developed an internal inventory management software utilizing Node.js, Express, and PostgreSQL.",
            "Diagnosed and resolved technical issues in local servers, network infrastructure, and peripherals."
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { name: "React.js / Next.js", level: 90 },
        { name: "NestJS / Node.js", level: 85 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Agile Methodologies (Scrum / XP)", level: 90 },
        { name: "Systems Architecture & IT Infrastructure", level: 80 }
      ]
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native", highlight: true },
        { name: "English", level: "Conversational", highlight: false }
      ]
    },
    courses: {
      title: "Courses & Certifications",
      items: [
        {
          name: "React and PHP Development Course - Udemy (API Development)",
          institution: "Desarrollo Constante",
          date: "Aug 2025",
          details: [
            "Integration of frontend applications with secure backend APIs.",
            "Implementing RESTful architecture principles."
          ]
        }
      ]
    },
    contact: {
      title: "Contact",
      downloadButton: "Download CV (PDF)",
      sendMailButton: "Send Email",
      whatsappButton: "Contact via WhatsApp",
    }
  },
  et: {
    personal: {
      name: "Juan Arcila",
      title: "Tarkvarainsener | Senior Full-Stack Arendaja (React, Next.js, NestJS, PostgreSQL) | Kaugtöö & kolimine Euroopasse",
      email: "juanaac2003@gmail.com",
      phone: "+58 412-7723148",
      linkedin: "linkedin.com/in/jadeveloper",
      linkedinUrl: "https://linkedin.com/in/jadeveloper",
      location: "Venezuela",
      github: "https://github.com/MoonPlay-Z",
    },
    profile: {
      title: "Professionaalne Profiil",
      description: "Informaatika insener ja Full-Stack arendaja, kellel on tugev taust veebiarenduses, spetsialiseerudes kõrgelt skaleeritavate rakenduste loomisele React.js-i, Next.js-i, NestJS-i, Node.js-i ja PostgreSQL-i abil. Laialdased teadmised nii relatsiooniliste kui ka mitterelatsiooniliste andmebaaside optimeerimisel ning agiilsete metoodikate (SCRUM ja XP) rakendamisel suure jõudlusega arendusmeeskondades. Kohusetundlik, detailidele orienteeritud ja tehniliste juhtimisoskustega spetsialist, kes on pühendunud parima võimaliku kvaliteedi tagamisele tarkvara kogu elutsüklis.",
    },
    education: {
      title: "Haridus",
      items: [
        {
          degree: "Informaatika inseneri bakalaureusekraad",
          institution: "UPTP Juan de Jesús Montilla Ülikool",
          location: "Venezuela",
          period: "2020 - Juuni 2025",
        }
      ]
    },
    experience: {
      title: "Töökogemus",
      items: [
        {
          role: "Looja ja juhtiv arendaja — GestorPOS (kassa- ja laohalduse SaaS)",
          company: "GestorPOS · Omaprojekt (mitme ettevõtja platvorm)",
          period: "Juuni 2026 - Praeguni",
          responsibilities: [
            "Kavandasin ja ehitasin nullist GestorPOS-i, mitme ettevõtja kassa- ja laohalduse SaaS-e Venetsuale: React 18 ja Vite eesliides ning Node.js/Express REST API Prisma ja PostgreSQL-i peal.",
            "Modelleerisin tehingute tuuma: idempotentsed müügid requestId abil, ridade lukustamine SELECT … FOR UPDATE abil ning täpne rahaarvutus decimal.js-ga, tagades terviklikkuse samaaegsete toimingute korral.",
            "Töötasin välja mitme valuuta loogika: iga ettevõte kasutab oma BCV vahetuskurssi ja kõik summad normaliseeritakse USD-ks, maksetel on selgelt määratud ümardamise tolerants.",
            "Ehitasin offline-first kassasüsteemi, milles müügid salvestatakse seadme ooterežiimi ja saadetakse automaatselt uuesti võrku naastes, mida saab kasutada ühe käega telefonist.",
            "Arendasin Androidi rakenduse Capacitoriga (looduslik ML Kit voodikoodi skanner, täisekraanirežiim ja looduslikud allalaadimised) ning iseuuenduse, mis kontrollib enne APK paigaldamist SHA-256, paketti, versiooni ja allkirja.",
            "Kujundasin rollipõhise ligipääsu mudeli (SUPER_ADMIN, EMPRESA, CAJA, INVENTARIO, VISOR) ning X-Api-Keyga kaitstud B2B API, mis sisaldab päringute piiramist ja värskete tokenite rotatsiooni.",
            "Tagasin kvaliteedi 22 valdkonna ühiktestiga (node:test), Playwrighti E2E komplektidega kolmes brauseris ning k6-ga koormustestidega.",
            "Juhtisin pidevat juurutamist Netlify platvormil (SPA, manifest ja APK levitus), API Renderil ja PostgreSQL Neonil, kasutades SCRUM/XP agile'i meetodit."
          ]
        },
        {
          role: "Akadeemiliste õppeinfosüsteemide arendaja",
          company: "UPTP Juan de Jesús Montilla Ülikool",
          period: "Aug 2022 - Juuni 2025",
          responsibilities: [
            "Juhtisin ülikooli hinnete haldamise infosüsteemi arendust, mis ehitati PHP-ga MVC arhitektuuris koos marsruutimissüsteemiga (Routes) ja Bootstrapi kasutajaliidesega.",
            "Projekteerisin ja optimeerisin PostgreSQL-i relatsioonilist andmebaasi, et tagada andmete kooskõla ülikooli eri filiaalides.",
            "Arendasin ja juurutasin moodulid automaatsete aruannete, akadeemiliste õpingukaartide ning diplomite genereerimiseks.",
            "Töötasin agiilse arenduse (SCRUM/XP) raamistikus, koordineerides tegevusi teiste meeskondadega tähtaegade tagamiseks."
          ]
        },
        {
          role: "Full-Stack veebiarendaja",
          company: "MPPP (Planeerimisministeerium)",
          period: "Märts 2020 - Juuni 2022",
          responsibilities: [
            "Disainisin ja arendasin riigiasutuse broneerimis- ja kohtumiste haldussüsteemi kodanike teenindamiseks.",
            "Arendasin taustasüsteemi Node.js abil ning optimeerisin keerukaid PostgreSQL andmebaasipäringuid kiiruse ja turvalisuse tagamiseks.",
            "Tagasin kasutajaandmete turvalise autentimise ja konfidentsiaalsuse."
          ]
        },
        {
          role: "Vabakutseline veebiarendaja",
          company: "Iseseisvad projektid (React, Next.js & NestJS)",
          period: "Juuni 2022 - Praeguni",
          responsibilities: [
            "Täislahendusega e-poodide ja kaasaegsete veebirakenduste arendamine, kasutades Next.js-i (SSR/ISR) parema SEO ja kiiruse saavutamiseks.",
            "Tugevate ja turvaliste API-de loomine NestJS-is (TypeScript), kasutades PostgreSQL ja MongoDB andmebaase.",
            "Mobiilisõbraliku (Mobile-first) disaini ning parimate UI/UX praktikate rakendamine Tailwind CSS abil."
          ]
        },
        {
          role: "IT-tugiteenuste ja seadmete hoolduse tehnik (osalise tööajaga)",
          company: "Compu-Ofertas",
          period: "Jaan 2020 - Praeguni",
          responsibilities: [
            "Ettevõtte riist- ja tarkvara infrastruktuuri ennetav ning korrigeeriv hooldus stabiilse töö tagamiseks.",
            "Arendasin sisekasutuseks mõeldud laoinventari ja seadmete halduse tarkvara, kasutades Node.js, Expressi ja PostgreSQL andmebaasi.",
            "Kohalike serverite, andmesidevõrkude ning perifeerseadmete tõrkeotsing ja seadistamine."
          ]
        }
      ]
    },
    skills: {
      title: "Tehnilised Oskused",
      categories: [
        { name: "React.js / Next.js", level: 90 },
        { name: "NestJS / Node.js", level: 85 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Agiilsed metoodikad (Scrum / XP)", level: 90 },
        { name: "Süsteemide arhitektuur ja IT-infrastruktuur", level: 80 }
      ]
    },
    languages: {
      title: "Keeled",
      items: [
        { name: "Hispaania", level: "Emakeel", highlight: true },
        { name: "Inglise", level: "Suhtlustasemel", highlight: false }
      ]
    },
    courses: {
      title: "Koolitused ja Sertifikaadid",
      items: [
        {
          name: "Reacti ja PHP täislahenduse arenduskursus - Udemy (API Arendus)",
          institution: "Desarrollo Constante",
          date: "Aug 2025",
          details: [
            "React veebirakenduste integreerimine turvaliste API-dega.",
            "RESTful arhitektuuri põhimõtete rakendamine."
          ]
        }
      ]
    },
    contact: {
      title: "Kontakt",
      downloadButton: "Laadi alla CV (PDF)",
      sendMailButton: "Saada e-kiri",
      whatsappButton: "Võta ühendust WhatsAppis",
    }
  }
};
