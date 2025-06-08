"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoAndMenuIcon from "./logo_and_menuicon";
import Nav from "./nav";

export default function Header({ toggleDrawer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "qualification",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <LogoAndMenuIcon toggleDrawer={toggleDrawer} />

          {/* Desktop Navigation */}
          {desktopScreen && <Nav activeSection={activeSection} />}

          {/* Mobile menu button */}
          {/* {!desktopScreen && (
            <button
              onClick={toggleDrawer(true)}
              className="p-2 text-text-primary hover:text-accent transition-colors duration-300 lg:hidden"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          )} */}
        </div>
      </div>
    </header>
  );
}
