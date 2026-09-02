import Navbar from "@/components/CustomerComponent/Navbar";
import Hero from "@/components/CustomerComponent/Hero";
import About from "@/components/CustomerComponent/About";
import Menu from "@/components/CustomerComponent/Menu";
import Contact from "@/components/CustomerComponent/Contact";
import Footer from "@/components/CustomerComponent/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Menu />
      <Contact />

      <Footer />
    </>
  );
}