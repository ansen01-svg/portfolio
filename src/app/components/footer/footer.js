import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent/10">
      <div className="container-custom px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">AB</span>
              </div>
              <div>
                <div className="font-bold text-text-primary">Ansen Bey</div>
                <div className="text-sm text-text-muted">
                  Full-Stack Developer
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building digital experiences that make a difference. Passionate
              about clean code and user-centered design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "/#about" },
                { name: "Projects", href: "/#projects" },
                { name: "Skills", href: "/#skills" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:ansenbeyc73@gmail.com"
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
              >
                <span>ansenbeyc73@gmail.com</span>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ansen-bey-b27977209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ansen01-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm flex items-center gap-1">
              &copy; {currentYear} Ansen Bey. Made with
              <HeartIcon className="w-4 h-4 text-red-500" />
              in India
            </p>

            <div className="flex items-center gap-6 text-text-muted text-sm">
              <Link
                href="/privacy"
                className="hover:text-accent transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent transition-colors duration-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
