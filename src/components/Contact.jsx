import React, { useContext } from "react";
import DarkMode, { DarkModeProvider } from "../store/DarkMode";

function Contact() {
  const [dark] = useContext(DarkMode);
  return (
    <div
      className={
        dark
          ? "h-auto bg-bgClr_1 font-font_1 pb-10 pt-32"
          : "h-auto bg-slate-100 font-font_1 pb-10 pt-32"
      }
      id="Contact"
    >
      <h1 className={dark ? "text-slate-200 text-2xl text-center" : "text-clr_1 text-2xl text-center pt-10"}>
        Contact Details
      </h1>
      <div className={dark ? "flex justify-center gap-20 max-lg:gap-10 flex-wrap pt-10 px-5 items-center mt-6 border-t-2 border-gray-700" : "flex justify-center gap-20 max-lg:gap-10 flex-wrap pt-10 px-5 items-center mt-6 border-t-2 border-gray-300"}>
        <h4 className={dark ? "text-slate-200 text-l text-center " : "text-clr_1 text-l text-center"}>
            Phone No. :- 8779304629
        </h4>
        <h4 className={dark ? "text-slate-200 text-l text-center" : "text-clr_1 text-l text-center"}>
            Email Id :- 
            <span className="text-cyan-700"><a href="">bhandarisanketp@gmail.com</a></span>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
