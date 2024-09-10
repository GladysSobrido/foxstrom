import { Link } from "react-router-dom";
import "./Footer.css";
export function Footer() {
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
            <Link>Über uns </Link>
            <Link>EnergieWende </Link>
            <Link>Jobs </Link>
          </ul>
        </div>
      </div>
      <div className="foot2">
        <ul className="linksfoot2">
          <Link>Impressum </Link>
          <Link>Datenschut </Link>
          <Link>AGB </Link>
        </ul>
        <div>Copyrigth: Gladys Sobrido 2024</div>
      </div>
    </>
  );
}
