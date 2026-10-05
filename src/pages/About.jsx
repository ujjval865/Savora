import React from "react";
import { restaurantInfo } from "../data/restaurantData";
import AboutHero from "../sections/AboutHero";
import AboutStory from "../sections/AboutStory";
import AboutUs from "../sections/AboutUs";
import AboutTeam from "../sections/AboutTeam";
import AboutFAQ from "../sections/AboutFAQ";
const About = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-50 px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
          About Us
        </h1>
        <AboutHero />
        <AboutStory />
        <AboutUs />
        <AboutTeam />
        <AboutFAQ />
      </div>
    </div>
  );
};

export default About;
