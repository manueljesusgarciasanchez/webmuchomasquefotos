import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

/* Instagram con mucho más peso: es donde pasa el Trivial y los sorteos
   de equipo fotográfico, así que se lo pedimos claro. */
export function InstagramCTA() {
  return (
    <section className="bg-bg-2 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-14"
            style={{ background: "linear-gradient(135deg, #f9ce34, #ee2a7b 45%, #6228d7)" }}
          >
            <div className="relative mx-auto flex max-w-lg flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <InstagramIcon width={28} height={28} className="text-white" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                Únete a la comunidad en Instagram
              </h2>
              <p className="mt-3 text-white/90">
                Ahí abrimos el Trivial en directo y los sorteos de equipo fotográfico. Si quieres jugar y participar,
                es donde tiene que estar.
              </p>
              <a
                href={site.contacto.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
              >
                Seguir en Instagram <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
