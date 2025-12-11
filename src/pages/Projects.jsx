import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SoundMap BCN",
      text: "Full-stack web application for geolocated audio uploads in Barcelona...",
      bg: "from-cyan-400 to-blue-600",
      icon: "🎧",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-center text-4xl text-cyan font-bold mb-16">
        Highlighted Project
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
