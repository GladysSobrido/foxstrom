//Translation
// import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import { Rechner } from "../components/Rechner";

function Home() {
  const { t } = useTranslation();

  const [group, setGroup] = useState();
  const [range, setRange] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <div className="hero">
        <img className="foxhunting" src="/wild-fox_line.png"></img>
        <div className="herotext">
          <h1>{t("hero_title")}</h1>
          <p>{t("hero_paragraph")}</p>
        </div>
        <div className="rechner">
          <Rechner
            onSubmitData={(verbrauch, anzahl, plz) => {
              setMessage("");
              handleChangeVerbrauch(verbrauch, anzahl);
              handleChangePlz(plz);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
