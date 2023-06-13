/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
