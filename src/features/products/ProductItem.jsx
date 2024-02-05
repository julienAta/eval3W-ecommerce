import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice"; // Assume this action is defined in cartSlice

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 })); // Simplified, adjust as needed
  };

  return (
    <div className="border p-4 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="font-bold">{product.title}</div>
      <p className="text-sm mb-4">{product.description.substring(0, 100)}...</p>
      <div className="mb-4">Catégorie : {product.category}</div>
      <div className="mb-4">Prix : {product.price} €</div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
