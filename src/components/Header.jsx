// src/components/Header.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import ThemeSwitcher from "./components/ThemeSwitcher";

import { toggleDarkMode } from "../features/theme/themeSlice"; // Adjust the import path as needed

const Header = () => {
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  // Access the total quantity of items in the cart from the Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  //   const darkMode = useSelector((state) => state.theme.darkMode); // Ensure this matches your theme slice state structure

  return (
    <header className="bg-blue-500 dark:bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My E-Commerce Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-300">
                Panier ({totalQuantity})
              </Link>
            </li>
            <li>
              <Link to="/user" className="hover:text-blue-300">
                Profile
              </Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
        <button
          className="bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300 transition-colors"
          onClick={handleToggleDarkMode}
        >
          {/* {darkMode ? "Light Mode" : "Dark Mode"} */}
        </button>
      </div>
    </header>
  );
};

export default Header;
