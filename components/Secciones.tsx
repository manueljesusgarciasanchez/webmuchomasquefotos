"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, Medal } from "lucide-react";
import { site, type SeccionPrograma } from "@/data";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

const PODIO_ALTURA: Record<number, string> = { 1: "h-28", 2: "h-20", 3: "h-14" };
const PODIO_COLOR: Record<number, string> = { 1: "#ffd23f", 2: "#c9ccd4", 3: "#cd8b5c" };
const PODIO_ORDEN = [2, 1, 3];

function Trivial() {
  const t = site.trivial;
  const top3 = t.ranking.filter((r) => r.pos <= 3);
  const resto = t.ranking.filter((r) => r.pos > 3);

  return (
    <div className="rounded-2xl border border-border bg-bg p-5">
      <div className="flex items-center justify-between text-xs text-ink-mute">
        <span>Clasificación en directo</span>
        <span>Actualizado: {t.actualizado}</span>
      </div>

      {/* podio visual del top 3 */}
      <div className="mt-5 flex items-end justify-center gap-3 sm:gap-5">
        {PODIO_ORDEN.map((pos) => {
          const r = top3.find((x) => x.pos === pos);
          if (!r) return null;
          return (
            <div key={pos} className="flex w-20 flex-col items-center sm:w-24">
              <Medal size={pos === 1 ? 22 : 18} style={{ color: PODIO_COLOR[pos] }} />
              <p className="mt-1 truncate text-xs font-semibold text-ink sm:text-sm">{r.nombre}</p>
              <p className="font-display text-sm font-bold" style={{ color: PODIO_COLOR[pos] }}>
                {r.puntos}
              </p>
              <div
                className={`mt-2 w-full rounded-t-lg ${PODIO_ALTURA[pos]}`}
                style={{ background: `linear-gradient(180deg, ${PODIO_COLOR[pos]}33, ${PODIO_COLOR[pos]}0d)`, borderTop: `2px solid ${PODIO_COLOR[pos]}` }}
              >
                <span className="flex h-full items-start justify-center pt-2 font-display text-lg font-black" style={{ color: PODIO_COLOR[pos] }}>
                  {pos}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {resto.length > 0 && (
        <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
          {resto.map((r) => (
            <li key={r.pos} className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 font-display text-xs font-bold text-ink-mute">
                {r.pos}
              </span>
              <span className="flex-1 text-ink">{r.nombre}</span>
              <span className="font-display font-semibold text-amber-bright">{r.puntos} pts</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 flex items-start gap-1.5 text-[11px] text-ink-mute">
        <Trophy size={12} className="mt-px shrink-0" />
        {t.nota}
      </p>
    </div>
  );
}

export function Secciones() {
  const secciones = site.secciones as unknown as SeccionPrograma[];
  const [open, setOpen] = useState<string | null>(null);

  // llega desde el menú con ?abrir=<id>#secciones y abre esa sección directamente
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("abrir");
    if (id) setOpen(id);
  }, []);

  return (
    <section id="secciones" className="scroll-mt-16 bg-bg-2 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-bright">El programa</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Secciones del programa</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">Cada sección tiene su propio formato y su propio color.</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {secciones.map((s, i) => {
            const active = open === s.id;
            return (
              <motion.button
                key={s.id}
                id={`sec-${s.id}`}
                onClick={() => setOpen(active ? null : s.id)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border text-left transition-all duration-300"
                style={{
                  borderColor: active ? s.color : "var(--border)",
                  boxShadow: active ? `0 0 32px -6px ${s.color}` : undefined,
                  ["--glow" as string]: s.color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px -8px ${s.color}`;
                  (e.currentTarget as HTMLElement).style.borderColor = s.color;
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }
                }}
              >
                <Image src={s.cartel} alt={s.nombre} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-80"
                  style={{ background: s.color }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="font-display text-sm font-bold leading-tight text-ink sm:text-base">{s.nombre}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {secciones.map((s) => {
          if (open !== s.id) return null;
          return (
            <div
              key={s.id}
              className="mt-6 rounded-2xl border bg-surface p-6 sm:p-8"
              style={{ borderColor: s.color }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                <h3 className="font-display text-xl font-bold">{s.nombre}</h3>
              </div>

              {s.pendiente ? (
                <p className="mt-4 text-sm text-ink-mute">Descripción pendiente de confirmar con el equipo.</p>
              ) : (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{s.descripcion}</p>
              )}

              {s.id === "trivial" && <div className="mt-5"><Trivial /></div>}

              {s.id === "criticona" && (
                <a
                  href={site.contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-violet-bright"
                >
                  <InstagramIcon width={15} height={15} /> Envía la tuya
                </a>
              )}

              {s.tagEpisodios && !s.pendiente && (
                <a
                  href={`?buscar=${encodeURIComponent(s.tagEpisodios)}#episodios`}
                  className="mt-5 flex w-fit items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-amber-bright"
                >
                  Ver episodios de esta sección <ArrowRight size={14} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
