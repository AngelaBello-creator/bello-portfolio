import "./Explore.scss";
import ExploreCard from "../ExploreCard/ExploreCard";

export default function Explore() {
  return (
    <section className="explore-section">
      <h2>Explore</h2>
      <div className="cards">
        <ExploreCard icon="🔗" title="My Projects" text="Discover the applications and solutions I've built." link="#projects" />
        <ExploreCard icon="👤" title="About Me" text="Learn about my journey, skills, and passions." link="#about" />
        <ExploreCard icon="✈️" title="Let's Talk" text="Questions, proposals, or just want to say hi?" link="#contact" />
      </div>
    </section>
  );
}
