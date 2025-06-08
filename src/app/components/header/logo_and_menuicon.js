import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function LogoAndMenuIcon({ toggleDrawer }) {
  const tabScreen = useMediaQuery("(max-width:1024px)");

  return (
    <div className="flex items-center gap-4">
      {/* Mobile menu button */}
      {tabScreen && (
        <button
          onClick={toggleDrawer(true)}
          className="p-2 text-text-primary hover:text-accent transition-colors duration-300 rounded-lg hover:bg-background-hover"
          aria-label="Open navigation menu"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      )}

      {/* Logo */}
      <Link
        href="/"
        className="group flex items-center gap-2 transition-all duration-300"
      >
        <div className="relative">
          {/* Logo icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary font-bold text-lg">AB</span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Logo text */}
        <div className="hidden sm:block">
          <div className="font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-300">
            Ansen Bey
          </div>
          <div className="text-xs text-text-muted uppercase tracking-wider">
            Developer
          </div>
        </div>
      </Link>
    </div>
  );
}
