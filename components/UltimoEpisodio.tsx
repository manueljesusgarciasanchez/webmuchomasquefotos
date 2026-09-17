import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";
import { SpotifyIcon, YoutubeIcon } from "./icons";

/* El último episodio, a lo grande, todo visible de golpe — nada de hover.
   Reales: número, título, fecha e invitado son del episodio #186; el vídeo
   incrustado es el real de su canal de YouTube. */
export function UltimoEpisodio() {
  const ep = site.ultimoEpisodio;

  return (
    <section id="ultimo" className="scroll-mt-16 bg-bg-2 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-bright">Último episodio</p>

        <div
          className="relative mt-6 overflow-hidden rounded-3xl border border-border p-4 sm:p-6"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--violet) 22%, var(--surface)), color-mix(in srgb, var(--amber) 14%, var(--surface)) 70%)",
          }}
        >
          {/* el vídeo real, protagonista */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-2xl shadow-black/50">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`}
              title={ep.titulo}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="relative mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-amber px-2.5 py-0.5 font-display text-xs font-bold text-bg">
                  #{ep.numero}
                </span>
                <span className="text-xs text-ink-mute">{ep.fecha}</span>
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold leading-tight sm:text-2xl text-balance">
                {ep.titulo}
              </h2>
              {ep.invitado && (
                <p className="mt-1 text-sm text-ink-soft">
                  Con <span className="font-semibold text-ink">{ep.invitado}</span> como invitado
                </p>
              )}
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2.5">
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-amber-bright"
              >
                Ficha del episodio <ArrowUpRight size={15} />
              </a>
              <a
                href={site.contacto.spotify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ background: "#1DB954" }}
              >
                <SpotifyIcon width={17} height={17} />
              </a>
              <a
                href={site.contacto.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ background: "#FF0000" }}
              >
                <YoutubeIcon width={17} height={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
