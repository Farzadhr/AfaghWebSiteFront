/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./js/*.js"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#F90068",
      dark: "#4D4D4D",
      light: "#F4F4F4",
      white: "#FFFFFF",
      textgray: "#303030",
    },
    screens: {
      bigpage: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      desktop: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      moblie: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
