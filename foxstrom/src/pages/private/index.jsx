import { Link } from "react-router-dom";
import "../../styles/globalstyles.css";
export function PrivatePage() {
  return (
    <>
      <header>
        <div></div>
      </header>
      <div className="section1">
        <div>This is the page for registered users</div>
        <Link to={"./invoices"}>See your invoices here</Link>
      </div>
    </>
  );
}
export default PrivatePage;
