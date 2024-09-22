/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '18': '4.5rem',
        '85': '22rem',
      }
    },
    colors:{
      'blue': '#CEE8EA',
      'white': '#FFFFFF',
      'darkblue' : '#5F97AB',
      'calendarblue' : "#71A2D0",
      'black' : '#000000',
    },
    fontFamily: {
      spartan: "League Spartan",
    }
  },
  plugins: [],
}