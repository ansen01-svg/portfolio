import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center space-y-8 px-6 max-w-md mx-auto">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-6 bg-background-card rounded-full">
            <ExclamationTriangleIcon className="w-16 h-16 text-accent" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-text">404</h1>
          <h2 className="text-2xl font-bold text-text-primary">
            Page Not Found
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {`Sorry, the page you're looking for doesn't exist or has been moved.`}
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/#projects" className="btn-secondary">
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-accent/20">
          <p className="text-sm text-text-muted mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/#about"
              className="text-accent hover:text-accentHover transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/#skills"
              className="text-accent hover:text-accentHover transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="text-accent hover:text-accentHover transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
