/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // primary: "#1a191d",
        primary: "#000",
        secondary: "rgba(136, 136, 136, .05)",
        secondary: "#111",
        purple: "#182633",
        purpleLight: "#1E2E3D",
      },
      colors: {
        primary: "#fff",
        secondary: "#efefef",
        secondaryDarker: "#7a7a7a",
        blue: "#66d9ed",
        orange: "#EFC94C",
        palePurple: "#8da0b5",
      },
      fontSize: {
        sectionTitleSmall: "40px",
        sectionTitleLarge: "62px",
        sectionSubTitleSmall: "26px",
        sectionSubTitleLarge: "30px",
      },
    },
  },
  plugins: [],
};
