import { Flame, ArrowUpRight } from "lucide-react";
import { site, type Episodio } from "@/data";

export function MasEscuchados() {
  const cfg = site.masEscuchados;
  const eps = site.episodios as unknown as Episodio[];
  const items = cfg.numeros.map((n) => eps.find((e) => e.numero === n)).filter(Boolean) as Episodio[];

  return (
    <section className="bg-bg py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-bright">{cfg.titulo}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Los favoritos de la audiencia</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {items.map((ep, i) => (
            <a
              key={ep.numero}
              href={ep.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-violet/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-display text-lg font-bold text-violet-bright">
                  <Flame size={16} /> #{i + 1}
                </span>
                <span className="text-xs text-ink-mute">#{ep.numero}</span>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink group-hover:text-violet-bright">
                {ep.titulo}
              </h3>
              <span className="mt-auto flex items-center gap-1 pt-4 text-xs text-ink-mute">
                Escuchar <ArrowUpRight size={12} />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs text-ink-mute">{cfg.nota}</p>
      </div>
    </section>
  );
}
