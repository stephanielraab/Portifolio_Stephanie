import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";


export default function Home() {
  return (
    <>
      <Navbar />

      <Section id="inicio" >
        <Hero />
      </Section>

      <Section id="skills" >
        <Skills />
      </Section>

      <Section id="projetos">
        <Projects />
      </Section>

      <Section id="contato" >
        <Contact />
      </Section>
    
      <Footer />
    </>
  );
}
