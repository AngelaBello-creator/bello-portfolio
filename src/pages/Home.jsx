import Particles from "../components/Particles/Particles";
import Hero from "../components/Hero/Hero";
import Explore from "../components/Explore/Explore";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <div className="home-page">
      <Particles />
      <div className="content">
        <Hero />
        <Explore />
        <ProjectsSection />
      </div>
    </div>
  );
}
