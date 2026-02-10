export default function AddStaffCard() {
  return (
    <div className="bg-[#F0F5F9] rounded-lg p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
        Add Staff
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-4">
        Basic Details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="text-xs text-gray-500">First Name</label>
          <input
            className="w-full mt-1 p-2 rounded border text-sm"
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Last Name</label>
          <input
            className="w-full mt-1 p-2 rounded border text-sm"
            placeholder="Enter last name"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Email Id</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded border text-sm"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">Mobile Number</label>
          <input
            type="tel"
            className="w-full mt-1 p-2 rounded border text-sm"
            placeholder="Enter mobile number"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs text-gray-500">Address</label>
          <input
            className="w-full mt-1 p-2 rounded border text-sm"
            placeholder="Enter address"
          />
        </div>
      </div>
    </div>
  );
}
