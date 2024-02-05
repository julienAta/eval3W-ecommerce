import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

import { toggleDarkMode } from "../features/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-blue-500 dark:bg-blue-800 text-white p-4 ${
        isMenuOpen ? "min-h-screen fixed w-full top-0" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-balance">
          <a href="/" onClick={closeMenu}>
            Ma boutique E-commerce
          </a>
        </h1>
        <nav className={`md:flex ${isMenuOpen ? "" : "hidden"}`}>
          <ul
            className={`flex items-center gap-6 ${
              isMenuOpen
                ? "flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                : ""
            }`}
          >
            <li>
              <Link to="/" className="hover:text-blue-300" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-blue-300"
                onClick={closeMenu}
              >
                Panier ({totalQuantity})
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className="hover:text-blue-300"
                onClick={closeMenu}
              >
                Profil
              </Link>
            </li>
            <li>
              <ThemeSwitcher onClick={closeMenu} />
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
