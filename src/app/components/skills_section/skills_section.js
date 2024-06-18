import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SkillsDisplay from "./skills_display";
import {
  frontEndSkills,
  backEndSkills,
  otherSkills,
} from "@/app/utils/mySkills";

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="w-full min-h-screen flex items-start justify-center"
    >
      <div className="w-full h-full px-7 py-20 flex flex-col items-center justify-center gap-12 lg:w-[90%] lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          Skills
        </h1>
        <div className="w-full flex items-center justify-start flex-wrap gap-5 md:gap-0">
          <div className="w-full h-[350px] px-7 py-5 md:w-[50%] lg:w-[calc(100%/3)] border-[2px] border-slate-400 flex flex-col items-center justify-start gap-8 md:border-[3px]">
            <SkillsDisplay
              icon={<DesktopMacOutlinedIcon sx={{ color: "#8da0b5" }} />}
              heading={"Frontend"}
              data={frontEndSkills}
            />
          </div>
          <div className="w-full h-[350px] px-7 py-5 md:w-[50%] lg:w-[calc(100%/3)] border-[2px] border-slate-400 flex flex-col items-center justify-start gap-8 md:border-[3px] md:border-l-0">
            <SkillsDisplay
              icon={<DvrOutlinedIcon sx={{ color: "#8da0b5" }} />}
              heading={"Backend"}
              data={backEndSkills}
            />
          </div>
          <div className="w-full h-[350px] px-7 py-5 md:w-[50%] lg:w-[calc(100%/3)] border-[2px] border-slate-400 flex flex-col items-center justify-start gap-8 md:border-[3px] md:border-t-0 lg:md:border-l-0 lg:md:border-t-[3px]">
            <SkillsDisplay
              icon={<TerminalOutlinedIcon sx={{ color: "#8da0b5" }} />}
              heading={"Others"}
              data={otherSkills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
