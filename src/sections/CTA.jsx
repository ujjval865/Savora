import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-orange-50/40 px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold tracking-wide text-orange-600">
            Ready to Order
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Craving Something{" "}
            <span className="text-orange-500">Delicious?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Savora serves fresh, delicious food made with quality ingredients
            and rich flavors, bringing you a delightful taste in every bite.
          </p>
        </div>

        {/* CTA Content */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white p-8 text-center shadow-md transition duration-300 hover:shadow-xl md:p-10">
            <span className="mb-4 text-4xl">🍽️</span>

            <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Hungry? Your Next Favorite Meal Awaits!
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              Fresh ingredients, delicious flavors, and unforgettable moments.
              Order your favorite meal from Savora today!
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Explore Our Menu →
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="h-full overflow-hidden rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop"
              alt="Delicious food served at Savora"
              className="h-full min-h-80 w-full object-cover transition duration-500 hover:scale-105 md:min-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
