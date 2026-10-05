
import React, { useState } from "react";
import { offers } from "../data/restaurantData";
import { Link } from "react-router-dom";

const Offer = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  return (
    <section className="bg-orange-50/40 px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Special <span className="text-orange-500">Offers</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Enjoy exclusive deals and delicious savings at Savora! Explore our
            special offers on your favorite dishes and make every meal more
            delightful.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Offer Title */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-4 text-white">
                <h3 className="text-xl font-bold">
                  {offer.title}
                </h3>
              </div>

              {/* Offer Details */}
              <div className="p-6">

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {offer.description}
                </p>

                {/* Coupon Code */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-orange-300 bg-orange-50 p-4">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Coupon Code
                    </p>

                    <span className="mt-1 block font-bold tracking-widest text-orange-600">
                      {offer.code}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      setCopiedCode(offer.code);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
                  >
                    <i
                      className={`fa-regular ${
                        copiedCode === offer.code
                          ? "fa-circle-check"
                          : "fa-copy"
                      }`}
                    ></i>

                    {copiedCode === offer.code
                      ? "Copied!"
                      : "Copy Code"}
                  </button>
                </div>

                {/* Order Button */}
                <Link
                  to="/menu"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Order Now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Offer;