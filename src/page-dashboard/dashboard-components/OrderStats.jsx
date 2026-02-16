import React from "react";

const orders = [
  { id: 1, product: "Product Name", qty: "1x", status: "in Packaging", statusType: "packaging", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
  { id: 2, product: "Product Name", qty: "5x", status: "Ready For Pickup", statusType: "ready", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
  { id: 3, product: "Product Name", qty: "2x", status: "Delivered", statusType: "delivered", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
  { id: 4, product: "Product Name", qty: "1x", status: "Returned", statusType: "returned", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
  { id: 5, product: "Product Name", qty: "1x", status: "in Packaging", statusType: "packaging", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
  { id: 6, product: "Product Name", qty: "1x", status: "in Packaging", statusType: "packaging", date: "22/06/2025", time: "11:25 AM", type: "Cash on Delivery" },
];

const statusStyles = {
  packaging: "bg-orange-100 text-orange-600",
  ready: "bg-green-100 text-green-600",
  delivered: "bg-blue-100 text-blue-600",
  returned: "bg-red-100 text-red-600",
};

export default function OrderStats() {
  return (
    <div className="w-full bg-white rounded-xl p-4 sm:p-6 shadow-sm overflow-x-hidden">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order stats</h2>

      {/* ================= TABLE (LG AND UP: DESKTOP + NEST HUB MAX) ================= */}
      <div className="hidden lg:block w-full overflow-x-hidden">
        {/* Header */}
        <div className="grid grid-cols-[40px_2fr_60px_130px_150px_1.5fr] gap-3 items-center text-sm font-semibold text-gray-900 border-b pb-3">
          <div>Sr.</div>
          <div>Product</div>
          <div className="text-center">Qty.</div>
          <div>Status</div>
          <div>Date & Time</div>
          <div>Order Type</div>
        </div>

        {/* Rows */}
        <div className="divide-y">
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-[40px_2fr_60px_130px_150px_1.5fr] gap-3 items-center py-4 text-sm min-w-0"
            >
              <div className="text-gray-600">{order.id}</div>

              {/* Product */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-gray-300 shrink-0" />
                <span className="text-gray-700 truncate">{order.product}</span>
              </div>

              {/* Qty */}
              <div className="text-center font-medium">{order.qty}</div>

              {/* Status */}
              <div className="min-w-0">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap ${statusStyles[order.statusType]}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Date & Time */}
              <div className="text-gray-600 leading-tight text-xs sm:text-sm">
                <div className="whitespace-nowrap">{order.date} Sun</div>
                <div className="whitespace-nowrap">{order.time}</div>
              </div>

              {/* Order Type */}
              <div className="text-gray-700 text-sm leading-tight break-words">
                {order.type}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CARDS (BELOW LG: TABLET + MOBILE) ================= */}
      <div className="lg:hidden space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">#{order.id}</span>
              <span
                className={`px-3 py-1 rounded-md text-xs font-medium ${statusStyles[order.statusType]}`}
              >
                {order.status}
              </span>
            </div>

            <div>
              <p className="text-gray-800 font-medium truncate">
                {order.product}
              </p>
              <p className="text-sm text-gray-500">Qty: {order.qty}</p>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <div>
                <p>{order.date} Sun</p>
                <p>{order.time}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-medium break-words">
                  {order.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
