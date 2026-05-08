import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand">
        <span className="nav__brand-mark">K</span>
        <span>KIMZO Visuals</span>
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#work">Work</a>
        <a className="nav__link" href="#reel">Reel</a>
        <a className="nav__link" href="#about">About</a>
        <a className="nav__link" href="#contact">Contact</a>
      </div>
      <a className="nav__cta" href="#contact">
        Book a call
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </a>
    </nav>
  );
}
