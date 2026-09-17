import { Send, Coffee, Camera } from "lucide-react";
import { site } from "@/data";
import { InstagramIcon, SpotifyIcon, YoutubeIcon, XIcon, FacebookIcon, TikTokIcon, ThreadsIcon } from "./icons";

const social = [
  { href: site.contacto.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.contacto.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: site.contacto.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.contacto.x, label: "X", Icon: XIcon },
  { href: site.contacto.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.contacto.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: site.contacto.threads, label: "Threads", Icon: ThreadsIcon },
];

export function Footer() {
  const { contacto } = site;
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Camera size={20} className="text-amber-bright" />
            <span className="font-display text-xl font-semibold italic">{site.marca.nombre}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">{site.marca.descripcionCorta}</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-ink">Escúchanos y síguenos en</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
            <a
              href={contacto.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
            >
              <Send size={18} />
            </a>
            <a
              href={contacto.kofi}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ko-fi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-amber hover:text-amber-bright"
            >
              <Coffee size={18} />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-ink">Contacto</p>
          <p className="mt-3 text-ink-soft">
            {contacto.email}
            <span className="block text-[11px] text-ink-mute">{contacto.emailNota}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[11px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>{site.marca.nombre}</span>
          <span>{site.demo.aviso}</span>
        </div>
      </div>
    </footer>
  );
}
