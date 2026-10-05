import React from "react";

function MenuSearch({searchText,setSearchText}) {
  console.log(searchText)
  return (
    <section className="bg-orange-50/40 px-6 py-10 sm:py-12 md:py-14">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm transition duration-300 focus-within:border-orange-400 focus-within:shadow-md">
          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>

          {/* Search Input */}
          <input
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
            type="text"
            placeholder="Search your favorite food..."
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
          />

          {/* Clear Icon */}
          <button
            type="button"
            className="text-gray-400 transition duration-200 hover:text-orange-500"
            onClick={(e)=>setSearchText(e.target.value="")}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MenuSearch;
