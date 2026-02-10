import React, { useState } from "react";
import {
  FaCheckCircle,
  FaImage,
  FaChevronDown,
  FaPlus,
} from "react-icons/fa";

export default function NewProduct() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div>
      {/* Success Message */}
      {success && (
        <div className="mb-1 flex justify-end">
          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow">
            <FaCheckCircle />
            <span>Product Added Successfully!</span>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold mb-6">
          Add New Product <span className="text-orange-500">(2344)</span>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-4">
              {/* Product Images */}
              <div>
                <p className="text-sm mb-1">Product Images</p>

                <div className="border border-dashed border-gray-500 bg-gray-100 rounded-lg p-4 text-center">
                  <div className="flex gap-3 justify-center mb-3">
                    <div className="w-20 h-20 bg-gray-800 rounded" />
                    <div className="w-20 h-20 bg-gray-800 rounded" />
                    <div className="w-20 h-20 bg-gray-800 rounded" />
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 mx-auto bg-black text-white px-4 py-1 rounded text-sm"
                  >
                    <FaPlus />
                    Add More Images
                  </button>
                </div>
              </div>

              {/* Product Name */}
              <div>
                <p className="text-sm mb-1">Product Name</p>
                <input
                  type="text"
                  placeholder="Anarkali Dress"
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-gray-300"
                />
              </div>

              {/* Category + Occasion */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-1">Category</p>
                  <div className="relative">
                    <select className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 appearance-none focus:outline-none">
                      <option>Dress</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-sm pointer-events-none" />
                  </div>
                </div>

                <div>
                  <p className="text-sm mb-1">Occasion</p>
                  <div className="relative">
                    <select className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 appearance-none focus:outline-none">
                      <option>Festive Wear</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-sm pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-1">Inventory</p>
                  <input
                    type="number"
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 focus:outline-none"
                  />
                </div>

                <div>
                  <p className="text-sm mb-1">Alert</p>
                  <input
                    type="number"
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 focus:outline-none"
                  />
                </div>
              </div>

              {/* Product Colour */}
              <div>
                <p className="text-sm mb-1">Product Colour</p>

                <div className="flex items-center justify-between bg-gray-100 border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-cyan-500 rounded" />
                    <div className="w-5 h-5 bg-teal-300 rounded" />
                    <div className="w-5 h-5 bg-green-600 rounded" />
                    <div className="w-5 h-5 bg-orange-400 rounded" />
                  </div>

                  <FaChevronDown className="text-orange-500 text-sm" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              {/* Size Chart */}
              <div>
                <p className="text-sm mb-1">Size Chart</p>

                <div className="border border-dashed border-gray-500 bg-gray-100 rounded-lg p-6 text-center">
                  <FaImage className="mx-auto text-orange-500 text-2xl mb-2" />

                  <button
                    type="button"
                    className="bg-black text-white px-4 py-1 rounded text-sm"
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-sm mb-1">Sizes</p>
                <div className="relative">
                  <select className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 appearance-none focus:outline-none">
                    <option>Select sizes...</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-sm pointer-events-none" />
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm mb-1">Price</p>
                <input
                  type="number"
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 focus:outline-none"
                />
              </div>

              {/* Discount */}
              <div>
                <p className="text-sm mb-1">Discount</p>
                <input
                  type="range"
                  className="w-full accent-orange-500"
                  defaultValue="30"
                />
              </div>

              {/* Material */}
              <div>
                <p className="text-sm mb-1">Material</p>
                <div className="relative">
                  <select className="w-full bg-gray-100 border border-gray-200 rounded-lg p-2 appearance-none focus:outline-none">
                    <option>Select Material</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-3 text-orange-500 text-sm pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
