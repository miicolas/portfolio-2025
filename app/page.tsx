import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import Exploration from "@/components/layout/exploration";
import Experience from "@/components/layout/experience";
import Skills from "@/components/layout/skills";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Exploration />
      <Experience />
      <Skills />
      <Footer/>
    </>
  );
}
