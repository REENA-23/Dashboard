import React from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function Category() {
  const data = [
    { id: 1, products: 20, status: "Active" },
    { id: 2, products: 20, status: "Draft" },
    { id: 3, products: 30, status: "Active" },
    { id: 4, products: 35, status: "Draft" },
    { id: 5, products: 20, status: "Active" },
    { id: 6, products: 13, status: "Draft" },
    { id: 7, products: 22, status: "Active" },
    { id: 8, products: 12, status: "Active" },
  ];

  const getStatusStyle = (status) => {
    if (status === "Active") return "bg-green-100 text-green-600";
    if (status === "Draft") return "bg-orange-100 text-orange-500";
    return "";
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold">Categories</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-full sm:w-48"
            />
          </div>

          {/* Add Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
            Add new Category
          </button>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="block md:hidden space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-md" />
              <div>
                <p className="font-medium text-gray-800">Category Name</p>
                <p className="text-xs text-gray-500">Festive Wear</p>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Products:</span>
              <span>{item.products}</span>
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

      {/*  DESKTOP TABLE  */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[1100px]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-[15px] font-switzer">
                <th className="py-3 text-left">Sr.</th>
                <th className="py-3 text-left">Category</th>
                <th className="py-3 text-left">No. of Products</th>
                <th className="py-3 text-left">Occasion Type</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-left">Date & Time</th>
                <th className="py-3 text-left">Display</th>
                <th className="py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="text-[14px] font-switzer">
              {data.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4">{item.id}</td>

                  <td className="py-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-md" />
                    <span className="font-medium text-gray-700">
                      Category Name
                    </span>
                  </td>

                  <td className="py-4 text-gray-600">{item.products}</td>

                  <td className="py-4 text-gray-600">
                    Festive <br /> Wear
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-4 text-gray-600 text-xs">
                    22/06/2025 Sun <br /> 11:25 AM
                  </td>

                  <td className="py-4">
                    <div className="w-10 h-5 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5" />
                    </div>
                  </td>

                  <td className="py-4 flex gap-2">
                    <button className="px-3 py-1 text-orange-500 border border-orange-300 rounded text-xs bg-orange-50 flex items-center gap-1">
                      <FaEye size={12} /> View
                    </button>
                    <button className="px-3 py-1 text-green-600 border border-green-300 rounded text-xs bg-green-50 flex items-center gap-1">
                      <FaEdit size={12} /> Edit
                    </button>
                    <button className="px-3 py-1 text-red-500 border border-red-300 rounded text-xs bg-red-50 flex items-center gap-1">
                      <FaTrash size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
