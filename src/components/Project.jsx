import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";
import { Tilt } from "react-tilt";
import projects from "../../data/projects";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function Project() {
  const [dark] = useContext(DarkMode);
  return (
    <section
      className={`h-auto font-font_1 pt-14 ${
        dark ? "bg-zinc-900" : "bg-slate-100"
      }`}
      id="Project"
    >
      <h4
        className={`text-4xl text-center ${
          dark ? "text-white" : "text-black"
        } pb-5`}
      >
        Pro<span className="text-cyan-700">jects</span>
      </h4>
      <p
        className={`text-xl text-center ${
          dark ? "text-white" : "text-black"
        } pb-5`}
      >
        Things I've built so far
      </p>

      <main className="flex flex-wrap gap-10 justify-center mt-4 px-5">
        {projects.map((pro, index) => {
          return (
            <Tilt options={defaultOptions}>
              <div
                className={`w-72 rounded-lg overflow-hidden h-auto pb-10 cursor-pointer transition-all duration-300 ${
                  dark ? "bg-bgClr_2" : "bg-white shadow-2xl shadow-slate-300"
                }`}
              >
                <img
                  src={pro.img}
                  alt="Zerodha UI"
                  className="w-full h-48 object-cover"
                />
                <div className="px-5 pt-9">
                  <h1
                    className={`text-center text-2xl ${
                      dark ? "text-gray-300" : "text-black"
                    }`}
                  >
                    {pro.title.normal}
                    <span className="text-cyan-700">{pro.title.span}</span>
                  </h1>
                  <p
                    className={`text-base mt-3 h-24 ${
                      dark ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {pro.desc}
                  </p>
                  <div className="flex justify-around mt-6">
                    <a
                      className={`text-sm flex gap-2 items-center ${
                        dark ? "text-stone-300" : "text-cyan-700"
                      }`}
                      href={pro.link_1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-paperclip"></i>
                      Live Preview
                    </a>
                    <a
                      className={`text-sm flex gap-2 items-center ${
                        dark ? "text-white" : "text-black"
                      }`}
                      href={pro.link_2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-code"></i>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          );
        })}
      </main>
    </section>
  );
}

export default Project;
