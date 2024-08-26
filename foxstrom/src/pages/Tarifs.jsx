export function Tarifs(verbrauch, anzahl, plz) {
  let group = undefined;
  let range = undefined;
  let message = undefined;
  //Calculating the category of consumption
  if (verbrauch < 1400 || anzahl == 1) {
    group = 1;
  } else if ((verbrauch >= 1400 && verbrauch < 2300) || anzahl == 2) {
    group = 2;
  } else if ((verbrauch >= 2300 && verbrauch < 3000) || anzahl == 3) {
    group = 3;
  } else if ((verbrauch >= 3000 && verbrauch < 3700) || anzahl == 4) {
    group = 4;
  } else if (verbrauch >= 3700 || anzahl >= 5) {
    group = 5;
  }
  //Calculating the postal code range
  if (plz > 1001 && plz > 40547) {
    range = 1;
  } else if (plz >= 40547 && plz < 95999) {
    range = 2;
  } else {
    message = "The number introduced is not a valid german postal code";
  }

  return (
    <>
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
