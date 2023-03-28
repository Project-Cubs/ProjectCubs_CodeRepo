import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = function () {
  return (
    <div>
      <nav>
        <h1>My K Star</h1>
        <NavLink to={"/"} className={"Links"}>
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to={"/dashboard"} className={"Links"}>
          {" "}
          Dashboard{" "}
        </NavLink>
        <NavLink to={"/dictionary"} className={"Links"}>
          {" "}
          Dictionary{" "}
        </NavLink>
        <NavLink to={"/learn"} className={"Links"}>
          {" "}
          Learn{" "}
        </NavLink>
        <button onClick={function () {
          localStorage.removeItem("user");
          window.location.reload();
        }}>Logout</button>
      </nav>
      <hr className="navbar-divider" />
    </div>
  );
};
