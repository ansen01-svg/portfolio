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

  // show or hide scroll to top button
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

  const scrollToTop = () => {
    const scrollDuration = 1000;
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0,
      oldTimestamp = null;

    function step(newTimestamp) {
      if (oldTimestamp !== null) {
        // If duration is 0 scrollCount will be Infinity
        scrollCount +=
          (Math.PI * (newTimestamp - oldTimestamp)) / scrollDuration;
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(
          0,
          Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
        );
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <QualificationsSection />
      <ContactSection />
      {isVisible && <ScrollTop handleClick={scrollToTop} />}
    </>
  );
}
