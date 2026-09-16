import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Episodios } from "@/components/Episodios";
import { Equipo } from "@/components/Equipo";
import { Patrocinadores } from "@/components/Patrocinadores";
import { Footer } from "@/components/Footer";
import { DemoNotice } from "@/components/DemoNotice";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Episodios />
        <Equipo />
        <Patrocinadores />
      </main>
      <Footer />
      <DemoNotice />
    </>
  );
}
