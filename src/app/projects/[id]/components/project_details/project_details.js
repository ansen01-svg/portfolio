import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectDetails({ data }) {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center gap-16">
      {/* Project Title */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
          {data.projectTitle}
        </h1>
        <p className="text-xl text-accent font-medium">
          {data.subtitle || "Web Application"}
        </p>
      </div>

      {/* Project Overview */}
      <div className="grid lg:grid-cols-3 gap-16 w-full">
        {/* Main Description */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {data.description1}
            </p>
            {data.description2 && (
              <p className="text-lg text-text-secondary leading-relaxed">
                {data.description2}
              </p>
            )}
          </div>

          {/* Key Features */}
          {data.features && (
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Key Features
              </h3>
              <ul className="space-y-3">
                {data.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Project Info Sidebar */}
        <div className="space-y-8">
          {/* Technologies Used */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-text-primary mb-6">
              Technologies Used
            </h3>
            <div className="space-y-2">
              {data.technologiesUsed.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-background-hover text-text-secondary px-3 py-2 rounded-lg text-sm mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-text-primary mb-6">
              Project Links
            </h3>
            <div className="space-y-4">
              {data.liveProject && (
                <Link
                  href={data.liveProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accentHover transition-colors duration-300 group"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span>View Live Project</span>
                </Link>
              )}
              {data.githubRepo && (
                <Link
                  href={data.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accentHover transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Source Code</span>
                </Link>
              )}
            </div>
          </div>

          {/* Project Timeline */}
          {data.timeline && (
            <div className="card p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Timeline
              </h3>
              <p className="text-text-secondary">{data.timeline}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
