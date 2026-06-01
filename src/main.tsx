import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Main.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./pages/Projects";
import Appdemo from "./Appdemo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },

    {
      path: "/appdemo",
      element: <Appdemo/>,
    },
  ],
  {
    basename: "/pooja-portfolio/",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
