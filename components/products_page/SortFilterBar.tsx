"use client";

export default function SortFilterBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
      {/* sort dropdown */}
      <div>
        <label className="text-gray-700 mr-2">Sort by:</label>
        <select className="p-2 border rounded-md">
          <option>New Arrival</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
        </select>
      </div>

      {/* filter button */}
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300">
        Filter Options
      </button>
    </div>
  );
}
