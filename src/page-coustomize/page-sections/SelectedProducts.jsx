import { useState } from "react";

export default function SelectedProducts() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: "Chaniya Choli Kids",
    price: "Rs 2000",
    oldPrice: "Rs 4000",
    colors: "3 Colors",
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white rounded-xl p-3 sm:p-4 md:p-6">
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Selected Products
      </h2>

      {/* Products Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          gap-x-4
          sm:gap-x-6
          gap-y-8
          sm:gap-y-10
        "
      >
        {products.map((p, index) => (
          <div
            key={p.id}
            onClick={() => setActiveIndex(index)}
            className="flex flex-col items-start cursor-pointer"
          >
            {/* Number circle */}
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition
                ${
                  activeIndex === index
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
            >
              {index + 1}
            </div>

            {/* Image placeholder */}
            <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg mb-2 sm:mb-3"></div>

            {/* Title */}
            <h3 className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
              {p.title}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-orange-500 font-semibold">
                {p.price}
              </span>
              <span className="text-gray-400 line-through text-[10px] sm:text-xs">
                {p.oldPrice}
              </span>
            </div>

            {/* Colors */}
            <p className="text-[10px] sm:text-xs text-gray-500">
              {p.colors}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}