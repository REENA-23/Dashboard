export default function OffersScrollingNavbar() {
  return (
    <div className="w-full bg-white rounded-lg p-4 md:p-6">
      {/* Title */}
      <h2 className="font-switzer text-base md:text-[20px] font-semibold mb-3 md:mb-4">
        Offers Scrolling Line - Navbar
      </h2>

      {/* Offer Text */}
      <div className="mb-4">
        <label className="block text-xs text-gray-500 mb-1">Offer Text</label>
        <input
          type="text"
          placeholder="Ex. Special offer on this Weekends"
          className="font-switzer w-full h-[40px] border border-gray-200 rounded-lg px-4 text-[14px] md:text-sm leading-[40px]
                     placeholder:text-gray-400
                     focus:outline-none focus:ring-0
                     hover:border-orange-500 focus:border-orange-500
                     transition-colors"
        />
      </div>

      {/* Discount Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            Discount Percentage
          </label>
          <input
            type="text"
            placeholder="10%"
            className="font-switzer w-full h-[40px] border border-gray-200 rounded-lg px-4 text-[14px] md:text-sm leading-[40px]
                       placeholder:text-gray-400
                       focus:outline-none focus:ring-0
                       hover:border-orange-500 focus:border-orange-500
                       transition-colors"
          />
        </div>

        <span className="text-orange-500 text-xs md:mb-3 self-center">
          or
        </span>

        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            Discount Price
          </label>
          <input
            type="text"
            placeholder="₹ 120"
            className="font-switzer w-full h-[40px] border border-gray-200 rounded-lg px-4 text-[14px] md:text-sm leading-[40px]
                       placeholder:text-gray-400
                       focus:outline-none focus:ring-0
                       hover:border-orange-500 focus:border-orange-500
                       transition-colors"
          />
        </div>
      </div>

      {/* Select Categories */}
      <div className="mb-3">
        <label className="block text-xs text-gray-500 mb-1">
          Select Categories
        </label>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Best Seller"
            className="font-switzer flex-1 h-[40px] border border-gray-200 rounded-lg px-4 text-[14px] md:text-sm leading-[40px]
                       placeholder:text-gray-400
                       focus:outline-none focus:ring-0
                       hover:border-orange-500 focus:border-orange-500
                       transition-colors"
          />
          <button className="w-full md:w-[90px] h-[40px] bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition">
            Add
          </button>
        </div>
        <p className="text-orange-500 text-[14px] font-medium text-sm mt-1 mb-3">
          Top Rated, New Arrivals
        </p>
      </div>

      {/* Select Products */}
      <div className="mb-4">
        <label className="block text-xs text-gray-500 mb-1">
          Select Products
        </label>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Best Seller"
            className="font-switzer flex-1 h-[40px] border border-gray-200 rounded-lg px-4 text-[14px] md:text-sm leading-[40px]
                       placeholder:text-gray-400
                       focus:outline-none focus:ring-0
                       hover:border-orange-500 focus:border-orange-500
                       transition-colors"
          />
          <button className="w-full md:w-[90px] h-[40px] bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition">
            Add
          </button>
        </div>
        <p className="text-orange-500 text-[14px] font-medium text-sm mt-1 mb-3">
          Top Rated, New Arrivals
        </p>
      </div>

      {/* Apply Button */}
      <button className="w-full h-[40px] bg-orange-500 text-white rounded-lg text-sm md:text-[15px] font-semibold hover:bg-orange-600 transition">
        Apply
      </button>
    </div>
  );
}
