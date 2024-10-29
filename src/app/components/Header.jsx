import React from "react";
import Link from "next/link";
import "../../styles/LogoutButton.css";
import "../../styles/Header.css";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link href="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link href="/profile">
              <CgProfile className="profile" />
            </Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
