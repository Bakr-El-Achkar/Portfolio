import { useInView } from "react-intersection-observer";

export default function WhyMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const strengths = [
    {
      title: "Strong Engineering Mindset",
      description:
        "I enjoy analyzing problems and transforming ideas into practical, well-structured solutions through a logical and detail-oriented approach.",
    },
    {
      title: "Continuous Learner",
      description:
        "I continuously seek opportunities to expand my knowledge, embracing new technologies and challenges to grow as a developer.",
    },
    {
      title: "Diverse Technical Exposure",
      description:
        "My experience spans computer engineering projects, AI-powered applications, and modern web development, allowing me to adapt across different domains.",
    },
    {
      title: "Team-Oriented & Adaptable",
      description:
        "I value collaboration, communicate effectively, and adapt quickly to feedback and evolving project requirements.",
    },
  ];

  return (
    <section className="why-section" id="hire-me" ref={ref}>
      <h2 className="section-title">What I Bring to the Table</h2>

      <div className={`timeline ${inView ? "show" : ""}`}>
        {strengths.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } ${inView ? "show" : ""}`}
            style={{
              transitionDelay: `${index * 0.3}s`,
            }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

