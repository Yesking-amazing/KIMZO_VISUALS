import { PORTRAIT, CLIENTS } from "../data";

function Logos() {
  return (
    <section className="logos">
      <div className="container logos__inner">
        <div className="logos__label">Trusted on stage by</div>
        <div className="logos__list">
          {CLIENTS.map((name, i) => (
            <span key={i} className={`logos__item ${i % 3 === 1 ? "logos__item--alt" : ""}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__portrait">
            <span className="about__portrait-badge">Founder · Filmmaker</span>
            <img src={PORTRAIT} alt="Kim Zürcher" />
          </div>
          <div className="about__copy">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="dot"></span>About</div>
              <h2 className="about__name">Kim Zürcher</h2>
              <p className="about__role">— event filmmaker</p>
            </div>
            <div className="about__story">
              <p>
                I founded KIMZO Visuals to bring authentic, emotional storytelling to event videography and music videos. With a passion for capturing the energy of concerts, DJ sets, and festivals, my work celebrates music — and the people behind it.
              </p>
              <p>
                Every project is more than a video. It's about connection, emotion, and helping artists share their stories with the world. My mission is to deliver impactful, creative visuals that resonate and elevate.
              </p>
            </div>
            <div className="about__services">
              <div>
                <div className="service__num">01</div>
                <div className="service__name">Event Videography</div>
              </div>
              <div>
                <div className="service__num">02</div>
                <div className="service__name">Music Videos</div>
              </div>
              <div>
                <div className="service__num">03</div>
                <div className="service__name">Highlight Reels</div>
              </div>
            </div>
            <div className="about__actions">
              <a href="https://www.instagram.com/kimzo.visuals/" target="_blank" rel="noopener" className="btn">Instagram <span className="arrow">→</span></a>
              <a href="#contact" className="btn btn--primary">Work with me <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Logos };
export default About;
