import React from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";

function Searchs({ onMenuClick }) {
  return (
    <div className="fixed left-0 md:left-[270px] right-0 top-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-40">

      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 w-full max-w-md">

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={onMenuClick}
        >
          <FaBars className="text-lg text-gray-700" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full focus-within:ring-2 focus-within:ring-orange-400 transition">
          <FaSearch className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none px-2 text-sm w-full placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Notification */}
        <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
          <FaBell className="text-gray-700 text-lg" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Admin Info (hide name on very small screens) */}
        <div className="hidden sm:flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition">

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">
            A
          </div>

          {/* Name */}
          <div className="text-sm leading-tight">
            <div className="font-medium text-gray-800">Admin User</div>
            <div className="text-gray-500 text-xs">Admin</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Searchs;
