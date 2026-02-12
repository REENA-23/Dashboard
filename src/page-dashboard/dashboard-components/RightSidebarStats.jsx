import React from "react";

export default function RightSidebarStats() {
  const bestSelling = [
    { name: "Category 1", orders: 245 },
    { name: "Category 1", orders: 245 },
    { name: "Category 1", orders: 245 },
    { name: "Category 1", orders: 245 },
    { name: "Category 1", orders: 245 },
  ];

  const todayStats = [
    { label: "New", value: 125, color: "text-green-500" },
    { label: "Return", value: 125, color: "text-orange-500" },
    { label: "Pending", value: 125, color: "text-orange-500" },
    { label: "Cancelled", value: 125, color: "text-red-500" },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Best Selling */}
      <div className="bg-white rounded-xl p-5 shadow-sm w-full">
        <div className="mb-2">
          <h2 className="font-switzer text-xl font-semibold text-gray-900">Best Selling</h2>
          <p className="text-xs text-gray-400">5 Categories</p>
        </div>

        <div className="flex justify-between  font-semibold text-gray-900 mb-2">
          <span>Category</span>
          <span>Orders</span>
        </div>

        <div className="space-y-5">
          {bestSelling.map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-[14px] text-gray-500"
            >
              <span className="truncate">{item.name}</span>
              <span>{item.orders}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Orders */}
      <div>
        <h2 className="font-switzer text-xl font-semibold text-gray-900 mb-2">
          Today&apos;s Orders
        </h2>

        <div className="grid grid-cols-2 gap-3 pt-2 w-full">
          {todayStats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm h-[110px] p-3 relative w-full"
            >
              {/* Label */}
              <span className="p-2 text-[16px] text-gray-600">{item.label}</span>

              {/* Number (slightly lower than center like Figma) */}
              <div className="absolute inset-0 flex items-center justify-center pt-8">
                <span className={`text-2xl font-bold ${item.color}`}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
