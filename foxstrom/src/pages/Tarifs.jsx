import axios from "axios";
import { useState, useEffect } from "react";
import { Rechner } from "../components/Rechner";
import { useSearchParams } from "react-router-dom";
import { TarifCard } from "../components/TarifCard";

const API = "http://localhost:3000";
//"https://foxstrom.onrender.com";

export function Tarifs() {
  //const [studentPreis, setStudentPreis] = useState();
  const [basepreis, setBasepreis] = useState([]);
  const [fee, setFee] = useState();
  let foxPreis = 0;
  let foxNettPreis = 0;
  let foxTax = 0;
  let foxTarif = [];

  //Postal code range =>returns the network fee "fee". This is added at the end
  //Conssumption group => returns our base price "basepreis".
  //To the base prise we add 20€ for the normal foxtarif
  //we add 10€ for the students tarif.To this we add the network fee and over this amount we add 20% taxes.
  //The result is the monthly price
  const [searchParams] = useSearchParams();
  for (const [key, value] of searchParams) {
    console.log("searchparams: ", searchParams);
    console.log("key: ", key, "value", value);
  }

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${API}/verbrauch`);
      console.log("data: ", response.data); //check if data is correct
      if (!response) {
        console.error("Error fetching consumption details:", error);
      }
    }
    loadData();
  }, []);
  //find the basepreis for the corresponding group
  const group = searchParams.get("group");
  console.log("group on tarifs page: ", group);
  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${API}/verbrauch/${group}`);
      console.log("data: ", response.data);
      //check if data is correct

      setBasepreis(response.data.basepreis);

      if (!response) {
        console.error("Error fetching consumption details:", error);
      }
    }
    loadData();
  }, [searchParams]);
  //Here we have the base price
  console.log("basepreis: ", basepreis);

  //find the fee for the corresponding postalcode range
  const range = searchParams.get("range");
  console.log("range on tarifs page: ", range);
  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${API}/plz/${range}`);
      //check if data is correct
      console.log("response.data", response.data);
      setFee(response.data.fee);
      if (!response) {
        console.error("Error fetching consumption details:", error);
      }
    }

    loadData();
  }, [searchParams]);
  //Here we have the fee
  console.log("data fee: ", fee);

  //Calculating the tariffs:

  foxNettPreis = basepreis + 20 + fee;
  console.log(foxNettPreis);
  foxTax = (foxNettPreis * 20) / 100;
  console.log(foxTax);
  foxPreis = foxNettPreis + foxTax;
  console.log(foxPreis);
  foxTarif = [{ totalPrice: foxPreis, nettPrice: foxNettPreis, tax: foxTax }];
  return (
    <>
      <Rechner />
      <div>
        Here you will see your price {foxPreis}
        <p>NettPreis: {foxNettPreis}</p>
        <p> Taxes:{foxTax}</p>
      </div>
      <TarifCard tarif={foxTarif} />
    </>
  );
}
