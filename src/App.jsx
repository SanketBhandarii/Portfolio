import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import DarkMode, { DarkModeProvider } from "./store/DarkMode";
import Stack from "./components/Stack";
import Project from "./components/Project";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import useTheme from "./store/DarkMode";

function App() {
  const [time, setTime] = useState(true);
  const [theme] = useTheme();

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(!time);
    }, 3000);
  }, []);

  return (
    <>
      {time ? (
        <Intro />
      ) : (
        <>
          <Header />
          <Hero />
          <Stack />
          <Project />
          <Contact /> 
        </>
      )}
    </>
  );
}

export default App;
