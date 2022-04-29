const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        offwhite: "#FAF9F6",
        green: "#FE18A3",
        lightgreen: "#D8F8F4",
        gray: "#80858B",
        blue: "#89CFF0",
        fontHeadingColor: "#20252B",
        fontBodyColor: "#3B3E42"
      },
      backgroundColor: {
        green: "#FE18A3",
      },
      fontSize: {
        body: "0.875rem",
        h1: "3rem",
        h2: "2rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1rem",
      },
    },
    screens: {
      '2xs': '320px',
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme("fontSize.h1") },
        h2: { fontSize: theme("fontSize.h2") },
        h3: { fontSize: theme("fontSize.h3") },
        h4: { fontSize: theme("fontSize.h4") },
        h5: { fontSize: theme("fontSize.h5") },
      });
    }),
  ],
};
