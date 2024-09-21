/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./UserPage.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue : "#CEE8EA",
        turqoise : "#5F97AB",
        darkblue : "#71A2D0"
      },

      fontFamily: {
        spartanbold: ['LeagueSpartan_800ExtraBold', 'sans-serif']
      },
    
    },
    plugins: [],
  }
}
