import { Outlet } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./styles/globalstyles.css";

//Authentication with Clerk imports:
import { ClerkProvider } from "@clerk/clerk-react";
//Imports for the private routing for clerck authenticated users:
import { useNavigate } from "react-router-dom";

// Authentication with clerk Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export function RootLayout() {
  // const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
      >
        <NavBar />
        <Outlet />
        <Footer />
      </ClerkProvider>
    </>
  );
}
