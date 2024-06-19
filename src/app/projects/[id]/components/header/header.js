"use client";

import Link from "next/link";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

export default function Header({ projectTitle }) {
  return (
    <div className="w-full mt-10 text-secondaryDarker font-semibold flex items-center justify-start gap-1 lg:mt-20">
      <Link href={"/"} className="hover:text-blue">
        Home
      </Link>
      <NavigateNextRoundedIcon fontSize="small" />
      <Link href={"/#projects"} className="hover:text-blue">
        My work
      </Link>
      <NavigateNextRoundedIcon fontSize="small" />
      <p>{projectTitle}</p>
    </div>
  );
}
