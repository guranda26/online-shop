import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/LogoutButton.css";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import LogoutButton from "./LogoutButton";
import ThemeButton from "./ThemeButton";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "./ToggleLanguage";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

interface CartItem {
  id: number;
  created_at: string;
  product_id: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  products?: "";
}

const Header = () => {
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    const getCartLength = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        {
          cache: "no-store",
        }
      );
      const cart: CartItem[] = await response.json();

      setCartLength(cart.length);
      console.log("this", cart, "sa");
    };

    getCartLength();
  }, []);

  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#5d5d8f] max-h-[10vh] w-full">
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>
      <nav>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[10vh] left-0 w-full bg-[#5d5d8f] md:static md:flex md:justify-evenly md:items-center md:bg-transparent`}
        >
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/home"
              className="text-white text-lg font-bold px-2 block hover:text-[#dfc7e7]"
            >
              {t("header:home")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/about"
              className="text-white text-lg font-bold px-2 block hover:text-[#dfc7e7]"
            >
              {t("common:about-us")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/products"
              className="text-white text-lg font-bold px-2 block hover:text-[#dfc7e7]"
              data-cy="product-url"
            >
              {t("header:products")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/posts"
              className="text-white text-lg font-bold px-2 block hover:text-[#dfc7e7]"
              data-cy="post-url"
            >
              {t("header:posts")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/pricing"
              className="text-white text-lg font-bold px-2 block hover:text-[#dfc7e7]"
            >
              {t("header:pricing")}
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/cart"
              className="text-white text-lg flex justify-center font-bold px-2 items-end hover:text-[#dfc7e7]"
              data-cy="cart-url"
            >
              <MdOutlineLocalGroceryStore className="w-6 h-6 text-white" />
              <span className="text-center flex items-center justify-center text-[12px] font-medium ml-2 w-[18px] h-[18px] bg-red-500 rounded-full">
                {cartLength}
              </span>
            </Link>
          </li>
          <li className="text-center md:flex md:flex-col">
            <Link
              href="/store"
              className="text-white text-lg px-2 flex justify-center hover:text-[#dfc7e7]"
              data-cy="store-url"
            >
              <IoStorefront className="w-6 h-6 text-white hover:text-[#dfc7e7]" />
            </Link>
          </li>
          <div className="relative group" data-cy="profile-icon">
            <div className="flex items-center cursor-pointer">
              <CgProfile className="w-6 h-6 text-white mx-auto md:mx-0 hover:text-[#dfc7e7]" />
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 pt-2 hidden w-48 bg-white shadow-lg rounded-md py-2 z-50 group-hover:block"
              data-cy="profile-block"
            >
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/orders"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                data-cy="order-checkout-url"
              >
                Orders
              </Link>
            </div>
          </div>
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
