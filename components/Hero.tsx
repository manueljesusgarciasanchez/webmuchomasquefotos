"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, type SeccionPrograma, type Episodio } from "@/data";
import { SpotifyIcon, YoutubeIcon, InstagramIcon } from "./icons";

const secciones = site.secciones as unknown as SeccionPrograma[];
const episodios = site.episodios as unknown as Episodio[];

/* pared de fotos real: carátula + pósters de secciones + carátulas de
   episodios que ya tenemos, en vez de una sola foto suelta */
const collage = [
  site.hero.portada,
  ...secciones.map((s) => s.cartel),
  ...episodios.map((e) => e.imagen).filter((x): x is string => Boolean(x)),
].slice(0, 10);

const ticker = [
  ...episodios.filter((e) => e.imagen).map((e) => `#${e.numero}`),
  ...secciones.map((s) => s.nombre.toUpperCase()),
];

/* Hero "boom": pared de fotos reales de fondo (no una sola imagen suelta),
   con el titular grande encima y una cinta con episodios y secciones. */
export function Hero() {
  return (
    <section id="top" className="bg-grain relative min-h-[640px] overflow-hidden bg-bg pt-24 sm:min-h-[760px] sm:pt-28 lg:min-h-[820px]">
      {/* pared de fotos reales */}
      <div aria-hidden className="absolute inset-0 z-0 grid grid-cols-5 grid-rows-2 gap-2 p-2 sm:gap-3 sm:p-3">
        {collage.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl border border-white/5">
            <Image src={src} alt="" fill sizes="20vw" className="object-cover" priority={i < 3} />
          </div>
        ))}
      </div>

      {/* velo oscuro para que el texto se lea */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, var(--bg) 0%, var(--bg) 46%, rgba(10,10,12,.88) 60%, rgba(10,10,12,.5) 78%, rgba(10,10,12,.15) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(214,51,143,.2), transparent 40%), linear-gradient(180deg, transparent 55%, var(--bg) 100%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-6xl px-5 pb-16 lg:pb-24">
        <div className="max-w-2xl text-center lg:text-left">
          {/* logo real a color, compartiendo espacio con el titular, sin pisarlo */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:items-start lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28 lg:h-36 lg:w-36"
            >
              <Image src={site.logo} alt={site.marca.nombre} fill sizes="144px" unoptimized className="object-contain drop-shadow-[0_0_28px_rgba(214,51,143,0.4)]" priority />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl font-extralight leading-[0.92] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl"
            >
              Mucho más
              <br />
              <span className="text-gradient-logo italic font-black">que fotos</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-md text-lg text-ink-soft text-balance lg:mx-0"
          >
            {site.marca.claim}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a href={site.hero.ctaPrimario.href} className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-amber-bright">
              {site.hero.ctaPrimario.label}
            </a>
            <a href={site.hero.ctaSecundario.href} className="rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/50">
              {site.hero.ctaSecundario.label}
            </a>
          </motion.div>

          {/* redes, bien visibles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="text-xs uppercase tracking-wide text-ink-mute">Escúchanos en</span>
            <a href={site.contacto.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright">
              <SpotifyIcon />
            </a>
            <a href={site.contacto.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright">
              <YoutubeIcon />
            </a>
            <a href={site.contacto.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright">
              <InstagramIcon />
            </a>
          </motion.div>
        </div>
      </div>

      {/* cinta en movimiento con episodios y secciones reales */}
      <div className="relative z-20 overflow-hidden border-t border-white/10 bg-bg/60 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-4 flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-ink-mute">
              {t}
              <span className="text-amber-bright">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
