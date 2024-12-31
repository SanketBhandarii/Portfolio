import React from "react";
import mongo from "../assets/mongo.png";
import java from "../assets/java.webp";
import { SiExpress, SiPrisma, SiMongodb, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt, FaReact, FaJava } from "react-icons/fa";

function Stack() {
  return (
    <section
      className="h-auto py-24 font-font_1 dark:bg-clr_1 bg-white"
      id="TechStack"
    >
      <h4 className="text-3xl text-center dark:text-gray-300 text-black pb-5">
        My Tech <span className="text-cyan-700">Stack</span>
      </h4>
      <p className="text-xl text-center dark:text-gray-400 text-black max-md:px-7">
        Technologies I've been working with recently
      </p>
      <div className="flex gap-8 max-sm:gap-8 flex-wrap mt-16 justify-center items-center px-10">
        {/* JavaScript */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <SiJavascript className="dark:text-[#F7DF1E] text-cyan-700 text-7xl" />
        </div>

        {/* Express */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <SiExpress className="dark:text-white text-cyan-700 text-7xl" />
        </div>

        {/* CSS3 */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <FaCss3Alt className="dark:text-[#1572B6] text-cyan-700 text-7xl" />
        </div>

        {/* React */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <FaReact className="dark:text-[#61DAFB] text-cyan-700 text-7xl" />
        </div>

        {/* Java */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <FaJava className="dark:text-[#B07219] text-cyan-700 text-7xl" />
        </div>

        {/* Prisma */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <SiPrisma className="dark:text-slate-400 text-cyan-700 text-7xl" />
        </div>

        {/* MongoDB */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <SiMongodb className="dark:text-[#47A248] text-cyan-700 text-7xl" />
        </div>

        {/* Tailwind CSS */}
        <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md">
          <RiTailwindCssFill className="dark:text-[#06B6D4] text-cyan-700 text-7xl" />
        </div>
      </div>
    </section>
  );
}

export default Stack;
