import HubspotContactForm from "./HubspotContactForm";
import { useTranslation, Trans } from "react-i18next";
import "./Kontakt.css";
export function Kontakt() {
  const { i18n } = useTranslation();
  console.log({ i18n });
  return (
    <>
      <header className="kontaktHeader">
        <div className="headerText">
          <h1>
            <Trans i18nKey="kontakt1">Kontaktieren Sie uns</Trans>
          </h1>
          <h3>
            <Trans i18nKey="kontakt2">
              Schreiben sie uns ein Nachricht und wir werden wie schnell wie
              möglich beantworten.
            </Trans>
          </h3>
        </div>
      </header>
      <main className="kontakt">
        <HubspotContactForm />
      </main>
    </>
  );
}
export default Kontakt;
