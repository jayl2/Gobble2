import React from "react";
import Logo from "../images/logo.png";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="logoHeader">
      <div>
        <h2 className="gobble">
          "If you can't feed a hundred people, then feed just one."{" "}
        </h2>
        <p className="quoteAuthor">... M. Teresa</p>
      </div>
    </header>
  );
};

export default Header;
