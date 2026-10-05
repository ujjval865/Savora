import React from "react";
import { foodItems } from "../data/restaurantData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
const FeaturedDishes = () => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(null);
  return (
    <section className="bg-orange-50/40 px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our <span className="text-orange-500">Popular Dishes</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover Savora’s most-loved dishes, freshly prepared with delicious
            flavors and quality ingredients. Find your favorites and enjoy every
            bite!
          </p>
        </div>

        {/* Featured Food Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foodItems
            .filter((item) => item.isFeatured)
            .map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Food Image */}
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

                {/* Food Details */}
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                      {item.category}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{item.price}
                    </span>

                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>
                  {/* Rating */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-semibold text-gray-800 mb-2">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <span>{item.rating}</span>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/menu/${item.id}`}
                      className="flex-1 rounded-full border border-orange-500 px-4 py-3 text-center text-sm font-semibold text-orange-600 transition duration-300 hover:bg-orange-50"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => {
                        addToCart(item);
                        setIsAdded(item.id);
                        setTimeout(() => setIsAdded(null), 2000);
                      }}
                      className="flex-1 rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 hover:cursor-pointer"
                    >
                      {isAdded === item.id ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
