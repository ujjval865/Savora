import React from "react";
import { restaurantInfo } from "../data/restaurantData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {restaurantInfo.logo}
            </span>

            <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              {restaurantInfo.name}
            </span>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-5"
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
                className="relative px-3 py-2 text-sm sm:text-base font-medium text-gray-600 rounded-full hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart, 0 items"
            className="relative flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>

            <span className="font-semibold text-sm">Cart</span>

            <span className="flex items-center justify-center min-w-6 h-6 px-1 bg-white text-orange-600 text-xs font-bold rounded-full">
              {cartCount}
            </span>
          </Link>
          {/* LogOut */}
          <button
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    window.location.href = "/";
  }}
  className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
>
  Logout
</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
