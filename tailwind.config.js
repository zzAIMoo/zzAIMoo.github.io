/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
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
        "primary-light": '#C4B5FD', //violet-300
        "secondary-light": '#A78bfA', //violet-400
        "tertiary-light": '#7C3AED', //violet-800
        "primary-dark": '#CBD5E1', //slate-300
        "secondary-dark": '#94A3B8', //slate-400
        "tertiary-dark": '#1E293B', //slate-800
      }
    },
  },
  plugins: [],
}
