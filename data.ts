/* ============================================================================
   MUCHO MÁS QUE FOTOS — contenido del sitio
   ----------------------------------------------------------------------------
   Plantilla WEBMD · sector "podcast / creadores de contenido".
   Demo de propuesta: contenido real donde lo hay (episodios, enlaces,
   nombres, tagline, logo). Lo marcado "muestra"/"ejemplo" es contenido de
   demostración explícitamente acordado con Manu, nunca presentado como
   hecho real sin avisar.
   ============================================================================ */

export interface Presentador {
  id: string;
  nombre: string;
  alias?: string;
  bio: string;
  logros: string[];
  avatar?: string;
  portfolio: string[];
  instagram?: string;
  web?: string;
  confirmado: boolean;
}

export interface Episodio {
  numero: number;
  titulo: string;
  resumen: string;
  fecha: string;
  tags: string[];
  url: string;
  imagen?: string;
  invitado?: string;
}

export interface SeccionPrograma {
  id: string;
  nombre: string;
  cartel: string;
  color: string; // acento de color propio de la sección
  descripcion: string;
  pendiente?: boolean; // true = aún no sabemos qué va aquí, no inventar
  tagEpisodios?: string; // etiqueta para filtrar el buscador de episodios
}

export const site = {
  marca: {
    nombre: "Mucho Más Que Fotos",
    siglas: "MQF",
    claim: "Un podcast de charlas de Fotografía entre amigos",
    descripcionCorta:
      "Podcast semanal de fotografía: técnica, equipo, viajes y charlas sin filtro entre fotógrafos que llevan detrás una cámara toda la vida.",
  },

  logo: "/brand/logo.webp",

  contacto: {
    instagram: "https://www.instagram.com/muchomasqf",
    youtube: "https://youtube.com/@muchomasquefotos",
    spotify: "https://open.spotify.com/show/3zvXBPd3qdfgRzMr0Yj5G2",
    telegram: "https://t.me/muchomasquefotos",
    x: "https://x.com/muchomasqf",
    facebook: "https://www.facebook.com/Mucho-M%C3%A1s-Que-Fotos-185007948343290/",
    tiktok: "https://www.tiktok.com/@muchomasquefotos",
    threads: "https://www.threads.net/@muchomasqf",
    kofi: "https://ko-fi.com/muchomasquefotos",
    email: "hola@muchomasquefotos.com",
    emailNota: "correo de ejemplo para la propuesta",
  },

  hero: {
    portada: "/brand/hero-portada.webp",
    ctaPrimario: { label: "Escuchar el último episodio", href: "#ultimo" },
    ctaSecundario: { label: "Ver secciones", href: "#secciones" },
  },

  /* ---- último episodio (real) -------------------------------------------- */
  ultimoEpisodio: {
    numero: 186,
    titulo: "La IA se ha vuelto loca: novedades, polémicas y ¿el fin de la humanidad?",
    fecha: "17 de septiembre de 2026",
    url: "https://muchomasquefotos.com/2026/09/17/186-la-ia-se-ha-vuelto-loca-novedades-polemicas-y-el-fin-de-la-humanidad/",
    invitado: "Juan Pablo de Miguel",
    imagen: "/episodios/186-ia-se-ha-vuelto-loca.webp",
    youtubeId: "M3UO69wHhms",
  },

  /* ---- episodios (reales, de su archivo público) -------------------------- */
  episodios: [
    { numero: 186, titulo: "La IA se ha vuelto loca: novedades, polémicas y ¿el fin de la humanidad?", resumen: "Actualidad y debate sobre inteligencia artificial en fotografía, con Juan Pablo de Miguel.", fecha: "17 sept. 2026", tags: ["actualidad", "ia", "invitados"], url: "https://muchomasquefotos.com/2026/09/17/186-la-ia-se-ha-vuelto-loca-novedades-polemicas-y-el-fin-de-la-humanidad/", imagen: "/episodios/186-ia-se-ha-vuelto-loca.webp", invitado: "Juan Pablo de Miguel" },
    { numero: 185, titulo: "TaraosMeet con Los Taraos, Kike y Chechu", resumen: "Encuentro con Los Taraos, Kike y Chechu, invitados habituales del programa.", fecha: "3 sept. 2026", tags: ["invitados", "encuentro", "los taraos"], url: "https://muchomasquefotos.com/2026/09/03/taraosmeet-con-los-taraos-kike-y-chechu-185/", imagen: "/episodios/185-taraosmeet.webp" },
    { numero: 184, titulo: "El BAR de MMQF con Los Taraos, Kike y Chechu", resumen: "Charla distendida de barra con Los Taraos, Kike y Chechu.", fecha: "7 ago. 2026", tags: ["invitados", "los taraos", "bar"], url: "https://muchomasquefotos.com/2026/08/07/el-bar-de-mmqf-con-los-taraos-kike-y-chechu-184/", imagen: "/episodios/184-el-bar-taraos.webp" },
    { numero: 183, titulo: "La Criticona vuelve: crítica de fotos en directo", resumen: "Vuelve La Criticona: sesión de crítica de fotos en directo con el equipo.", fecha: "22 jul. 2026", tags: ["crítica de fotos", "en directo", "la criticona"], url: "https://muchomasquefotos.com/2026/07/22/la-criticona-vuelve-critica-de-fotos-en-directo-mmqf-183/", imagen: "/episodios/183-la-criticona-vuelve.webp" },
    { numero: 182, titulo: "Nuestras mochilas para el eclipse: cámaras, filtros y cacharros imprescindibles", resumen: "Qué llevar en la mochila para fotografiar un eclipse.", fecha: "15 jul. 2026", tags: ["equipo", "eclipse"], url: "https://muchomasquefotos.com/", imagen: "/episodios/182-mochilas-eclipse.webp" },
    { numero: 181, titulo: "Antoni Cladera: El eclipse, PhotoPills y la foto soñada", resumen: "Charla con Antoni Cladera sobre el eclipse, PhotoPills y su foto soñada.", fecha: "9 jul. 2026", tags: ["invitados", "modo ráfaga", "eclipse", "antoni cladera"], url: "https://muchomasquefotos.com/" },
    { numero: 180, titulo: "Eclipse solar, fotografía y CEFOTO: la fotografía que se vive en comunidad", resumen: "Fotografía de comunidad alrededor de CEFOTO y el eclipse solar.", fecha: "3 jul. 2026", tags: ["comunidad", "eclipse", "cefoto"], url: "https://muchomasquefotos.com/" },
    { numero: 179, titulo: "Dan Zafra: la noche y el filtro que cambia el cielo", resumen: "Dan Zafra habla de fotografía nocturna y del filtro que cambia el cielo.", fecha: "25 jun. 2026", tags: ["invitados", "nocturna", "dan zafra"], url: "https://muchomasquefotos.com/" },
    { numero: 178, titulo: "Astrofotografía, procesado y paciencia con Horacio Lander", resumen: "Astrofotografía y procesado con Horacio Lander.", fecha: "25 jun. 2026", tags: ["invitados", "astrofotografía", "horacio lander"], url: "https://muchomasquefotos.com/" },
    { numero: 177, titulo: "El papa en España: la cobertura de Ángel Pérez Meca", resumen: "Cobertura fotoperiodística de la visita del papa a España.", fecha: "25 jun. 2026", tags: ["invitados", "fotoperiodismo", "ángel pérez meca"], url: "https://muchomasquefotos.com/" },
  ] as Episodio[],

  masEscuchados: {
    titulo: "Los más escuchados",
    nota: "Selección de muestra para la propuesta — el ranking real por escuchas se conecta cuando tengamos ese dato.",
    numeros: [186, 183, 179] as number[],
  },

  /* ---- secciones del programa (muy importante) ---------------------------- */
  secciones: [
    {
      id: "trivial",
      nombre: "Trivial MMQF",
      cartel: "/secciones/trivial.webp",
      color: "#f2760e",
      descripcion: "Trivia de fotografía en directo. Participa y gana.",
      tagEpisodios: "trivial",
    },
    {
      id: "criticona",
      nombre: "La Criticona",
      cartel: "/secciones/criticona.webp",
      color: "#c23fb0",
      descripcion: "Analizamos vuestras fotos.",
      tagEpisodios: "crítica de fotos",
    },
    {
      id: "rafaga",
      nombre: "Modo Ráfaga",
      cartel: "/secciones/rafaga.webp",
      color: "#3fa64a",
      descripcion:
        "Las mismas preguntas para cada invitado, en modo ráfaga: respuestas rápidas, sin pensarlo dos veces.",
      tagEpisodios: "modo ráfaga",
    },
    {
      id: "bar",
      nombre: "El Bar",
      cartel: "/secciones/bar.webp",
      color: "#e0a428",
      descripcion: "",
      pendiente: true,
      tagEpisodios: "bar",
    },
  ] as SeccionPrograma[],

  /* ---- trivial: clasificación (muestra de capacidades) --------------------- */
  trivial: {
    actualizado: "16 sept. 2026",
    nota: "Ranking de muestra, con nombres inventados — así quedaría con datos reales.",
    ranking: [
      { pos: 1, nombre: "Marta Iglesias", puntos: 940 },
      { pos: 2, nombre: "Iván Roca", puntos: 875 },
      { pos: 3, nombre: "Cristina Beltrán", puntos: 810 },
      { pos: 4, nombre: "Rubén Domínguez", puntos: 745 },
      { pos: 5, nombre: "Laura Ferrando", puntos: 690 },
    ],
  },

  /* ---- presentadores ------------------------------------------------------
     Pau Prada, Daniel Viñé y Alberto Moreno confirmados con datos reales de
     su Instagram público (con permiso de Manu para esta demo). Los otros 2,
     marcador de posición hasta que se confirme quién es quién y sus fotos. */
  presentadores: [
    {
      id: "pau-prada",
      nombre: "Pau Prada",
      alias: "@pau_prada",
      bio: "Fotografía Social, de Estudio y Eventos. Presenta y produce Mucho Más Que Fotos.",
      logros: ["815 seguidores en Instagram", "1089 publicaciones"],
      avatar: "/presentadores/pau-prada-avatar.webp",
      portfolio: [],
      instagram: "https://www.instagram.com/pau_prada",
      web: "https://pauprada.com/mis-enlaces",
      confirmado: true,
    },
    {
      id: "daniel-vine",
      nombre: "Daniel Viñé",
      alias: "@danielvgphoto",
      bio: "Fotógrafo aéreo y nocturno. Especialista en captar paisajes desde el aire y bajo cielos estrellados, de los volcanes de Islandia al desierto del Sáhara.",
      logros: ["2º Aerial Photographer of the Year 2025", "19,6k seguidores en Instagram"],
      avatar: "/presentadores/daniel-vine-avatar.webp",
      portfolio: [
        "/presentadores/daniel-vine-1.webp",
        "/presentadores/daniel-vine-2.webp",
        "/presentadores/daniel-vine-3.webp",
      ],
      instagram: "https://www.instagram.com/danielvgphoto",
      web: "https://www.danielvgphoto.com",
      confirmado: true,
    },
    {
      id: "alberto-moreno",
      nombre: "Alberto Moreno",
      alias: "@enisosbajas",
      bio: "Fotografía nocturna y timelapse. Enseña y captura proyectos únicos bajo el cielo estrellado.",
      logros: ["6,3k seguidores en Instagram", "Canal de YouTube: En Isos Bajas"],
      avatar: "/presentadores/isosbajas-avatar.webp",
      portfolio: [
        "/presentadores/isosbajas-1.webp",
        "/presentadores/isosbajas-2.webp",
        "/presentadores/isosbajas-3.webp",
      ],
      instagram: "https://www.instagram.com/enisosbajas",
      confirmado: true,
    },
    { id: "fernando-davila", nombre: "Fernando Dávila", bio: "Presentador habitual de Mucho Más Que Fotos.", logros: [], portfolio: [], confirmado: false },
    { id: "dioni-cobos", nombre: "Dioni Cobos", bio: "Presentador habitual de Mucho Más Que Fotos.", logros: [], portfolio: [], confirmado: false },
  ] as Presentador[],

  /* ---- patrocinadores (ficticio, marcador de posición) -------------------- */
  patrocinadores: {
    titulo: "Con quién colaboramos",
    nota:
      "Sabemos que tenéis patrocinadores reales — esto es solo para enseñar cómo quedaría la sección. Se sustituye por los vuestros en cuanto los confirméis.",
    marcas: [{ nombre: "Nómada Óptica", rubro: "Óptica de viaje y fotografía", ficticia: true }],
  },

  demo: {
    aviso:
      "Propuesta de diseño de queverenislandia.es para Mucho Más Que Fotos. No es su web oficial y ningún dato aquí es contractual.",
    caduca: "2026-12-31T00:00:00+01:00",
  },
} as const;

export type Site = typeof site;
