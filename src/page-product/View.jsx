import React from "react";
import { FaSearch, FaTrash, FaEye, FaEdit } from "react-icons/fa";

function View() {
  const products = [
    { id: 1, stock: "50 in stock", status: "Active" },
    { id: 2, stock: "20 in stock", status: "Draft" },
    { id: 3, stock: "200 in stock", status: "Active" },
    { id: 4, stock: "5 in stock", status: "Draft" },
    { id: 5, stock: "55 in stock", status: "Active" },
    { id: 6, stock: "60 in stock", status: "Draft" },
    { id: 7, stock: "60 in stock", status: "Active" },
    { id: 8, stock: "60 in stock", status: "Active" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Products</h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-full sm:w-48"
            />
          </div>

          {/* Filter */}
          <select className="border rounded-lg px-4 py-2 text-sm outline-none">
            <option>All</option>
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/*  MOBILE CARDS  */}
      <div className="block md:hidden space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-md shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Product Name</p>
                <p className="text-xs text-gray-500">Dress</p>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Inventory:</span>
              <span>{item.stock}</span>
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-500"
                }`}
              >
                {item.status}
              </span>

              <div className="flex gap-2">
                <button className="p-2 text-orange-500 border border-orange-300 rounded">
                  <FaEye size={12} />
                </button>
                <button className="p-2 text-green-600 border border-green-300 rounded">
                  <FaEdit size={12} />
                </button>
                <button className="p-2 text-red-500 border border-red-300 rounded">
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  DESKTOP TABLE  */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          {/* Head */}
          <thead>
            <tr className="border-b border-gray-100 text-gray-500">
              <th className="py-3 text-left">Sr.</th>
              <th className="py-3 text-left">Product</th>
              <th className="py-3 text-left">Inventory</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Date & Time</th>
              <th className="py-3 text-left">Display</th>
              <th className="py-3 text-left">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                {/* Sr */}
                <td className="py-4">{item.id}</td>

                {/* Product */}
                <td className="py-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-md shrink-0" />
                  <span className="font-medium">Product Name</span>
                </td>

                {/* Inventory */}
                <td className="py-4">{item.stock}</td>

                {/* Category */}
                <td className="py-4">Dress</td>

                {/* Status */}
                <td className="py-4">
                  {item.status === "Active" ? (
                    <span className="px-3 py-1 text-green-600 bg-green-100 rounded-full text-xs">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-orange-500 bg-orange-100 rounded-full text-xs">
                      Draft
                    </span>
                  )}
                </td>

                {/* Date */}
                <td className="py-4 text-gray-600 text-xs">
                  22/06/2025 <br />
                  11:25 AM
                </td>

                {/* Toggle */}
                <td className="py-4">
                  <div className="w-10 h-5 bg-green-500 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5" />
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4">
                  <div className="flex gap-2 flex-wrap">
                    <button className="px-3 py-1 text-orange-500 border border-orange-300 rounded text-xs bg-orange-50 flex items-center gap-1">
                      <FaEye size={12} /> View
                    </button>

                    <button className="px-3 py-1 text-green-600 border border-green-300 rounded text-xs bg-green-50 flex items-center gap-1">
                      <FaEdit size={12} /> Edit
                    </button>

                    <button className="px-3 py-1 text-red-500 border border-red-300 rounded text-xs bg-red-50 flex items-center gap-1">
                      <FaTrash size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
