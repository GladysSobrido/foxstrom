import { useTranslation, Trans } from "react-i18next";
import "./Strom.css";
export function Strom() {
  const { i18n } = useTranslation();
  console.log({ i18n });
  return (
    <>
      <header className="stromHeader"></header>

      <h1>
        <Trans i18nKey="strom1">
          100% Echter Ökostrom aus neu gebauten Anlagen!
        </Trans>
      </h1>
      <div className="section1">
        <div className="part1">
          <img src="/GSL.png" />
        </div>
        <div className="part2">
          <h2>
            <Trans i18nKey="strom2">
              Nicht alle erneuerbaren Energien sind gleich! Ihr Wechsel zu Fair
              Trade Power trägt dazu bei, den Energiemix für ganz Deutschland zu
              verändern!
            </Trans>
          </h2>
          <p>
            <Trans i18nKey="strom3">
              FoxStrom verkaufte in 2020 Strom aus dem österreichischen
              Wasserkraftwerk Altenwörth. Das Kraftwerk wird von der Verbund AG
              betrieben und wurde 1975 in Betrieb genommen. Seit 2021 hat
              FoxStrom Windkraft in seinen Strommix aufgenommen und erhält seit
              2021 dafür Direktlieferungen aus dem hochmodernen Windpark
              Midtfjellet, der erst in den letzten 10 Jahren gebaut wurde.
            </Trans>
          </p>
        </div>
      </div>
    </>
  );
}

export default Strom;
