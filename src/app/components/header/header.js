"use client";

import "../../components.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import LogoAndMenuIcon from "./logo_and_menuicon";
import Nav from "./nav";

export default function Header({ toggleDrawer }) {
  const [isSticky, setIsSticky] = useState(false);

  const desktopScreen = useMediaQuery("(min-width:1024px)");

  // set header to sticky when scrolling down to some height
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 500) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full px-7 py-2 bg-primary flex items-center justify-start z-50 sticky top-0 left-0`}
    >
      <LogoAndMenuIcon toggleDrawer={toggleDrawer} />
      {desktopScreen && <Nav />}
    </div>
  );
}
