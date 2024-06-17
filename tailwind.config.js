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
        primary: "#1a191d",
        secondary: "rgba(136, 136, 136, .05)",
      },
      colors: {
        primary: "#fff",
        secondary: "#7a7a7a",
        secondary1: "#efefef",
        blue: "#66d9ed",
      },
    },
  },
  plugins: [],
};
