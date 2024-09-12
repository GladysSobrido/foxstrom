// import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import "../../styles/globalstyles.css";
import "./private.css";
import { TarifResume } from "../../components/TarifResume";

import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_APIURL;

export function PrivatePage() {
  const { getToken } = useAuth();
  const [customer, setCustomer] = useState();
  useEffect(() => {
    async function loadProfile() {
      try {
        const token = await getToken();
        const response = await axios.get(`${API}/customers/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setCustomer(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadProfile();
  }, []);
  if (customer) {
    return (
      <>
        <header className="personalHeader"></header>
        <h3>{customer ? `Willkommen, ${customer.vorname} ` : <Spinner />}</h3>
        {console.log({ customer })}
        <div className="section1">
          <div className="part1">
            <TarifResume tarif={customer.tarif} price={customer.price} />
          </div>
          <div className="part2">
            <div className="textgroup">
              <h4>Ihre Persönliche daten:</h4>
              <div className="row">
                <h5>Name: </h5>
                <p className="small">
                  {customer.vorname} {customer.nachname}
                </p>
              </div>
              <div className="row">
                <h5>Adresse: </h5>
                <p className="small">
                  {customer.strasse} {customer.hausnummer},
                </p>
              </div>
              <div className="row">
                <h5>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </h5>
                <p className="small">
                  {customer.postleitzahl} {customer.ort}
                </p>
              </div>
            </div>
          </div>

          {/* <Link to={"./invoices"}>See your invoices here</Link> */}
        </div>
      </>
    );
  }
  if (!customer) {
    return <Spinner />;
  }
}
export default PrivatePage;
