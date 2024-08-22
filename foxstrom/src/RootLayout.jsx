import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavBar } from "./components/NavBar";

import "./styles/globalstyles.css";

export function RootLayout() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />

      <Outlet />

      <footer>
        <p>{t("Copyright Taktsoft Campus")}</p>
      </footer>
    </>
  );
}
