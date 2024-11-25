import React from "react";
import Link from "next/link";
import "../../styles/LogoutButton.css";
import "../../styles/Header.css";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./LogoutButton";
import ThemeButton from "./ThemeButton";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link href="/home">{t("header:home")}</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">{t("common:about-us")}</Link>
          </li>
          <li className="nav-item">
            <Link href="/products">{t("header:products")}</Link>
          </li>
          <li className="nav-item">
            <Link href="/posts">{t("header:posts")}</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">{t("header:contact")}</Link>
          </li>
          <li className="nav-item">
            <Link href="/profile">
              <CgProfile className="profile" />
            </Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
          <li className="nav-item">
            <ThemeButton />
          </li>
          <li className="nav-item">
            <ToggleLanguage />{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
