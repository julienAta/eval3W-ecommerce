import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./features/products/ProductsList";
import CartPage from "./features/cart/CartPage";
import UserPage from "./features/user/UserPage";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
