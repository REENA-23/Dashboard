import { useNavigate } from "react-router-dom";
import { FaTrash, FaEye, FaEdit, FaPlus } from "react-icons/fa";

export default function Customers() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#f5f8fb] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Customers</h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2 bg-white"
          />

          <button
            onClick={() => navigate("/addcustomerpage")}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <FaPlus />
            Add Customer
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-300 mb-6 text-gray-500">
        <button className="text-black border-b-2 border-orange-500 pb-2">
          All
        </button>
        <button>New</button>
        <button>Returning</button>
        <button>Abandoned Checkouts</button>
        <button>Email Subscribers</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-300 text-gray-600">
            <tr>
              <th className="p-4 text-left">Sr.</th>
              <th className="text-left">Name</th>
              <th className="text-left">Email id</th>
              <th className="text-left">Phone Number</th>
              <th className="text-left">Status</th>
              <th className="text-left">Date & Time</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b border-gray-300">
                <td className="p-4">{i}</td>

                <td className="flex items-center gap-3 py-4">
                  <div className="w-10 h-10 bg-gray-300 rounded" />
                  Customers Name
                </td>

                <td>customerr@gmail.com</td>
                <td>+91 7020637046</td>

                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
                    New
                  </span>
                </td>

                <td className="text-gray-600">
                  22/06/2025 Sun <br /> 11:25 AM
                </td>

                <td className="flex gap-2 py-4">
                  <button className="border border-orange-400 text-orange-500 px-3 py-1 rounded flex items-center gap-1">
                    <FaEye />
                    View
                  </button>

                  <button className="border border-green-400 text-green-600 px-3 py-1 rounded flex items-center gap-1">
                    <FaEdit />
                    Edit
                  </button>

                  <button className="border border-red-400 text-red-500 px-3 py-1 rounded flex items-center justify-center">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
