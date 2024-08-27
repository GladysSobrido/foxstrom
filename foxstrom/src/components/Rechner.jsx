import "./Rechner.css";
import { useState } from "react";

export function Rechner({ onSubmitData }) {
  const [plz, setPlz] = useState();
  const [anzahl, setAnzahl] = useState();
  const [verbrauch, setVerbrauch] = useState();

  function handleSubmitData(event) {
    event.preventDefault();
    onSubmitData(plz, anzahl, verbrauch);
  }

  return (
    <>
      <h2>Wirklich Ökostrom berechnen</h2>
      <form
        action="/tarifs"
        onSubmit={(event) => {
          handleSubmitData(event);
        }}
      >
        Lass uns wissen etweder der Anzahl von Personnen im Haushalt oder Ihres
        Jaresverbrauch.
        <label htmlFor="postleitzahl">1. Deine Postleitzahl </label>
        <input
          id="postleitzahl"
          type="number"
          onChange={(event) => {
            setPlz(event.target.value);
          }}
        ></input>
        <div>
          <label htmlFor="personen">Anzahl von personen im Haushalt </label>
          <input
            id="personen"
            type="number"
            onChange={(event) => {
              setAnzahl(event.target.value);
            }}
          ></input>
          <div>
            <label htmlFor="jahresverbrauch">oder Jahresverbrauch in kWh</label>
            <input
              id="jahresverbrauch"
              type="number"
              onChange={(event) => {
                setVerbrauch(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <button type="submit">Preis berechnen</button>
      </form>
    </>
  );
}
