import React from "react";
import Hero from "../sections/Hero";
import FoodCategories from "../sections/FoodCategories";
import FeaturedDishes from "../sections/FeaturedDishes";
import Offer from "../sections/Offer";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
const Home = () => {
  return (
    <div>
      <Hero />
      <FoodCategories />
      <FeaturedDishes />
      <Offer />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
