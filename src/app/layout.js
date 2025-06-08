import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContent from "./components/layout_content/layout_content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ansen Bey - Full-Stack Web Developer",
  description:
    "Passionate Full-Stack Web Developer building modern, responsive web applications. Specializing in React, Node.js, and creating exceptional digital experiences. Let's bring your ideas to life!",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Ansen Bey",
  ],
  authors: [{ name: "Ansen Bey" }],
  creator: "Ansen Bey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ansenbey.dev",
    siteName: "Ansen Bey - Full-Stack Developer",
    title: "Ansen Bey - Full-Stack Web Developer",
    description:
      "Passionate Full-Stack Web Developer building modern, responsive web applications. Let's create something amazing together!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansen Bey - Full-Stack Web Developer",
    description:
      "Passionate Full-Stack Web Developer building modern, responsive web applications.",
    creator: "@ansenbey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
