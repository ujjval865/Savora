import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function FoodCard({ item }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div className="bg-orange-50/40 px-6 pb-6">
      <div className="container mx-auto flex max-w-7xl justify-end">
        <div className="group w-full overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="relative overflow-hidden">
            <img
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
            />

            {item.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md">
                {item.badge}
              </span>
            )}
          </div>

          <div className="p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                {item.name}
              </h3>

              <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                {item.category}
              </span>
            </div>

            <div className="mb-5 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                ₹{item.price}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-gray-700">
                <i className="fa-solid fa-star text-yellow-400"></i>
                {item.rating}
              </span>
            </div>

            <div className="flex justify-center gap-3">
              <Link to={`/menu/${item.id}`}>
                <button className="rounded-full bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-sm font-medium leading-5 text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-pink-200">
                  View Details
                </button>
              </Link>

              <button
                onClick={() => {
                  addToCart(item);
                  setIsAdded(true);
                  setTimeout(() => setIsAdded(false), 2000);
                }}
                className="rounded-full border border-orange-400 bg-white px-5 py-2.5 text-sm font-medium leading-5 text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-100"
              >
                {isAdded ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
