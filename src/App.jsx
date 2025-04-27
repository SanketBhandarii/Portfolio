import React from "react";
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
  const [theme] = useTheme();

  React.useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <Project />
      <Contact />
    </>
  );
}

export default App;
