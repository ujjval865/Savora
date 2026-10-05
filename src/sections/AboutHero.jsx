import React from "react";
import { restaurantInfo } from "../data/restaurantData";

 export function AboutHero() {
    
  return (
    <section className="bg-orange-50 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">

        <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          {restaurantInfo.tagline}
        </span>

        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to {restaurantInfo.name}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-600">
          {restaurantInfo.description}
        </p>

        {/* Rating */}
        <div className="mt-8 flex justify-center gap-3">
          <span>⭐ {restaurantInfo.rating}</span>

          <span>•</span>

          <span>
            {restaurantInfo.totalReviews.toLocaleString()}+ Reviews
          </span>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;