import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./Footer.css";
export function Footer() {
  const { i18n } = useTranslation();
  console.log({ i18n });
  return (
    <>
      <div className="foot">
        <img className="footerLogo" src="logo_with_text.png"></img>
        <div className="foot1">
          <ul className="pack">
            <li>
              <h3>FoxStrom GmbH</h3>
            </li>
            <li>📍 Inselstraße 1</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp; 10249 Berlin</li>
          </ul>
          <ul className="pack">
            <Link>
              <Trans i18nKey="footer1">Über uns </Trans>
            </Link>
            <Link>
              <Trans i18nKey="footer2">EnergieWende </Trans>
            </Link>
            <Link>
              <Trans i18nKey="footer3">Jobs </Trans>
            </Link>
          </ul>
        </div>
      </div>
      <div className="foot2">
        <ul className="linksfoot2">
          <Link>
            <Trans i18nKey="footer4">Impressum </Trans>
          </Link>
          <Link>
            <Trans i18nKey="footer5">Datenschutz</Trans>{" "}
          </Link>
          <Link>
            <Trans i18nKey="footer6">AGB </Trans>
          </Link>
        </ul>
        <div>
          <Trans i18nKey="footer7">Copyrigth: Gladys Sobrido 2024</Trans>
        </div>
      </div>
    </>
  );
}
