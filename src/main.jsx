// src/main.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import useTheme, { ThemeProvider } from "./store/DarkMode.jsx";
import Intro from "./components/Intro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

function SplashRouterWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Intro />;
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SplashRouterWrapper />
  </ThemeProvider>
);
