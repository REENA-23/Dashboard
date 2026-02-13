import { useState } from "react";
import { FaSearch, FaTimes, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DiscountPage() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="p-4 sm:p-6 bg-[#ffffff] rounded-lg min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-switzer font-semibold">Discount</h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <FaSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-9 pr-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-orange-500 text-white px-4 py-2 text-[15px] font-semibold rounded-lg"
          >
            Create Discount
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-24 sm:gap-16 font-switzer border-b border-gray-100 mb-4 text-[15px] overflow-x-auto  text-decoration-line:underline">
        <Tab active text="All" />
        <Tab text="Active" />
        <Tab text="Scheduled" />
        <Tab text="Expired" />
      </div>

      {/*  MOBILE CARDS  */}
      <div className="block md:hidden space-y-4">
        {data.map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl border p-4 shadow-sm space-y-3"
          >
            <div>
              <p className="font-semibold text-[14px] text-gray-800">SHIPFREE</p>
              <p className="text-[13px] font-medium text-gray-500">
                Free Shipping on all products
              </p>
            </div>

            <div className="flex justify-between text-[14px] font-semibold text-gray-600">
              <span>Status</span>
              {i === 4 ? (
                <Status text="Expired" color="red" />
              ) : i === 3 ? (
                <Status text="Scheduled" color="blue" />
              ) : (
                <Status text="Active" color="green" />
              )}
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Method</span>
              <span>Code</span>
            </div>

            <div className="flex justify-between text-[15px] text-gray-600">
              <span>Type</span>
              <span className="text-[14px]">Shipping Discount</span>
            </div>

            <div className="flex justify-between text-[15px] text-gray-600">
              <span>Used</span>
              <span className="text-[14px]">0</span>
            </div>
          </div>
        ))}
      </div>

      {/*  DESKTOP TABLE  */}
      <div className="hidden md:block bg-white rounded-xl overflow-x-auto">
        <table className="w-full text-[15px] min-w-[900px]">
          <thead className="border-b border-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Sr.</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Combinations</th>
              <th className="p-4 text-left">Used</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.map((i) => (
              <tr key={i} className="text-gray-700">
                <td className="p-4">{i}</td>

                <td className="p-4">
                  <p className="font-semibold">SHIPFREE</p>
                  <p className="text-[13px] text-gray-500">
                    Free Shipping on all products
                  </p>
                </td>

                <td className="p-4">
                  {i === 4 ? (
                    <Status text="Expired" color="red" />
                  ) : i === 6 ? (
                    <Status text="Scheduled" color="blue" />
                  ) : (
                    <Status text="Active" color="green" />
                  )}
                </td>

                <td className="p-4">Code</td>

                <td className="p-4">
                  <p className="font-medium">Shipping Discount</p>
                  <p className="text-xs text-gray-500">Free shipping</p>
                </td>

                <td className="p-4">
                  <p>Product Discount</p>
                  <p className="text-xs text-gray-500">Shipping Free</p>
                </td>

                <td className="p-4">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#f3f6f9] rounded-t-xl">
              <h3 className="font-semibold text-gray-700 text-[20px]">
                Select Discount Type
              </h3>

              <button onClick={() => setOpenModal(false)}>
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100">
              <ModalItem
                title="Amount off Products"
                subtitle="Product discount"
                onClick={() => navigate("/amountproductpage")}
              />

              <ModalItem
                title="Amount off Order"
                subtitle="Order discount"
                onClick={() => navigate("/amountorderpage")}
              />

              <ModalItem
                title="Buy X Get Y"
                subtitle="Product discount"
                onClick={() => navigate("/buyxgetypage")}
              />

              <ModalItem
                title="Free Shipping"
                subtitle="Product discount"
                onClick={() => navigate("/freeshippage")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Components */

function Tab({ text, active }) {
  return (
    <button
      className={`pb-3 font-medium ${
        active
          ? "text-orange-500 border-b-2 border-orange-500"
          : "text-gray-500"
      }`}
    >
      {text}
    </button>
  );
}

function Status({ text, color }) {
  const styles = {
    green: "bg-green-50 text-green-600",
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-500",
  };

  return (
    <span className={`px-3 py-1 rounded-md text-xs font-medium ${styles[color]}`}>
      {text}
    </span>
  );
}

function ModalItem({ title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer"
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <FaChevronRight className="text-gray-400" />
    </div>
  );
}
