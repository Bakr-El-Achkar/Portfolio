import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-container">
        <div className={`contact-info ${inView ? "show-left" : ""}`}>
          <h3>Let's Build Something Great Together</h3>

          <p>
            Whether you have an opportunity, a project idea, or simply want
            to connect, I'd be happy to hear from you. Feel free to reach
            out through any of the channels below.
          </p>

          <div className="contact-card">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <a
                href="mailto:bakerachkar100@gmail.com"
                className="contact-link"
              >
                bakerachkar100@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <a href="tel:+96176864230" className="contact-link">
                +961 76 864 230
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span>💼</span>
            <div>
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/bakr-el-achkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span>💻</span>
            <div>
              <h4>GitHub</h4>
              <a
                href="https://github.com/Bakr-El-Achkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className={`contact-form ${inView ? "show-right" : ""}`}>
          <h3>Send a Message</h3>

          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}