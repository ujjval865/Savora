
import React from "react";
import { categories } from "../data/restaurantData";
import { Link } from "react-router-dom";

const FoodCategories = () => {
  return (
    <section className="bg-orange-50/40 px-6 py-16 md:py-18">
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold tracking-wide text-orange-600">
            Taste Something Amazing
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our{" "}
            <span className="text-orange-500">Menu</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore our delicious food categories, from flavorful starters to
            mouthwatering main courses and sweet desserts. Find your favorites
            and satisfy every craving with Savora!
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {categories.map((category) => (
            <Link
              to="/menu"
              key={category.id}
              className="group"
            >
              <div className="flex h-full min-h-44 flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl sm:min-h-52 sm:p-6">

                {/* Category Icon */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-100 sm:h-28 sm:w-28">
                  <span className="text-6xl sm:text-7xl">
                    {category.icon}
                  </span>
                </div>

                {/* Category Name */}
                <h3 className="text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-orange-600 sm:text-lg">
                  {category.name}
                </h3>

                {/* Explore Arrow */}
                <span className="mt-2 text-sm font-medium text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Explore →
                </span>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FoodCategories;
