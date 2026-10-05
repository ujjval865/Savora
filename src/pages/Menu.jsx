import React from "react";
import MenuHeader from "../menu/MenuHeader";
import MenuSearch from "../menu/MenuSearch";
import CategoryFilter from "../menu/CategoryFilter";
import MenuSort from "../menu/MenuSort";
import VegToggle from "../menu/VegToggle";
import { foodItems } from "../data/restaurantData";
import FoodCard from "../menu/FoodCard";
import { useState } from "react";
import EmptyState from "../menu/EmptyState";

const Menu = () => {
  const [searchText, setSearchText] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isVegOnly, setIsVegOnly] = useState(false);

  const filteredFoodItems = foodItems.filter((item) =>
    searchText === ""
      ? (item.category === selectedCategory || selectedCategory === "All") &&
        (!isVegOnly || item.isVegetarian)
      : item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (item.category === selectedCategory || selectedCategory === "All") &&
        (!isVegOnly || item.isVegetarian),
  );

  const [sortedBy, setSortedBy] = useState("default");

  const sortedFoodItems = [...filteredFoodItems].sort((a, b) => {
    if (sortedBy === "high-low") {
      return b.price - a.price;
    }
    if (sortedBy === "low-high") {
      return a.price - b.price;
    }
    if (sortedBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const clearFilters = () => {
    setSearchText("");
    setSelectedCategory("All");
    setIsVegOnly(false);
    setSortedBy("default");
  }

  return (
    <div className="bg-orange-50/40 px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <MenuHeader />
        <MenuSearch searchText={searchText} setSearchText={setSearchText} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchText={setSearchText}
        />
        <MenuSort sortedBy={sortedBy} setSortedBy={setSortedBy} />
        <VegToggle isVegOnly={isVegOnly} setIsVegOnly={setIsVegOnly} />
        {sortedFoodItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedFoodItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState onClearFilters={clearFilters} />
        )}
      </div>
    </div>
  );
};

export default Menu;
