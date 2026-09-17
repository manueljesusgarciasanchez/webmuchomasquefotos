"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data";
import { SpotifyIcon, YoutubeIcon, InstagramIcon } from "./icons";

/* Hero centrado en el podcast: texto propio a un lado, su carátula real
   (ilustración que ya usan ellos) al otro, sin recortarla ni encimarle texto. */
export function Hero() {
  return (
    <section id="top" className="bg-grain relative overflow-hidden bg-bg pt-24 sm:pt-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(214,51,143,.22), transparent 45%), radial-gradient(circle at 90% 80%, rgba(242,161,58,.18), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-24">
        {/* texto */}
        <div className="text-center lg:text-left">
          {/* logo real a color, compartiendo espacio con el titular, sin pisarlo */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:items-start lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
            >
              <Image src={site.logo} alt={site.marca.nombre} fill sizes="128px" className="object-contain drop-shadow-[0_0_28px_rgba(214,51,143,0.35)]" priority />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-extralight leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl"
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

        {/* carátula real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "linear-gradient(135deg, var(--violet), var(--amber))" }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/60">
            <Image src={site.hero.portada} alt={site.marca.nombre} fill sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
