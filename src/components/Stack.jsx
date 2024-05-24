import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";

function Stack() {
  const [dark] = useContext(DarkMode);
  return (
    <section
      className={
        dark
          ? "h-height_2 max-screen11:min-h-minH1 max-screen12:min-h-minH2 max-screen4:min-h-minH3 max-screen7:min-h-minH5 max-screen13:min-h-minH6 max-screen14:min-h-minH7 max-screen15:min-h-screen items-center font-font_1 pt-36 bg-clr_1"
          : "h-height_2 max-screen11:min-h-minH1 max-screen12:min-h-minH2 max-screen4:min-h-minH3 max-screen7:min-h-minH5 max-screen13:min-h-minH6 max-screen14:min-h-minH7 items-center font-font_1 pt-36 bg-white"
      }
      id="TechStack"
    >
      <h4
        className={
          dark
            ? "text-3xl text-center text-gray-300 pb-5 max-screen4:px-3"
            : "text-3xl text-center text-black pb-5 max-scree4:px-3"
        }
      >
        My Tech <span className="text-cyan-700">Stack</span>
      </h4>
      <p
        className={
          dark
            ? "text-xl text-center text-gray-400 max-screen4:px-3 "
            : "text-xl text-center text-black max-scree4:px-3"
        }
      >
        Technologies I've been working with recently
      </p>
      <div className="h-32 flex gap-16 flex-wrap mt-20 justify-center items-center px-10 m-auto">
        <i className="fa-brands fa-html5 text-orange-500 text-8xl"></i>
        <i className="fa-brands fa-css3-alt  text-sky-600 text-8xl"></i>
        <i className="fa-brands fa-js text-yellow-300 text-8xl"></i>
        <i className="fa-brands fa-react text-cyan-400 text-8xl"></i>
        <img
          src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
          width="100px"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"
          width="100px"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/mongodb-original-icon-921x2048-hvrb89lu.png"
          width="50px"
          className="ml-10"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp"
          width="130px"
        />
      </div>
    </section>
  );
}

export default Stack;
