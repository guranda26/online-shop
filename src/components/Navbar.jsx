import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="nav-items">
            <Link to={"home"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"products"}>Products</Link>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
