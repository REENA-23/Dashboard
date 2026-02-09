import React, { useEffect, useState } from "react";
import {
  FaThLarge,
  FaSlidersH,
  FaBoxOpen,
  FaUsers,
  FaShoppingBag,
  FaPercentage,
  FaUser,
  FaChevronRight,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function SideMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [openMenu, setOpenMenu] = useState(null);

  // Sync sidebar with URL
  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/customize")) {
      setOpenMenu("customize");

      if (path.includes("navbar")) setActiveMenu("navbar");
      else if (path.includes("sliders")) setActiveMenu("sliders");
      else if (path.includes("section")) setActiveMenu("section");
      else if (path.includes("review")) setActiveMenu("review");
      else if (path.includes("category")) setActiveMenu("category");
      else setActiveMenu("customize");
    } else if (path.startsWith("/dashboard")) {
      setActiveMenu("dashboard");
      setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (name) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const customizeChildren = [
    "navbar",
    "sliders",
    "sections",
    "review",
    "category",
  ];
  const isCustomizeActive = customizeChildren.includes(activeMenu);

  const mainItem = (isActive) =>
    `flex items-center w-full px-5 py-3 rounded-xl transition text-sm
     ${isActive ? "bg-orange-500 text-white font-medium" : "text-gray-500 hover:bg-gray-100"}`;

  const subItem = (name) =>
    `ml-10 mr-4 px-4 py-2 rounded-lg text-sm text-left transition
     ${
       activeMenu === name
         ? "bg-orange-100 text-orange-600 font-medium"
         : "text-gray-500 hover:text-black"
     }`;

  const arrow =
    "ml-auto w-4 h-4 flex items-center justify-center text-gray-400";

  return (
    <>
      {/* Backdrop (mobile) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[270px] bg-white border-r z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
            TWB
          </div>

          {/* Close (mobile) */}
          <button className="md:hidden text-xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 px-4 space-y-2 text-sm overflow-y-auto">
          {/* DASHBOARD */}
          <button
            onClick={() => {
              navigate("/dashboard");
              onClose?.();
            }}
            className={mainItem(activeMenu === "dashboard")}
          >
            <FaThLarge />
            <span className="ml-3">Dashboard</span>
          </button>

          {/* CUSTOMIZE */}
          <button
            onClick={() => toggleMenu("customize")}
            className={mainItem(
              isCustomizeActive || activeMenu === "customize",
            )}
          >
            <FaSlidersH />
            <span className="ml-3">Customize</span>
            <span className={arrow}>
              {openMenu === "customize" ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </span>
          </button>

          {openMenu === "customize" && (
            <div className="space-y-1">
              <button
                onClick={() => {
                  navigate("/customize/navbar");
                  onClose?.();
                }}
                className={subItem("navbar")}
              >
                Navbar
              </button>
              <button
                onClick={() => {
                  navigate("/customize/sliders");
                  onClose?.();
                }}
                className={subItem("sliders")}
              >
                Sliders
              </button>
              <button
                onClick={() => {
                  navigate("/customize/sections");
                  onClose?.();
                }}
                className={subItem("section")}
              >
                Sections
              </button>
              
              <button className={subItem("review")}>Review</button>
              <button className={subItem("category")}>Category</button>
            </div>
          )}

          {/* PRODUCTS */}
          <button className={mainItem(activeMenu === "products")}>
            <FaBoxOpen />
            <span className="ml-3">Products</span>
            <span className={arrow}>
              <FaChevronRight />
            </span>
          </button>

          {/* CUSTOMERS */}
          <button className={mainItem(activeMenu === "customers")}>
            <FaUser />
            <span className="ml-3">Customers</span>
            <span className={arrow}>
              <FaChevronRight />
            </span>
          </button>

          {/* ORDERS */}
          <button className={mainItem(activeMenu === "orders")}>
            <FaShoppingBag />
            <span className="ml-3">Orders</span>
            <span className={arrow}>
              <FaChevronRight />
            </span>
          </button>

          {/* DISCOUNTS */}
          <button className={mainItem(activeMenu === "discounts")}>
            <FaPercentage />
            <span className="ml-3">Discounts</span>
          </button>

          {/* USERS */}
          <button className={mainItem(activeMenu === "users")}>
            <FaUsers />
            <span className="ml-3">Users & Permissions</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
