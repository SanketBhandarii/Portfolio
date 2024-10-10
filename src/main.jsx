// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { DarkModeProvider } from "./store/DarkMode.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

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
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
);
