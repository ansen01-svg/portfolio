"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
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
      id="about"
      className="bg-secondary relative overflow-hidden py-24 md:py-32"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left column - Text content */}
          <div className="space-y-10">
            <div className="animate-on-scroll">
              <h2 className="text-section-title mb-8">
                Get to <span className="gradient-text">know me!</span>
              </h2>
            </div>

            <div className="space-y-8 text-body-large text-text-secondary leading-relaxed">
              <p className="animate-on-scroll">
                {`I'm a`}{" "}
                <strong className="text-text-primary">
                  Full-Stack Web Developer
                </strong>{" "}
                building and managing the front-end and back-end of websites and
                web applications that lead to the success of the overall
                product. Check out some of my work in the{" "}
                <Link
                  href="#projects"
                  className="text-accent hover:text-accentHover transition-colors font-semibold"
                >
                  Projects
                </Link>{" "}
                section.
              </p>

              <p className="animate-on-scroll">
                {`I'm passionate about connecting with fellow developers and
                staying at the forefront of emerging technologies. Feel free to
                connect with me on`}{" "}
                <Link
                  href="https://www.linkedin.com/in/ansen-bey-b27977209/"
                  target="_blank"
                  className="text-accent hover:text-accentHover transition-colors font-semibold"
                >
                  LinkedIn
                </Link>{" "}
                where I engage with the tech community and explore new
                opportunities for collaboration.
              </p>

              <p className="animate-on-scroll">
                {`I'm`}{" "}
                <strong className="text-text-primary">
                  open to job opportunities
                </strong>{" "}
                {`where I can contribute, learn and grow. If you have a good
                opportunity that matches my skills and experience then don't
                hesitate to`}{" "}
                <Link
                  href="#contact"
                  className="text-accent hover:text-accentHover transition-colors font-semibold"
                >
                  contact me
                </Link>
                .
              </p>
            </div>

            <div className="animate-on-scroll pt-4">
              <Link
                href="#contact"
                className="btn-primary inline-flex items-center group"
              >
                {`Let's Connect`}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - Skills & Image */}
          <div className="space-y-12">
            {/* Profile image placeholder */}
            <div className="animate-on-scroll">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-500 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative w-full h-full bg-background-card rounded-2xl border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <p className="text-text-secondary">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key skills */}
            <div className="animate-on-scroll">
              <h3 className="text-section-subtitle mb-8 text-center">
                My Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React.js",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                    ],
                  },
                  {
                    category: "Backend",
                    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
                  },
                ].map((skillGroup, index) => (
                  <div key={index} className="card p-6">
                    <h4 className="text-accent font-semibold mb-4">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-text-secondary text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
