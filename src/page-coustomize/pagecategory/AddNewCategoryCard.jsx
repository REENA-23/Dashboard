import React from "react";
import { FaImage, FaChevronDown } from "react-icons/fa";

export default function AddNewCategoryCard() {
  return (
    <div className="w-full max-w-full sm:max-w-sm bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
        Add New Category
      </h2>

      {/* Upload Box */}
      <div className="w-full h-36 sm:h-40 md:h-44 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 mb-4 bg-gray-50">
        <FaImage className="text-orange-500 text-xl sm:text-2xl" />
        <button className="bg-black text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-md">
          Upload
        </button>
      </div>

      {/* Category Name */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-[11px] sm:text-xs text-gray-500 mb-1">
          Category Name
        </label>
        <input
          type="text"
          placeholder="Gown"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Select Product */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-[11px] sm:text-xs text-gray-500 mb-1">
          Select Product
        </label>
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 cursor-pointer">
          <span className="text-xs sm:text-sm font-medium">20 Products</span>
          <FaChevronDown className="text-orange-500 text-xs sm:text-sm" />
        </div>
      </div>

      {/* Priority */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-[11px] sm:text-xs text-gray-500 mb-1">
          Priority
        </label>
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 cursor-pointer">
          <span className="text-xs sm:text-sm font-medium">1</span>
          <FaChevronDown className="text-orange-500 text-xs sm:text-sm" />
        </div>
      </div>

      {/* Add Product Button */}
      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg text-xs sm:text-sm font-medium mb-3 sm:mb-4 hover:bg-gray-200 transition">
        Add Product
      </button>

      {/* Add Category Button */}
      <button className="w-full bg-orange-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
        Add Category
      </button>
    </div>
  );
}
