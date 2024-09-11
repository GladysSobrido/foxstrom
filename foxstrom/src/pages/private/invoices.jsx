import "../../styles/globalstyles.css";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

const API = import.meta.env.VITE_APIURL;

console.log(API);

export function InvoicesPage() {
  const { getToken } = useAuth();
  async function handleSaveTarif() {
    try {
      const token = await getToken();
      await axios.post(
        `${API}/customers`,
        { tarif: "FoxStudent" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <header>
        <div></div>
      </header>
      <div className="section1">
        <div>Here you can see your invoices</div>
      </div>
      <button onClick={handleSaveTarif}>Save tarifs</button>
    </>
  );
}
export default InvoicesPage;
