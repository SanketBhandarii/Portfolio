import React, { useContext } from "react";
import DarkMode from "../store/DarkMode";
import zerodha from "../assets/zerodha.png";
import bucketlist from "../assets/bucketlist.png";
import currency from '../assets/currency.png';
import taxcal from '../assets/taxcal.png';

function Project() {
  const [dark] = useContext(DarkMode);
  return (
    <section
      className={
        dark
          ? "min-h-screen font-font_1 pt-14 bg-zinc-900"
          : "min-h-screen font-font_1 pt-14 bg-slate-100"
      }
      id="Project"
    >
      <h4
        className={
          dark
            ? "text-4xl text-center text-white pb-5"
            : "text-4xl text-center text-black pb-5"
        }
      >
        Pro<span className="text-cyan-700">jects</span>
      </h4>
      <p
        className={
          dark
            ? "text-xl text-center text-white pb-5"
            : "text-xl text-center text-black pb-5"
        }
      >
        Things I've built so far
      </p>

      <main className="flex flex-wrap gap-10 justify-center mt-4 px-5">
        <div
          className={
            dark
              ? "w-72 bg-bgClr_2 rounded-lg overflow-hidden h-height_4 cursor-pointer hover:scale-105 transition-all duration-300"
              : "w-72 bg-white rounded-lg shadow-2xl shadow-slate-300 overflow-hidden h-height_4 cursor-pointer hover:scale-105 transition-all duration-300"
          }
        >
          <img
            src={zerodha}
            alt="Zerodha UI"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={
                dark
                  ? "text-center text-gray-300 text-2xl"
                  : "text-center text-black text-2xl"
              }
            >
              Zerodha <span className="text-cyan-700">UI</span>
            </h1>
            <p
              className={
                dark
                  ? "text-base text-gray-400 mt-3 h-24"
                  : "text-base text-black mt-3 h-24"
              }
            >
              Zerodha UI crafted with Tailwind CSS: clean, responsive, and
              modern.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={
                  dark
                    ? "text-sm text-stone-300 flex gap-2 items-center"
                    : "text-sm text-cyan-700 flex gap-2 items-center"
                }
                href="https://zeroodha.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paperclip"></i>
                Live Preview
              </a>
              <a
                className={
                  dark
                    ? "text-sm text-white flex gap-2 items-center"
                    : "text-sm text-black flex gap-2 items-center"
                }
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
          className={
            dark
              ? "w-72  bg-bgClr_2 rounded-lg overflow-hidden h-height_4 cursor-pointer hover:scale-105 transition-all duration-300"
              : "w-72 bg-white rounded-lg shadow-2xl h-height_4 shadow-slate-300 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
          }
        >
          <img
            src={bucketlist}
            alt="Bucket List App"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={
                dark
                  ? "text-center text-gray-300 text-2xl"
                  : "text-center text-black text-2xl"
              }
            >
              Bucket <span className="text-cyan-700">List</span>
            </h1>
            <p
              className={
                dark
                  ? "text-base text-gray-400 mt-3 h-24"
                  : "text-base text-black mt-3 h-24"
              }
            >
              Bucket List app built with React JS: organized, dynamic, and
              user-friendly.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={
                  dark
                    ? "text-sm text-stone-300 flex gap-2 items-center"
                    : "text-sm text-cyan-700 flex gap-2 items-center"
                }
                href="https://bucket-listapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paperclip"></i>
                Live Preview
              </a>
              <a
                className={
                  dark
                    ? "text-sm text-white flex gap-2 items-center"
                    : "text-sm text-black flex gap-2 items-center"
                }
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
          className={
            dark
              ? "w-72  bg-bgClr_2 rounded-lg overflow-hidden h-height_4 cursor-pointer hover:scale-105 transition-all duration-300"
              : "w-72 bg-white rounded-lg shadow-2xl h-height_4 shadow-slate-300 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
          }
        >
          <img
            src={currency}
            alt="Bucket List App"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={
                dark
                  ? "text-center text-gray-300 text-2xl"
                  : "text-center text-black text-2xl"
              }
            >
              Currency <span className="text-cyan-700">Converter</span>
            </h1>
            <p
              className={
                dark
                  ? "text-base text-gray-400 mt-3 h-24"
                  : "text-base text-black mt-3 h-24"
              }
            >
              Currency Converter project: HTML, CSS, JS - intuitive and functional.
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={
                  dark
                    ? "text-sm text-stone-300 flex gap-2 items-center"
                    : "text-sm text-cyan-700 flex gap-2 items-center"
                }
                href="https://currenccyconverter.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paperclip"></i>
                Live Preview
              </a>
              <a
                className={
                  dark
                    ? "text-sm text-white flex gap-2 items-center"
                    : "text-sm text-black flex gap-2 items-center"
                }
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
          className={
            dark
              ? "w-72  bg-bgClr_2 rounded-lg overflow-hidden h-height_4 cursor-pointer hover:scale-105 transition-all duration-300"
              : "w-72 bg-white rounded-lg shadow-2xl shadow-slate-300 h-height_4 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
          }
        >
          <img
            src={taxcal}
            alt="Bucket List App"
            className="w-full h-48 object-cover"
          />
          <div className="px-5 pt-9">
            <h1
              className={
                dark
                  ? "text-center text-gray-300 text-2xl"
                  : "text-center text-black text-2xl"
              }
            >
              Tax <span className="text-cyan-700">Calculator</span>
            </h1>
            <p
              className={
                dark
                  ? "text-base text-gray-400 mt-3 h-24"
                  : "text-base text-black mt-3 h-24"
              }
            >
              Tax Calculator: Calculates tax based on annual income and applicable rates
            </p>
            <div className="flex justify-around mt-6">
              <a
                className={
                  dark
                    ? "text-sm text-stone-300 flex gap-2 items-center"
                    : "text-sm text-cyan-700 flex gap-2 items-center"
                }
                href="https://taxcalculatorr.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paperclip"></i>
                Live Preview
              </a>
              <a
                className={
                  dark
                    ? "text-sm text-white flex gap-2 items-center"
                    : "text-sm text-black flex gap-2 items-center"
                }
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
