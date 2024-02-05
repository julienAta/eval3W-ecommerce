import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Calculate total price
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
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Votre panier</h2>
      <ul>
        {Object.values(cartItems).map((item) => (
          <li key={item.id} className="mb-6 flex gap-4 items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="border rounded w-16 text-center"
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <div className="text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <button
          onClick={handleClearCart}
          className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
