import Particles from "../components/Particles/Particles";
import Hero from "../components/Hero/Hero";
import Explore from "../components/Explore/Explore";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

export default function Home() {
  return (
    <>
      <Particles />
      <div className="content">
        <Hero />
        <Explore />
        <ProjectsSection />
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
}
