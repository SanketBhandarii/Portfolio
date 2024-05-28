import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";
import zerodha from "../assets/zerodha.png";
import bucketlist from "../assets/bucketlist.png";
import currency from "../assets/currency.png";
import taxcal from "../assets/taxcal.png";

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
        <div
          className={`w-72 rounded-lg overflow-hidden h-auto pb-10 cursor-pointer hover:scale-105 transition-all duration-300 ${
            dark ? "bg-bgClr_2" : "bg-white shadow-2xl shadow-slate-300"
          }`}
        >
          <img
            src={zerodha}
            alt="Zerodha UI"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={`text-center text-2xl ${
                dark ? "text-gray-300" : "text-black"
              }`}
            >
              Zerodha <span className="text-cyan-700">UI</span>
            </h1>
            <p
              className={`text-base mt-3 h-24 ${
                dark ? "text-gray-400" : "text-black"
              }`}
            >
              Zerodha UI crafted with Tailwind CSS: clean, responsive, and
              modern.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={`text-sm flex gap-2 items-center ${
                  dark ? "text-stone-300" : "text-cyan-700"
                }`}
                href="https://zeroodha.netlify.app/"
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
                href="https://github.com/SanketBhandarii/Zerodha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </a>
            </div>
          </div>
        </div>

        <div
          className={`w-72 rounded-lg overflow-hidden h-auto pb-10 cursor-pointer hover:scale-105 transition-all duration-300 ${
            dark ? "bg-bgClr_2" : "bg-white shadow-2xl shadow-slate-300"
          }`}
        >
          <img
            src={bucketlist}
            alt="Bucket List App"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={`text-center text-2xl ${
                dark ? "text-gray-300" : "text-black"
              }`}
            >
              Bucket <span className="text-cyan-700">List</span>
            </h1>
            <p
              className={`text-base mt-3 h-24 ${
                dark ? "text-gray-400" : "text-black"
              }`}
            >
              Bucket List app built with React JS: organized, dynamic, and
              user-friendly.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={`text-sm flex gap-2 items-center ${
                  dark ? "text-stone-300" : "text-cyan-700"
                }`}
                href="https://bucket-listapp.netlify.app/"
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
                href="https://github.com/SanketBhandarii/BucketListApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </a>
            </div>
          </div>
        </div>

        <div
          className={`w-72 rounded-lg overflow-hidden h-auto pb-10 cursor-pointer hover:scale-105 transition-all duration-300 ${
            dark ? "bg-bgClr_2" : "bg-white shadow-2xl shadow-slate-300"
          }`}
        >
          <img
            src={currency}
            alt="Currency Converter"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={`text-center text-2xl ${
                dark ? "text-gray-300" : "text-black"
              }`}
            >
              Currency <span className="text-cyan-700">Converter</span>
            </h1>
            <p
              className={`text-base mt-3 h-24 ${
                dark ? "text-gray-400" : "text-black"
              }`}
            >
              Currency Converter project: HTML, CSS, JS - intuitive and
              functional.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={`text-sm flex gap-2 items-center ${
                  dark ? "text-stone-300" : "text-cyan-700"
                }`}
                href="https://currenccyconverter.netlify.app/"
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
                href="https://github.com/SanketBhandarii/Currency-Converter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </a>
            </div>
          </div>
        </div>

        <div
          className={`w-72 rounded-lg overflow-hidden h-auto pb-10 cursor-pointer hover:scale-105 transition-all duration-300 ${
            dark ? "bg-bgClr_2" : "bg-white shadow-2xl shadow-slate-300"
          }`}
        >
          <img
            src={taxcal}
            alt="Tax Calculator"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={`text-center text-2xl ${
                dark ? "text-gray-300" : "text-black"
              }`}
            >
              Tax <span className="text-cyan-700">Calculator</span>
            </h1>

            <p
              className={`text-base ${
                dark ? "text-gray-400" : "text-black"
              } mt-3 h-24`}
            >
              Tax Calculator: Calculates tax based on annual income and
              applicable rates
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={` text-sm ${
                  dark ? "text-stone-300" : "text-cyan"
                } flex gap-2 items-center`}
                href="https://taxcalculatorr.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paperclip"></i>
                Live Preview
              </a>
              <a
                className={` text-sm ${
                  dark ? "text-white" : "text-black"
                } flex gap-2 items-center`}
                href="https://github.com/SanketBhandarii/Income-Tax-Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Project;
