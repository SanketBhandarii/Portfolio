import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";

function Contact() {
  const [dark] = useContext(DarkMode);
  return (
    <div
      className={`h-auto font-font_1 pb-10 pt-32 ${dark ? "bg-bgClr_1" : "bg-slate-100"}`}
      id="Contact"
    >
      <h1
        className={`text-2xl text-center ${dark ? "text-slate-200" : "text-clr_1 pt-10"}`}
      >
        Contact Details
      </h1>
      <div
        className={`flex justify-center gap-20 max-lg:gap-10 flex-wrap pt-10 px-5 items-center mt-6 border-t-2 ${
          dark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <h4
          className={`text-l text-center ${dark ? "text-slate-200" : "text-clr_1"}`}
        >
          Phone No. :- 8779304629
        </h4>
        <h4
          className={`text-l text-center ${dark ? "text-slate-200" : "text-clr_1"}`}
        >
          Email Id :- 
          <span className="text-cyan-700">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhandarisanketp@gmail.com" target="_blank">bhandarisanketp@gmail.com</a>
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
