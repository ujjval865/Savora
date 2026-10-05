import React from "react";
import { SearchX } from "lucide-react";

function EmptyState({ onClearFilters }) {
  return (
    <div className="bg-orange-50/40 px-6 py-5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-orange-100 bg-white px-6 py-14 text-center shadow-sm">
          <button
            onClick={onClearFilters}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 *:hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:cursor-pointer"
          >
            <SearchX size={38} className="text-orange-500" />
          </button>

          <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            No food items found
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            We couldn't find any dishes matching your search. Try adjusting your
            search or filters to discover something delicious!
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
