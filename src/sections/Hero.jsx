import "../styles/global.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1 className="hero-name">Bakr El Achkar</h1>

        <h2 className="hero-role">
          Computer Engineer | University of Balamand Graduate
        </h2>

        <p className="hero-description">
          Building intelligent systems through software, Web development,
          AI, and embedded technologies. Passionate about
          solving real-world problems and continuously
          learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/Bakr-El Achkar1.png"
          alt="Bakr El Achkar"

        />
      </div>
    </section>
  );
}

