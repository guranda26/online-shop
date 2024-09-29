import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

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
            <Link to={"assignment-3"}>Assignment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
