import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Smart Traffic Light",
      description:
        "The project used cameras and the YOLO object detection algorithm to monitor traffic conditions in real time and automatically adjust traffic light decisions.",
      technologies: ["Raspberry Pi", "Arduino", "C++", "Cameras", "AI"],
      image: "/SmartTrafficLight.jpg",
    },
    {
      title: "Credit Card Checkout",
      description:
        "A responsive checkout interface built with HTML, CSS, and JavaScript, featuring real-time card updates and interactive form behavior.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      image: "/CheckOut.png",
    },
    {
      title: "Gym Coach Assistant",
      description:
        "Developed an AI-powered fitness assistant that analyzes exercise posture using computer vision techniques. Users can upload an image of an athlete performing an exercise, and the system determines whether the movement is executed correctly or incorrectly.",
      technologies: ["Python", "YOLOv5", "Computer Vision", "AI"],
      image: "/state_transitions_ai_fitness_trainer.gif",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search)
      )
    );
  });

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>

      <input
        type="text"
        className="project-search"
        placeholder="Search by title or technology: AI, Python, Web Development..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              className={`project-card ${inView ? "show" : ""}`}
              key={project.title}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div className="project-placeholder">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </section>
  );
}