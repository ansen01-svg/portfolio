import navItems from "@/app/utils/navItems";
import Link from "next/link";

export default function Nav({ activeSection }) {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const sectionId = item.linkTo.replace("/#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.id}>
              <Link
                href={item.linkTo}
                className={`relative px-4 py-2 text-sm font-medium capitalize transition-all duration-300 rounded-lg group ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-accent hover:bg-background-hover"
                }`}
              >
                {item.title}

                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-1"
                      : "opacity-0 translate-y-0"
                  }`}
                />

                {/* Hover effect */}
                <span
                  className={`absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                    isActive ? "hidden" : ""
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
