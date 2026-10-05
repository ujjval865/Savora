import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-screen bg-gray-50 px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Cart
          </h1>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="w-fit cursor-pointer rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 text-center shadow-sm">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              🛒
            </div>

            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mb-6 max-w-md text-gray-500">
              Looks like you haven't added anything to your cart yet.
              Explore our menu and find something delicious!
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="cursor-pointer rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:bg-orange-600 hover:shadow-md"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Food Image */}
                <div className="h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-36">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Food Information */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                    {item.category}
                  </span>

                  {/* Quantity */}
                  <div className="mt-4 flex w-fit items-center overflow-hidden rounded-full border border-gray-200">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="cursor-pointer px-3 py-1.5 text-lg font-semibold text-gray-600 transition hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="min-w-10 text-center text-sm font-semibold text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item)}
                      className="cursor-pointer px-3 py-1.5 text-lg font-semibold text-gray-600 transition hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="sm:text-right">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="mt-1 text-2xl font-bold text-orange-600">
                    ₹{item.price}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-fit cursor-pointer rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                >
                  Remove
                </button>

                {/* Total Price */}
                <div className="border-t border-gray-100 pt-4 sm:border-t-0 sm:pt-0 sm:text-right">
                  <p className="text-sm text-gray-500">Total Price</p>
                  <p className="mt-1 text-2xl font-bold text-orange-600">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;