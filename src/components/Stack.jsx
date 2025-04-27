import React from "react";
import { SiExpress, SiPrisma, SiMongodb, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt, FaReact, FaJava } from "react-icons/fa";

const TechIcon = ({ Icon, color }) => (
  <div className="dark:bg-bgClr_3 bg-slate-100 p-4 rounded-md flex flex-col items-center">
    <Icon className={`text-7xl ${color}`} />
  </div>
);

const stackItems = [
  {
    Icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  {
    Icon: SiExpress,
    color: "text-slate-400",
  },
  {
    Icon: FaCss3Alt,
    color: "text-[#1572B6]",
  },
  {
    Icon: FaReact,
    color: "text-[#61DAFB]",
  },
  {
    Icon: FaJava,
    color: "text-[#B07219]",
  },
  {
    Icon: RiNextjsFill,
    color: "text-slate-400",
  },
  {
    Icon: SiMongodb,
    color: "text-[#47A248]",
  },
  {
    Icon: RiTailwindCssFill,
    color: "text-[#06B6D4]",
  },
];

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
        {stackItems.map(({ Icon, color }, idx) => (
          <TechIcon
            key={idx}
            Icon={Icon}
            color={color}
          />
        ))}
      </div>
    </section>
  );
}

export default Stack;
