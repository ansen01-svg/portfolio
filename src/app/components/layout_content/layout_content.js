"use client";

import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer/footer";
import DrawerHolder from "../drawer/drawer";

export default function LayoutContent({ children }) {
  const [open, setOpen] = useState(false);

  const tabScreen = useMediaQuery("(max-width:1024px)");

  const toggleDrawer = (boolean) => () => {
    setOpen(boolean);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <main className="max-w-[100vw] bg-primary text-primary">
        {children}
        <Analytics />
      </main>
      {tabScreen && <DrawerHolder open={open} toggleDrawer={toggleDrawer} />}
      <Footer />
    </>
  );
}
