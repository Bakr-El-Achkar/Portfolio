import { useInView } from "react-intersection-observer";

export default function Technologies() {
  const technologies = [
    { name: "HTML", logo: "/html.svg" },
    { name: "CSS", logo: "/css.svg" },
    { name: "JavaScript", logo: "/js-.png" },
    { name: "React", logo: "/react.svg" },
    { name: "Tailwind", logo: "/tailwind-css.svg" },
    { name: "Bootstrap", logo: "/bootstrap.svg" },
    { name: "Git", logo: "/git.png" },
    { name: "GitHub", logo: "/github.svg" },
    { name: "Python", logo: "/python.svg" },
    { name: "Java", logo: "/java.svg" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="tech-section" id="technologies" ref={ref}>
      <h2 className="section-title">Technologies</h2>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={`tech-card ${inView ? "show" : ""}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <img src={tech.logo} alt={tech.name} />

            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

