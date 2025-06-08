"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Header({ projectTitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 text-text-secondary font-medium flex items-center justify-start gap-2 lg:mt-20">
      <Link
        href="/"
        className="hover:text-accent transition-colors duration-300"
      >
        Home
      </Link>
      <ChevronRightIcon className="w-4 h-4" />
      <Link
        href="/#projects"
        className="hover:text-accent transition-colors duration-300"
      >
        Projects
      </Link>
      <ChevronRightIcon className="w-4 h-4" />
      <span className="text-text-primary">{projectTitle}</span>
    </div>
  );
}
