import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import About, { Logos } from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("reveal--visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal--visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <>
      <Nav />
      <Hero />
      <Reel />
      <Logos />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
