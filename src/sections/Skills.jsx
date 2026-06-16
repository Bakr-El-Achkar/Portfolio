import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      title: "🌐 Modern Web",
      className: "left-card",
      items: [
        "Responsive Web Development",
        "React Component Development",
        "Bootstrap Layouts",
        "JavaScript Functionality",
        "Translating Designs into Interfaces",
      ],
    },
    {
      title: "⚙️ Engineering",
      className: "right-card",
      items: [
        "Analytical Thinking",
        "Attention to Detail",
        "Structured Problem Solving",
        "Breaking Down Complex Tasks",
        "Systematic Approach",
      ],
    },
    {
      title: "💻 Programming",
      className: "bottom-card",
      items: [
        "Java Programming",
        "Python Programming",
        "Programming Logic",
        "Debugging Techniques",
        "Writing Organized Code",
      ],
    },
    {
      title: "🤝 Collaboration",
      className: "bottom-card",
      items: [
        "Team Communication",
        "Adaptability",
        "Responsibility",
        "Applying Feedback",
        "Working Toward Shared Goals",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((category, cardIndex) => (
          <div
            key={category.title}
            className={`skill-card ${category.className} ${inView ? "show" : ""
              }`}
            style={{
              transitionDelay: `${cardIndex * 0.3}s`,
            }}
          >
            <h3>{category.title}</h3>

            <ul>
              {category.items.map((item, index) => (
                <li
                  key={item}
                  style={{
                    transitionDelay: `${0.4 + index * 0.1}s`,
                  }}
                >
                  ● {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
