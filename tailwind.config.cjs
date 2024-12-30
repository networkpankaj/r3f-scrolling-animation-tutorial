/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      serif: ["Montserrat", ...defaultTheme.fontFamily.sans],
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
