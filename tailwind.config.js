/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      colors: {
        "light-mode": '#F0E9D8',
        "dark-mode": '#121212',
        "primary-light": '#D8B4FE',
        "primary-dark": '#CBD5E1',
        "secondary-light": '#6B21A8',
        "secondary-dark": '#94A3B8',
      }
    },
  },
  plugins: [],
}
