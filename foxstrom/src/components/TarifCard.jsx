import "./TarifCard.css";
export function TarifCard({ tarif }) {
  // const tarifName = "FoxTarif";
  const [element] = tarif;
  // const totalPrice = 170.4;

  console.log("tarif: ", { tarif });

  return (
    <div className="card">
      <p className="small">Dein Tarif:</p>
      <p className="big">{element.tarifName}</p>
      <div className="price">
        <p className="giant">{element.totalPrice} </p>
        <p className="medium">€/Month</p>
      </div>
      <div className="small">
        <p>Including:</p>
        <p>Base Price:{element.nettPrice} €</p>
        <p>Taxes (20%): {element.tax} €</p>
      </div>
      <div>10% online vorteil</div>
    </div>
  );
}
