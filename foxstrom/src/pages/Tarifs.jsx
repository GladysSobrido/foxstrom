import axios from "axios";
import { useState, useEffect } from "react";
// import { Rechner } from "../components/Rechner";
import { useSearchParams } from "react-router-dom";
import { TarifCard } from "../components/TarifCard";
import { Rech } from "../components/Rech";
import "./Tarifs.css";

const API = import.meta.env.VITE_APIURL;
//"https://foxstrom.onrender.com";

export function Tarifs() {
  //const [studentPreis, setStudentPreis] = useState();
  const [basepreis, setBasepreis] = useState([]);
  const [fee, setFee] = useState();
  let foxPreis = 0;
  let foxNettPreis = 0;
  let foxTax = 0;
  let foxTarif = [];

  let studentPreis = 0;
  let studentNettPreis = 0;
  let studentTax = 0;
  let studentTarif = [];

  let autoPreis = 0;
  let autoNettPreis = 0;
  let autoTax = 0;
  let autoTarif = [];

  //Postal code range =>returns the network fee "fee". This is added at the end
  //Conssumption group => returns our base price "basepreis".
  //To the base prise we add 20€ for the normal foxtarif
  //we add 10€ for the students tarif.
  //we add 5 for the electric auto tarif
  //To this we add the network fee and over this amount we add 20% taxes.
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
        console.error("Error fetching consumption details:");
      }
    }
    loadData();
  }, []);
  //find the basepreis for the corresponding group
  const group = searchParams.get("group");
  console.log("group on tarifs page: ", group);
  useEffect(() => {
    async function loadData() {
      const group = searchParams.get("group");
      const response = await axios.get(`${API}/verbrauch/${group}`);
      console.log("data: ", response.data);
      //check if data is correct

      setBasepreis(response.data.basepreis);

      if (!response) {
        console.error("Error fetching consumption details:");
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
      const range = searchParams.get("range");
      const response = await axios.get(`${API}/plz/${range}`);
      //check if data is correct
      console.log("response.data", response.data);
      setFee(response.data.fee);
      if (!response) {
        console.error("Error fetching consumption details:");
      }
    }

    loadData();
  }, [searchParams]);
  //Here we have the fee
  console.log("data fee: ", fee);

  //Calculating the tariffs:

  //Standard Tarif "FoxTarif"
  foxNettPreis = basepreis + 20 + fee;
  console.log(foxNettPreis);
  foxTax = (foxNettPreis * 20) / 100;
  console.log(foxTax);
  foxPreis = foxNettPreis + foxTax;
  console.log(foxPreis);
  foxTarif = [
    {
      id: "FoxTarif",
      tarifName: "FoxTarif",
      totalPrice: foxPreis,
      nettPrice: foxNettPreis,
      tax: foxTax,
    },
  ];
  //Students Tarif "FoxStudent"
  studentNettPreis = basepreis + 10 + fee;
  studentTax = (studentNettPreis * 20) / 100;
  studentPreis = studentNettPreis + studentTax;
  studentTarif = [
    {
      id: "FoxStudent",
      tarifName: "FoxStudent",
      totalPrice: studentPreis,
      nettPrice: studentNettPreis,
      tax: studentTax,
    },
  ];
  //Auto Tarif "FoxAuto"
  autoNettPreis = basepreis + 10 + fee;
  autoTax = (autoNettPreis * 20) / 100;
  autoPreis = autoNettPreis + autoTax;
  autoTarif = [
    {
      id: "FoxAuto",
      tarifName: "FoxAuto",
      totalPrice: autoPreis,
      nettPrice: autoNettPreis,
      tax: autoTax,
    },
  ];

  return (
    <>
      <header className="tarifsHeader">
        <div className="section3">
          <TarifCard tarif={foxTarif} />
          <TarifCard tarif={studentTarif} />
          <TarifCard tarif={autoTarif} />
        </div>
      </header>
      <div className="bg">
        <div className="section2">
          {/* <Rechner /> */}
          <Rech />
        </div>
      </div>
    </>
  );
}
