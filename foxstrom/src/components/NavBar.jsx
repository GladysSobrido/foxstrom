import "./NavBar.css";

import { NavLink } from "react-router-dom";

//Translation
// import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English", shortName: "EN" },
  de: { nativeName: "Deutsch", shortName: "DE" },
};
export function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <header>
      <nav className="navbar">
        <img src="src/assets/logo_with_text.png"></img>
        <div>
          <ul className="menu">
            <div>
              <NavLink to={"/Strom"}>
                <Trans i18nKey="menu1">STROM</Trans>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/Solaranlage"}>
                <Trans i18nKey="menu2">SOLARANLAGE</Trans>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/Ladestationen"}>{t("menu3")}</NavLink>
            </div>
          </ul>
        </div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].shortName}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
