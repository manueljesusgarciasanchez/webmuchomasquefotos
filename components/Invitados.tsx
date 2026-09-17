import Image from "next/image";
import { ImageOff, ArrowUpRight } from "lucide-react";
import { site, type Episodio } from "@/data";
import { Reveal } from "./Reveal";

/* Invitados reales que han pasado por el programa, sacados de los propios
   episodios (site.episodios[].invitado). Cada uno lleva a su episodio real. */
export function Invitados() {
  const episodios = site.episodios as unknown as Episodio[];
  const invitados = episodios.filter((e) => e.invitado);

  if (invitados.length === 0) return null;

  return (
    <section id="invitados" className="scroll-mt-16 bg-bg py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-bright">Invitados</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Quién ha pasado por el micro</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">Toca a cada uno para escuchar su episodio.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-5 sm:justify-start">
            {invitados.map((ep) => (
              <a
                key={ep.numero}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <span className="relative block h-20 w-20 overflow-hidden rounded-full border border-border bg-surface transition-colors group-hover:border-violet sm:h-24 sm:w-24">
                  {ep.imagen ? (
                    <Image src={ep.imagen} alt={ep.invitado ?? ""} fill sizes="96px" className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-ink-mute">
                      <ImageOff size={22} />
                    </div>
                  )}
                  <span className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight size={20} className="text-ink" />
                  </span>
                </span>
                <span className="max-w-[6.5rem] text-center text-xs font-medium leading-tight text-ink-soft group-hover:text-ink">
                  {ep.invitado}
                </span>
                <span className="text-[10px] text-ink-mute">#{ep.numero}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
