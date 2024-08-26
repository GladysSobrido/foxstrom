//import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import i18n (needs to be bundled ;))
import "./i18n";

//routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./RootLayout";
// import pages
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt.jsx";
import { Solaranlage } from "./pages/Solaranlage.jsx";
import { Ladestationen } from "./pages/Ladestationen.jsx";
import { Strom } from "./pages/Strom.jsx";
import { Login } from "./pages/Login.jsx";
import PrivateLayout from "../PrivateLayout.jsx";
import PrivatePage from "./pages/private/index.jsx";
import InvoicesPage from "./pages/private/invoices.jsx";
import { Tarifs } from "./pages/Tarifs.jsx";

// Clerk: Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "tarifs",
        element: <Tarifs />,
      },
      {
        element: <PrivateLayout />,
        path: "private",
        children: [
          { path: "/private", element: <PrivatePage /> },
          { path: "/private/invoices", element: <InvoicesPage /> },
        ],
      },
    ],
  },
]);
//...Clerk Provider added for authentication
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
