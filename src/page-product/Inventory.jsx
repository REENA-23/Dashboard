import React from "react";
import { FaSearch, FaTrash, FaEye, FaEdit } from "react-icons/fa";

export default function Inventory() {
  const data = [
    { id: 1, stock: "50 in stock", status: "in Stock", sold: 4573, returnRate: "0%" },
    { id: 2, stock: "20 in stock", status: "low Stock", sold: 573, returnRate: "2%" },
    { id: 3, stock: "200 in stock", status: "out of Stock", sold: 2573, returnRate: "0%" },
    { id: 4, stock: "5 in stock", status: "low Stock", sold: 3573, returnRate: "0%" },
    { id: 5, stock: "55 in stock", status: "Active", sold: 4573, returnRate: "0%" },
    { id: 6, stock: "60 in stock", status: "out of Stock", sold: 3573, returnRate: "0%" },
    { id: 7, stock: "60 in stock", status: "Active", sold: 1573, returnRate: "0%" },
    { id: 8, stock: "60 in stock", status: "low Stock", sold: 8573, returnRate: "0%" },
  ];

  const getStatusStyle = (status) => {
    if (status === "in Stock" || status === "Active") {
      return "bg-green-100 text-green-600";
    }
    if (status === "low Stock") {
      return "bg-orange-100 text-orange-500";
    }
    if (status === "out of Stock") {
      return "bg-red-100 text-red-500";
    }
    return "";
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Inventory</h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-full sm:w-48"
            />
          </div>

          {/* Filter */}
          <select className="bg-gray-100 px-4 py-2 rounded-lg text-sm outline-none">
            <option>All</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/*  MOBILE CARDS  */}
      <div className="block md:hidden space-y-4">
        {data.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 flex flex-col gap-3">
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

            <div className="flex justify-between text-sm text-gray-600">
              <span>Sold:</span>
              <span>{item.sold}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Return:</span>
              <span>{item.returnRate}</span>
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                  item.status
                )}`}
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

      {/*  DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[1000px] text-sm">
          {/* Head */}
          <thead>
            <tr className="border-b border-gray-200 text-[15px] font-switzer">
              <th className="py-3 text-left">Sr.</th>
              <th className="py-3 pl-8 text-left">Product</th>
              <th className="py-3 text-left">Inventory</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Stock Status</th>
              <th className="py-3 text-left">Total Units Sold</th>
              <th className="py-3 text-left">Return Rate (%)</th>
              <th className="py-3 pl-12 text-left">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-[14px] font-switzer">
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-4 text-gray-600">{item.id}</td>

                <td className="py-4 pl-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-md shrink-0" />
                  <span className="text-gray-700 font-medium">Product Name</span>
                </td>

                <td className="py-4 text-gray-600">{item.stock}</td>

                <td className="py-4 text-gray-600">Dress</td>

                <td className="py-4">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-4 text-gray-600">{item.sold}</td>

                <td className="py-4 text-gray-600">{item.returnRate}</td>

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
