import gestorPOSAppLogin from "../assets/GestorPOSapp.webp";
import gestorPOSAppDashboard from "../assets/GestorPOSapp2.webp";
import gestorPOSAppLanding from "../assets/GestorPOSapp3.webp";

const es = {
  id: "gestorpos-app",
  titulo: "GestorPOS App Móvil",
  subtitulo: "Aplicación Android nativa para el POS y el inventario",
  imagen: gestorPOSAppDashboard,
  portada: gestorPOSAppLanding,
  capturas: [gestorPOSAppLogin, gestorPOSAppDashboard, gestorPOSAppLanding],
  headerEstilo: "app",
  badges: ["Android", "Capacitor", "Offline-first", "Autoactualización"],
  enlaces: [
    { etiqueta: "Ver en vivo", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Código fuente", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "Soy el cuerpo móvil de GestorPOS. En el teléfono no soy una web cualquiera: vivo dentro de un WebView de Capacitor, con pantalla completa, cámara para escanear y descargas nativas para actualizarme. Mi lector de códigos usa ML Kit y devuelve el código sin teclado ni foco. Y como no hay tienda de aplicaciones, me actualizo yo misma: consulto el manifiesto, descargo la APK, verifico su SHA-256, su paquete, su versión y su firma, y solo entonces abro el instalador. Si el usuario cancela, vuelvo al aviso; nunca me quedo en un estado sin salida.",
  resumen: [
    {
      titulo: "Problema",
      texto:
        "Los cajeros trabajan de pie, con una mano y a menudo sin conexión estable; la web no basta para escanear ni para actualizarse sin tienda de aplicaciones."
    },
    {
      titulo: "Solución",
      texto:
        "App Android con Capacitor: WebView de la SPA, escáner nativo con ML Kit, pantalla completa y autoactualización verificada con SHA-256."
    },
    {
      titulo: "Alcance",
      texto:
        "3 clases Java (MainActivity, ActualizadorApk, VerificadorApk), puente nativo window.AndroidUpdates / AndroidDownloads, APK firmada y manifiesto version.json."
    }
  ],
  arquitectura: [
    {
      nombre: "WebView (Capacitor)",
      detalle: "La SPA de React embebida en la app, con pantalla completa y permisos de cámara.",
      items: ["Capacitor 6.2", "WebView", "SPA React"]
    },
    {
      nombre: "Puente nativo",
      detalle: "Tres clases Java que exponen actualizaciones y descargas al JavaScript.",
      items: ["MainActivity", "ActualizadorApk", "VerificadorApk"]
    },
    {
      nombre: "Escáner ML Kit",
      detalle: "Lectura de códigos en 1920×1080 sin foco ni teclado.",
      items: ["ML Kit Barcode", "Cámara", "1920×1080"]
    },
    {
      nombre: "Descarga e instalación",
      detalle: "DownloadManager + FileProvider, con verificación antes de instalar.",
      items: ["DownloadManager", "FileProvider", "SHA-256"]
    },
    {
      nombre: "Manifiesto y distribución",
      detalle: "version.json servido por Netlify, sin caché y con CORS abierto.",
      items: ["version.json", "Netlify", "APK firmada"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Abrir la app", detalle: "Al abrir (fuera de /pos y /caja) consulta el manifiesto y la tasa oficial del BCV." },
    { paso: 2, titulo: "Iniciar sesión", detalle: "JWT con sessionVersion; las credenciales viajan cifradas por HTTPS." },
    { paso: 3, titulo: "POS en el teléfono", detalle: "Escaneo con ML Kit o búsqueda; la cola offline guarda ventas si no hay red." },
    { paso: 4, titulo: "Cobro", detalle: "Efectivo, banco o mixto; todo se normaliza a USD con la tasa de la empresa." },
    { paso: 5, titulo: "Cierre de turno", detalle: "Desglose de ingresos por moneda, separando efectivo y banco." },
    { paso: 6, titulo: "Autoactualización", detalle: "Aviso al detectar un versionCode mayor; el usuario decide cuándo actualizar." }
  ],
  actualizacion: [
    { estado: "inactivo", detalle: "Consulta el manifiesto en la apertura o reanudación, fuera de las rutas de POS y caja." },
    { estado: "consultando", detalle: "Si versionCode es mayor, se muestra el aviso; si no, se mantiene inactivo con throttle de 24 h." },
    { estado: "aviso", detalle: "El usuario elige «Actualizar ahora» o «Más tarde» (salvo minVersionCode obligatoria)." },
    { estado: "descargando", detalle: "DownloadManager descarga la APK; el usuario puede cancelar y vuelve al aviso." },
    { estado: "verificando", detalle: "Se validan SHA-256, packageName, versionCode y firma antes de instalar." },
    { estado: "instalando", detalle: "Se abre el instalador nativo; si el usuario cancela, vuelve al aviso." }
  ],
  stack: [
    { capa: "Móvil", items: [
      ["Capacitor", "6.2", "WebView + APIs nativas"],
      ["Android SDK / Gradle", "8.12", "APK firmada"],
      ["Java", "17", "Puente nativo (3 clases)"],
      ["ML Kit Barcode", "—", "Lectura de códigos"],
      ["DownloadManager + FileProvider", "—", "Descarga e instalación de la APK"]
    ]},
    { capa: "Calidad", items: [
      ["node:test", "—", "22 pruebas del dominio del actualizador"],
      ["Playwright", "1.64", "E2E (Chromium, Firefox, WebKit)"],
      ["k6", "—", "10 escenarios de carga y concurrencia"]
    ]},
    { capa: "Infra", items: [
      ["Netlify", "—", "Manifiesto + APK"],
      ["GitHub", "—", "Código y releases de la APK"]
    ]}
  ]
};

const en = {
  id: "gestorpos-app",
  titulo: "GestorPOS Mobile App",
  subtitulo: "Native Android app for the point of sale and inventory",
  imagen: gestorPOSAppDashboard,
  portada: gestorPOSAppLanding,
  capturas: [gestorPOSAppLogin, gestorPOSAppDashboard, gestorPOSAppLanding],
  headerEstilo: "app",
  badges: ["Android", "Capacitor", "Offline-first", "Self-update"],
  enlaces: [
    { etiqueta: "See it live", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Source code", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "I am the mobile body of GestorPOS. On the phone I am not just a website: I live inside a Capacitor WebView, with full-screen mode, a camera for scanning and native downloads to update myself. My barcode reader uses ML Kit and returns the code without keyboard or focus. And since there is no app store, I update myself: I read the manifest, download the APK, verify its SHA-256, package, version and signature, and only then open the installer. If the user cancels, I go back to the prompt; I never end up in a state with no way out.",
  resumen: [
    {
      titulo: "Problem",
      texto:
        "Cashiers work standing up, one-handed, and often without a stable connection; the web is not enough for scanning or for updating without an app store."
    },
    {
      titulo: "Solution",
      texto:
        "Android app with Capacitor: the SPA in a WebView, native ML Kit scanner, full-screen mode and self-update verified with SHA-256."
    },
    {
      titulo: "Scope",
      texto:
        "3 Java classes (MainActivity, ActualizadorApk, VerificadorApk), the window.AndroidUpdates / AndroidDownloads native bridge, a signed APK and a version.json manifest."
    }
  ],
  arquitectura: [
    {
      nombre: "WebView (Capacitor)",
      detalle: "The React SPA embedded in the app, with full-screen mode and camera permissions.",
      items: ["Capacitor 6.2", "WebView", "React SPA"]
    },
    {
      nombre: "Native bridge",
      detalle: "Three Java classes exposing updates and downloads to JavaScript.",
      items: ["MainActivity", "ActualizadorApk", "VerificadorApk"]
    },
    {
      nombre: "ML Kit scanner",
      detalle: "Code reading at 1920×1080 without focus or keyboard.",
      items: ["ML Kit Barcode", "Camera", "1920×1080"]
    },
    {
      nombre: "Download and install",
      detalle: "DownloadManager + FileProvider, with verification before installing.",
      items: ["DownloadManager", "FileProvider", "SHA-256"]
    },
    {
      nombre: "Manifest and distribution",
      detalle: "version.json served by Netlify, no-cache and with open CORS.",
      items: ["version.json", "Netlify", "Signed APK"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Open the app", detalle: "On launch (outside /pos and /caja) it reads the manifest and the official BCV rate." },
    { paso: 2, titulo: "Sign in", detalle: "JWT with sessionVersion; credentials travel encrypted over HTTPS." },
    { paso: 3, titulo: "POS on the phone", detalle: "Scanning with ML Kit or searching; the offline queue stores sales when there is no network." },
    { paso: 4, titulo: "Take payment", detalle: "Cash, bank or mixed; everything is normalized to USD using the company's rate." },
    { paso: 5, titulo: "Shift close", detalle: "Income broken down by currency, separating cash and bank." },
    { paso: 6, titulo: "Self-update", detalle: "A prompt appears when a higher versionCode is detected; the user decides when to update." }
  ],
  actualizacion: [
    { estado: "idle", detalle: "Reads the manifest on launch or resume, outside the POS and cash register routes." },
    { estado: "checking", detalle: "If versionCode is higher, the prompt is shown; otherwise it stays idle with a 24 h throttle." },
    { estado: "prompt", detalle: "The user chooses \"Update now\" or \"Later\" (unless minVersionCode is mandatory)." },
    { estado: "downloading", detalle: "DownloadManager downloads the APK; the user can cancel and returns to the prompt." },
    { estado: "verifying", detalle: "SHA-256, packageName, versionCode and signature are validated before installing." },
    { estado: "installing", detalle: "The native installer opens; if the user cancels, the app returns to the prompt." }
  ],
  stack: [
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
      ["Netlify", "—", "Manifest + APK"],
      ["GitHub", "—", "Code and APK releases"]
    ]}
  ]
};

const et = {
  id: "gestorpos-app",
  titulo: "GestorPOS mobiilirakendus",
  subtitulo: "Looduslik Androidi rakendus kassa ja laohalduse jaoks",
  imagen: gestorPOSAppDashboard,
  portada: gestorPOSAppLanding,
  capturas: [gestorPOSAppLogin, gestorPOSAppDashboard, gestorPOSAppLanding],
  headerEstilo: "app",
  badges: ["Android", "Capacitor", "Offline-first", "Iseuuendus"],
  enlaces: [
    { etiqueta: "Vaata otse", url: "https://gestor-inventario-pos.netlify.app/" },
    { etiqueta: "Lähtekood", url: "https://github.com/MoonPlay-Z/Gestor-Inventario" }
  ],
  monologo:
    "Olen GestorPOSi mobiilne keha. Telefonis pole ma üksnes veebileht: elan Capacitori WebView-s, täisekraanirežiimis, kaameraga skannimiseks ja looduslike allalaadimistega enda uuendamiseks. Minu voodikoodide lugeja kasutab ML Kit-i ja annab koodi tagasi ilma klaviatuuri või fookuseta. Kuna rakenduste pood puudub, uuendan ma ise end: loen manifesti, laadin alla APK, kontrollin SHA-256, paketti, versiooni ja allkirja ning avan alles siis paigaldaja. Kui kasutaja tühistab, naastan teate juurde; ma ei jää kunagi väljapääsmatusse olekusse.",
  resumen: [
    {
      titulo: "Probleem",
      texto:
        "Kassapidajad töötavad seistes, ühe käega ja sageli ebastabiilse ühendusega; veeb ei sobi skannimiseks ega uuendamiseks ilma rakenduste poeta."
    },
    {
      titulo: "Lahendus",
      texto:
        "Capacitoriga Androidi rakendus: SPA WebView-s, looduslik ML Kit skanner, täisekraanirežiim ja SHA-256 abil kontrollitud iseuuendus."
    },
    {
      titulo: "Ulatus",
      texto:
        "3 Java klassi (MainActivity, ActualizadorApk, VerificadorApk), window.AndroidUpdates / AndroidDownloads looduslik sild, allkirjastatud APK ja version.json manifest."
    }
  ],
  arquitectura: [
    {
      nombre: "WebView (Capacitor)",
      detalle: "Reacti SPA manustatuna rakendusse, täisekraanirežiimiga ja kaameraõigustega.",
      items: ["Capacitor 6.2", "WebView", "React SPA"]
    },
    {
      nombre: "Looduslik sild",
      detalle: "Kolm Java klassi, mis avavad uuendused ja allalaadimised JavaScriptile.",
      items: ["MainActivity", "ActualizadorApk", "VerificadorApk"]
    },
    {
      nombre: "ML Kit skanner",
      detalle: "Koodide lugemine 1920×1080 juures ilma fookuse või klaviatuurita.",
      items: ["ML Kit Barcode", "Kaamera", "1920×1080"]
    },
    {
      nombre: "Allalaadimine ja paigaldamine",
      detalle: "DownloadManager + FileProvider, kontrolliga enne paigaldamist.",
      items: ["DownloadManager", "FileProvider", "SHA-256"]
    },
    {
      nombre: "Manifest ja levitus",
      detalle: "version.json Netlifylt, ilma vahemäluta ja avatud CORS-iga.",
      items: ["version.json", "Netlify", "Allkirjastatud APK"]
    }
  ],
  flujoVenta: [
    { paso: 1, titulo: "Rakenduse avamine", detalle: "Avamisel (väljaspool /pos ja /caja) loetakse manifest ja BCV ametlik kurs." },
    { paso: 2, titulo: "Sisselogimine", detalle: "JWT koos sessionVersioniga; volitused liiguvad krüpteeritult HTTPS-i kaudu." },
    { paso: 3, titulo: "Kassa telefonis", detalle: "Skannimine ML Kit-iga või otsimine; offline-jada salvestab müügid, kui võrku pole." },
    { paso: 4, titulo: "Laekumine", detalle: "Sularaha, pank või segatud; kõik normaliseeritakse USD-sse ettevõtte kursiga." },
    { paso: 5, titulo: "Vahetuse sulgemine", detalle: "Sissetulekud lahti valuuti kaupa, eraldades sularaha ja panga." },
    { paso: 6, titulo: "Iseuuendus", detalle: "Teade kõrgema versionCode leidmisel; kasutaja otsustab uuendamise aja." }
  ],
  actualizacion: [
    { estado: "ooterežiim", detalle: "Loeb manifesti avamisel või taastamisel, väljaspool kassa ja laohalduse route'e." },
    { estado: "kontroll", detalle: "Kui versionCode on suurem, kuvatakse teade; muidu jääb ooterežiimi 24-tunni throttliga." },
    { estado: "teade", detalle: "Kasutaja valib „Uuenda kohe” või „Hiljem” (välja arvatud kohustusliku minVersionCode korral)." },
    { estado: "allalaadimine", detalle: "DownloadManager laadib alla APK; kasutaja saab katkestada ja naasta teate juurde." },
    { estado: "kontroll", detalle: "Enne paigaldamist kontrollitakse SHA-256, packageName, versionCode ja allkirja." },
    { estado: "paigaldamine", detalle: "Avaneb looduslik paigaldaja; kui kasutaja tühistab, naastakse teate juurde." }
  ],
  stack: [
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
      ["Netlify", "—", "Manifest + APK"],
      ["GitHub", "—", "Kood ja APK väljalasked"]
    ]}
  ]
};

export const gestorposAppData = { es, en, et };
