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
      'gray' : '#7d7f7c',
      'lightgray' : '#a9a9a9',
      'red' : '#960019',
      'green' : '#56694a',
    },
    fontFamily: {
      spartan: "League Spartan",
    }
  },
  plugins: [],
}