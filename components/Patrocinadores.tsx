import { Info } from "lucide-react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

export function Patrocinadores() {
  const p = site.patrocinadores;
  return (
    <section id="patrocinadores" className="scroll-mt-16 bg-bg py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="rounded-3xl border border-dashed border-violet/40 bg-bg-2 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-bright">
              {p.titulo}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {p.marcas.map((m) => (
                <div
                  key={m.nombre}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 font-display text-sm font-bold text-violet-bright">
                    {m.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{m.nombre}</p>
                    <p className="text-xs text-ink-mute">{m.rubro}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs text-ink-mute">
              <Info size={14} className="mt-px shrink-0" />
              {p.nota}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
