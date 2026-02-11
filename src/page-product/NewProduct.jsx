import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaImage, FaChevronDown, FaPlus } from "react-icons/fa";

export default function NewProduct() {
  const [success, setSuccess] = useState(false);
  const [discount, setDiscount] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  useEffect(() => {
    if (success) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [success]);

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-[#f6f9fc] min-h-screen">
      {/* Success Message */}
      {success && (
        <div className="mb-3 flex justify-end">
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow">
            <FaCheckCircle />
            <span>Product Added Successfully!</span>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-900">
          Add New Product <span className="text-orange-500">(2344)</span>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="space-y-4">
              {/* Product Images */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Images</p>
                <div className="border border-dashed border-gray-300 bg-[#f4f4f4] rounded-lg p-4 text-center">
                  <div className="flex gap-3 justify-center mb-3 flex-wrap">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-[#1f1f1f] rounded-md" />
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-[#1f1f1f] rounded-md" />
                    <div className="w-16 h-20 sm:w-20 sm:h-24 bg-[#1f1f1f] rounded-md" />
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 mx-auto bg-black text-white px-3 py-1.5 rounded text-sm"
                  >
                    <FaPlus />
                    Add More Images
                  </button>
                </div>
              </div>

              {/* Product Name */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Name</p>
                <input
                  type="text"
                  placeholder="Anarkali Dress"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none"
                />
              </div>

              {/* Category + Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Select Product Category
                  </p>
                  <div className="relative">
                    <select className="w-full bg-[#f3f8fb] border border-gray-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none text-gray-800">
                      <option>Dress</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-xs pointer-events-none" />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Select Occasion Type
                  </p>
                  <div className="relative">
                    <select className="w-full bg-[#f3f8fb] border border-gray-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none text-gray-800">
                      <option>Festive Wear</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-xs pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Inventory</p>
                  <input
                    type="number"
                    defaultValue={50}
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Inventory Alert</p>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Product Colour */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Colour</p>
                <div className="flex items-center justify-between bg-[#f3f8fb] border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex gap-3">
                    <div className="w-4 h-4 bg-cyan-500 rounded" />
                    <div className="w-4 h-4 bg-teal-300 rounded" />
                    <div className="w-4 h-4 bg-green-600 rounded" />
                    <div className="w-4 h-4 bg-orange-400 rounded" />
                  </div>
                  <FaChevronDown className="text-orange-500 text-xs" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {/* Size Chart */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Size Chart</p>
                <div className="border border-dashed border-gray-300 bg-[#f4f4f4] rounded-lg min-h-[160px] flex flex-col items-center justify-center">
                  <FaImage className="text-orange-500 text-2xl mb-2" />
                  <button
                    type="button"
                    className="bg-black text-white px-4 py-1.5 rounded text-sm"
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Sizes</p>
                <div className="relative">
                  <select className="w-full bg-[#f3f8fb] border border-gray-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none text-gray-800">
                    <option>Select sizes...</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-xs pointer-events-none" />
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Price</p>
                <input
                  type="number"
                  defaultValue={0}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none"
                />
              </div>

              {/* Discount */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Discount Percentage</p>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full accent-orange-500"
                  />
                  <div className="min-w-[48px] text-center bg-[#fff1e8] text-orange-500 text-sm font-medium px-2 py-1 rounded-md">
                    {discount}%
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Product Material</p>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none text-gray-800">
                    <option>Select Material</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-xs pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <button
              type="button"
              className="border border-orange-500 text-orange-500 px-8 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-2 rounded-lg text-sm"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
