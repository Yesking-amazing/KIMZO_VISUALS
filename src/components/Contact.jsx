import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Let's create something</div>
            <h2 className="contact__statement">
              Got an event? <em>Let's talk.</em>
            </h2>
            <p className="contact__sub">
              Tell me about your next event, tour, or release. I read every message and reply within 24 hours.
            </p>

            <div className="contact__direct">
              <a href="https://tidycal.com/kimzo/filmmaking" target="_blank" rel="noopener" className="contact__row">
                <span className="contact__row-label">Book a call</span>
                <span className="contact__row-value">tidycal.com/kimzo →</span>
              </a>
              <a href="mailto:contact@kimzo.net" className="contact__row">
                <span className="contact__row-label">Email</span>
                <span className="contact__row-value">contact@kimzo.net →</span>
              </a>
              <a href="https://www.instagram.com/kimzo.visuals/" target="_blank" rel="noopener" className="contact__row">
                <span className="contact__row-label">Instagram</span>
                <span className="contact__row-value">@kimzo.visuals →</span>
              </a>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label className="form__label" htmlFor="f-name">Your name</label>
              <input id="f-name" className="form__input" type="text" placeholder="Martijn Garritsen" required />
            </div>
            <div className="form__row">
              <label className="form__label" htmlFor="f-mail">Email</label>
              <input id="f-mail" className="form__input" type="email" placeholder="your@mail.com" required />
            </div>
            <div className="form__row">
              <label className="form__label" htmlFor="f-event">Event / project</label>
              <input id="f-event" className="form__input" type="text" placeholder="Festival highlight reel, July 2026" />
            </div>
            <div className="form__row">
              <label className="form__label" htmlFor="f-msg">Message</label>
              <textarea id="f-msg" className="form__textarea" placeholder="Tell me about the energy you want to capture..." />
            </div>
            <button type="submit" className="form__submit" disabled={sent}>
              {sent ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Message sent — talk soon
                </>
              ) : (
                <>
                  Send message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </>
              )}
            </button>
            <div className="form__hint">Replies within 24 hours · Available worldwide</div>
          </form>
        </div>
      </div>
    </section>
  );
}
