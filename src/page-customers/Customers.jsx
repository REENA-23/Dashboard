import React from "react";
import { FaTrash, FaEye, FaEdit, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Customers() {
  const data = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Customers</h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2 bg-white w-full sm:w-64"
          />

          <button
            onClick={() => navigate("/add-customer")}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <FaPlus />
            Add Customer
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-300 mb-6">
        <div className="flex gap-6 text-gray-500 overflow-x-auto whitespace-nowrap">
          <button className="text-black border-b-2 border-orange-500 pb-2">
            All
          </button>
          <button>New</button>
          <button>Returning</button>
          <button>Abandoned Checkouts</button>
          <button>Email Subscribers</button>
        </div>
      </div>

      {/* MOBILE CARDS (UNCHANGED) */}
      <div className="block md:hidden space-y-4">
        {data.map((i) => (
          <div key={i} className="border rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 pl-4 rounded-md shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Customers Name</p>
                <p className="text-xs text-gray-500">customerr@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Phone:</span>
              <span>+91 7020637046</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Status:</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
                New
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Date:</span>
              <span>22/06/2025 11:25 AM</span>
            </div>

            <div className="flex justify-end gap-2">
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
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[1000px] text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 text-center">Sr.</th>
              <th className="py-3 text-center">Name</th>
              <th className="py-3 text-center">Email id</th>
              <th className="py-3 text-center">Phone Number</th>
              <th className="py-3 text-center">Status</th>
              <th className="py-3 text-center">Date & Time</th>
              <th className="py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-4 text-gray-600 text-center">{i}</td>

                <td className="py-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-md shrink-0" />
                  <span className="text-gray-700 font-medium">
                    Customers Name
                  </span>
                </td>

                <td className="py-4 text-gray-600 text-center">
                  customerr@gmail.com
                </td>
                <td className="py-4 text-gray-600 text-center">
                  +91 7020637046
                </td>

                <td className="py-4 text-center">
                  <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                </td>

                <td className="py-4 text-gray-600 text-center">
                  22/06/2025 Sun <br /> 11:25 AM
                </td>

                <td className="py-4">
                  <div className="flex gap-2 flex-wrap justify-center">
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
