"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary via-primary to-secondary"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Greeting */}
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
              {`👋 Hello, I'm`}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-hero-small md:text-hero-medium lg:text-hero-large font-bold mb-8 text-balance">
            <span className="block mb-2">Ansen Bey</span>
            <span className="block gradient-text">Full-Stack Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed px-4">
            I architect and develop comprehensive web solutions, seamlessly
            integrating intuitive user experiences with robust backend
            infrastructure to drive measurable business results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link href="#projects" className="btn-primary min-w-[200px] group">
              View My Work
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="#contact" className="btn-secondary min-w-[200px]">
              Get In Touch
            </Link>
          </div>

          {/* Tech stack preview */}
          <div className="mb-16">
            <p className="text-text-muted mb-6 text-sm uppercase tracking-wider font-medium">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-background-card text-text-secondary rounded-lg text-sm border border-accent/20 transition-all duration-300 hover:border-accent hover:text-accent ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-text-muted hover:text-accent transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <span className="text-xs mb-2 uppercase tracking-wider">
              Scroll
            </span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
