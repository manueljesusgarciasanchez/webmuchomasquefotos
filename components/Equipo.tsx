"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Trophy, ImageOff } from "lucide-react";
import { site, type Presentador } from "@/data";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./icons";

export function Equipo() {
  const presentadores = site.presentadores as unknown as Presentador[];
  const [open, setOpen] = useState<string | null>(presentadores[0]?.id ?? null);
  const abierto = presentadores.find((p) => p.id === open);

  return (
    <section id="equipo" className="relative scroll-mt-16 bg-bg-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-bright">Quiénes somos</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">El equipo detrás del micro</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            No solo hablan de fotografía, la hacen. Toca a cada uno para ver su trabajo.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {presentadores.map((p) => {
              const active = open === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setOpen(active ? null : p.id)}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border text-left transition-all ${
                    active ? "border-amber ring-2 ring-amber" : "border-border hover:border-ink-mute"
                  }`}
                >
                  {p.avatar ? (
                    <Image
                      src={p.avatar}
                      alt={p.nombre}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface text-ink-mute">
                      <ImageOff size={26} />
                      <span className="text-[11px]">Foto pendiente</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="font-display text-base font-semibold leading-tight text-ink sm:text-lg">
                      {p.nombre}
                    </p>
                    {p.alias && <p className="text-xs text-ink-soft">{p.alias}</p>}
                    {!p.confirmado && (
                      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-violet-bright">
                        por confirmar
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {abierto && (
          <Reveal>
            <div className="mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="grid gap-8 sm:grid-cols-[1fr_1.3fr]">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{abierto.nombre}</h3>
                  {abierto.alias && <p className="mt-1 text-sm text-ink-mute">{abierto.alias}</p>}
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{abierto.bio}</p>
                  {abierto.logros.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {abierto.logros.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-sm text-ink-soft">
                          <Trophy size={14} className="mt-0.5 shrink-0 text-amber-bright" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex gap-3">
                    {abierto.instagram && (
                      <a
                        href={abierto.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-ink"
                      >
                        <InstagramIcon width={13} height={13} /> Instagram
                      </a>
                    )}
                    {abierto.web && (
                      <a
                        href={abierto.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-ink"
                      >
                        <Globe size={13} /> Web
                      </a>
                    )}
                  </div>
                  {!abierto.confirmado && (
                    <p className="mt-5 text-xs text-ink-mute">
                      Nombre correcto, foto y bio pendientes de confirmar con el equipo.
                    </p>
                  )}
                </div>

                {abierto.portfolio.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2">
                    {abierto.portfolio.map((src) => (
                      <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                        <Image src={src} alt={`Foto de ${abierto.nombre}`} fill sizes="200px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-border p-10 text-center text-sm text-ink-mute">
                    Aquí iría su portfolio: 3 fotos suyas que representen su trabajo.
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
