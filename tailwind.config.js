/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontfamily:{
      'sans':['Pinar']
    },
    extend: {
      colors:{
        // bgColor:linearGradient("F8F9FA,F4F9FF"),
        primary:"#8F649E",
        secondary:"#D7ACD4",
        Third:"#82B3D4",
        white:"#FFFFFF",
        blackText:"#000000",
        stroke:"#7E518D"



      }
    },
    fontFamily:{
      pinar:['pinar','sans-serif'],
      pinarB:['pinar','sans-serif']

    }
  },
  plugins: [],
}

