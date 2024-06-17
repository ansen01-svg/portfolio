import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Ansen Bey - Web developer",
  description:
    "Welcome to Ansen Bey's portfolio! Explore innovative web projects, discover a passion for coding, and see how exceptional web experiences are crafted. Let's bring your digital ideas to life together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-[100vw] bg-primary text-primary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
