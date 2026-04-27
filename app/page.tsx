import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ParallaxSection } from "@/components/parallax-section";
import { About } from "@/components/about";
import { WhyUs } from "@/components/why-us";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ParallaxSection />
        <About />
        <WhyUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
