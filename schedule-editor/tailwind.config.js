const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      white: colors.white
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Roboto Slab', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
