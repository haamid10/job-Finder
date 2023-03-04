/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
      'blueColors': '#2a68ff',
      'greyIsh':'#f1f4f8',
      'cardshadow': '#f7f8f9',
      'textColor':'#252b36',

      }
    },
  },
  plugins: [],
}