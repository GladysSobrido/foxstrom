import "./Rechner.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Rechner() {
  const [plz, setPlz] = useState();
  const [anzahl, setAnzahl] = useState();
  const [verbrauch, setVerbrauch] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();
    setMessage("");
    const group = calculateGroup(verbrauch, anzahl);
    const range = calculateRange(plz);
    console.log(group, range);
    if (range == -1 || group == -1) {
      setMessage("The number introduced is not valid");
    } else {
      navigate(`/tarifs?group=${group}&range=${range}`);
    }
  }
  //Calculating the category of consumption
  function calculateGroup(verbrauch, anzahl) {
    const numVer = Number(verbrauch);
    const numAnzahl = Number(anzahl);
    if (verbrauch) {
      if (numVer < 1400) {
        return 1;
      } else if (numVer >= 1400 && numVer < 2300) {
        return 2;
      } else if (numVer >= 2300 && numVer < 3000) {
        return 3;
      } else if (numVer >= 3000 && numVer < 3700) {
        return 4;
      } else if (numVer >= 3700) {
        return 5;
      } else {
        return -1;
      }
    } else if (anzahl) {
      if (anzahl == 1) {
        return 1;
      } else if (numAnzahl == 2) {
        return 2;
      } else if (numAnzahl == 3) {
        return 3;
      } else if (numAnzahl == 4) {
        return 4;
      } else if (numAnzahl >= 5) {
        return 5;
      }
    } else {
      return -1;
    }
  }
  //Calculating the postal code range
  function calculateRange(plz) {
    const numPlz = Number(plz);
    if (numPlz > 1001 && numPlz < 40547) {
      return 1;
    } else if (numPlz >= 40547 && numPlz < 95999) {
      return 2;
    } else {
      return -1;
      //setMessage("The number introduced is not a valid german postal code");
    }
  }
  return (
    <>
      <h2>Wirklich Ökostrom berechnen</h2>
      <form
        action="/tarifs"
        onSubmit={(event) => {
          submitData(event);
        }}
      >
        Lass uns wissen etweder der Anzahl von Personnen im Haushalt oder Ihres
        Jahres Verbrauch.
        <div className="inputFields">
          <div>
            <label htmlFor="postleitzahl">1. Deine Postleitzahl </label>
            <input
              id="postleitzahl"
              type="number"
              onChange={(event) => {
                setPlz(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="personen">
              2. Anzahl von personen im Haushalt{" "}
            </label>
            <input
              id="personen"
              type="number"
              onChange={(event) => {
                setAnzahl(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="jahresverbrauch">
              oder Jahresverbrauch in kWh{" "}
            </label>
            <input
              id="jahresverbrauch"
              type="number"
              onChange={(event) => {
                setVerbrauch(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <button className="buttonRechner" type="submit">
          Preis berechnen
        </button>
        {message}
      </form>
    </>
  );
}
