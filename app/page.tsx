import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import ClientWork from "@/components/ClientWork";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problems />
        <OpenSource />
        <ClientWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
