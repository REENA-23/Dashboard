import { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AmountOrder() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("code");
  const [applyType, setApplyType] = useState("collection");

  return (
    <div className="p-4 sm:p-6 bg-[#f6f7f8] min-h-screen">
      <h2 className="text-[20p] font-switzer sm:text-xl font-semibold mb-6">
        Create Order Discount
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Amount Section */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 text-[20px]">Amount off Orders</h3>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-3 text-sm font-switzer text-[#6C6C6D]">
              <label className="flex items-center gap-2 text-[#6C6C6D]">
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

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Discount Code"
                className="flex-1 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
              />

              <button
                onClick={() => navigate("/products/add-product")}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-switzer"
              >
                Generate
              </button>
            </div>

            <p className="text-green-500 text-xs mt-2 font-switzer text-[#6C6C6D]">
              Customer must add this code at checkout.
            </p>
          </div>

          {/* Add Value */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">Add Value</h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                placeholder="Add Value in Percentage"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
              />

              <span className="text-orange-500 self-center font-switzer text-[#6C6C6D]">or</span>

              <input
                type="number"
                placeholder="Add Value in Fixed Amount"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
              />

              <button
                onClick={() => navigate("/products/add-product")}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-switzer "
              >
                Browse
              </button>
            </div>
          </div>

          {/* Minimum Purchase */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">
              Minimum Purchase Requirement
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                placeholder="Minimum purchase amount"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
              />

              <span className="text-orange-500 self-center font-switzer text-[#6C6C6D]">or</span>

              <input
                type="number"
                placeholder="Minimum quantity"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
              />
            </div>
          </div>

          {/* Maximum Discount Uses */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-3 font-switzer text-[#6C6C6D]">Maximum Discount Uses</h3>

            <div className="flex flex-col gap-3 text-sm mb-3">
              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input type="checkbox" defaultChecked /> Limit number of times
                this discount can be used in total
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input type="checkbox" /> Limit to one use per customer
              </label>
            </div>

            <input
              type="number"
              placeholder="Enter limit"
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-switzer text-[#6C6C6D]"
            />
          </div>

          {/* Combinations */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl font-switzer text-[#6C6C6D]">
            <h3 className="font-semibold mb-3 text-[#6C6C6D]">Combinations</h3>
            <h3 className="mb-2">
              CODE55 <span className="text-sm text-gray-600 text-[#6C6C6D]">combined with:</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm font-switzertext-[#6C6C6D]">
              <label className="flex items-center gap-2 text-[#6C6C6D]">
                <input type="checkbox" defaultChecked /> Product Discount
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input type="checkbox" /> Order Discount
              </label>

              <label className="flex items-center gap-2 font-switzer text-[#6C6C6D]">
                <input type="checkbox" /> Shipping Discount
              </label>
            </div>
          </div>

          {/* Active Dates */}
          <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl">
            <h3 className="font-semibold mb-4 font-switzer text-[#6C6C6D]">Active Dates</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">Start Date</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaCalendarAlt size={14} className="text-orange-500" />
                  <input
                    type="date"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">Start Time</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaClock size={14} className="text-orange-500 font-switzer" />
                  <input
                    type="time"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">End Date</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <FaCalendarAlt size={14} className="text-orange-500" />
                  <input
                    type="date"
                    className="w-full outline-none bg-transparent text-[#6C6C6D]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-switzer text-[#6C6C6D]">End Time</label>
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

        {/* Right Summary */}
        <div className="bg-[#f3f6f9] p-4 sm:p-5 rounded-xl h-fit">
          <h3 className="font-semibold mb-4 text-[#6C6C6D] text-[20px] font-switzer">Amount off Orders</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <p className="font-medium text-black font-switzer">Discount Code</p>
              <p>CC43567X45</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">Value</p>
              <p>20%</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">
                Minimum Purchase Requirement
              </p>
              <p>2 products</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">Maximum Discount Uses</p>
              <p>Limit to one use per customer</p>
            </div>

            <div>
              <p className="font-medium text-black font-switzer">Combinations</p>
              <p>Combined with Order Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
