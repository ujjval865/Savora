import React, { useState } from "react";

function VegToggle( {isVegOnly, setIsVegOnly} ) {
  console.log(isVegOnly);
  return (
    <div className="bg-orange-50/40 px-6 pb-6">
      <div className="container mx-auto flex max-w-7xl justify-end">
        <label className="flex cursor-pointer items-center gap-3">
          {/* Toggle */}
          <input
            type="checkbox"
            checked={isVegOnly}
            onChange={() => setIsVegOnly(!isVegOnly)}
            className="peer sr-only"
          />

          <div className="relative h-6 w-11 rounded-full bg-gray-300 transition-colors duration-300 peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-200">
            <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-5"></div>
          </div>

          {/* Label */}
          <span className="text-sm font-semibold text-gray-700">
            Pure Veg
          </span>
        </label>
      </div>
    </div>
  );
}

export default VegToggle;