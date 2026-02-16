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
    <div className="w-full min-w-0">
      {/* 
        Layout rules:
        - mobile: 1 column
        - tablet / nest hub: 2 columns
        - desktop (lg): 1 column (right sidebar stack)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-stretch min-w-0">
        
        {/* ================= Best Selling ================= */}
        <div className="bg-white rounded-xl p-4 lg:p-5 shadow-sm min-w-0 flex flex-col">
          <div className="mb-3">
            <h2 className="font-switzer text-lg lg:text-xl font-semibold text-gray-900 truncate">
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
          <div className="space-y-3 flex-1 min-w-0">
            {bestSelling.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm text-gray-500 min-w-0"
              >
                <span className="truncate pr-2">{item.name}</span>
                <span className="shrink-0">{item.orders}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Today's Orders ================= */}
        <div className="bg-white rounded-xl p-4 lg:p-5 shadow-sm min-w-0 flex flex-col">
          <h2 className="font-switzer text-lg lg:text-xl font-semibold text-gray-900 mb-8 truncate">
            Today&apos;s Orders
          </h2>

          <div className="grid grid-cols-2 gap-3 flex-1 mb-4">
            {todayStats.map((item, i) => (
              <div
                key={i}
                className="bg-[#f6f9fc] rounded-xl p-3 flex flex-col justify-between min-w-0 overflow-hidden"
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
    </div>
  );
}
