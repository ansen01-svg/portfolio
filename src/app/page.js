import HeroSection from "./components/hero_section/hero_section";
import AboutSection from "./components/about_section/about_section";
import SkillsSection from "./components/skills_section/skills_section";
import ProjectsSection from "./components/projects_section/projects_section";
import QualificationsSection from "./components/qualifications_section/qualifications_section";
import ContactSection from "./components/contact_section/contact_section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <QualificationsSection />
      <ContactSection />
    </>
  );
}
