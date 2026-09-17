import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";
import { SpotifyIcon, YoutubeIcon } from "./icons";

/* El último episodio, a lo grande, todo visible de golpe — nada de hover.
   Reales: número, título y fecha son del episodio #186 de su web pública.
   `imagen` es opcional: la carátula real de ese episodio en Instagram,
   pendiente de que Manu la pase — hasta entonces se muestra sin foto. */
export function UltimoEpisodio() {
  const ep = site.ultimoEpisodio;

  return (
    <section id="ultimo" className="scroll-mt-16 bg-bg-2 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-bright">Último episodio</p>

        <div
          className="relative mt-6 overflow-hidden rounded-3xl border border-border p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--violet) 22%, var(--surface)), color-mix(in srgb, var(--amber) 14%, var(--surface)) 70%)",
          }}
        >
          {/* número gigante de fondo */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[11rem] font-black leading-none text-ink/[0.06] sm:text-[16rem]"
          >
            {ep.numero}
          </span>

          <div className={`relative grid gap-8 ${ep.imagen ? "sm:grid-cols-[1.3fr_1fr]" : ""}`}>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber px-3 py-1 font-display text-sm font-bold text-bg">
                  #{ep.numero}
                </span>
                <span className="text-sm text-ink-mute">{ep.fecha}</span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-balance">
                {ep.titulo}
              </h2>

              {ep.invitado && (
                <p className="mt-3 text-sm text-ink-soft">
                  Con <span className="font-semibold text-ink">{ep.invitado}</span> como invitado
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-amber-bright"
                >
                  Escuchar el episodio completo <ArrowUpRight size={16} />
                </a>
                <a
                  href={site.contacto.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{ background: "#1DB954" }}
                >
                  <SpotifyIcon width={20} height={20} />
                </a>
                <a
                  href={site.contacto.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{ background: "#FF0000" }}
                >
                  <YoutubeIcon width={20} height={20} />
                </a>
              </div>
            </div>

            {ep.imagen && (
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/50 sm:aspect-auto">
                <Image src={ep.imagen} alt={ep.titulo} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
