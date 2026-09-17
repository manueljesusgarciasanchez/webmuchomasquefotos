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
    <section id="equipo" className="relative scroll-mt-16 bg-bg-2 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-bright">Quiénes somos</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">El equipo detrás del micro</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            No solo hablan de fotografía, la hacen. Toca a cada uno para ver su trabajo.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-5 sm:justify-start">
            {presentadores.map((p) => {
              const active = open === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setOpen(active ? null : p.id)}
                  className="flex flex-col items-center gap-2"
                >
                  <span
                    className={`block rounded-full p-[2.5px] transition-all ${
                      active ? "bg-[linear-gradient(135deg,var(--amber-bright),var(--violet),var(--logo-purple))]" : "bg-border"
                    }`}
                  >
                    <span className="block rounded-full bg-bg-2 p-[2.5px]">
                      <span className="relative block h-16 w-16 overflow-hidden rounded-full bg-surface sm:h-20 sm:w-20">
                        {p.avatar ? (
                          <Image src={p.avatar} alt={p.nombre} fill sizes="80px" className="object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-ink-mute">
                            <ImageOff size={20} />
                          </div>
                        )}
                      </span>
                    </span>
                  </span>
                  <span className={`max-w-[5.5rem] truncate text-xs font-medium ${active ? "text-ink" : "text-ink-soft"}`}>
                    {p.nombre.split(" ")[0]}
                  </span>
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
