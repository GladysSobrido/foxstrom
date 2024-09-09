import { useTranslation, Trans } from "react-i18next";
import "./Ladestationen.css";
export function Ladestationen() {
  const { i18n } = useTranslation();
  console.log({ i18n });
  return (
    <>
      <header className="ladeHeader"></header>
      <h1>
        <Trans i18nKey="lade1">Ladestationen für Elektroautos</Trans>
      </h1>
      <div className="section1">
        <div className="part1">
          <h3>
            <Trans i18nKey="lade2">
              Haushaltsstromverbrauch ganz schön in die Höhe. Damit dasselbe
              nicht mit den Kosten passiert, ist der Tarif ÖkoStrom E-Auto
              optimal für alle, die ihr E-Auto zuhause laden wollen. Zudem ladet
              ihr klimaneutral mit 100 % ÖkoStrom.{" "}
            </Trans>
          </h3>
          <p>
            <Trans i18nKey="lade3">
              Ach ja, Elektroauto und Mietwohnung? Passt auch! Der Tarif ist
              nicht nur für Eigenheime gedacht. Und wenn ihr doch mal unterwegs
              laden wollt: mit E-Auto Unterwegs findet ihr nicht nur schnell die
              nächste öffentliche Ladesäule, ihr könnt auch zum günstigsten
              Fixpreis an ihr laden. Beziehungsweise an über 440.000
              öffentlichen Ladepunkten europaweit.
            </Trans>
          </p>
        </div>
      </div>
    </>
  );
}
