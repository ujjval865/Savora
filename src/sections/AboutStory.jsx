import React from "react";

export function AboutStory() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Story Content */}
        <div>
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Story
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            More Than Food,
            <span className="block text-orange-500">It's a Feeling.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Savora started with a simple idea — great food has the power to
            bring people together. What began as a small kitchen with a passion
            for fresh ingredients has grown into a place where delicious food
            and memorable moments come together.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Every dish we serve is prepared with carefully selected ingredients,
            thoughtful recipes, and a lot of love. From the first bite to the
            last, we want every visit to feel special.
          </p>

          {/* Highlight */}
          <div className="mt-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
            <p className="text-lg font-semibold text-gray-900">
              "Good food brings people together."
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              That's the belief behind everything we do at Savora.
            </p>
          </div>
        </div>

        {/* Story Visual */}
        <div className="group relative">
          <div className="absolute -inset-4 rounded-3xl bg-orange-100/60 blur-2xl transition duration-500 group-hover:bg-orange-200/70" />

          <div className="relative overflow-hidden rounded-3xl bg-orange-500 p-8 shadow-xl transition duration-500 group-hover:-translate-y-2 sm:p-10">
            <div className="flex min-h-[320px] flex-col justify-between sm:min-h-[380px]">
              <div>
                <span className="text-6xl">🍽️</span>

                <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                  Made With Passion
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-orange-50 sm:text-base">
                  Fresh ingredients, honest cooking, and unforgettable flavours
                  — that's what makes every Savora experience different.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">8+</p>
                  <p className="mt-1 text-sm text-orange-50">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">12K+</p>
                  <p className="mt-1 text-sm text-orange-50">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
