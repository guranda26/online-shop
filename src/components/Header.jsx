import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="nav-items">
            <Link to={"home"}>Home</Link>
          </li>
          <li className="nav-items">
            <Link to={"about"}>About</Link>
          </li>
          <li className="nav-items">
            <Link to={"products"}>Products</Link>
          </li>
          <li className="nav-items">
            <Link to={"contact"}>Contact</Link>
          </li>
          <li className="nav-items">
            <Link to={"assignment-3"}>Assignment</Link>
          </li>
          <li>
            <Link to={"blogs"}>Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
