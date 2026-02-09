import { FaGripVertical, FaChevronDown } from "react-icons/fa";

export default function NavbarMenuItems() {
  const items = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-6">
      {/* Title */}
      <h2 className="font-switzer text-base sm:text-[20px] font-semibold mb-3 sm:mb-4">
        Navbar Main Menu items
      </h2>

      {/* Column headers (Desktop only) */}
      <div className="hidden lg:grid grid-cols-[24px_60px_1fr_1.5fr] gap-4 mb-2 text-[12px] text-gray-500">
        <div></div>
        <div></div>
        <div>Menu Item Name</div>
        <div>Link to Navigate</div>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {items.map((num) => (
          <div
            key={num}
            className="
              bg-[#fafafa] lg:bg-transparent
              rounded-lg lg:rounded-none
              p-3 lg:p-0
              grid
              grid-cols-1
              gap-3
              lg:grid-cols-[24px_60px_1fr_1.5fr]
              lg:gap-4
              items-center
            "
          >
            {/* Drag dots */}
            <div className="hidden lg:flex items-center justify-center text-gray-400">
              <div className="w-[16px] h-[24px] flex items-center justify-center">
                <FaGripVertical />
              </div>
            </div>

            {/* Number pill */}
            <div className="flex items-center">
              <div className="w-[44px] h-[40px] bg-[#EEF3F7] rounded-lg flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
                {num}
                <FaChevronDown className="text-orange-500 text-xs" />
              </div>
            </div>

            {/* Menu Item Name */}
            <div>
              <label className="block lg:hidden text-xs text-gray-500 mb-1">
                Menu Item Name
              </label>
              <input
                type="text"
                placeholder="All Products"
                className="font-switzer w-full h-[40px] border border-gray-200 rounded-lg px-4 text-[14px]
                           focus:outline-none focus:ring-0
                           hover:border-orange-500 focus:border-orange-500
                           transition-colors"
              />
            </div>

            {/* Link input */}
            <div>
              <label className="block lg:hidden text-xs text-gray-500 mb-1">
                Link to Navigate
              </label>
              <input
                type="text"
                placeholder="Link :"
                className="font-switzer w-full h-[40px] border border-gray-200 rounded-lg px-4 text-[14px]
                           focus:outline-none focus:ring-0
                           hover:border-orange-500 focus:border-orange-500
                           transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
