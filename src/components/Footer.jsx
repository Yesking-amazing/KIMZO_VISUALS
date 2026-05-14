export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <h3 className="footer__big">
            KIMZO VISUALS
          </h3>
          <div>
            <div className="footer__col-title">Explore</div>
            <div className="footer__col-list">
              <a href="#work">Work</a>
              <a href="#reel">Reel</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Connect</div>
            <div className="footer__col-list">
              <a href="https://www.instagram.com/kimzo.visuals/" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.tiktok.com/@kimzo.visuals" target="_blank" rel="noopener">TikTok</a>
              <a href="https://www.youtube.com/channel/UCxRq_enVzl-ZO_HzDED1tFA" target="_blank" rel="noopener">YouTube</a>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Get in touch</div>
            <div className="footer__col-list">
              <a href="mailto:contact@kimzo.net">contact@kimzo.net</a>
              <a href="https://tidycal.com/kimzo/filmmaking" target="_blank" rel="noopener">Schedule a call</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} KIMZO Visuals · Switzerland</span>
          <span>Crafted with care · v2026</span>
        </div>
      </div>
    </footer>
  );
}
