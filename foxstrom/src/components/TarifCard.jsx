import "./TarifCard.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

export function TarifCard({ tarif }) {
  const { t } = useTranslation();

  const [element] = tarif;
  console.log("tarif: ", { tarif });
  return (
    <div className="card">
      {/* <p className="small">Dein Tarif:</p> */}
      <p className="big">{!element ? <Spinner /> : `${element.tarifName}`}</p>
      <div className="price">
        <p className="giant">
          {element.totalprize ? <Spinner /> : `${element.totalPrice}`}
        </p>
        <p className="medium">{t("tcard1")}</p>
      </div>
      <div className="small">
        <p>{t("tcard2")}</p>
        <p>{t("tcard3")}</p>
        <p>
          {t("tcard4")}
          {!element ? <Spinner /> : `${element.nettPrice}`}€
        </p>
        <p>
          {t("tcard5")}
          {!element ? <Spinner /> : `${element.tax}`}
          {t("tcard5_2")}
        </p>
      </div>
      <Link
        to={`/register?tarif=${element.id}&price=${element.totalPrice}&nett=${element.nettPrice}&tax=${element.tax}`}
      >
        <button className="registerButton" type="submit">
          {t("tcard6")}
        </button>
      </Link>
    </div>
  );
}
