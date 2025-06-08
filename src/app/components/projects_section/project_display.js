import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectDisplay({ project, reverse = false }) {
  const { title, subtitle, description, image, linkTo, tags, featured } =
    project;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Project Image */}
      <div className={`relative group ${reverse ? "lg:col-start-2" : ""}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-card-hover transition-all duration-500">
          {featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}

          <div className="relative h-80 lg:h-96">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <Link
                  href={linkTo}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accentHover text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  View Case Study
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10"></div>
      </div>

      {/* Project Content */}
      <div
        className={`space-y-6 ${
          reverse ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-2 group">
            <Link
              href={linkTo}
              className="hover:text-accent transition-colors duration-300"
            >
              {title}
            </Link>
          </h3>
          <p className="text-xl text-accent font-medium">{subtitle}</p>
        </div>

        <p className="text-text-secondary leading-relaxed text-lg">
          {description}
        </p>

        {/* Tech stack */}
        <div>
          <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background-card text-text-secondary text-sm rounded-lg border border-accent/20 hover:border-accent hover:text-accent transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href={linkTo}
            className="inline-flex items-center gap-2 text-accent hover:text-accentHover font-semibold transition-all duration-300 group"
          >
            <span>View Case Study</span>
            <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
