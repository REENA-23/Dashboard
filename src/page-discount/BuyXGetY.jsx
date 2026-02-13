import { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BuyXGetY() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("code");
  const [applyType, setApplyType] = useState("collection");

  return (
    <div className="p-4 sm:p-6  min-h-screen">
      <h2 className="text-[20px] sm:text-xl font-semibold mb-6 ">
        Create Product Discount
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Amount Section */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-medium text-[20px] mb-4 ">Buy X Get Y</h3>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-3 text-sm">
              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={method === "code"}
                  onChange={() => setMethod("code")}
                />
                Discount Code
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={method === "auto"}
                  onChange={() => setMethod("auto")}
                />
                Automatic Discount
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 font-swizer text-[#6C6C6D]">
              <input
                type="text"
                placeholder="Discount Code"
                className="flex-1 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
              />

              <button
                onClick={() => navigate("/products/add-product")}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-switzer "
              >
                Generate
              </button>
            </div>

            <p className="text-green-500 text-xs mt-2 font-switzer text-[#6C6C6D]">
              Customer must add this code at checkout.
            </p>
          </div>

          {/* Customer Buys */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">
              Customer Buys
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                placeholder="Minimum purchase amount"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none text-[#6C6C6D]"
              />

              <span className="text-orange-500 self-center font-switzer text-[#6C6C6D]">
                or
              </span>

              <input
                type="number"
                placeholder="Minimum quantity of items"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none text-[#6C6C6D]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 my-3 text-sm">
              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={applyType === "collection"}
                  onChange={() => setApplyType("collection")}
                />
                Specific Collection
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={applyType === "product"}
                  onChange={() => setApplyType("product")}
                />
                Specific Product
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                placeholder="Search Collection"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none text-[#6C6C6D]"
              />
              <button
                onClick={() => navigate("/products/add-product")}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-switzer"
              >
                Browse
              </button>
            </div>
          </div>

          {/* Customer Gets */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">
              Customer Gets
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                placeholder="Minimum purchase amount"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none text-[#6C6C6D]"
              />

              <span className="text-orange-500 self-center font-switzer text-[#6C6C6D]">
                or
              </span>

              <input
                type="number"
                placeholder="Minimum quantity of items"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none text-[#6C6C6D]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 my-3 text-sm">
              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={applyType === "collection"}
                  onChange={() => setApplyType("collection")}
                />
                Specific Collection
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input
                  type="radio"
                  checked={applyType === "product"}
                  onChange={() => setApplyType("product")}
                />
                Specific Product
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                placeholder="Search Collection"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none text-[#6C6C6D]"
              />
              <button
                onClick={() => navigate("/products/add-product")}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-switzer"
              >
                Browse
              </button>
            </div>

            <input
              placeholder="Set a maximum number of uses per order"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none text-[#6C6C6D]"
            />
          </div>

          {/* Combinations */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-3 font-switzer text-[#6C6C6D]">
              Combinations
            </h3>
            <h3 className="mb-2">
              CODE55{" "}
              <span className="text-sm text-gray-600 text-[#6C6C6D]">
                combined with:
              </span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input type="checkbox" defaultChecked /> Product Discount
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox font-switzer text-[#6C6C6D]" /> Order
                Discount
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox font-switzer text-[#6C6C6D]" /> Shipping
                Discount
              </label>
            </div>
          </div>

          {/* Active Dates */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">
              Active Dates
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">
                  Start Date
                </label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaCalendarAlt size={14} className="text-orange-500" />
                  <input
                    type="date"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">
                  Start Time
                </label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaClock size={14} className="text-orange-500" />
                  <input
                    type="time"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">
                  End Date
                </label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaCalendarAlt size={14} className="text-orange-500" />
                  <input
                    type="date"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">
                  End Time
                </label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaClock size={14} className="text-orange-500" />
                  <input
                    type="time"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl h-fit">
          <h3 className="font-semibold mb-4 font-switzer text-[20px]">
            Buy X Get Y
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <p className="font-medium text-black font-switzer">
                Automatic Discount
              </p>
              <p>Buy 1 Get 1</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">
                Customer Buys
              </p>
              <p>dress, suit set, tops</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">
                Customer Gets
              </p>
              <p>dress, suit set, tops</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">
                Combinations
              </p>
              <p>Combined with Order Discount</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg font-switzer">
          Cancel
        </button>

        <button
          onClick={() => navigate("/productpage")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-switzer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
