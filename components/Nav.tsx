"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Camera, ChevronDown } from "lucide-react";
import { site, type SeccionPrograma } from "@/data";
import { SpotifyIcon, YoutubeIcon, InstagramIcon } from "./icons";

const links = [
  { label: "Último episodio", href: "#ultimo" },
  { label: "Episodios", href: "#episodios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Patrocinadores", href: "#patrocinadores" },
];

const social = [
  { href: site.contacto.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: site.contacto.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.contacto.instagram, label: "Instagram", Icon: InstagramIcon },
];

const secciones = site.secciones as unknown as SeccionPrograma[];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSecOpen, setMobileSecOpen] = useState(false);
  const [hoverSec, setHoverSec] = useState<string | null>(null);
  const preview = secciones.find((s) => s.id === hoverSec) ?? secciones[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="Inicio">
          <Camera size={20} className="text-amber-bright" />
          <span className="font-display text-lg font-semibold italic">MMQF</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <a href={links[0].href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            {links[0].label}
          </a>
          <a href={links[1].href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            {links[1].label}
          </a>

          {/* dropdown con las 4 secciones reales, no un enlace genérico */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
              Secciones
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full flex w-[21rem] -translate-x-1/2 gap-3 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-2xl shadow-black/50">
                {secciones.map((s) => (
                  <a
                    key={s.id}
                    href={`/?abrir=${s.id}#secciones`}
                    onMouseEnter={() => setHoverSec(s.id)}
                    className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
                    {s.nombre}
                  </a>
                ))}
              </div>

              {/* cartel real de la sección que se ve al pasar el ratón */}
              <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={preview.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute inset-0"
                  >
                    <Image src={preview.cartel} alt={preview.nombre} fill sizes="112px" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <a href={links[2].href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            {links[2].label}
          </a>
          <a href={links[3].href} className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            {links[3].label}
          </a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>

        <button className="lg:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {[links[0], links[1]].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-surface hover:text-ink"
              >
                {l.label}
              </a>
            ))}

            <button
              onClick={() => setMobileSecOpen((v) => !v)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-surface hover:text-ink"
            >
              Secciones
              <ChevronDown size={16} className={`transition-transform ${mobileSecOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSecOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {secciones.map((s) => (
                  <a
                    key={s.id}
                    href={`/?abrir=${s.id}#secciones`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-surface hover:text-ink"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
                    {s.nombre}
                  </a>
                ))}
              </div>
            )}

            {[links[2], links[3]].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-surface hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-3 border-t border-border px-3 pt-4">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
