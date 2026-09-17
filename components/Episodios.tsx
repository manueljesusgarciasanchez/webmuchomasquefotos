"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Fuse from "fuse.js";
import { Search, ArrowUpRight, Hash, X } from "lucide-react";
import { site, type Episodio } from "@/data";
import { Reveal } from "./Reveal";

const PASO = 5;
const CARGA_MAS = 10;

function EpisodioRow({ ep }: { ep: Episodio }) {
  const [on, setOn] = useState(false);
  return (
    <a
      href={ep.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      onFocus={() => setOn(true)}
      onBlur={() => setOn(false)}
      className={`relative flex items-start gap-4 rounded-2xl border p-5 transition-colors ${
        on ? "border-amber/50 bg-surface-2" : "border-border bg-surface"
      }`}
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg font-display text-sm font-semibold transition-colors ${on ? "text-amber-bright" : "text-amber-bright"}`}>
        #{ep.numero}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className={`font-display text-lg font-semibold leading-tight transition-colors ${on ? "text-amber-bright" : "text-ink"}`}>
          {ep.titulo}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{ep.resumen}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="text-xs text-ink-mute">{ep.fecha}</span>
          {ep.tags.map((t) => (
            <span key={t} className="flex items-center gap-0.5 text-xs text-violet-bright">
              <Hash size={11} />
              {t}
            </span>
          ))}
        </div>
      </div>
      <ArrowUpRight size={18} className={`mt-1 shrink-0 transition-colors ${on ? "text-amber-bright" : "text-ink-mute"}`} />

      {ep.imagen && (
        <div
          aria-hidden
          className={`pointer-events-none absolute left-[62%] top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transition-all duration-300 lg:block ${
            on ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div
            className={`relative h-48 w-40 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/70 transition-transform duration-300 ${
              on ? "-translate-y-2 rotate-[-3deg]" : "translate-y-2"
            }`}
          >
            <Image src={ep.imagen} alt="" fill sizes="160px" className="object-cover" />
          </div>
        </div>
      )}
    </a>
  );
}

export function Episodios() {
  const [q, setQ] = useState("");
  const [visibles, setVisibles] = useState(PASO);
  const eps = site.episodios as unknown as Episodio[];

  // si se llega desde una tarjeta de "Secciones" con ?buscar=..., precarga el filtro
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("buscar");
    if (tag) setQ(tag);
  }, []);

  useEffect(() => {
    setVisibles(PASO);
  }, [q]);

  const fuse = useMemo(
    () => new Fuse(eps, { keys: ["titulo", "resumen", "tags", "numero"], threshold: 0.35 }),
    [eps],
  );

  const results = q.trim() ? fuse.search(q).map((r) => r.item) : eps;
  const mostrados = results.slice(0, visibles);
  const quedan = results.length - mostrados.length;

  return (
    <section id="episodios" className="relative scroll-mt-16 bg-bg py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-bright">Episodios</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Encuentra el episodio que buscas</h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          Busca el episodio que estás deseando escuchar, solo pon palabras clave como título, invitado o temática:
          si está en el podcast, lo escucharás gratis aquí.
        </p>

        <div className="relative mt-8">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-mute" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Busca por ejemplo: eclipse, invitados, #184…"
            className="w-full rounded-full border border-border bg-surface py-3.5 pl-12 pr-12 text-sm text-ink outline-none placeholder:text-ink-mute focus:border-amber"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              aria-label="Limpiar búsqueda"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute hover:text-ink"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="mt-6 space-y-3">
          {results.length === 0 && (
            <p className="py-8 text-center text-sm text-ink-mute">
              Nada por aquí con esa palabra en esta muestra de 10 episodios.
            </p>
          )}
          {mostrados.map((ep, i) => (
            <Reveal key={ep.numero} delay={Math.min(i * 0.05, 0.4)} y={12}>
              <EpisodioRow ep={ep} />
            </Reveal>
          ))}
        </div>

        {quedan > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setVisibles((v) => v + CARGA_MAS)}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
            >
              Cargar {Math.min(CARGA_MAS, quedan)} más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
