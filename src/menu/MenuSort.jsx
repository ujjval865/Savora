import React from "react";

function MenuSort({sortedBy, setSortedBy}) {
  console.log(sortedBy)
  return (
    <section className="bg-orange-50/40 px-6 pb-6">
      <div className="container mx-auto flex max-w-7xl justify-end">
        <div className="relative">
          <i className="fa-solid fa-arrow-down-wide-short pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
          <div className="menu-sort relative">
            <select
              value={sortedBy}
              onChange={(e) => setSortedBy(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-orange-200 bg-white py-3 pl-10 pr-10 text-sm font-medium text-gray-700 shadow-sm outline-none transition duration-300 hover:border-orange-400 hover:shadow-md focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            >
              <option value="recommended">Recommended</option>
              <option value="high-low">Price: High to Low</option>
              <option value="low-high">Price: Low to High</option>
              <option value="rating">Rating: Highest First</option>
            </select>
          </div>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400"></i>
        </div>
      </div>
    </section>
  );
}

export default MenuSort;
