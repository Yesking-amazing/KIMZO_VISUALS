import { HERO_IMAGES } from "../data";

function Strip({ images }) {
  return (
    <div className="hero__strip">
      <div className="hero__strip-track">
        {images.map((src, i) => (
          <div className="hero__strip-item" key={i}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const stripImages = [...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES];

  return (
    <section className="hero" id="top">
      <div className="hero__top">
        <div>
          <div className="eyebrow"><span className="dot"></span>Available worldwide · Based in Switzerland</div>
        </div>
        <div className="hero__meta">
          <div className="hero__meta-row"><span>Lat</span><span>47.3769° N</span></div>
        </div>
      </div>
      <div className="hero-split-grid">
        <h1 className="hero__wordmark"><span>KIMZO</span><span className="accent">VISUALS</span></h1>
        <div className="hero-split-reel">
          <div className="reel__chip"><span className="dot"></span>Reel · drops Sat</div>
          <div className="reel__placeholder">
            <button className="reel__playbtn" aria-label="Play reel">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
          <div className="reel__overlay-meta">
            <span><strong>Reel 2026</strong></span>
            <span>02:14 · 4K</span>
          </div>
        </div>
      </div>
      <div className="hero__tagline">
        <div className="hero__tagline-actions">
          <a href="#work" className="btn">View Work</a>
          <a href="#contact" className="btn btn--primary">Book a call <span className="arrow">→</span></a>
        </div>
      </div>
      <Strip images={stripImages} />
    </section>
  );
}
