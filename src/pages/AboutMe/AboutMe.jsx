import React, { useState, useEffect } from "react";
import "./AboutMe.scss";
import { ChevronUp } from "lucide-react";

export default function AboutMe() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-page">
      {/* Fondo de estrellas */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>

      <div className="about-content">

        {/* HERO */}
        <section className="hero">
          <div className="avatar"></div>
          <h1 className="hero-title">About Me</h1>
          <p className="hero-subtitle">
            Ángela Bello · Full-Stack Developer
          </p>
        </section>

        {/* SUMMARY */}
        <section id="summary" className="section">
          <h2 className="section-title center">Summary</h2>

          <div className="card">
            <p className="text">
              Desarrolladora Full-Stack especializada en React, Java y Spring Boot.
              Construyo aplicaciones completas de principio a fin, cuidando tanto
              la arquitectura como la experiencia de usuario. Trabajo con
              separación estricta de capas, DTOs, seguridad con JWT y bases de
              datos relacionales. Me interesa aportar valor real, no picar código
              sin contexto.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section">
          <h2 className="section-title center">Selected Projects</h2>

          <div className="experience-list">

            {/* SOUNDMAP */}
            <div className="experience-card">
              <h3 className="experience-title">
                SoundMap BCN — Full-Stack Developer
              </h3>
              <p className="experience-date">
                Proyecto individual · React + Spring Boot
              </p>
              <p className="text">
                Aplicación web de geolocalización de audios que permite a los
                usuarios registrarse, subir grabaciones y explorarlas sobre un
                mapa interactivo de Barcelona.
              </p>
              <ul>
                <li>Frontend con React, Vite, Tailwind y Leaflet.</li>
                <li>Backend en Spring Boot con arquitectura MVC.</li>
                <li>Autenticación y autorización mediante JWT.</li>
                <li>Subida y gestión de archivos de audio.</li>
                <li>PostgreSQL y configuración por variables de entorno.</li>
              </ul>
            </div>

            {/* REVERSO */}
            <div className="experience-card">
              <h3 className="experience-title">
                Reverso Social — Full-Stack Developer
              </h3>
              <p className="experience-date">
                Proyecto en equipo · Plataforma social
              </p>
              <p className="text">
                Plataforma orientada a recursos sociales y feministas, desarrollada
                en equipo con foco en accesibilidad, roles de usuario y arquitectura
                limpia.
              </p>
              <ul>
                <li>Backend con Spring Boot, DTOs y MapStruct.</li>
                <li>Gestión de usuarios, roles y permisos.</li>
                <li>Seguridad con Spring Security y JWT.</li>
                <li>Frontend en React con Tailwind y Sass.</li>
                <li>Trabajo colaborativo con GitFlow y Scrum.</li>
              </ul>
            </div>

            {/* HACKATHON */}
            <div className="experience-card">
              <h3 className="experience-title">
                AiguaBeat — Hackathon Winner
              </h3>
              <p className="experience-date">
                Barcelona Activa × Mobile World Capital
              </p>
              <p className="text">
                Desarrollo de una SPA funcional en 14 horas para visualizar el
                consumo de agua en Barcelona.
              </p>
              <ul>
                <li>SPA con React, Tailwind y Leaflet.</li>
                <li>Integración con API REST.</li>
                <li>Visualización de datos y alertas.</li>
                <li>Trabajo bajo presión y coordinación de equipo.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <h2 className="section-title center">Education</h2>

          <div className="education-list">

            <div className="education-card">
              <h3 className="education-title">
                Full-Stack Developer + IA
                <span className="hours">650h</span>
              </h3>
              <p className="text">FemCoders F5</p>
              <p className="experience-date">2025 – 2026</p>
            </div>

            <div className="education-card">
              <h3 className="education-title">Bachillerato</h3>
              <p className="text">I.E.S. Brianda de Mendoza</p>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section">
          <h2 className="section-title center">Skills</h2>

          <div className="skills-grid">

            <div className="card">
              <h3 className="sub-title">Technical</h3>

              <div className="skill-block">
                <h4>Frontend</h4>
                <div className="skills-row">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6)",
                    "React",
                    "Vite",
                    "Tailwind",
                    "Sass",
                    "Figma",
                    "TypeScript",
                  ].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-block">
                <h4>Backend</h4>
                <div className="skills-row">
                  {[
                    "Java",
                    "Spring Boot",
                    "JPA",
                    "PostgreSQL",
                    "JWT",
                    "Spring Security",
                    "REST API",
                    "Docker",

                  ].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="sub-title">Soft Skills</h3>
              <ul className="soft-list">
                <li>Pensamiento analítico</li>
                <li>Trabajo en equipo</li>
                <li>Autonomía técnica</li>
                <li>Comunicación clara</li>
                <li>Gestión del tiempo</li>
              </ul>
            </div>

          </div>
        </section>

      </div>

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
