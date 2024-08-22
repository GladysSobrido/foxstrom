//import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import i18n (needs to be bundled ;))
import "./i18n";

//routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt.jsx";
//import { Test } from "./pages/Test.jsx";
import { RootLayout } from "./RootLayout";
import { Solaranlage } from "./pages/Solaranlage.jsx";
import { Ladestationen } from "./pages/Ladestationen.jsx";
import { Strom } from "./pages/Strom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "strom",
        element: <Strom />,
      },
      {
        path: "solar",
        element: <Solaranlage />,
      },
      {
        path: "lade",
        element: <Ladestationen />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);
//...
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
