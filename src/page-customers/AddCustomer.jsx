import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/customerpage");
  };

  return (
    <div className="p-6 pt-8 bg-[#ffffff] rounded-xl min-h-screen">
      <h2 className="text-xl font-semibold font-switzer mb-6">Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* LEFT FORM */}
          <div className="lg:col-span-2 bg-[#F0F5F9] rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-gray-600">Basic Details</h3>

            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email Id" />
              <Input label="Mobile Number" />
            </div>

            <div className="mt-4">
              <Input label="Address" full />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input label="City" />
              <Input label="Postal Code" />
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="rounded-xl p-6 bg-[#F0F5F9]">
            <h3
              onClick={() => navigate("/add-order")}
              className="font-semibold font-xl font-switzer mb-4 text-gray-600 cursor-pointer hover:text-orange-500"
            >
              Customer
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-black">Customer First Name</p>
                Jerry Customer
              </div>

              <div>
                <p className="font-medium text-black">Customer Last Name</p>
                Jerry Customer
              </div>

              <div>
                <p className="font-medium text-black">Contact Information</p>
                Jerry@gmail.com <br />
                +91 99999 99999
              </div>

              <div>
                <p className="font-medium text-black">Address</p>
                Lorem ipsum dolor sit amet <br />
                City, Postal Code
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8 pt-8">
          <button
            type="button"
            className="border border-gray-400 px-6 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={() => navigate("/customerpage")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
}

/* Input Component */
function Input({ label, full }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <p className="text-sm mb-1 text-gray-600">{label}</p>

      <input
        type="text"
        className="w-full bg-white border border-gray-200 rounded-lg p-2 
        focus:outline-none focus:border-gray-300"
      />
    </div>
  );
}
