"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const email = "ansenbeyc73@gmail.com";
const location = "Guwahati, Assam, India";

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="bg-primary relative overflow-hidden py-24 md:py-32"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="animate-on-scroll">
              <h2 className="text-section-title mb-8">
                {`Let's Work`} <span className="gradient-text">Together</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                {`Have an exciting project you need help with? I'm always
                interested in hearing about new opportunities and creative
                challenges.`}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Contact information */}
            <div className="space-y-12">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                <p className="text-text-secondary mb-10 leading-relaxed text-lg">
                  {`I'm currently available for freelance work and full-time
                  opportunities. Whether you have a project in mind or just want
                  to chat about web development, feel free to reach out!`}
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="animate-on-scroll">
                  <div className="flex items-start gap-4 p-6 card hover:scale-105 transition-all duration-300">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Email
                      </h4>
                      <Link
                        href={`mailto:${email}`}
                        className="text-accent hover:text-accentHover transition-colors duration-300 break-words"
                      >
                        {email}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <div className="flex items-start gap-4 p-6 card hover:scale-105 transition-all duration-300">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Location
                      </h4>
                      <p className="text-text-secondary">{location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="animate-on-scroll">
                <h4 className="font-semibold text-text-primary mb-6">
                  Connect with me
                </h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/ansen-bey-b27977209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 card hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/ansen01-svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 card hover:bg-accent hover:text-primary transition-all duration-300 group"
                  >
                    <span className="font-medium">GitHub</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Call to action card */}
            <div className="animate-on-scroll lg:sticky lg:top-8">
              <div className="card p-10 relative overflow-hidden h-fit">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full blur-2xl -z-10"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Start a Project</h3>
                  <p className="text-text-secondary mb-10 leading-relaxed text-lg">
                    {`Interested in working together? I'd love to hear about your
                    project and discuss how I can help bring your ideas to life.`}
                  </p>

                  <div className="space-y-6">
                    <Link
                      href={`mailto:${email}?subject=Project Inquiry&body=Hi Ansen,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0AProject details:%0D%0A%0D%0A`}
                      className="btn-primary w-full flex items-center justify-center group"
                    >
                      Send Email
                      <EnvelopeIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <p className="text-sm text-text-muted text-center pt-2">
                      Response time: Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
