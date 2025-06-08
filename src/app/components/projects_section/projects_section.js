"use client";

import { useEffect, useRef } from "react";
import ProjectDisplay from "./project_display";

import carkoPic from "../../assets/ck_home.png";
import epPic from "../../assets/ep1.png";
import atPic from "../../assets/at1.png";
import jobgregatePic from "../../assets/jobgregate-ss.png";

const projects = [
  {
    id: 1,
    title: "TSCS Exams and Students Management Portal",
    subtitle: "Comprehensive Educational Management System",
    description:
      "A full-stack web application for managing civil services exam preparation, featuring student enrollment, progress tracking, mock tests, and administrative dashboard with real-time analytics.",
    image: epPic,
    linkTo: "/projects/TSCS",
    tags: ["Next.js","Tailwind CSS","Typescript","Clerk", "Node.js", "Express.js", "MongoDB", "Redis"],
    featured: true,
  },
  {
    id: 2,
    title: "Antariksh Information Technology",
    subtitle: "Corporate Website & Service Portfolio",
    description:
      "A modern, responsive corporate website showcasing IT services and solutions with dynamic content management, client testimonials, and integrated contact systems.",
    image: atPic,
    linkTo: "/projects/Antariksh",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Clerk", "MongoDB"],
    featured: true,
  },
  {
    id: 3,
    title: "Jobgregate",
    subtitle: "Centralized Job Search Platform",
    description:
      "A comprehensive job search platform that aggregates listings from multiple sources, providing users with a streamlined job hunting experience.",
    image: jobgregatePic,
    linkTo: "/projects/Jobgregate",
    tags: ["Next.js", "Node.js", "MongoDB", "Express"],
    featured: false,
  },
  {
    id: 4,
    title: "Carko",
    subtitle: "Affordable Car Rentals",
    description:
      "A modern car rental platform with intuitive booking system and real-time availability tracking.",
    image: carkoPic,
    linkTo: "/projects/Carko",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="bg-primary py-24 md:py-32"
      ref={sectionRef}
    >
      <div className="container-custom px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-section-title mb-8">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Here you will find some of the personal and client projects that I
              created, each with its own case study detailing the project and
              its outcomes.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-on-scroll">
              <ProjectDisplay project={project} reverse={index % 2 !== 0} />
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center animate-on-scroll">
          <div className="card p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Want to see more?</h3>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              I have more exciting projects in development. Follow me on social
              media to stay updated with my latest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ansen-bey-b27977209/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ansen01-svg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
