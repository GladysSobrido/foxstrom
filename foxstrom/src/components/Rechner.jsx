import "./Rechner.css";
import { useState } from "react";
import axios from "axios";
export function Rechner() {
  const API = "https://foxstrom.onrender.com";

  async function handleLoadData() {
    const response = await axios.get(API);
    console.log(response.data);
  }

  let [verbrauch, setVerbrauch] = useState();
  let [plz, setPlz] = useState();
  let [anzahl, setAnzahl] = useState();

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <h2>Wirklich Ökostrom berechnen</h2>
      <form
        action="/tarifs?"
        onSubmit={(event) => {
          handleSubmit(event);
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
        <button type="submit" onClick={() => handleLoadData}>
          Preis berechnen
        </button>
      </form>
    </>
  );
}
