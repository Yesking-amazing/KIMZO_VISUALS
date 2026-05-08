import { useState, useEffect } from "react";
import { PORTFOLIO, CATEGORIES } from "../data";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.cat === filter);

  const visible = expanded ? filtered : filtered.slice(0, 8);
  const remaining = filtered.length - 8;

  const counts = CATEGORIES.reduce((acc, c) => {
    acc[c] = c === "All" ? PORTFOLIO.length : PORTFOLIO.filter(p => p.cat === c).length;
    return acc;
  }, {});

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="portfolio__header">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot"></span>Selected work · 2024 — 2026</div>
            <h2 className="h-section">The <em className="italic-accent" style={{ color: 'var(--accent)' }}>portfolio</em>.</h2>
          </div>
          <p className="lead" style={{ maxWidth: '36ch' }}>
            A curated edit. Click any frame for full resolution.
          </p>
        </div>

        <div className="portfolio__filters" role="tablist" aria-label="Filter portfolio">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              className={`chip ${filter === cat ? "chip--active" : ""}`}
              onClick={() => { setFilter(cat); setExpanded(false); }}
            >
              {cat}
              <span className="chip__count">{counts[cat]}</span>
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((item) => (
            <div
              key={item.id}
              className={`tile ${item.span === "wide" ? "tile--wide" : ""} ${item.span === "tall" ? "tile--tall" : ""}`}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") setLightbox(item); }}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="tile__caption">
                <div>
                  <h3 className="tile__title">{item.title}</h3>
                  <div className="tile__meta">{item.loc} · {item.year}</div>
                </div>
                <span className="tile__cat">{item.cat}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 8 && (
          <div className="portfolio__footer">
            <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <>
                  <span>Show less</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                </>
              ) : (
                <>
                  <span>Show all work</span>
                  <span className="count">+{remaining} more</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img className="lightbox__img" src={lightbox.img} alt={lightbox.title} />
            <div className="lightbox__caption">
              {lightbox.title} · {lightbox.cat} · {lightbox.loc} · {lightbox.year}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
