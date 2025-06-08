/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: "#0f0f23", // Dark navy background
        secondary: "#1a1a2e", // Slightly lighter navy
        accent: "#00d4aa", // Teal accent
        accentHover: "#00b894", // Darker teal for hover
        text: {
          primary: "#ffffff", // White text
          secondary: "#a0a0a0", // Light gray text
          muted: "#6c6c6c", // Muted gray text
        },
        background: {
          card: "#16213e", // Card background
          hover: "#1e293b", // Hover background
        },
      },
      fontSize: {
        "hero-large": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-medium": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-small": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-subtitle": [
          "1.5rem",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        "body-large": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-medium": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
