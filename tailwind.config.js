/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'grass-green': '#4CAF50',
        'grass-dark': '#2E7D32',
        'grass-light': '#8BC34A',
        'soil-brown': '#795548',
        'sky-blue': '#03A9F4',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}