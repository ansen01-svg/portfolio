"use client";

import { useEffect, useRef } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const qualifications = [
  {
    id: 1,
    category: "Education",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    items: [
      {
        id: 1,
        title: "Bachelor of Engineering (Civil Engineering)",
        institution: "Jorhat Engineering College",
        location: "Jorhat, India",
        period: "2013 - 2017",
        description:
          "Focused on core engineering principles and problem-solving methodologies.",
      },
    ],
  },
  {
    id: 2,
    category: "Experience",
    icon: <BriefcaseIcon className="w-6 h-6" />,
    items: [
      {
        id: 1,
        title: "Full-Stack Developer",
        institution: "Takshashila School of Civil Services",
        location: "Guwahati, India",
        period: "2024 - Present",
        description:
          "Developing modern web applications using React, Node.js, and cloud technologies.",
      },
      {
        id: 2,
        title: "Full-Stack Developer",
        institution: "Freelance",
        location: "Remote",
        period: "2020 - 2022",
        description:
          "Developing modern web applications using React, Node.js, and cloud technologies.",
      },
      {
        id: 3,
        title: "Frontend Developer",
        institution: "Personal Projects",
        location: "Guwahati, India",
        period: "2019 - 2020",
        description:
          "Built responsive websites and learned modern web development frameworks.",
      },
    ],
  },
  {
    id: 3,
    category: "Certifications",
    icon: <TrophyIcon className="w-6 h-6" />,
    items: [
      {
        id: 1,
        title: "React Development",
        institution: "Udemy",
        location: "Online",
        period: "2019",
        description:
          "Advanced React patterns, hooks, and performance optimization.",
      },
      {
        id: 2,
        title: "Node.js Development",
        institution: "Udemy",
        location: "Online",
        period: "2022",
        description:
          "Backend development, API design, and database management.",
      },
    ],
  },
];

export default function QualificationsSection() {
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
      id="qualification"
      className="bg-primary relative overflow-hidden py-24 md:py-32"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-section-title mb-8">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              My educational background and professional experience that shaped
              me into the developer I am today.
            </p>
          </div>
        </div>

        {/* Qualifications timeline */}
        <div className="max-w-4xl mx-auto mb-24">
          {qualifications.map((section, sectionIndex) => (
            <div key={section.id} className="mb-20 last:mb-0">
              {/* Section header */}
              <div className="animate-on-scroll flex items-center gap-4 mb-12">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  {section.category}
                </h3>
              </div>

              {/* Timeline items */}
              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className="animate-on-scroll"
                    style={{
                      animationDelay: `${
                        (sectionIndex * section.items.length + itemIndex) * 200
                      }ms`,
                    }}
                  >
                    <div className="card p-8 hover:scale-105 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-accent font-semibold mt-2">
                            {item.institution}
                          </p>
                          <p className="text-text-muted text-sm mt-1">
                            {item.location}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center animate-on-scroll">
          <div className="card p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Ready for New Opportunities
            </h3>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              {`I'm always eager to learn new technologies and take on challenging
              projects. Let's discuss how my experience can contribute to your
              team's success.`}
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center group"
            >
              Get In Touch
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
