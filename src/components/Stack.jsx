import React from "react";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";
import mongo from "../assets/mongo.png";
import java from "../assets/java.webp";

function Stack() {
  return (
    <section
      className="h-auto py-20 font-font_1 dark:bg-clr_1 bg-white"
      id="TechStack"
    >
      <h4 className="text-3xl text-center dark:text-gray-300 text-black pb-5">
        My Tech <span className="text-cyan-700">Stack</span>
      </h4>
      <p className="text-xl text-center dark:text-gray-400 text-black max-md:px-3">
        Technologies I've been working with recently
      </p>
      <div className="flex gap-14 max-sm:gap-11 flex-wrap mt-20 justify-center items-center px-10">
        <i className="fa-brands fa-js dark:text-yellow-300 text-black text-8xl"></i>
        <img
          src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png"
          className="rounded-full"
          width="100px"
        />
        <i className="fa-brands fa-css3-alt text-sky-600 text-8xl"></i>

        <i className="fa-brands fa-react text-cyan-400 text-8xl"></i>
        <img src={tailwind} width="100px" />
        <img
          src="https://yt3.googleusercontent.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s900-c-k-c0x00ffffff-no-rj"
          width="100px"
          className="rounded-full"
        />
        <img src={mongo} width="100px" className="ml-0" />
        <img src={java} width="100px" />
      </div>
    </section>
  );
}

export default Stack;
