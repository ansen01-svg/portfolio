"use client";

import { useEffect, useRef } from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import SkillsDisplay from "./skills_display";
import {
  frontEndSkills,
  backEndSkills,
  otherSkills,
} from "@/app/utils/mySkills";

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <CodeBracketIcon className="w-8 h-8" />,
    skills: frontEndSkills,
    description: "Creating responsive and interactive user interfaces",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <ServerIcon className="w-8 h-8" />,
    skills: backEndSkills,
    description: "Building robust server-side applications and APIs",
  },
  {
    id: 3,
    title: "Tools & Others",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    skills: otherSkills,
    description: "Development tools and methodologies I use",
  },
];

export default function SkillsSection() {
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
      id="skills"
      className="bg-secondary relative overflow-hidden py-24 md:py-32"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-section-title mb-8">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {`Here are the technologies and tools I use to bring ideas to life.
              I'm always learning and staying up-to-date with the latest trends
              in web development.`}
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <SkillsDisplay
                icon={category.icon}
                title={category.title}
                description={category.description}
                skills={category.skills}
              />
            </div>
          ))}
        </div>

        {/* Learning section */}
        <div className="text-center animate-on-scroll">
          <div className="card p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Always Learning</h3>
            <p className="text-text-secondary mb-8 leading-relaxed text-lg">
              {`The tech industry evolves rapidly, and I'm committed to continuous
              learning. Currently exploring advanced React patterns, cloud
              technologies, and modern DevOps practices.`}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Docker", "AWS", "GraphQL", "TensorFlow", "LangChain"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
