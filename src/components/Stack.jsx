import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";
import tailwind from '../assets/tailwind.png'
import sql from '../assets/sql.png'
import mongo from '../assets/mongo.png'
import java from '../assets/java.webp'

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
          src={tailwind}
          width="100px"
        />
        <img
          src={sql}
          width="70px"
        />
        <img
          src={mongo}
          width="100px"
          className="ml-0"
        />
        <img
          src={java}
          width="100px"
        />
      </div>
    </section>
  );
}

export default Stack;
