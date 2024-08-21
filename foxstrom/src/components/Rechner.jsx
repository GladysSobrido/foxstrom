import "./Rechner.css";
export function Rechner() {
  return (
    <>
      <h2>Wirklich Ökostrom berechnen</h2>
      <form action="/tarifs?">
        <label htmlFor="postleitzahl">1. Deine Postleitzahl </label>
        <input id="postleitzahl" type="number"></input>
        <label htmlFor="personen">Anzahl von personen im Haushalt</label>
        <input id="personen" type="number"></input>
        <label htmlFor="jahresverbrauch">Jahresverbrauch in kWh</label>
        <input id="jahresverbrauch" type="number"></input>
        <button type="submit">Preis berechnen</button>
      </form>
    </>
  );
}
