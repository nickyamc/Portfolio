/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#543aba",
        secondary: "#786cf3",
        os: "#181b38",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        neo: ["Neo", "sans-serif"],
      },
      boxShadow: {
        'lginnert': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
