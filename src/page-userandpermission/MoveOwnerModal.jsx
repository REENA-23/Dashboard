import { useState } from "react";

export default function MoveOwnerModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-[510px] overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-[76px] bg-[#F0F5F9] border-b">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700">
            Move to new owner
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input className="w-full h-10 sm:h-11 px-3 border rounded-lg text-sm" />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Email Id
            </label>
            <input
              type="email"
              className="w-full h-10 sm:h-11 px-3 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              className="w-full h-10 sm:h-11 px-3 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1">
              Enter your password to confirm
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-10 sm:h-11 px-3 pr-14 border rounded-lg text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="w-full h-10 sm:h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-sm sm:text-base mt-2">
            Move to new owner
          </button>
        </div>
      </div>
    </div>
  );
}
