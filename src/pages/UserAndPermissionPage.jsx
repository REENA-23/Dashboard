import { useState } from "react";
import AddStaffCard from "../page-userandpermission/AddStaffCard";
import BusinessOwnerCard from "../page-userandpermission/BusinessOwnerCard";
import StaffPermissions from "../page-userandpermission/StaffPermissions";
import MoveOwnerModal from "../page-userandpermission/MoveOwnerModal";

export default function UserAndPermissionPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-4 sm:p-6 bg-[#FFFFFF] min-h-screen">
      <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        User & Permissions
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <AddStaffCard />
        </div>

        <div>
          <BusinessOwnerCard onMoveClick={() => setOpenModal(true)} />
        </div>
      </div>

      {/* Permissions */}
      <div className="mt-4 sm:mt-6">
        <StaffPermissions />
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-4 sm:mt-6 bg-white p-3 sm:p-4 rounded">
        <button className="w-full sm:w-auto border border-orange-400 text-orange-500 px-6 py-2 rounded">
          Cancel
        </button>
        <button className="w-full sm:w-auto bg-orange-500 text-white px-6 py-2 rounded">
          Add Staff
        </button>
      </div>

      <MoveOwnerModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
