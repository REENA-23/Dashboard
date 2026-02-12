import { FaChevronDown, FaPlus } from "react-icons/fa";

export default function SectionCard() {
  return (
    <div className="w-full bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg md:text-xl font-switzer font-semibold">
            Section 1
          </h2>
          <FaChevronDown className="text-orange-500 text-xs sm:text-sm" />
        </div>

        <div className="relative group">
          <button
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 flex items-center justify-center text-orange-500 hover:bg-gray-200 transition">
            <FaPlus className="text-sm sm:text-base transform transition-transform duration-500 group-hover:rotate-[180deg]"/>
          </button>

          {/* Tooltip: left side */}
          <div
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs sm:text-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm pointer-events-none">
            Add new section
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* Section Name */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">
            Section Name
          </label>
          <input
            type="text"
            placeholder="New Arrivals"
            className="w-full h-9 sm:h-10 md:h-11 border border-gray-200 rounded-lg px-3 text-xs sm:text-sm
                       focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">
            Category
          </label>
          <div className="relative">
            <select
              className="w-full h-9 sm:h-10 md:h-11 bg-[#F3F8FC] border border-transparent rounded-lg px-3 pr-8 text-xs sm:text-sm font-medium
                         focus:outline-none focus:border-orange-500 appearance-none"
            >
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 text-xs sm:text-sm pointer-events-none" />
          </div>
        </div>

        {/* Product */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">
            Product
          </label>
          <input
            type="text"
            placeholder="Search Product"
            className="w-full h-9 sm:h-10 md:h-11 border border-gray-200 rounded-lg px-3 text-xs sm:text-sm
                       focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">
            Priority
          </label>
          <div className="relative">
            <select
              className="w-full h-9 sm:h-10 md:h-11 bg-[#F3F8FC] border border-transparent rounded-lg px-3 pr-8 text-xs sm:text-sm font-medium
                         focus:outline-none focus:border-orange-500 appearance-none"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 text-xs sm:text-sm pointer-events-none" />
          </div>
        </div>

        {/* Button */}
        <button className="w-full h-10 sm:h-11 md:h-12 bg-orange-500 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 transition">
          Add Product
        </button>
      </div>
    </div>
  );
}
