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
        bgCLr_4 : "#21232b",
        bgClr_5 : "#e4ecf0",
        bgClr_6 : "#dee3fa"
      },
      height: {
        height_1: "500px",
        height_2: "530px",
        height_3: "900px",
        height_4: "450px",
        height_6: "330px",
        height_7 : "600px",
        height_8 : "280px"
      },
      width:{
         width_1 : "590px",
         width_2 : "400px",
         width_3 : "290px",
         width_4 : "500px",
         
      },
      fontFamily: {
        font_1: ['"Radio Canada Big"', "sans-serif"],
      },
      fontSize: {
        fontSize_1: "19px",
      },
      screens : {
       screen1 : "1065px",
       screen2 : "482px",
       screen3 : "1145px",
       screen4 : "644px",
       screen5 : "1063px",
       screen6 : "738px",
       screen7 : "553px",
       screen8 : "330px",
       screen9 : "668px",
       screen10 : "865px",
       screen11 : "1345px",
       screen12 : "702px",
       screen13 : "412px",
       screen14 : "360px",
       screen15 : "355px"
      },
      minHeight : {
        minH1 : "700px",
        minH2 : "900px",
        minH3 : "930px",
        minH4 : "400px",
        minH5 : "1000px",
        minH6 : "1100px",
        minH7 : "1200px"
      },
      translate : {
        val1 : "510px",
        val2 : "260px",
        val3 : "0px"
      }
    },
  },
  plugins: [],
};
