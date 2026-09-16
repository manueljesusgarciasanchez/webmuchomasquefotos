/* ============================================================================
   MUCHO MÁS QUE FOTOS — contenido del sitio
   ----------------------------------------------------------------------------
   Plantilla WEBMD · sector "podcast / creadores de contenido".
   Demo de propuesta: parte del contenido es real (episodios, nombres,
   bios de los 2 presentadores con Instagram confirmado), el resto es
   marcador de posición claramente señalado, a la espera de que ellos
   confirmen fotos y datos.
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
}

export const site = {
  marca: {
    nombre: "Mucho Más Que Fotos",
    siglas: "MMQF",
    claim: "Un podcast de charlas de fotografía entre amigos",
    descripcionCorta:
      "Podcast semanal de fotografía: técnica, equipo, viajes y charlas sin filtro entre fotógrafos que llevan detrás una cámara toda la vida.",
  },

  contacto: {
    instagram: "https://www.instagram.com/muchomasqf",
    telegram: "https://t.me/muchomasquefotos",
    kofi: "https://ko-fi.com/muchomasquefotos",
    email: "hola@muchomasquefotos.com",
    emailNota: "correo de ejemplo para la propuesta",
  },

  plataformas: ["Spotify", "Apple Podcasts", "iVoox", "YouTube"],

  hero: {
    subtitulo:
      "185 episodios y contando. Técnica, equipo, viajes y las conversaciones de fotografía más sinceras en español.",
    ctaPrimario: { label: "Escuchar el último episodio", href: "#episodios" },
    ctaSecundario: { label: "Conoce al equipo", href: "#equipo" },
  },

  /* ---- presentadores ------------------------------------------------------
     2 confirmados con datos reales de su Instagram público (con permiso de
     Manu para esta demo). Los otros 4, marcador de posición hasta que se
     confirme quién es quién y consigan sus fotos. */
  presentadores: [
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
      id: "isosbajas",
      nombre: "Por confirmar",
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
      confirmado: false,
    },
    {
      id: "pau-prada",
      nombre: "Pau Prada",
      bio: "Presentador habitual de Mucho Más Que Fotos.",
      logros: [],
      portfolio: [],
      confirmado: false,
    },
    {
      id: "fernando-davila",
      nombre: "Fernando Dávila",
      bio: "Presentador habitual de Mucho Más Que Fotos.",
      logros: [],
      portfolio: [],
      confirmado: false,
    },
    {
      id: "alberto-moreno",
      nombre: "Alberto Moreno",
      bio: "Presentador habitual de Mucho Más Que Fotos.",
      logros: [],
      portfolio: [],
      confirmado: false,
    },
    {
      id: "dioni-cobos",
      nombre: "Dioni Cobos",
      bio: "Presentador habitual de Mucho Más Que Fotos.",
      logros: [],
      portfolio: [],
      confirmado: false,
    },
  ] as Presentador[],

  /* ---- episodios (reales, de su web pública) ------------------------------ */
  episodios: [
    {
      numero: 185,
      titulo: "TaraosMeet con Los Taraos, Kike y Chechu",
      resumen:
        "Encuentro con Los Taraos, Kike y Chechu, invitados habituales del programa.",
      fecha: "3 sept. 2026",
      tags: ["invitados", "encuentro", "los taraos"],
      url: "https://muchomasquefotos.com/2026/09/03/taraosmeet-con-los-taraos-kike-y-chechu-185/",
    },
    {
      numero: 184,
      titulo: "El BAR de MMQF, con Los Taraos, Kike y Chechu",
      resumen: "Charla distendida de barra con Los Taraos, Kike y Chechu.",
      fecha: "7 ago. 2026",
      tags: ["invitados", "los taraos", "charla"],
      url: "https://muchomasquefotos.com/2026/08/07/el-bar-de-mmqf-con-los-taraos-kike-y-chechu-184/",
    },
    {
      numero: 183,
      titulo: "La Criticona vuelve: crítica de fotos en directo",
      resumen: "Vuelve La Criticona: sesión de crítica de fotos en directo con el equipo.",
      fecha: "22 jul. 2026",
      tags: ["crítica de fotos", "en directo", "la criticona"],
      url: "https://muchomasquefotos.com/2026/07/22/la-criticona-vuelve-critica-de-fotos-en-directo-mmqf-183/",
    },
  ] as Episodio[],

  /* ---- patrocinadores (ficticio, marcador de posición) -------------------- */
  patrocinadores: {
    titulo: "Con quién colaboramos",
    nota:
      "Sabemos que tenéis patrocinadores reales — esto es solo para enseñar cómo quedaría la sección. Se sustituye por los vuestros en cuanto los confirméis.",
    marcas: [
      { nombre: "Nómada Óptica", rubro: "Óptica de viaje y fotografía", ficticia: true },
    ],
  },

  demo: {
    aviso:
      "Propuesta de diseño de WEBMD para Mucho Más Que Fotos. No es su web oficial y ningún dato aquí es contractual.",
    caduca: "2026-12-31T00:00:00+01:00",
  },
} as const;

export type Site = typeof site;
