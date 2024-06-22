import Link from "next/link";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

export default function ProjectDetails({ data }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-12">
      <h1 className="max-w-[60%] text-sectionTitleSmall font-bold lg:text-sectionTitleLarge lg:max-w-[50%]">
        {data.projectTitle}
      </h1>
      <p>{data.description1}</p>
      <p>{data.description2}</p>
      <p>
        Technologies used -{" "}
        {data.technologiesUsed.map((tech, index) => {
          if (index === data.technologiesUsed.length - 1) {
            return <span key={index}>{tech}</span>;
          }

          return <span key={index}>{tech}, </span>;
        })}
      </p>
      {data.liveProject && (
        <span>
          <Link
            href={data.liveProject}
            target="_blank"
            className="text-blue flex items-center justify-center gap-2"
          >
            View live project
            <EastRoundedIcon fontSize="small" />
          </Link>
        </span>
      )}
    </div>
  );
}
