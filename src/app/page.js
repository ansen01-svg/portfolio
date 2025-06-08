"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/hero_section/hero_section";
import AboutSection from "./components/about_section/about_section";
import SkillsSection from "./components/skills_section/skills_section";
import ProjectsSection from "./components/projects_section/projects_section";
import QualificationsSection from "./components/qualifications_section/qualifications_section";
import ContactSection from "./components/contact_section/contact_section";
import ScrollTop from "./components/scroll_top/scroll_top";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Show or hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-500 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
            <span className="text-primary font-bold text-xl">AB</span>
          </div>
          <div className="text-text-secondary">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <QualificationsSection />
      <ContactSection />

      {/* Scroll to top button */}
      {isVisible && <ScrollTop handleClick={scrollToTop} />}

      {/* Page transition overlay */}
      <div
        className={`fixed inset-0 bg-primary z-40 pointer-events-none transition-opacity duration-1000 ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
