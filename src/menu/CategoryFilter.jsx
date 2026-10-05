import React from "react";
import { categories } from "../data/restaurantData";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  setSearchText,
}) {
  return (
    <section className="bg-orange-50/40 px-6 ">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md"
                  : "border border-orange-200 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                setSearchText("");

            
              }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryFilter;
