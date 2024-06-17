"use client";

import { useMediaQuery } from "@mui/material";
import LogoAndMenuIcon from "./logo_and_menuicon";
import Nav from "./nav";

export default function Header() {
  const tabScreen = useMediaQuery("(min-width:768px)");
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full px-7 py-2 bg-primary flex items-center justify-start relative">
      <LogoAndMenuIcon />
      {desktopScreen && <Nav />}
    </div>
  );
}
