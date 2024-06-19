import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutContent from "./components/layout_content/layout_content";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ansen Bey - Web developer",
  description:
    "Welcome to Ansen Bey's portfolio! Explore innovative web projects, discover a passion for coding, and see how exceptional web experiences are crafted. Let's bring your digital ideas to life together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
