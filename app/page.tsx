import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { UltimoEpisodio } from "@/components/UltimoEpisodio";
import { MasEscuchados } from "@/components/MasEscuchados";
import { Episodios } from "@/components/Episodios";
import { Secciones } from "@/components/Secciones";
import { Equipo } from "@/components/Equipo";
import { Patrocinadores } from "@/components/Patrocinadores";
import { Footer } from "@/components/Footer";
import { DemoNotice } from "@/components/DemoNotice";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider fill="var(--bg-2)" />
        <UltimoEpisodio />
        <Secciones />
        <Divider fill="var(--bg)" />
        <MasEscuchados />
        <Episodios />
        <Divider fill="var(--bg-2)" />
        <Equipo />
        <Divider fill="var(--bg)" />
        <Patrocinadores />
      </main>
      <Footer />
      <DemoNotice />
    </>
  );
}
