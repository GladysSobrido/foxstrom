import "./TarifCard.css";
export function TarifCard({ tarif }) {
  const tarifName = "FoxTarif";
  const [element] = tarif;
  // const totalPrice = 170.4;
  // const nettPrice = 142;
  // const Tax = 28.4;
  console.log("tarif: ", { tarif });
  // console.log("nettPrice: ", { nettPrice });
  return (
    <div className="card">
      <h2>{tarifName}</h2>
      <h2>{element.totalPrice} €/Month</h2>
      <div className="including">
        <p>Including:</p>
        <p>Base Price: {element.nettPrice} €</p>
        <p>Taxes (20%): {element.tax} €</p>
      </div>
    </div>
  );
}
