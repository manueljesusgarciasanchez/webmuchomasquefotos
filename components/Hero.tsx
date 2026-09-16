"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/data";

const COLLAGE = [
  "/presentadores/daniel-vine-1.webp",
  "/presentadores/isosbajas-2.webp",
  "/presentadores/daniel-vine-3.webp",
  "/presentadores/isosbajas-1.webp",
  "/presentadores/daniel-vine-2.webp",
  "/presentadores/isosbajas-3.webp",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-bg">
      {/* collage de fotos reales del equipo */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 opacity-70 sm:grid-cols-6">
        {COLLAGE.map((src, i) => (
          <div key={i} className="relative aspect-[3/4]">
            <Image src={src} alt="" fill sizes="17vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/70" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-bright"
        >
          {site.marca.claim}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[13vw] font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Mucho más<br />
          <span className="italic font-normal text-violet-bright">que fotos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-ink-soft text-balance sm:text-xl"
        >
          {site.hero.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={site.hero.ctaPrimario.href}
            className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-amber-bright"
          >
            {site.hero.ctaPrimario.label}
          </a>
          <a
            href={site.hero.ctaSecundario.href}
            className="rounded-full border border-ink/25 bg-bg/30 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/50 hover:bg-bg/50"
          >
            {site.hero.ctaSecundario.label}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#episodios"
        aria-label="Bajar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-ink-soft"
      >
        <ChevronDown className="animate-bounce" size={26} />
      </motion.a>
    </section>
  );
}
