import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/route.jsx";
import MainContextProvider from "./Context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MainContextProvider>
  </StrictMode>
);
