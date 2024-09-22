/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '85': '22rem',
      }
    },
    colors:{
      'blue': '#CEE8EA',
      'white': '#FFFFFF',
      'darkblue' : '#5F97AB',
      'calendarblue' : "#71A2D0"
    },
    fontFamily: {
      spartan: "League Spartan",
    }
  },
  plugins: [],
}