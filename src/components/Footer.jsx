import React from "react";
import { restaurantInfo } from "../data/restaurantData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-orange-100 bg-orange-50/40 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Restaurant Info */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {restaurantInfo.logo}
              </span>

              <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                {restaurantInfo.name}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              {restaurantInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-center gap-2 lg:items-start"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-gray-600 transition duration-300 hover:translate-x-1 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening Hours */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>{restaurantInfo.openingHours.weekdays}</p>
              <p>{restaurantInfo.openingHours.weekends}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Contact Us</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p className="hover:text-orange-500 transition-colors">
                {restaurantInfo.phone}
              </p>

              <p className="break-words hover:text-orange-500 transition-colors">
                {restaurantInfo.email}
              </p>

              <p className="leading-6">{restaurantInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-orange-100 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
