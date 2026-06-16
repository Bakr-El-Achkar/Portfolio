import { useState } from "react";

export default function About() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      number: "01",
      title: "Who I Am",
      content:
        "I am a Computer Engineer with a growing passion for web development and building meaningful digital experiences. I enjoy solving problems, continuously learning, and transforming ideas into functional applications.",
    },

    {
      number: "02",
      title: "My Journey",
      content:
        "Throughout my learning journey, I built a strong foundation in HTML, CSS, and JavaScript, and expanded my skills through React and Node.js. Every project has strengthened both my technical abilities and my confidence as a developer.",
    },

    {
      number: "03",
      title: "My Goal",
      content:
        "My goal is to become a Full-Stack Web Developer capable of creating complete, user-centered solutions that combine engaging interfaces with robust back-end systems while continuing to grow professionally.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        {/* Progress Dots */}
        <div className="progress-dots">
          {pages.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index <= currentPage ? "active" : ""
              }`}
            ></span>
          ))}
        </div>

        <span className="page-number">
          {pages[currentPage].number} / 03
        </span>

        <h3>{pages[currentPage].title}</h3>

        <p>{pages[currentPage].content}</p>

        <div className="about-buttons">
          {currentPage > 0 && (
            <button
              className="secondary-btn"
              onClick={() =>
                setCurrentPage(currentPage - 1)
              }
            >
              ← Back
            </button>
          )}

          {currentPage < pages.length - 1 && (
            <button
              className="primary-btn"
              onClick={() =>
                setCurrentPage(currentPage + 1)
              }
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

