"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Error() {
  return (
    <div className="max-w-[100vw] min-h-screen bg-primary flex items-center justify-center">
      <div className="w-full h-full px-7 flex flex-col items-center justify-center gap-8 lg:px-16">
        <div className="p-6 bg-background-card rounded-full">
          <ExclamationTriangleIcon className="w-16 h-16 text-accent" />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-text-primary">
            Project Not Found
          </h1>
          <p className="text-lg text-text-secondary max-w-md">
            {`The project you're looking for doesn't exist or has been moved.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/#projects" className="btn-primary">
            View All Projects
          </Link>
          <Link href="/" className="btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
