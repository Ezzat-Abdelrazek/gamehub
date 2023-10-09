/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        pixel: ["Pixelify Sans", "cursive"],
      },
      colors: {
        primary: "#151514",
        secondary: "#5fa345",
      },
    },
  },
  plugins: [],
};
