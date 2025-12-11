import "./ProjectCard.scss";

export default function ProjectCard({ title, description, bg, icon, largeIcon }) {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ background: bg }}
      >
        <div className={`project-icon ${largeIcon ? "large" : ""}`}>
          {icon}
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">View Project →</a>
      </div>
    </div>
  );
}
