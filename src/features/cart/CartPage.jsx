import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalPrice = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (totalQuantity === 0) {
    return <div className="text-center mt-10">Votre panier est vide</div>;
  }

  return (
    <div className="container mx-auto mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(cartItems).map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover rounded mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">
                {item.price.toFixed(2)}€
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              Quantité :
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="border rounded w-16 text-center dark:text-black"
                onChange={(e) =>
                  handleUpdateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-700 transition-colors"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <div className="col-span-2 p-4 md:col-span-1 lg:col-span-3">
        <div className="text-xl font-semibold mb-4">
          Total : {totalPrice.toFixed(2)}€
        </div>
        <button
          onClick={handleClearCart}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition-colors"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}
