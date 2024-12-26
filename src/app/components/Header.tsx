import React, { useState } from "react";
import Link from "next/link";
import "../../styles/LogoutButton.css";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import LogoutButton from "./LogoutButton";
import ThemeButton from "./ThemeButton";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";
import { IoStorefront } from "react-icons/io5";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#5d5d8f] max-h-[10vh] w-full">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/profile">
          <CgProfile className="w-6 h-6 text-white mx-auto md:mx-0" />
        </Link>
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[10vh] left-0 w-full bg-[#5d5d8f] md:static md:flex md:justify-evenly md:items-center md:bg-transparent`}
        >
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/home"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              {t("header:home")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/about"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              {t("common:about-us")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/products"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              {t("header:products")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/posts"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              {t("header:posts")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/pricing"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              {t("header:pricing")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/cart"
              className="text-white text-lg font-bold px-2 py-2 block hover:text-[#dfc7e7]"
            >
              Cart
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/store"
              className="text-white text-lg px-2 py-2 block flex justify-center hover:text-[#dfc7e7]"
            >
              <IoStorefront className="w-6 h-6 text-white" />
            </Link>
          </li>
          <li className="text-center flex justify-center md:flex-col text-white">
            <LogoutButton />
          </li>
          <li className="text-center flex justify-center md:justify-normal">
            <ThemeButton />
          </li>
          <li className="text-center md:flex md:flex-col">
            <ToggleLanguage />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
