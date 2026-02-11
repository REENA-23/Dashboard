import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddOrder() {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-[#f6f9fc] min-h-screen">
      <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6">
        <h2 className="text-lg font-semibold mb-4">Add Order</h2>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#f3f8fb] rounded-lg p-4">
              <h3 className="font-medium mb-3">Product</h3>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none bg-white"
                />
                <button
                  onClick={() => navigate("/products/add-product")}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm"
                >
                  Browse
                </button>
              </div>

              <div className="border-t pt-3">
                <div className="grid grid-cols-4 text-xs text-gray-500 mb-2">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span>Action</span>
                </div>

                <div className="grid grid-cols-4 items-center text-sm gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-md shrink-0" />
                    <span className="text-gray-700">Product Name</span>
                  </div>
                  <span>1 item</span>
                  <span>₹2000</span>
                  <button className="text-red-500 border border-red-300 rounded p-1 w-8">
                    🗑
                  </button>
                </div>
              </div>
            </div>

            {/* PAYMENT CARD */}
            <div className="bg-[#f3f8fb] rounded-lg p-4">
              <h3 className="font-medium mb-3">Payment</h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>1 item</span>
                  <span>₹2000</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-500 cursor-pointer">
                    Add Shipping
                  </span>
                  <span>–</span>
                  <span>₹0</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-500 cursor-pointer">
                    Add discount
                  </span>
                  <span>–</span>
                  <span>₹0</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-500 cursor-pointer">Tax</span>
                  <span>Not calculated</span>
                  <span>₹0</span>
                </div>

                <div className="flex justify-between font-semibold text-gray-800 pt-2">
                  <span>Total</span>
                  <span>₹2000</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CUSTOMER */}
          <div className="space-y-4">
            {!showCustomerDetails ? (
              /* CUSTOMER SEARCH CARD */
              <div
                className="bg-[#f3f8fb] rounded-lg p-4 cursor-pointer"
                onClick={() => setShowCustomerDetails(true)}
              >
                <h3 className="font-medium mb-3">Customer</h3>
                <input
                  type="text"
                  placeholder="Search or Create Customer"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none bg-white"
                  readOnly
                />
              </div>
            ) : (
              /* CUSTOMER DETAILS CARD */
              <div className="bg-[#f3f8fb] rounded-lg p-4 text-sm text-gray-700 space-y-4">
                <h3 className="font-medium">Customer</h3>

                <div>
                  <p className="font-medium">Customer Name</p>
                  <p className="text-gray-500 text-xs">Jerry Customer</p>
                </div>

                <div>
                  <p className="font-medium">Order</p>
                  <p className="text-gray-500 text-xs">1 Order</p>
                </div>

                <div>
                  <p className="font-medium">Contact Information</p>
                  <p className="text-gray-500 text-xs">jerry@gmail.com</p>
                  <p className="text-gray-500 text-xs">+91 99999 99999</p>
                </div>

                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-500 text-xs">
                    Lorem ipsum dolor sit amet, sit lorem amet.
                  </p>
                </div>

                <button
                  onClick={() => setShowCustomerDetails(false)}
                  className="text-xs text-orange-500 underline"
                >
                  Change customer
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button className="px-5 py-2 rounded-lg border border-orange-400 text-orange-500 text-sm">
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg bg-orange-500 text-white text-sm">
            Add Order
          </button>
        </div>
      </div>
    </div>
  );
}
