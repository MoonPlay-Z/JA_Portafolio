// Datos del blog. Cada entrada vive aquí; la pantalla solo renderiza.
export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  readingMinutes: number;
  tags: string[];
  excerpt: string;
  project?: string;
  sections: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "pos-sin-internet",
    title: "Cómo hice que un POS funcione sin internet y no pierda una venta",
    date: "2026-11-20",
    readingMinutes: 6,
    tags: ["offline-first", "PostgreSQL", "Node"],
    excerpt:
      "Cobrar en un comercio venezolano significa cobrar aunque se caiga el servicio. Así resolví la venta sin conexión, la sincronización y el cobro en dos monedas.",
    project: "gestorpos",
    sections: [
      {
        heading: "El problema real",
        paragraphs: [
          "Un punto de venta que depende del internet deja de funcionar justo cuando hay cola en el mostrador. En GestorPOS la venta tiene que registrarse aunque el servidor esté inaccesible, y además el precio se muestra en dólares y se cobra en bolívares.",
        ],
      },
      {
        heading: "La venta se escribe en el dispositivo",
        paragraphs: [
          "El carrito se guarda en el equipo del vendedor. Cuando se confirma la venta, la operación se encola con un identificador generado en el cliente, de modo que al subir no colisione con otra venta registrada en otro mostrador.",
          "Si la conexión no está, la cola simplemente crece. Si está, se envían las operaciones pendientes en orden y el servidor responde con el estado final de cada una.",
        ],
      },
      {
        heading: "Sincronizar sin duplicar",
        paragraphs: [
          "Cada operación lleva su identificador, así que reenviar una venta ya registrada no crea una segunda venta: el servidor la reconoce y devuelve el resultado anterior. Eso hace que el reintento sea seguro, que es la parte que más se rompe cuando algo se sincroniza a mano.",
          "La cola se procesa de forma incremental: una operación fallida no bloquea las que siguen, se marca y se reintenta aparte.",
        ],
      },
      {
        heading: "Dólares y bolívares en el mismo recibo",
        paragraphs: [
          "El precio base se guarda en dólares y la conversión a bolívares se aplica con la tasa del momento de la venta. Guardar la tasa usada junto con la venta evita que un recibo cambie de valor cuando la tasa cambia al día siguiente.",
        ],
      },
      {
        heading: "Transacciones atómicas",
        paragraphs: [
          "Una venta descuenta inventario, registra el pago y deja el asiento de caja. Si algo de eso falla, la venta no queda a medias: PostgreSQL cierra la transacción y el inventario vuelve a su estado anterior.",
          "Esa parte no es cosmética: un inventario que se descuenta sin pago, o un pago sin descuento de inventario, es un sistema que empieza a dar números que nadie cree.",
        ],
      },
    ],
  },
  {
    slug: "escaner-android-ml-kit",
    title: "Escáner de códigos de barras en Android con Capacitor y ML Kit",
    date: "2026-11-08",
    readingMinutes: 5,
    tags: ["Android", "Capacitor", "Java"],
    excerpt:
      "La cámara del teléfono es el lector de códigos más barato que existe. Cómo lo conecté a una app web sin reescribir la app en nativo.",
    project: "gestorpos-app",
    sections: [
      {
        heading: "Una app web, dos plataformas",
        paragraphs: [
          "GestorPOS ya era una app de escritorio. Llevarla al teléfono con Capacitor significó reutilizar la misma interfaz y agregar solo lo que la web no puede hacer: acceder a la cámara y a la instalación de archivos.",
        ],
      },
      {
        heading: "El escáner",
        paragraphs: [
          "Para leer códigos usé ML Kit de Google, que corre en el dispositivo y no necesita subir la imagen a un servidor. El puente entre la parte web y la cámara está escrito en Java: la app web pide un escaneo y el puente devuelve el código leído.",
          "La ventaja práctica es la latencia: al no haber red involucrada, el escaneo se siente instantáneo, que es lo que un vendedor necesita cuando tiene la cola atrás.",
        ],
      },
      {
        heading: "Actualizarse sin tienda de aplicaciones",
        paragraphs: [
          "Publicar en una tienda agrega una espera que un cliente no quiere. La app se actualiza sola: descarga el APK con DownloadManager y antes de instalarlo verifica el SHA-256 y la firma, para no instalar un archivo que no sea el que yo subí.",
          "Sin esa verificación, una actualización automática es un riesgo de seguridad, no una comodidad.",
        ],
      },
    ],
  },
  {
    slug: "pruebas-que-antecipan",
    title: "22 tests, Playwright y k6: qué prueba que mi API aguanta",
    date: "2026-10-26",
    readingMinutes: 5,
    tags: ["testing", "Playwright", "k6"],
    excerpt:
      "Un sistema de caja no puede descubrir su límite el primer día de inventario. Así lo probé antes de que llegara un cliente.",
    project: "gestorpos",
    sections: [
      {
        heading: "Tres capas distintas",
        paragraphs: [
          "Los tests unitarios cubren la lógica: descuentos, conversión de moneda, reglas de inventario. Son 22 y corren en segundos. No dicen nada sobre si la pantalla funciona, y no pretenden decirlo.",
          "Playwright cubre el flujo completo en tres navegadores: abrir sesión, cobrar, ver el reporte. Ahí es donde se ve si un cambio en la API rompió algo que la lógica no toca.",
          "k6 cubre la carga: cuántas operaciones por segundo soporta la API antes de degradarse. Ese número es el que define qué le prometo a un cliente con varias cajas abiertas.",
        ],
      },
      {
        heading: "Qué hago con cada resultado",
        paragraphs: [
          "Un unitario roto detiene el cambio. Un E2E roto significa que hay que revisar el contrato entre la interfaz y la API. Un k6 que se degrada antes de lo esperado obliga a mirar consultas, índices o el tamaño de la cola de sincronización.",
          "La parte que más valor aporta es que los tres se corren igual de fácil: si probar es costoso, no se prueba.",
        ],
      },
    ],
  },
  {
    slug: "php-a-react-sin-parar",
    title: "Sistemas académicos en PHP: lo que aprendí manteniendo uno vivo",
    date: "2026-10-11",
    readingMinutes: 4,
    tags: ["PHP", "MVC", "PostgreSQL"],
    excerpt:
      "Tres años manteniendo el sistema de una universidad: reportes, actas y títulos, con ciclos que no se pueden interrumpir.",
    project: "uptp",
    sections: [
      {
        heading: "El ciclo académico no espera",
        paragraphs: [
          "En una universidad hay fechas que no se mueven: actas, títulos, parciales. El sistema tiene que estar disponible en esas semanas, así que el trabajo real fue que los cambios entraran sin detener el servicio.",
        ],
      },
      {
        heading: "MVC con PostgreSQL",
        paragraphs: [
          "El sistema estaba armado con PHP en patrón MVC sobre PostgreSQL, con Bootstrap en la interfaz. La parte más delicada no era la interfaz: eran los reportes, que cruzan materias, secciones y períodos, y tienen que cuadrar con las actas.",
          "Trabajar con SCRUM y XP ayudó a que cada entrega fuera pequeña y revisable, que es la única forma de cambiar algo en producción sin sustos.",
        ],
      },
      {
        heading: "Lo que me llevo",
        paragraphs: [
          "Un sistema viejo y en uso vale más que uno nuevo y sin usuarios. Aprender a leer código que no escribí, y a modificarlo sin romper lo que ya funciona, es la habilidad que más uso hoy, incluso en proyectos en React.",
        ],
      },
    ],
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
