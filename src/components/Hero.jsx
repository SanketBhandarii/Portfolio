import React from "react";
import "../styles/AllInOne.css";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <main className="h-auto py-24 dark:bg-bgClr_3 bg-slate-100 flex items-center justify-center gap-32 max-screen5:flex-col-reverse max-xl:gap-14 max-xl:px-10 max-sm:px-4">
      <section className="flex flex-col gap-10">
        <h4 className="dark:text-slate-100 text-clr_1 font-font_1 font-semibold text-5xl flex gap-2 flex-col max-sm:text-center max-screen2:text-4xl">
          <span className="text-cyan-700 dark:domaindark domaindomainwhite">
            Sanket Bhandari : )
          </span>
          Full Stack Dev
        </h4>
        <p className="w-width_4 dark:text-slate-300 text-slate-700 font-font_1 max-sm:w-full max-sm:px-3 max-sm:text-center">
          I build efficient, scalable web and mobile applications with clean,
          reusable code. My focus is on creating intuitive user experiences
          while adhering to industry best practices and delivering reliable
          solutions.
        </p>
      </section>
      <div className="z-10">
        <img
          src="https://res.cloudinary.com/dyrmawqcn/image/upload/v1735734449/hero_d43sfj.jpg"
          className="w-width_4 rounded-full animeIcon dark:border-zinc-900 border-slate-100"
        />
      </div>
    </main>
  );
}

export default Hero;
