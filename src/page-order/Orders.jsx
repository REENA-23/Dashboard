import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import AddOrder from "./AddOrder";

const orders = [
  {
    id: "#435",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Confirmed",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
      {
        id: 2,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#436",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Pending",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#437",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Active",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#437",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Active",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#437",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Active",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#437",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Active",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
  {
    id: "#437",
    created: "22/06/2025 Sun 11:25 AM",
    customer: "Customer Name",
    status: "Active",
    total: 2000,
    profit: "16%",
    items: [
      {
        id: 1,
        name: "Product Name",
        qty: "1x",
        price: 2000,
        discount: "10%",
        total: 1800,
      },
    ],
  },
];

const statusStyle = (status) => {
  if (status === "Pending") return "bg-orange-100 text-orange-500";
  return "bg-green-100 text-green-600";
};

export default function Orders() {
  const [openId, setOpenId] = useState(null);

  const toggleRow = (id) => {
    setOpenId(openId === id ? null : id);
  };

const navigate = useNavigate();

  return (
    
    <div className="p-3 sm:p-4 md:p-6 bg-[#f6f9fc] min-h-screen">
      <div className="bg-white rounded-xl p-3 sm:p-4 md:p-5">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-lg font-semibold">All Orders</h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Search */}
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
              <FaSearch className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search here..."
                className="outline-none text-sm w-full sm:w-48"
              />
            </div>

            {/* Today Dropdown */}
            <button className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-gray-100 text-sm">
              Today
              <FaChevronDown className="text-xs" />
            </button>

            {/* Add Order */}
            <button
              onClick={() => navigate("/add-order")}
              className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium"
            >
              Add Order
            </button>
          </div>
        </div>

        {/* MOBILE CARDS  */}
        <div className="block md:hidden space-y-4">
          {orders.map((order, idx) => {
            const isOpen = openId === order.id;

            return (
              <div
                key={order.id + idx}
                className="border rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Order</span>
                  <span className="font-medium">{order.id}</span>
                </div>

                <div className="text-sm text-gray-600">{order.created}</div>
                <div className="text-sm text-gray-700">{order.customer}</div>

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${statusStyle(order.status)}`}
                  >
                    {order.status}
                  </span>
                  <span className="font-medium">₹{order.total}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Profit: {order.profit}
                  </span>
                  <button
                    onClick={() => toggleRow(order.id)}
                    className={`px-3 py-1 rounded-lg text-xs border ${
                      isOpen
                        ? "border-gray-300 text-gray-500"
                        : "border-green-400 text-green-600"
                    }`}
                  >
                    {isOpen ? "View Less" : "View More"}
                  </button>
                </div>

                {/* Expanded Mobile */}
                {isOpen && (
                  <div className="mt-3 bg-[#f3f8fb] rounded-lg p-3 space-y-3">
                    {order.items.map((item, i2) => (
                      <div key={item.id + i2} className="border-b pb-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.name}</span>
                          <span>₹{item.total}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.qty} · ₹{item.price} · {item.discount}
                        </div>
                      </div>
                    ))}

                    <div className="text-sm text-gray-500 space-y-1 pt-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-gray-800">₹3600</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-orange-500">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-green-600">₹600</span>
                      </div>
                      <div className="flex justify-between font-semibold text-gray-800">
                        <span>Total</span>
                        <span>₹3000</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/*  DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="py-3 text-left">Sr.</th>
                <th className="py-3 text-left">Order Id</th>
                <th className="py-3 text-left">Created</th>
                <th className="py-3 text-left">Customer Name</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-left">Total</th>
                <th className="py-3 text-left">Profit</th>
                <th className="py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, idx) => {
                const isOpen = openId === order.id;

                return (
                  <>
                    <tr key={order.id + idx} className="border-b">
                      <td className="py-4">{idx + 1}</td>
                      <td className="py-4">{order.id}</td>
                      <td className="py-4 text-gray-500">{order.created}</td>
                      <td className="py-4 text-gray-700">{order.customer}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${statusStyle(order.status)}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4">₹{order.total}</td>
                      <td className="py-4">{order.profit}</td>
                      <td className="py-4">
                        <button
                          onClick={() => toggleRow(order.id)}
                          className={`px-3 py-1 rounded-lg text-xs border ${
                            isOpen
                              ? "border-gray-300 text-gray-500"
                              : "border-green-400 text-green-600"
                          }`}
                        >
                          {isOpen ? "View Less" : "View More"}
                        </button>
                      </td>
                    </tr>

                    {isOpen && (
                      <tr className="bg-[#f3f8fb]">
                        <td colSpan="8" className="p-4">
                          <div className="bg-[#f3f8fb] rounded-lg p-4">
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[600px] text-sm">
                                <thead className="text-gray-500 border-b">
                                  <tr>
                                    <th className="py-2 text-right">Sr.</th>
                                    <th className="py-2 text-right">Product</th>
                                    <th className="py-2 text-right">Qty.</th>
                                    <th className="py-2 text-right">Price</th>
                                    <th className="py-2 text-right">
                                      Discount
                                    </th>
                                    <th className="py-2 text-right">Total</th>
                                    <th className="py-2 text-right">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {order.items.map((item, i2) => (
                                    <tr key={item.id + i2} className="border-b">
                                      <td className="py-3 text-right">
                                        {i2 + 1}
                                      </td>
                                      <td className="py-3 text-right">
                                        {item.name}
                                      </td>
                                      <td className="py-3 text-right">
                                        {item.qty}
                                      </td>
                                      <td className="py-3 text-right">
                                        ₹{item.price}
                                      </td>
                                      <td className="py-3 text-right">
                                        {item.discount}
                                      </td>
                                      <td className="py-3 text-right ">
                                        ₹{item.total}
                                      </td>
                                      <td className="py-3 text-right text-green-600 text-xs cursor-pointer">
                                        Print
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <div className="mt-4 grid grid-cols-7 gap-2 text-sm text-gray-500">
                              <div className="col-span-4"></div>

                              {/* Label column (Discount) */}
                              <div className="col-span-1 space-y-2">
                                <div>Subtotal</div>
                                <div>Shipping</div>
                                <div>Discount</div>
                                <div className="font-semibold text-gray-800">
                                  Total
                                </div>
                              </div>

                              {/* Value column (Total) */}
                              <div className="col-span-1 space-y-2 text-right tabular-nums">
                                <div className="text-gray-800">₹3600</div>
                                <div className="text-orange-500">Free</div>
                                <div className="text-green-600">₹600</div>
                                <div className="font-semibold text-gray-800">
                                  ₹3000
                                </div>
                              </div>

                              {/* Spacer for Action column */}
                              <div className="col-span-1"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
