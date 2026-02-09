import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./page-dashboard/SideMenu";
import Searchs from "./page-dashboard/Searchs";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 md:ml-[270px]">
        {/* Top Bar */}
        <Searchs onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main className="mt-16 p-4 md:p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
