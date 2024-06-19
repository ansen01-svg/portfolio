import Image from "next/image";
import Link from "next/link";

export default function ProjectDisplay(props) {
  const { src, projectTitle, linkTo } = props;

  return (
    <div className="w-full h-full">
      <div className="w-full h-[75%] bg-slate-700 rounded-t-md relative overflow-hidden z-10">
        <Image
          className="rounded-t-md"
          src={src}
          alt="project-image"
          fill
          // sizes="(min-width:1024px) 329.66px"
          // layout="intrinsic"
          objectFit="contain"
        />
        <Link
          href={linkTo}
          className="w-full h-full absolute top-0 left-0 z-40"
        ></Link>
      </div>
      <div className="w-full h-[25%] px-5 bg-secondary flex flex-col items-start justify-center gap-2 rounded-b-md">
        <h2 className="font-semibold md:text-[18px]">{projectTitle}</h2>
        <Link
          href={linkTo}
          className="text-secondaryDarker font-semibold hover:text-blue"
        >
          View project
        </Link>
      </div>
    </div>
  );
}
