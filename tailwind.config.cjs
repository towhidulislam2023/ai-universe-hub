/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {},
    
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e83ebd",

          "": "#f76a5d",

          "accent": "#ef9b09",

          "neutral": "#1D2A35",

          "base-100": "#EEEEF7",

          "info": "#26ADDF",

          "success": "#3EDA84",

          "warning": "#F9A82F",

          "error": "#E64C41",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
