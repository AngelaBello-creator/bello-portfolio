import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

export default function ProjectsSection() {
  const project = {
    title: "SoundMap BCN",
    description:
      "Full-stack web app for geolocated audio uploads, built with React, Leaflet, Spring Boot, MapStruct, PostgreSQL and JWT. Includes audio recording, file upload, secure login, and a custom map UI.",
    bg: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)",
    icon: "🎧",
    largeIcon: false,
  };

  return (
    <section className="projects-section" id="projects">
      <h2>Main Project</h2>

      <div className="project-cards single">
        <ProjectCard {...project} />
      </div>
    </section>
  );
}
