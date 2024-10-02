import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link to={"home"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"about"}>About</Link>
          </li>
          <li className="nav-item">
            <Link to={"products"}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to={"contact"}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to={"assignment-3"}>Assignment</Link>
          </li>
          <li className="nav-item">
            <Link to={"blogs"}>Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to={"profile"}>
              <CgProfile className="profile" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
