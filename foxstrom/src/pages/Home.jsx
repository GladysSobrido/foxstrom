//Translation
// import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
// import { Rechner } from "../components/Rechner";
import { InfoCard } from "../components/InfoCard";
import { InfoCard2 } from "../components/InfoCard2";
import infocards from "../data/infocards";
import { Rech } from "../components/Rech";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero">
        <img className="foxhunting" src="/wild-fox_line2.png"></img>
        <div className="herotext">
          <h1>{t("hero_title")}</h1>
          <p>{t("hero_paragraph")}</p>
        </div>
      </div>
      <div className="hero2">
        <div className="rechner">
          {/* <Rechner /> */}
          <Rech />
        </div>
      </div>
      {/* These are the cards
      CARD 1:  */}
      <div className="infocards">
        <div className="homecard">
          <InfoCard
            key={1}
            title={t("card1title")}
            text={t("card1text")}
            imgHref={infocards[0].imgHref}
            imgWidth={infocards[0].imgWidth}
            height={infocards[0].imgHeight}
            imgX={infocards[0].imgX}
            imgY={infocards[0].imgY}
          />
        </div>
        <div className="homecard">
          <InfoCard
            key={2}
            title={t("card2title")}
            text={t("card2text")}
            imgHref={infocards[1].imgHref}
            imgWidth={infocards[1].imgWidth}
            height={infocards[1].imgHeight}
            imgX={infocards[1].imgX}
            imgY={infocards[1].imgY}
          />
        </div>
        <div className="homecard">
          <InfoCard2
            key={3}
            title={t("card3title")}
            text={t("card3text")}
            imgHref={infocards[2].imgHref}
            imgWidth={infocards[2].imgWidth}
            height={infocards[2].imgHeight}
            imgX={infocards[2].imgX}
            imgY={infocards[2].imgY}
          />
        </div>
        <div className="homecard">
          <InfoCard2
            key={4}
            title={t("card4title")}
            text={t("card4text")}
            imgHref={infocards[3].imgHref}
            imgWidth={infocards[3].imgWidth}
            height={infocards[3].imgHeight}
            imgX={infocards[3].imgX}
            imgY={infocards[3].imgY}
          />
        </div>
      </div>
      {/* End of cards */}
      <div className="bg">
        <div className="section2">
          <h2>{t("kombo1")}</h2>
          <p>{t("kombo2")}</p>
          <img height="300px" src="/stock/389_focus_img.JPG"></img>
          <h2>{t("kombo3")}</h2>
          <p>{t("kombo4")} </p>
        </div>
      </div>
    </>
  );
}

export default Home;
