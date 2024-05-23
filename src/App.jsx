import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DarkMode, { DarkModeProvider } from "./store/DarkMode";
import Stack from "./components/Stack";
import Project from "./components/Project";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  // const [dark, setDark] = useState(true);
  // let value = [dark, setDark];
  return (
     <>
      <Header/>
      <Hero />
      <Stack />
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
