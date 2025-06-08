import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center space-y-8 px-6">
        <div className="flex justify-center">
          <div className="p-6 bg-background-card rounded-full">
            <DocumentMagnifyingGlassIcon className="w-16 h-16 text-accent" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">
            Project Not Found
          </h1>
          <p className="text-lg text-text-secondary max-w-md mx-auto">
            {`Sorry, the project you're looking for doesn't exist or has been
            moved.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#projects" className="btn-primary">
            View All Projects
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
