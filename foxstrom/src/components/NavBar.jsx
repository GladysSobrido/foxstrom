import "./NavBar.css";
import { Link } from "react-router-dom";
//Authentication mit Clerk
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

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
    <nav className="navbar">
      <Link to={"/"}>
        <img className="logo" src="/logo_with_text.png"></img>
      </Link>
      <div>
        <ul className="menu">
          <div>
            <NavLink to={"/Strom"}>
              <Trans i18nKey="menu1">STROM</Trans>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/solar"}>
              <Trans i18nKey="menu2">SOLARANLAGE</Trans>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/lade"}>{t("menu3")}</NavLink>
          </div>
          <div>
            <NavLink to={"/kontakt"}>{t("menu4")}</NavLink>
          </div>
        </ul>
      </div>
      {/* <div>
        <NavLink to={"/login"}>{t("login")}</NavLink>
      </div> */}
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
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </nav>
  );
}
export default NavBar;
