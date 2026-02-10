import React from "react";
import { FaImage } from "react-icons/fa";

const categories = [
  { id: 1, name: "Gown", products: 20 },
  { id: 2, name: "Gown", products: 20 },
  { id: 3, name: "Gown", products: 20 },
  { id: 4, name: "Gown", products: 20 },
  { id: 5, name: "Gown", products: 20 },
  { id: 6, name: "Gown", products: 20 },
];

export default function Categories() {
  return (
    <div className="p-4 sm:p-6 bg-[#F5F7F9] min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Categories</h2>

      {/* Responsive Grid */}
      <div
        className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Image Placeholder */}
            <div
              className="
                w-[170px] h-[240px]
                rounded-[120px]
                border-2 border-transparent
                flex items-center justify-center
                transition-all duration-300
                group-hover:border-orange-500
              "
            >
              <FaImage className="text-orange-500 text-3xl opacity-70" />
            </div>

            {/* Name */}
            <p className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition">
              {cat.name}
            </p>

            {/* Count */}
            <p className="text-xs text-gray-400">
              {cat.products} Products
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
