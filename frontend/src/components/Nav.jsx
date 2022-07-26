import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <img className="navImg" src={Logo} />
      <div>
        <Link className="navLinks" to="/">
          Home |
        </Link>
        <Link className="navLinks" to="/restaurants">
          {" "}
          Restaurants |
        </Link>
        <Link className="navLinks" to="/restaurants/new">
          {" "}
          Add Restaurant
        </Link>
        <Link className="navLinks" to="/reviews">
          {" "}
          | Reviews{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
