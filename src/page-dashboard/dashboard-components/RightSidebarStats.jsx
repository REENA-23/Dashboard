import React from "react";

export default function RightSidebarStats() {
  const bestSelling = [
    { name: "Category 1", orders: 245 },
    { name: "Category 2", orders: 180 },
    { name: "Category 3", orders: 150 },
    { name: "Category 4", orders: 120 },
    { name: "Category 5", orders: 95 },
  ];

  const todayStats = [
    { label: "New", value: 125, color: "text-green-500" },
    { label: "Return", value: 125, color: "text-orange-500" },
    { label: "Pending", value: 125, color: "text-orange-500" },
    { label: "Cancelled", value: 125, color: "text-red-500" },
  ];

  return (
    <div className="w-full min-w-[260px] space-y-6">
      {/* ================= Best Selling ================= */}
      <div className="bg-white rounded-xl p-4 lg:p-5 shadow-sm">
        <div className="mb-3">
          <h2 className="font-switzer text-lg lg:text-xl font-semibold text-gray-900">
            Best Selling
          </h2>
          <p className="text-xs text-gray-400">5 Categories</p>
        </div>

        {/* Header */}
        <div className="flex justify-between font-semibold text-gray-900 mb-2 text-sm">
          <span>Category</span>
          <span>Orders</span>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {bestSelling.map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-sm text-gray-500"
            >
              <span className="truncate max-w-[140px]">{item.name}</span>
              <span className="shrink-0">{item.orders}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Today's Orders ================= */}
      <div>
        <h2 className="font-switzer text-lg lg:text-xl font-semibold text-gray-900 mb-3">
          Today&apos;s Orders
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {todayStats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-3 h-[96px] flex flex-col justify-between"
            >
              {/* Label */}
              <span className="text-sm text-gray-600 truncate">
                {item.label}
              </span>

              {/* Number */}
              <div className="flex items-center justify-center flex-1">
                <span className={`text-xl lg:text-2xl font-bold ${item.color}`}>
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
