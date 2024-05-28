import React, { useContext, useState } from "react";
import "../styles/AllInOne.css";
import DarkMode from "../store/DarkMode";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  const [dark, setDark] = useContext(DarkMode);
  const [show, setShow] = useState(false);
  function handleToggler() {
    setDark(!dark);
  }
  function showMenu() {
    setShow(!show);
  }
  return (
    <header
      className={`${
        dark ? "bg-clr_1" : "bg-white"
      } h-20 flex justify-around items-center max-md:gap-40`}
    >
      <div
        className={`absolute top-0 left-0 h-full w-full bg-opacity-75 transition-transform transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } ${dark ? "bg-clr_1" : "bg-slate-200"} z-50`}
      >
        <div className="flex justify-end p-6">
          <i
            className={`fa-solid fa-circle-xmark text-5xl cursor-pointer ${
              dark ? "text-slate-200" : "text-clr_1"
            }`}
            onClick={showMenu}
          ></i>
        </div>
        <ul
          className={`flex flex-col items-center gap-7 pt-10 ${
            dark ? "text-slate-300" : "text-clr_1"
          } font-font_1 text-2xl`}
        >
          <NavLink to="/">
            <li className="cursor-pointer py-2 px-2" onClick={showMenu}>
              Home
            </li>
          </NavLink>
          <NavLink to="/About" onClick={showMenu}>
            <li className="cursor-pointer py-2 px-2">About</li>
          </NavLink>
          <a href="#TechStack" onClick={showMenu}>
            <li className="cursor-pointer py-2 px-2">Tech Stack</li>
          </a>
          <a href="#Project" onClick={showMenu}>
            <li className="cursor-pointer py-2 px-2">Projects</li>
          </a>
          <a href="#Contact" onClick={showMenu}>
            <li className="cursor-pointer py-2 px-2">Contact</li>
          </a>
          <a
            href="https://github.com/SanketBhandarii"
            target="_blank"
            className="text-4xl"
            onClick={showMenu}
          >
            <i
              className={`fa-brands fa-github cursor-pointer ${
                dark ? "text-white" : "text-clr_1"
              }`}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/SanketBhandari/"
            target="_blank"
            className="text-4xl"
            onClick={showMenu}
          >
            <i
              className={`fa-brands fa-linkedin cursor-pointer ${
                dark ? "text-zinc-300" : "text-cyan-700"
              }`}
            ></i>
          </a>
        </ul>
      </div>

      <div>
        {dark ? (
          <span className="cursor-pointer py-2 px-2" onClick={handleToggler}>
            <i className="fa-solid fa-moon text-white text-2xl"></i>
          </span>
        ) : (
          <span className="cursor-pointer py-2 px-2" onClick={handleToggler}>
            <i className="fa-solid fa-sun text-clr_1 text-2xl"></i>
          </span>
        )}
      </div>
      <div>
        <section>
          {dark ? (
            <span className="cursor-pointer py-2 px-2 hidden max-md:block">
              <i
                class="fa-solid fa-bars text-white text-3xl"
                onClick={showMenu}
              ></i>
            </span>
          ) : (
            <span className="cursor-pointer py-2 px-2 hidden max-md:block">
              <i
                class="fa-solid fa-bars text-black text-3xl"
                onClick={showMenu}
              ></i>
            </span>
          )}
          <ul
            className={`flex gap-4 items-center ${
              dark ? "text-slate-300" : "text-clr_1"
            } font-font_1 text-lg max-md:hidden`}
          >
            <NavLink to="/">
              <li className="cursor-pointer py-2 px-2">Home</li>
            </NavLink>

            <NavLink to={"/About"}>
              {" "}
              <li className="cursor-pointer py-2 px-2">About</li>
            </NavLink>

            <a href="#TechStack">
              <li className="cursor-pointer py-2 px-2">Tech Stack</li>
            </a>
            <a href="#Project">
              <li className="cursor-pointer py-2 px-2">Projects</li>
            </a>
            <a href="#Contact">
              <li className="cursor-pointer py-2 px-2">Contact</li>
            </a>
            <a
              href="https://github.com/SanketBhandarii"
              target="_blank"
              className="text-3xl pr-2"
            >
              <i
                className={`fa-brands fa-github cursor-pointer ${
                  dark ? "text-white" : "text-clr_1"
                }`}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/SanketBhandari/"
              target="_blank"
              className="text-3xl"
            >
              <i
                className={`fa-brands fa-linkedin cursor-pointer ${
                  dark ? "text-zinc-300" : "text-cyan-300"
                }`}
              ></i>
            </a>
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Header;
