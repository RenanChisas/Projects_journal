import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { About } from "./Pages/About";

import "./styles/global.css";
import { JournalMD } from "./Pages/JournalMD";

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

export function App() {
  return <RouterProvider router={router} />;
}
