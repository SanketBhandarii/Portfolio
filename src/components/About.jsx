import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from '../assets/AboutImg.webp'
import DarkMode from "../store/DarkMode";

function About() {
  const [dark] = useContext(DarkMode);
  const navigate = useNavigate();
  function nav() {
    navigate("/");
  }
  return (
    <div className={`min-h-screen ${dark ? "darkabout" : "whiteabout"} pb-9`}>
      <i
        className={`fa-solid fa-circle-left text-4xl cursor-pointer ${
          dark ? "text-neutral-300" : "text-gray-900"
        }  mt-10 ml-16 max-screen1:ml-10`}
        onClick={nav}
      ></i>
      <section className="flex flex-wrap justify-center items-center gap-16 mt-20 px-1 max-screen1:mt-10 max-screen1:flex-wrap-reverse">
        <article
          className={`${
            dark ? "text-neutral-300" : "text-slate-900"
          } font-font_1 text-lg w-width_1 px-9`}
        >
          <p>
            Hello! I'm{" "}
            <span className="text-xl text-cyan-700">Sanket P. Bhandari</span>,
            currently pursuing a diploma in Computer Engineering. My educational
            journey began at VPM's Vidya Mandir, where I completed my schooling.
            With a passion for programming and an insatiable curiosity to learn
            new things, I continuously strive to expand my knowledge and skills.
          </p>
          <br />
          <p>
            Apart from my academic interests, I enjoy playing cricket and
            sketching. These hobbies provide a creative outlet and a way to
            unwind.
          </p>
          <br />
          <p>
            I also have a keen interest in exploring new places and discovering
            unique venues, which fuels my sense of adventure and appreciation
            for diverse experiences. Thank you for visiting my portfolio. I'm
            excited to share my journey and projects with you!
          </p>
        </article>
        <img
          src={aboutImg}
          className="animeIcon rounded-full w-width_2 max-screen2:w-width_3"
        />
      </section>
    </div>
  );
}

export default About;
