//Translation
// import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import { Rechner } from "../components/Rechner";
import { InfoCard } from "../components/InfoCard";
import { InfoCard2 } from "../components/InfoCard2";
import infocards from "../data/infocards";

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
      {/* These are the cards
      CARD 1:  */}
      <div className="infocards">
        <InfoCard
          key={1}
          title={infocards[0].title}
          text={infocards[0].text}
          imgHref={infocards[0].imgHref}
          imgWidth={infocards[0].imgWidth}
          height={infocards[0].imgHeight}
          imgX={infocards[0].imgX}
          imgY={infocards[0].imgY}
        />

        <InfoCard
          key={2}
          title={infocards[1].title}
          text={infocards[1].text}
          imgHref={infocards[1].imgHref}
          imgWidth={infocards[1].imgWidth}
          height={infocards[1].imgHeight}
          imgX={infocards[1].imgX}
          imgY={infocards[1].imgY}
        />
        <InfoCard2
          key={3}
          title={infocards[2].title}
          text={infocards[2].text}
          imgHref={infocards[2].imgHref}
          imgWidth={infocards[2].imgWidth}
          height={infocards[2].imgHeight}
          imgX={infocards[2].imgX}
          imgY={infocards[2].imgY}
        />
        <InfoCard2
          key={2}
          title={infocards[3].title}
          text={infocards[3].text}
          imgHref={infocards[3].imgHref}
          imgWidth={infocards[3].imgWidth}
          height={infocards[3].imgHeight}
          imgX={infocards[3].imgX}
          imgY={infocards[3].imgY}
        />
      </div>
    </>
  );
}

export default Home;
