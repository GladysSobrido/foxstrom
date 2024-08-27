//import axios from "axios";
import { useState } from "react";
import { Rechner } from "../components/Rechner";
export function Tarifs() {
  const [group, setGroup] = useState();
  const [range, setRange] = useState();
  const [message, setMessage] = useState();

  //const API = "https://foxstrom.onrender.com";

  //Calculating the category of consumption
  function handleChangeVerbrauch(anzahl, verbrauch) {
    if (verbrauch < 1400 || anzahl == 1) {
      setGroup(1);
    } else if ((verbrauch >= 1400 && verbrauch < 2300) || anzahl == 2) {
      setGroup(2);
    } else if ((verbrauch >= 2300 && verbrauch < 3000) || anzahl == 3) {
      setGroup(3);
    } else if ((verbrauch >= 3000 && verbrauch < 3700) || anzahl == 4) {
      setGroup(4);
    } else if (verbrauch >= 3700 || anzahl >= 5) {
      setGroup(5);
    }
  }
  //Calculating the postal code range
  function handleChangePlz(plz) {
    if (plz > 1001 && plz > 40547) {
      setRange(1);
    } else if (plz >= 40547 && plz < 95999) {
      setRange(2);
    } else {
      setMessage("The number introduced is not a valid german postal code");
    }
  }

  return (
    <>
      <Rechner
        onSubmitData={(verbrauch, anzahl, plz) => {
          setMessage("");
          handleChangeVerbrauch(verbrauch, anzahl);
          handleChangePlz(plz);
        }}
      />
      <div>
        <h1>Fox Tarif:</h1>
        <p>
          You are in consumption group:
          {group}
        </p>
        <p>You are in postal-code range: {range}</p>
        <p>{message}</p>
      </div>
    </>
  );
}
