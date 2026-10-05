import React from "react";
import { restaurantInfo } from "../data/restaurantData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold tracking-wide text-orange-600">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Welcome to Savora
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {restaurantInfo.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              {restaurantInfo.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Explore Menu
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
              >
                Order Now →
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-orange-100 sm:-right-6 sm:-top-6"></div>

            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl bg-pink-100 sm:-bottom-6 sm:-left-6"></div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-2xl shadow-gray-200/70">
              <img
                src="https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?q=80&w=1000&auto=format&fit=crop"
                alt="Delicious food served at Savora"
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl sm:-left-6">
              <p className="text-sm font-bold text-gray-900">
                Made Fresh, Served with Love
              </p>
              <p className="mt-1 text-xs text-gray-500">
                A little happiness in every bite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
