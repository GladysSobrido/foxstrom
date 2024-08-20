import "./NavBar.css";

import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <img src="src/assets/logo_with_text.png"></img>
        <div>
          <ul className="menu">
            <NavLink to={"/Strom"}>STROM</NavLink>
            <NavLink to={"/Solaranlage"}>SOLARANLAGE</NavLink>
            <NavLink to={"/Ladestationen"}>LADESTATIONEN</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
