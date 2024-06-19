import ProjectDisplay from "./project_display";
import carkoPic from "../../assets/carko_home.png";

export default function ProjectsSection() {
  return (
    <div id="projects" className="w-full min-h-screen">
      <div className="w-full h-full px-7  flex flex-col items-start justify-start gap-12 md:py-20 lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          My Work
        </h1>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-7 lg:gap-10">
          <div className="w-full h-[400px] md:w-[calc((100%-28px)/2)] lg:w-[calc((100%-80px)/3)]">
            <ProjectDisplay
              src={carkoPic}
              linkTo="/projects/Carko"
              projectTitle="Carko - Affordable car rentals"
            />
          </div>
          <div className="w-full h-[400px] md:w-[calc((100%-28px)/2)] lg:w-[calc((100%-80px)/3)]">
            <ProjectDisplay
              src={carkoPic}
              linkTo="/projects/Cali"
              projectTitle="Carko - Affordable car rentals"
            />
          </div>
          <div className="w-full h-[400px] lg:w-[calc((100%-80px)/3)]">
            <ProjectDisplay
              src={carkoPic}
              linkTo="/projects/Mantra"
              projectTitle="Carko - Affordable car rentals"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
