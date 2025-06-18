import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { About } from "./Pages/About";

import "./styles/global.css";
import { JournalMD } from "./Pages/JournalMD";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <JournalMD />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
