import "../../styles/globalstyles.css";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

const API = import.meta.env.VITE_APIURL;

console.log(API);

export function InvoicesPage() {
  const { i18n } = useTranslation();
  console.log({ i18n });

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
            <div className="textgroup">
              <h4>
                <Trans i18nKey="private5">
                  Hier können Sie Ihre Rechnungen als pdf herunterladen:{" "}
                </Trans>
              </h4>
              <div className="row">
                <p className="small">
                  <Trans i18nKey="private6">
                    Sie haben noch keine Rechnungen.{" "}
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (!customer) {
    return <Spinner />;
  }
}

export default InvoicesPage;
