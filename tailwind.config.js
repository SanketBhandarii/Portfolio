/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr_1: "#171717",
      },
      backgroundColor: {
        bgClr_1: "#171717",
        bgClr_2 : "#282c2e",
        bgClr_3 : "#1b1f1c",
      },
      width:{
         width_1 : "590px",
         width_2 : "400px",
         width_3 : "290px",
         width_4 : "500px",
         width_5 : "700px"
      },
      fontFamily: {
        font_1: ['"Radio Canada Big"', "sans-serif"],
      },
      screens : {
       screen1 : "1065px",
       screen2 : "482px",
       screen5 : "1063px",
      }
    },
  },
  plugins: [],
};
