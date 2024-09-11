import "./Rech.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Chakra form control
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  //FormHelperText,
  Input,
  Button,
  Flex,
  //Stack,
} from "@chakra-ui/react";

export function Rech() {
  const [plz, setPlz] = useState();
  const [anzahl, setAnzahl] = useState();
  const [verbrauch, setVerbrauch] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      <div className="rechnercontainer">
        <h2>{t("rech1")}</h2>
        {/* Lass uns wissen etweder der Anzahl von Personnen im Haushalt oder Ihres
        Jahres Verbrauch. */}
        <div className="rechnerinhalt">
          <Flex className="rechnerinputs">
            <FormControl mr="5%" action="/tarifs">
              <FormLabel htmlFor="postleitzahl">Postleitzahl</FormLabel>
              <Input
                size="xs"
                id="postleitzahl"
                placeholder="12345"
                type="number"
                onChange={(event) => {
                  setPlz(event.target.value);
                }}
                fontWeight={"normal"}
              />
            </FormControl>
            <FormControl mr="5%" action="/tarifs">
              <FormLabel htmlFor="personen">Personen im Haushalt </FormLabel>
              <Input
                size="xs"
                id="personen"
                type="number"
                onChange={(event) => {
                  setAnzahl(event.target.value);
                }}
              ></Input>

              <FormLabel htmlFor="jahresverbrauch">
                Jahresverbrauch (kWh)
              </FormLabel>
              <Input
                size="xs"
                id="jahresverbrauch"
                type="number"
                onChange={(event) => {
                  setVerbrauch(event.target.value);
                }}
              ></Input>
            </FormControl>
          </Flex>
          <Button
            className="buttonRechner"
            type="submit"
            onClick={(event) => {
              submitData(event);
            }}
          >
            Preis berechnen
          </Button>
        </div>
        {message}
      </div>
    </>
  );
}
