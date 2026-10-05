import React from "react";

const MenuHeader = () => {
  return (
    <section className="bg-orange-50/40 px-6 pt-14 sm:pt-16 md:pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold tracking-wide text-orange-600">
            Explore Our Menu
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Delicious Food,{" "}
            <span className="text-orange-500">Made for You</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:leading-8">
            Discover our carefully crafted menu featuring fresh ingredients,
            delicious flavors, and satisfying meals made to make every dining
            experience special.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuHeader;
