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
        <Link className="navLinks" to="/listings">
          {" "}
          Restaurants |
        </Link>
        <Link className="navLinks" to="new">
          {" "}
          Add Restaurant
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
