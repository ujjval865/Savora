import React from "react";
import { testimonials } from "../data/restaurantData";

const Testimonials = () => {
  return (
    <section className="bg-orange-50/40 px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            See what our happy customers have to say about their dining
            experience at Savora.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Customer Image */}
              <div className="mb-5 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-orange-100 transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Customer Name */}
              <h3 className="text-xl font-bold text-gray-800">
                {item.name}
              </h3>

              {/* Role */}
              <span className="mt-1 block text-sm text-gray-500">
                {item.role}
              </span>

              {/* Rating */}
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-gray-700">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <span>{item.rating}</span>
              </div>

              {/* Message */}
              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                "{item.message}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;