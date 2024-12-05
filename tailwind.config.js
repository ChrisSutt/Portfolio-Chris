/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softPeach: '#FFD8B4',
      },
      fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

