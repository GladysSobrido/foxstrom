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
          <Rechner
          // onSubmitData={(verbrauch, anzahl, plz) => {
          //   setMessage("");
          //   handleChangeVerbrauch(verbrauch, anzahl);
          //   handleChangePlz(plz);
          // }}
          />
        </div>
      </div>
      {/* These are the cards
      CARD 1:  */}
      <svg
        width="600"
        height="400"
        viewBox="100 0 300 692"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="thePath"
          d="M 146.5,1.5 C 201.363,0.544049 255.696,5.37738 309.5,16C 343.25,22.7167 374.917,34.7167 404.5,52C 440.851,75.7022 466.017,108.202 480,149.5C 496.982,198.725 505.982,249.392 507,301.5C 508.263,367.532 505.763,433.365 499.5,499C 433.681,506.096 367.681,509.096 301.5,508C 251.024,506.866 202.024,497.866 154.5,481C 93.1113,457.944 51.6113,415.444 30,353.5C 13.6677,304.841 4.66774,254.841 3,203.5C 1.33452,156.72 2.83452,110.053 7.5,63.5C 26.8383,64.4114 46.1716,65.4114 65.5,66.5C 64.4114,46.5044 63.4114,26.5044 62.5,6.5C 90.6193,4.23472 118.619,2.56806 146.5,1.5 Z"
          //d="M526.636 489.523C598.467 361.569 590.666 251.284 551.879 107.757C538.582 58.5517 506.556 -37.4658 444.069 -103.204C320.276 -233.438 122.218 -189.737 6.51981 -180.688C-109.178 -171.639 -138.103 -67.5724 -164.924 3.12491C-191.745 73.8223 -123.378 416.563 -84.461 503.097L-84.2626 503.538C-45.3885 589.978 0.49324 692 167.445 692C334.682 692 444.781 635.333 526.636 489.523Z"
          fill="green"
        />

        <clipPath id="cp">
          <use href="#thePath" />
        </clipPath>

        <image
          clipPath="url(#cp)"
          href="public/stock/pexels-vlada-karpovich-4050415.jpg"
          width="1000"
          x="-80"
          y="-50"
        />
      </svg>
    </>
  );
}

export default Home;
