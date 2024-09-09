import "./Solaranlage.css";
import "./Home.css";
export function Solaranlage() {
  return (
    <>
      <header className="solarHeader">
        <div className="greybar"></div>
      </header>
      <div className="section1">
        <p className="title1">Solaranlage</p>

        <div className="part1">
          <h2>
            Stromkosten um bis zu 89 % senken: dank SolarAnlage mit Speicher.
          </h2>
          <p>
            Eine SolarAnlage mit Speicher und smarten Energieservices
            ermöglichen es euch, Ökostrom aus eurer eigenen PV-Anlage auch dann
            zu nutzen, wenn die Sonne mal nicht scheint. Frühmorgens, abends und
            nachts versorgt ihr so eure Elektrogeräte, eine strombetriebene
            Heizung oder die WallBox für euer E-Auto mit selbsterzeugtem
            Solarstrom. So könnt ihr eure Stromkosten um bis zu 89 % senken.
            Zudem entlastet ihr nicht nur euren Geldbeutel, sondern auch das
            Klima: Mithilfe einer Photovoltaikanlage mit Speicher erzeugt, nutzt
            und speichert ihr euren Strom direkt vor Ort – ein Transport von
            dezentral erzeugtem Strom über weite Strecken entfällt.{" "}
          </p>
        </div>
        <div className="part2">
          <img src="public/stock/solar-panels-6940440_640.jpg"></img>
        </div>
      </div>
      <div className="section1">
        <div className="part1">
          <img src="public/stock/389_focus_img.JPG"></img>
        </div>
        <div className="part2">
          <h2>Wie viel kostet eine SolarAnlage mit Speicher?</h2>
          <p>
            Wie viel ihr für eure Photovoltaikanlage mit Speicher bezahlt, kommt
            unter anderem auf die Größe der Anlage an. Diese hängt wiederum von
            eurer nutzbaren Dachfläche und eurem Strombedarf ab. Die meisten
            Einfamilienhäuser haben im Durchschnitt eine nutzbare Dachfläche von
            bis zu 60 m². Auf dieser Fläche wird in der Regel eine
            Photovoltaikanlage errichtet, die etwa zwischen 4 und 10 kWp
            produziert. Die Kosten für solch eine SolarAnlage mit Stromspeicher
            liegen bei ca. 11.500 bis 30.300 €. Wann sich eure
            Photovoltaikanlage amortisiert, hängt von verschiedenen Faktoren ab.
            Bei einer typischen Anlage mit 8 kWp inklusive Stromspeicher solltet
            ihr zum Beispiel mit rund 16 Jahren rechnen. Ab dann produziert ihr
            quasi kostenlos Solarstrom.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
