//Translation
// import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import { Rechner } from "../components/Rechner";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero">
        <img className="foxhunting" src="/wild-fox_line.png"></img>
        <div className="herotext">
          <h1>{t("hero_title")}</h1>
          <p>{t("hero_paragraph")}</p>
        </div>
        <div className="rechner">
          <Rechner />
        </div>
      </div>
    </>
  );
}

export default Home;
