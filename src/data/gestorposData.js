import gestorPOSApp from "../assets/GestorPOS app.jpeg";
import loginGestorPOS from "../assets/login.webp";
import registroGestorPOS from "../assets/registro.webp";
import gestorPOSPortada from "../assets/GestorPOS.webp";

const es = {
  id: "gestorpos",
  titulo: "GestorPOS",
  subtitulo: "Sistema POS y gestor de inventario para Venezuela",
  imagen: gestorPOSApp,
  portada: gestorPOSPortada,
  capturas: [loginGestorPOS, registroGestorPOS],
  badges: ["Desktop + Web", "Multi-tenant", "Offline-first", "Autoactualizable"],
  enlaces: [
    { etiqueta: "Ver en vivo", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Código fuente", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "Nací para resolver un problema muy concreto: una empresa venezolana necesita vender, cobrar y saber qué tiene en el depósito sin depender de internet ni de una tasa de cambio que amanece distinta cada día. Soy multi-inquilino y la frontera es empresaId: cada cliente ve solo lo suyo. Calculo con decimal.js, guardo cada factura con un requestId idempotente, bloqueo filas con SELECT … FOR UPDATE y creo la cuenta por cobrar en el mismo acto. Y como no hay tienda de aplicaciones, me actualizo yo misma: verifico SHA-256, paquete, versión y firma antes de instalar.",
  resumen: [
    {
      titulo: "Problema",
      texto:
        "Vender, cobrar y controlar el inventario en Venezuela sin depender de internet ni de una tasa de cambio que cambia cada día."
    },
    {
      titulo: "Solución",
      texto:
        "Plataforma SaaS multi-tenant con POS offline-first, cobranza en dos monedas, caja con desglose por moneda y app Android que se autoactualiza."
    },
    {
      titulo: "Alcance",
      texto:
        "Diseño y desarrollo full-stack: 30 rutas, 18 routers REST, Prisma + PostgreSQL, app Android con Capacitor y puente nativo Java."
    }
  ],
  arquitectura: [
    {
      nombre: "Clientes",
      detalle: "Web en navegador, APK Android (WebView) e integraciones B2B con X-Api-Key.",
      items: ["React SPA", "WebView + Java", "API B2B"]
    },
    {
      nombre: "Frontend",
      detalle: "SPA con 30 rutas, contextos de auth/tema/toast y puente nativo para actualizaciones.",
      items: ["React 18", "Vite 5", "React Router 6", "Tailwind + CSS Modules", "ML Kit / ZXing"]
    },
    {
      nombre: "Backend",
      detalle: "18 routers REST, JWT con refresh token, guard de suscripción y dominio desacoplado.",
      items: ["Express 4", "JWT + bcrypt", "Prisma 5", "decimal.js", "serialport"]
    },
    {
      nombre: "Datos",
      detalle: "PostgreSQL en Neon para producción y SQLite para desarrollo local.",
      items: ["Neon (prod)", "SQLite (dev)", "Migraciones Prisma"]
    },
    {
      nombre: "Servicios externos",
      detalle: "Tasa oficial del BCV, impresora fiscal, Netlify (web + APK + manifiesto) y GitHub.",
      items: ["BCV", "Impresora fiscal", "Netlify", "GitHub"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Escaneo y precio", detalle: "ML Kit lee el código o se busca el producto; el API devuelve precio en USD y VES con la tasa de la empresa." },
    { paso: 2, titulo: "Validación del payload", detalle: "El backend valida el request y responde 422 con un mensaje legible si algo no es correcto." },
    { paso: 3, titulo: "Transacción atómica", detalle: "BEGIN: se bloquea la factura, se verifica stock, se crean Factura + ItemFactura y se descuenta stock." },
    { paso: 4, titulo: "Cuenta por cobrar", detalle: "En el mismo commit se crea la CxC (1:1 con la factura) y se normaliza todo a USD." },
    { paso: 5, titulo: "Registro de pago", detalle: "Se bloquea la factura y luego la CxC, se recalcula el saldo y se aplica tolerancia ≤ 0,005 USD." },
    { paso: 6, titulo: "Cierre de turno", detalle: "El cierre separa ingresos en efectivo y banco, en dólares y en bolívares originales." }
  ],
  actualizacion: [
    { estado: "inactivo", detalle: "Consulta la tasa y el manifiesto en la apertura o reanudación (fuera de /pos y /caja)." },
    { estado: "consultando", detalle: "Si versionCode es mayor, se muestra el aviso; si no, se mantiene inactivo con throttle de 24 h." },
    { estado: "aviso", detalle: "El usuario elige «Actualizar ahora» o «Más tarde» (salvo minVersionCode)." },
    { estado: "descargando", detalle: "Se descarga la APK; el usuario puede cancelar y vuelve al aviso." },
    { estado: "verificando", detalle: "Se validan SHA-256, packageName, versionCode y firma antes de instalar." },
    { estado: "instalando", detalle: "Se abre el instalador nativo; si el usuario cancela, vuelve al aviso." }
  ],
  stack: [
    { capa: "Frontend", items: [
      ["React", "18.3", "UI por componentes"],
      ["Vite", "5.4", "Build y dev server (HTTPS en LAN)"],
      ["React Router", "6.28", "30 rutas"],
      ["Tailwind CSS + CSS Modules", "3.4", "Utilidades + estilos aislados"],
      ["Chart.js / react-chartjs-2", "4.4", "Gráficos del dashboard"],
      ["jsPDF + autotable", "4.2", "Reportes y facturas PDF"],
      ["@capacitor-mlkit/barcode-scanning", "6.2 (parcheado)", "Escáner nativo 1920×1080"]
    ]},
    { capa: "Backend", items: [
      ["Node.js", "20", "Runtime"],
      ["Express", "4.21", "18 routers REST"],
      ["Prisma", "5.22", "ORM + migraciones"],
      ["jsonwebtoken + bcrypt", "9 / 6", "Sesión y hash de contraseñas"],
      ["decimal.js", "10.4", "Aritmética monetaria exacta"],
      ["express-rate-limit", "7", "Límite en login/registro"],
      ["serialport", "13", "Impresora fiscal"]
    ]},
    { capa: "Móvil", items: [
      ["Capacitor", "6.2", "WebView + APIs nativas"],
      ["Android SDK / Gradle", "8.12", "APK firmada"],
      ["Java", "17", "Puente nativo (3 clases)"],
      ["ML Kit Barcode", "—", "Lectura de códigos"],
      ["DownloadManager + FileProvider", "—", "Descarga e instalación de APK"]
    ]},
    { capa: "Calidad", items: [
      ["node:test", "—", "22 pruebas del dominio del actualizador"],
      ["Playwright", "1.64", "E2E (Chromium, Firefox, WebKit)"],
      ["k6", "—", "10 escenarios de carga y concurrencia"]
    ]},
    { capa: "Infra", items: [
      ["Netlify", "—", "Web + manifiesto + APK"],
      ["Render + Neon", "—", "API + PostgreSQL"],
      ["GitHub", "—", "Código y despliegue continuo"]
    ]}
  ],
  roles: [
    ["SUPER_ADMIN", "Global", "Administrar empresas, activaciones y noticias"],
    ["EMPRESA", "Su empresa", "Todo: usuarios, configuración, tasa, reportes, CxC, caja, respaldos"],
    ["CAJA", "Su empresa", "POS, sus facturas, su caja, sus CxC"],
    ["INVENTARIO", "Su empresa", "Productos, stock y precios; sin ventas ni caja"],
    ["VISOR", "Su empresa", "Solo lectura"],
    ["B2B", "API Key", "Consulta y creación acotada por X-Api-Key"]
  ]
};

const en = {
  id: "gestorpos",
  titulo: "GestorPOS",
  subtitulo: "Point of sale and inventory system for Venezuela",
  imagen: gestorPOSApp,
  portada: gestorPOSPortada,
  capturas: [loginGestorPOS, registroGestorPOS],
  badges: ["Desktop + Web", "Multi-tenant", "Offline-first", "Self-updating"],
  enlaces: [
    { etiqueta: "See it live", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Source code", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "I was born to solve a very concrete problem: a Venezuelan company needs to sell, collect and know what is in the warehouse without depending on internet access or on an exchange rate that changes overnight. I am multi-tenant and the boundary is empresaId: every client sees only their own data. I compute with decimal.js, store every invoice with an idempotent requestId, lock rows with SELECT … FOR UPDATE and create the account receivable in the same act. And since there is no app store, I update myself: I verify SHA-256, package, version and signature before installing.",
  resumen: [
    {
      titulo: "Problem",
      texto:
        "Selling, collecting and controlling inventory in Venezuela without depending on internet access or on an exchange rate that changes every day."
    },
    {
      titulo: "Solution",
      texto:
        "A multi-tenant SaaS platform with an offline-first POS, two-currency collections, cash register with per-currency breakdown and an Android app that self-updates."
    },
    {
      titulo: "Scope",
      texto:
        "Full-stack design and development: 30 routes, 18 REST routers, Prisma + PostgreSQL, an Android app with Capacitor and a native Java bridge."
    }
  ],
  arquitectura: [
    {
      nombre: "Clients",
      detalle: "Web in the browser, Android APK (WebView) and B2B integrations with X-Api-Key.",
      items: ["React SPA", "WebView + Java", "B2B API"]
    },
    {
      nombre: "Frontend",
      detalle: "SPA with 30 routes, auth/theme/toast contexts and a native bridge for updates.",
      items: ["React 18", "Vite 5", "React Router 6", "Tailwind + CSS Modules", "ML Kit / ZXing"]
    },
    {
      nombre: "Backend",
      detalle: "18 REST routers, JWT with refresh token, subscription guard and decoupled domain layer.",
      items: ["Express 4", "JWT + bcrypt", "Prisma 5", "decimal.js", "serialport"]
    },
    {
      nombre: "Data",
      detalle: "PostgreSQL on Neon for production and SQLite for local development.",
      items: ["Neon (prod)", "SQLite (dev)", "Prisma migrations"]
    },
    {
      nombre: "External services",
      detalle: "Official BCV exchange rate, fiscal printer, Netlify (web + APK + manifest) and GitHub.",
      items: ["BCV", "Fiscal printer", "Netlify", "GitHub"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Scan and price", detalle: "ML Kit reads the code or the product is looked up; the API returns the price in USD and VES using the company's rate." },
    { paso: 2, titulo: "Payload validation", detalle: "The backend validates the request and replies with a 422 and a readable message if something is wrong." },
    { paso: 3, titulo: "Atomic transaction", detalle: "BEGIN: the invoice is locked, stock is verified, Invoice + InvoiceItem are created and stock is decremented." },
    { paso: 4, titulo: "Account receivable", detalle: "In the same commit the AR record is created (1:1 with the invoice) and everything is normalized to USD." },
    { paso: 5, titulo: "Payment recorded", detalle: "The invoice is locked and then the AR; the balance is recalculated and a tolerance of ≤ 0.005 USD is applied." },
    { paso: 6, titulo: "Shift close", detalle: "The close separates cash and bank income, in dollars and in the original bolivars." }
  ],
  actualizacion: [
    { estado: "idle", detalle: "Checks the rate and the manifest on launch or resume (outside /pos and /caja)." },
    { estado: "checking", detalle: "If versionCode is higher, the prompt is shown; otherwise it stays idle with a 24 h throttle." },
    { estado: "prompt", detalle: "The user chooses \"Update now\" or \"Later\" (unless minVersionCode applies)." },
    { estado: "downloading", detalle: "The APK is downloaded; the user can cancel and returns to the prompt." },
    { estado: "verifying", detalle: "SHA-256, packageName, versionCode and signature are validated before installing." },
    { estado: "installing", detalle: "The native installer opens; if the user cancels, the app returns to the prompt." }
  ],
  stack: [
    { capa: "Frontend", items: [
      ["React", "18.3", "Component-based UI"],
      ["Vite", "5.4", "Build and dev server (HTTPS on LAN)"],
      ["React Router", "6.28", "30 routes"],
      ["Tailwind CSS + CSS Modules", "3.4", "Utilities + scoped styles"],
      ["Chart.js / react-chartjs-2", "4.4", "Dashboard charts"],
      ["jsPDF + autotable", "4.2", "PDF reports and invoices"],
      ["@capacitor-mlkit/barcode-scanning", "6.2 (patched)", "Native 1920×1080 scanner"]
    ]},
    { capa: "Backend", items: [
      ["Node.js", "20", "Runtime"],
      ["Express", "4.21", "18 REST routers"],
      ["Prisma", "5.22", "ORM + migrations"],
      ["jsonwebtoken + bcrypt", "9 / 6", "Sessions and password hashing"],
      ["decimal.js", "10.4", "Exact monetary arithmetic"],
      ["express-rate-limit", "7", "Login and signup throttling"],
      ["serialport", "13", "Fiscal printer"]
    ]},
    { capa: "Mobile", items: [
      ["Capacitor", "6.2", "WebView + native APIs"],
      ["Android SDK / Gradle", "8.12", "Signed APK"],
      ["Java", "17", "Native bridge (3 classes)"],
      ["ML Kit Barcode", "—", "Code scanning"],
      ["DownloadManager + FileProvider", "—", "APK download and install"]
    ]},
    { capa: "Quality", items: [
      ["node:test", "—", "22 updater domain tests"],
      ["Playwright", "1.64", "E2E (Chromium, Firefox, WebKit)"],
      ["k6", "—", "10 load and concurrency scenarios"]
    ]},
    { capa: "Infrastructure", items: [
      ["Netlify", "—", "Web + manifest + APK"],
      ["Render + Neon", "—", "API + PostgreSQL"],
      ["GitHub", "—", "Code and continuous deployment"]
    ]}
  ],
  roles: [
    ["SUPER_ADMIN", "Global", "Manage companies, activations and announcements"],
    ["EMPRESA", "Own company", "Everything: users, settings, exchange rate, reports, AR, cash register, backups"],
    ["CAJA", "Own company", "POS, own invoices, own cash register, own AR"],
    ["INVENTARIO", "Own company", "Products, stock and prices; no sales and no cash register"],
    ["VISOR", "Own company", "Read-only access"],
    ["B2B", "API Key", "Scoped querying and creation through X-Api-Key"]
  ]
};

const et = {
  id: "gestorpos",
  titulo: "GestorPOS",
  subtitulo: "Kassa- ja laohalduse süsteem Venetsuale",
  imagen: gestorPOSApp,
  portada: gestorPOSPortada,
  capturas: [loginGestorPOS, registroGestorPOS],
  badges: ["Desktop + Web", "Mitme ettevõtja", "Offline-first", "Iseuuenduv"],
  enlaces: [
    { etiqueta: "Vaata otse", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Lähtekood", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "Mind sünnitati ühe väga konkreetse probleemi lahendamiseks: Venezuela ettevõttel tuleb müüa, raha koguda ja teada, mis on laos, ilma et peaks sõltuma internetiühendusest või vahetuskursist, mis muutub iga hommik. Olen mitme ettevõtja süsteem ja piir on empresaId: iga klient näeb ainult oma andmeid. Arvutan decimal.js abil, salvestan iga arve idempotse requestId-ga, lukustan read SELECT … FOR UPDATE abil ja loen nõude samas tehingus. Kuna rakenduste pood puudub, uuendan ma ise end: kontrollin SHA-256, paketti, versiooni ja allkirja enne paigaldamist.",
  resumen: [
    {
      titulo: "Probleem",
      texto:
        "Müümine, raha kogumine ja lao kontroll Venetsual ilma internetiühenduse või iga päev muutuva vahetuskursita."
    },
    {
      titulo: "Lahendus",
      texto:
        "Mitme ettevõtja SaaS-platvorm offline-first kassaga, kahe valuutaga nõude haldamisega, valuuti kaupa lahti krutatud kassaga ja iseuuenduva Androidi rakendusega."
    },
    {
      titulo: "Ulatus",
      texto:
        "Täislahenduse kujundamine ja arendamine: 30 route'i, 18 REST routerit, Prisma + PostgreSQL, Capacitoriga Androidi rakendus ja Java põhine looduslik sild."
    }
  ],
  arquitectura: [
    {
      nombre: "Kliendid",
      detalle: "Veeb brauseris, Androidi APK (WebView) ja B2B integratsioonid X-Api-Key kaudu.",
      items: ["React SPA", "WebView + Java", "B2B API"]
    },
    {
      nombre: "Frontend",
      detalle: "SPA 30 route'iga, teema/teavituse/konteksti kontekstid ja looduslik sild uuenduste jaoks.",
      items: ["React 18", "Vite 5", "React Router 6", "Tailwind + CSS Modules", "ML Kit / ZXing"]
    },
    {
      nombre: "Backend",
      detalle: "18 REST routerit, JWT värskete tokenitega, tellimuse kontroll ja lahtistatud domaenikiht.",
      items: ["Express 4", "JWT + bcrypt", "Prisma 5", "decimal.js", "serialport"]
    },
    {
      nombre: "Andmed",
      detalle: "PostgreSQL Neonil tootmises ja SQLite kohalikus arenduses.",
      items: ["Neon (tootmine)", "SQLite (arendus)", "Prisma migratsioonid"]
    },
    {
      nombre: "Välised teenused",
      detalle: "BCV ametlik vahetuskurss, fiskaalprinter, Netlify (veeb + APK + manifest) ja GitHub.",
      items: ["BCV", "Fiskaalprinter", "Netlify", "GitHub"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Skannimine ja hind", detalle: "ML Kit loeb koodi või toode otsitakse üles; API annab hinna USD-des ja VES-des ettevõtte kursiga." },
    { paso: 2, titulo: "Päringu valideerimine", detalle: "Backend valideerib päringu ja vastab 422-ga loetava sõnumiga, kui midagi on valesti." },
    { paso: 3, titulo: "Aatomiline tehing", detalle: "BEGIN: arve lukustatakse, kontrollitakse lao, luuakse Arve + Arvereat ja lao väheneb." },
    { paso: 4, titulo: "Nõue", detalle: "Samas commitis luuakse nõue (1:1 arvega) ja kõik normaliseeritakse USD-sse." },
    { paso: 5, titulo: "Makse salvestamine", detalle: "Lukustatakse arve ja seejärel nõue, arvutatakse saldo uuesti ja rakendatakse tolerants ≤ 0,005 USD." },
    { paso: 6, titulo: "Vahetuse sulgemine", detalle: "Sulgemine eraldab sularaha ja panga sissetulekud, dollarites ja algsetes bolivaarides." }
  ],
  actualizacion: [
    { estado: "ooterežiim", detalle: "Kontrollib kursust ja manifesti avamisel või taastamisel (väljaspool /pos ja /caja)." },
    { estado: "kontroll", detalle: "Kui versionCode on suurem, kuvatakse teade; muidu jääb ooterežiimi 24-tunni throttliga." },
    { estado: "teade", detalle: "Kasutaja valib „Uuenda kohe” või „Hiljem” (välja arvatud minVersionCode korral)." },
    { estado: "allalaadimine", detalle: "APK laaditakse alla; kasutaja saab katkestada ja naasta teate juurde." },
    { estado: "kontroll", detalle: "Enne paigaldamist kontrollitakse SHA-256, packageName, versionCode ja allkirja." },
    { estado: "paigaldamine", detalle: "Avaneb looduslik paigaldaja; kui kasutaja tühistab, naastakse teate juurde." }
  ],
  stack: [
    { capa: "Frontend", items: [
      ["React", "18.3", "Komponentide põhine UI"],
      ["Vite", "5.4", "Build ja dev server (HTTPS LAN-is)"],
      ["React Router", "6.28", "30 route'i"],
      ["Tailwind CSS + CSS Modules", "3.4", "Abistavused + eraldatud stiilid"],
      ["Chart.js / react-chartjs-2", "4.4", "Dashboardi graafikud"],
      ["jsPDF + autotable", "4.2", "PDF aruanded ja arved"],
      ["@capacitor-mlkit/barcode-scanning", "6.2 (parandatud)", "Looduslik 1920×1080 skanner"]
    ]},
    { capa: "Backend", items: [
      ["Node.js", "20", "Runtime"],
      ["Express", "4.21", "18 REST routerit"],
      ["Prisma", "5.22", "ORM + migratsioonid"],
      ["jsonwebtoken + bcrypt", "9 / 6", "Sessioonid ja paroolide räsimine"],
      ["decimal.js", "10.4", "Täpne rahaarvutus"],
      ["express-rate-limit", "7", "Logimise ja registreerumise piirang"],
      ["serialport", "13", "Fiskaalprinter"]
    ]},
    { capa: "Mobiil", items: [
      ["Capacitor", "6.2", "WebView + looduslikud API-d"],
      ["Android SDK / Gradle", "8.12", "Allkirjastatud APK"],
      ["Java", "17", "Looduslik sild (3 klassi)"],
      ["ML Kit Barcode", "—", "Koodide lugemine"],
      ["DownloadManager + FileProvider", "—", "APK allalaadimine ja paigaldamine"]
    ]},
    { capa: "Kvaliteet", items: [
      ["node:test", "—", "22 uuendaja domaeni ühiktesti"],
      ["Playwright", "1.64", "E2E (Chromium, Firefox, WebKit)"],
      ["k6", "—", "10 koormus- ja üheaegsusstsenaariot"]
    ]},
    { capa: "Infrastruktuur", items: [
      ["Netlify", "—", "Veeb + manifest + APK"],
      ["Render + Neon", "—", "API + PostgreSQL"],
      ["GitHub", "—", "Kood ja pidev juurutamine"]
    ]}
  ],
  roles: [
    ["SUPER_ADMIN", "Globaalne", "Ettevõtete, aktiveerimiste ja teadete haldamine"],
    ["EMPRESA", "Oma ettevõte", "Kõik: kasutajad, seaded, kurs, aruanded, nõuded, kassa, varundus"],
    ["CAJA", "Oma ettevõte", "Kassa, oma arved, oma kassakast, oma nõuded"],
    ["INVENTARIO", "Oma ettevõte", "Tooted, lao ja hinnad; müük ja kassa puuduvad"],
    ["VISOR", "Oma ettevõte", "Ainult lugemisõigus"],
    ["B2B", "API Key", "Piiratud päringute ja loomine X-Api-Key kaudu"]
  ]
};

export const gestorposData = { es, en, et };
