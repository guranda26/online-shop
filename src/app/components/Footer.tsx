import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white font-semibold py-4">
      <nav>
        <ul className="flex flex-wrap justify-around items-center text-center max-w-4xl mx-auto space-y-2 md:space-y-0 md:flex-row">
          <li className="w-full md:w-auto">
            <p>&copy; Copyright 2024. Ourcompany.com</p>
          </li>
          <li className="w-full md:w-auto">
            <a
              href="#privacy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
