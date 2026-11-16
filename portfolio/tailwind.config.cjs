/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#F07868",
        navy: "#1A2634",
      },
      fontFamily: {
        serif: [""], // will inherit default serif; user can customise
        sans: [""],
      },
    },
  },
  plugins: [],
};
