import "./ExploreCard.scss";

export default function ExploreCard({ icon, title, text, link }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link}>View →</a>
    </div>
  );
}
