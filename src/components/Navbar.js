import { NavLink } from "react-router-dom";

export const Navbar = function () {
  return (
    <div>
      <nav>
        <h1 className="MyKStar">My K Star</h1>
        <NavLink to={"/"} className={"Links"}>
          {" "}
          Home{" "}
        </NavLink>
        {/* <Link to={"/login"} className={"Links"}>
          {" "}
          Login{" "}
        </Link> */}
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
        <NavLink to={"/logout"} className={"Links"}>
          {" "}
          Logout{" "}
        </NavLink>
      </nav>
    </div>
  );
};
