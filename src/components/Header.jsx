import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">BEA.</div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hire-me">Why Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Side Menu */}

   

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>


        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#technologies" onClick={() => setMenuOpen(false)}>
          Technologies
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#hire-me" onClick={() => setMenuOpen(false)}>
          Why Me
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;