"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, ArrowUpRight, Hash } from "lucide-react";
import { site, type Episodio } from "@/data";
import { Reveal } from "./Reveal";

export function Episodios() {
  const [q, setQ] = useState("");
  const eps = site.episodios as unknown as Episodio[];

  const fuse = useMemo(
    () =>
      new Fuse(eps, {
        keys: ["titulo", "resumen", "tags", "numero"],
        threshold: 0.35,
      }),
    [eps],
  );

  const results = q.trim() ? fuse.search(q).map((r) => r.item) : eps;

  return (
    <section id="episodios" className="relative scroll-mt-16 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-bright">Episodios</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            185 episodios, buscables de verdad
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-soft">
            Busca por tema, invitado o número. Muestra de 3 episodios reales para la propuesta;
            el archivo completo se carga entero al construir la web.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-8">
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-mute" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Busca por ejemplo: crítica de fotos, invitados, #184…"
              className="w-full rounded-full border border-border bg-surface py-3.5 pl-12 pr-5 text-sm text-ink outline-none placeholder:text-ink-mute focus:border-amber"
            />
          </div>
        </Reveal>

        <div className="mt-6 space-y-3">
          {results.length === 0 && (
            <p className="py-8 text-center text-sm text-ink-mute">
              Nada por aquí. Prueba con otra palabra (recuerda: solo hay 3 episodios cargados en esta demo).
            </p>
          )}
          {results.map((ep, i) => (
            <Reveal key={ep.numero} delay={0.04 * i}>
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-amber/50 hover:bg-surface-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg font-display text-sm font-semibold text-amber-bright">
                  #{ep.numero}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold leading-tight text-ink group-hover:text-amber-bright">
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
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-ink-mute transition-colors group-hover:text-amber-bright" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
