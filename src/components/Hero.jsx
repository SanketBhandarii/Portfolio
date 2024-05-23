import React, { useContext } from "react";
import "../styles/AllInOne.css";
import DarkMode from "../store/DarkMode";

function Hero() {
  const [dark] = useContext(DarkMode);
  return (
    <main
      className={
        dark
          ? "h-height_1 bg-bgClr_3 flex items-center justify-around max-screen5:flex-col-reverse max-screen5:h-height_7 max-screen5:justify-center max-screen3:gap-10 max-screen7:px-4"
          : "h-height_1 bg-slate-100 flex items-center justify-around max-screen5:flex-col-reverse max-screen5:h-height_7 max-screen5:justify-center max-screen3:gap-10 max-screen7:px-4"
      }
    >
      <section className="intro max-screen7:px-2">
        
        <h4
          className={
            dark
              ? "text-slate-100 font-font_1 font-semibold text-5xl flex gap-2 flex-col max-screen7:text-center max-screen8:text-4xl max-screen2:text-4xl"
              : "text-clr_1 font-font_1 font-semibold text-5xl flex gap-2 flex-col max-screen7:text-center max-screen2:text-4xl"
          }
        >
          Hi !
          <span className={dark ? "text-cyan-700" : "text-cyan-700"}>
            Sanket Bhandari : )
          </span>
          Frontend Dev
        </h4>
      </section>
      <div className="z-10">
        <img
          src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
          className={
            dark
              ? "w-width_4 rounded-full animeIcon border-zinc-900"
              : "w-width_4 rounded-full animeIcon border-slate-100"
          }
        />
      </div>
      
    </main>
  );
}

export default Hero;
