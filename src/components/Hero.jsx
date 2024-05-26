import React, { useContext } from "react";
import "../styles/AllInOne.css";
import DarkMode from "../store/DarkMode";

function Hero() {
  const [dark] = useContext(DarkMode);
  return (
    <main
      className={
        dark
          ? "h-height_1 hero bg-bgClr_3 flex items-center justify-center gap-32 max-screen5:flex-col-reverse max-screen5:h-height_7 max-screen5:justify-center max-screen3:gap-10 max-screen7:px-4"
          : "h-height_1 hero bg-slate-100 flex items-center justify-center gap-32 max-screen5:flex-col-reverse max-screen5:h-height_7 max-screen5:justify-center max-screen3:gap-10 max-screen7:px-4"
      }
    >
      <section className="max-screen7:px-2 flex flex-col gap-5">
        <h4
          className={
            dark
              ? "text-slate-100 font-font_1 font-semibold text-5xl max-screen7:text-center max-screen8:text-4xl max-screen2:text-4xl"
              : "text-clr_1 font-font_1 font-semibold text-5xl max-screen7:text-center max-screen8:text-4xl max-screen2:text-4xl"
          }
        >
          
          <span
            className={
              dark ? "text-cyan-700 domaindark" : "text-cyan-700 domainwhite"
            }
          >
            Sanket Bhandari : )
          </span>
          Frontend Dev
        </h4>
        <p className={ dark ? "w-width_4 text-slate-300 font-font_1" : "w-width_4 text-slate-700 font-font_1"}>
          I am a dedicated professional with expertise in FRONTEND. I excel
          in delivering innovative projects and thrive in collaborative
          environments, committed to making a meaningful impact.
        </p>
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
