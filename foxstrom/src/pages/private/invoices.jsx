import "../../styles/globalstyles.css";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";

const API = import.meta.env.VITE_APIURL;

console.log(API);

export function InvoicesPage() {
  const { getToken } = useAuth();
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
      } catch (err) {
        console.log(err);
      }
    }
    loadProfile();
  }, []);

  return (
    <>
      <header>
        <div></div>
      </header>
      <div className="section1">
        <div>Here you can see your invoices</div>
      </div>
    </>
  );
}
export default InvoicesPage;
