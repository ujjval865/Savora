import React from "react";
import { foodItems } from "../data/restaurantData";
import { useParams } from "react-router-dom";
function FoodDetails() {
  const { id } = useParams();

  const item = foodItems.find((food) => String(food.id) === id);
  if (!item) {
    return <p className="py-20 text-center">Food item not found.</p>;
  }
  return (
    <div className="min-h-screen bg-orange-50/40 px-5 py-10 sm:px-8 md:py-14">
      <div className="container mx-auto max-w-6xl">
        {/* Food Image */}
        <div className="group relative mb-8 overflow-hidden rounded-2xl">
          <img
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80 md:h-[420px]"
            src={item.image}
            alt={item.name}
          />

          {item.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 group-hover:bg-orange-600">
              {item.badge}
            </span>
          )}
        </div>
        {/* Food Information */}
        <div className="border-b border-orange-100 pb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-orange-500">
                {item.category}
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                {item.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="font-bold text-gray-900">{item.rating}</span>
              <span className="text-sm text-gray-500">
                ({item.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ₹{item.price}
            </span>

            {item.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{item.originalPrice}
              </span>
            )}

            <span className="flex items-center gap-2 text-sm text-gray-500">
              <i className="fa-regular fa-clock text-orange-500"></i>
              {item.preparationTime}
            </span>
          </div>
        </div>

        {/* Sizes and Ingredients */}
        <div className="grid gap-10 border-b border-orange-100 py-8 sm:grid-cols-2">
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Available Sizes
            </h2>

            <div className="flex flex-wrap gap-3">
              {item.sizes.map((size, index) => (
                <span
                  key={index}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                >
                  <span>{size.name}</span>
                  <span className="font-semibold text-orange-500">
                    ₹{size.price}
                  </span>
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Ingredients
            </h2>

            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="rounded-full bg-orange-100/70 px-4 py-2 text-sm text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-200 hover:text-orange-700"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8">
          <button className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-orange-200">
            <i className="fa-solid fa-cart-plus mr-2"></i>
            Add to Cart
          </button>

          <button
            onClick={() => window.history.back()}
            className="rounded-full border border-orange-300 bg-white px-8 py-3 font-semibold text-orange-600 transition duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-md active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
