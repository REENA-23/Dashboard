import React from "react";
import {
  FaUsers,
  FaRupeeSign,
  FaUserFriends,
  FaShoppingCart,
} from "react-icons/fa";

export default function StatsRow() {
  const stats = [
    {
      title: "Website Visitors",
      value: "34,945",
      change: "+8%",
      changeText: "from last month",
      icon: <FaUsers className="text-green-500 text-xl sm:text-2xl" />,
      iconBg: "bg-green-50",
    },
    {
      title: "Total Revenue",
      value: "₹80K",
      change: "+8%",
      changeText: "from last month",
      icon: <FaRupeeSign className="text-blue-500 text-xl sm:text-2xl" />,
      iconBg: "bg-blue-50",
    },
    {
      title: "Total Customers",
      value: "892",
      change: "+24%",
      changeText: "from last month",
      icon: <FaUserFriends className="text-purple-500 text-xl sm:text-2xl" />,
      iconBg: "bg-purple-50",
    },
    {
      title: "Total Orders",
      value: "125",
      change: "+2.1%",
      changeText: "from last month",
      icon: <FaShoppingCart className="text-orange-500 text-xl sm:text-2xl" />,
      iconBg: "bg-orange-50",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 sm:p-5 shadow-sm w-full flex items-center justify-between"
        >
          {/* Left content */}
          <div className="flex-1 pr-3">
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">
              {item.title}
            </p>

            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mt-1">
              {item.value}
            </h3>

            <p className="text-xs sm:text-sm mt-1 leading-tight">
              <span className="text-green-500 font-medium">{item.change}</span>{" "}
              <span className="text-gray-400">{item.changeText}</span>
            </p>
          </div>

          {/* Right icon */}
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${item.iconBg} shrink-0`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
