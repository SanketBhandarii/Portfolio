// src/main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import useTheme, { ThemeProvider } from "./store/DarkMode.jsx";

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



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
