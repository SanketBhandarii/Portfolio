import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";

function Stack() {
  const [dark] = useContext(DarkMode);
  return (
    <section
      className={`h-auto py-20 font-font_1 ${dark ? "bg-clr_1" : "bg-white"}`}
      id="TechStack"
    >
      <h4
        className={`text-3xl text-center ${
          dark ? "text-gray-300" : "text-black"
        } pb-5`}
      >
        My Tech <span className="text-cyan-700">Stack</span>
      </h4>
      <p
        className={`text-xl text-center ${
          dark ? "text-gray-400" : "text-black"
        } max-md:px-3`}
      >
        Technologies I've been working with recently
      </p>
      <div className="flex gap-16 flex-wrap mt-20 justify-center items-center px-10">
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
          className="ml-5"
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
