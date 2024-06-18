"use client";

import { useMediaQuery } from "@mui/material";
import LogoAndMenuIcon from "./logo_and_menuicon";
import Nav from "./nav";

export default function Header({ toggleDrawer }) {
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full px-7 py-2 bg-primary flex items-center justify-start z-50 sticky top-0 left-0">
      <LogoAndMenuIcon toggleDrawer={toggleDrawer} />
      {desktopScreen && <Nav />}
    </div>
  );
}
