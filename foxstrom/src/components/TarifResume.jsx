import "./TarifCard.css";
import { useTranslation } from "react-i18next";

export function TarifResume({
  tarif,
  totalPrice,
  // nett, tax
}) {
  const { t } = useTranslation();

  console.log("tarif: ", tarif, "totalPrice: ", totalPrice);
  return (
    <div className="cardResume">
      <p className="small">{t("tcard7")}</p>
      <p className="big">{tarif}</p>
      <div className="price">
        <p className="giant">{totalPrice} </p>
        <p className="medium">{t("tcard1")}</p>
      </div>
      <div className="small">
        <p>{t("tcard2")}</p>
        {console.log(tarif, totalPrice)}
        {/* <p>{t("tcard3")}</p>
         <p>
          {t("tcard4")}
          {nett} €
        </p>
        <p>
          {t("tcard5")}
          {tax} {t("tcard5_2")}
        </p> */}
      </div>
    </div>
  );
}
