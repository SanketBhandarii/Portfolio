import React, { useState } from "react";
import "../styles/AllInOne.css";
import useTheme from "../store/DarkMode";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", type: "route" },
  { to: "/About", label: "About", type: "route" },
  { to: "#TechStack", label: "Tech Stack", type: "anchor" },
  { to: "#Project", label: "Projects", type: "anchor" },
  { to: "#Contact", label: "Contact", type: "anchor" },
];

const socialLinks = [
  {
    href: "https://github.com/SanketBhandarii",
    iconClass: "fa-github",
    label: "GitHub",
    colorClass: "dark:text-white text-clr_1",
  },
  {
    href: "https://www.linkedin.com/in/SanketBhandari/",
    iconClass: "fa-linkedin",
    label: "LinkedIn",
    colorClass: "dark:text-zinc-300 text-cyan-700",
  },
];

function Header() {
  const [theme, setTheme] = useTheme();
  const [show, setShow] = useState(false);

  function handleToggler() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  function showMenu() {
    setShow((prev) => !prev);
  }

  const renderLinks = (onClick) =>
    navLinks.map(({ to, label, type }) =>
      type === "route" ? (
        <NavLink to={to} key={label} onClick={onClick}>
          <li className="cursor-pointer py-2 px-2">{label}</li>
        </NavLink>
      ) : (
        <a href={to} key={label} onClick={onClick}>
          <li className="cursor-pointer py-2 px-2">{label}</li>
        </a>
      )
    );

  const renderSocials = (onClick, iconSize = "text-3xl") =>
    socialLinks.map(({ href, iconClass, label, colorClass }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconSize} ml-2`}
        key={label}
        onClick={onClick}
        aria-label={label}
      >
        <i className={`fa-brands ${iconClass} cursor-pointer ${colorClass}`}></i>
      </a>
    ));

  return (
    <header className="dark:bg-clr_1 bg-white h-20 flex justify-around items-center max-md:gap-40">
      {/* hamburger */}
      <div
        className={`absolute top-0 left-0 h-full w-80 bg-opacity-90 transition-transform transform ${show ? "-translate-x-20" : "-translate-x-full"
          } bg-bgClr_1 z-50`}
      >
        <div className="flex justify-end p-6">
          <i
            className="fa-solid fa-circle-xmark text-5xl cursor-pointer dark:text-slate-200 text-slate-200"
            onClick={showMenu}
          ></i>
        </div>
        <ul className="flex flex-col justify-center gap-7 ml-28 dark:text-slate-300 text-slate-200 font-font_1 text-xl">
          {renderLinks(showMenu)}
          {renderSocials(showMenu, "text-4xl")}
        </ul>
      </div>

      <div>
        <span className="cursor-pointer py-2 px-2" onClick={handleToggler}>
          <i
            className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"
              } dark:text-white text-clr_1 text-2xl`}
          ></i>
        </span>
      </div>

      <div>
        <section>
          <span className="cursor-pointer py-2 px-2 hidden max-md:block">
            <i
              className={`fa-solid fa-bars dark:text-white text-black text-3xl ${show ? "opacity-0" : ""
                }`}
              onClick={showMenu}
            ></i>
          </span>

          <ul className="flex gap-4 items-center dark:text-slate-300 text-clr_1 font-font_1 text-lg max-md:hidden">
            {renderLinks()}
            {renderSocials()}
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Header;
