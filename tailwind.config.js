/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '2px': '2px',
        '10': '10px',
        '16': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


