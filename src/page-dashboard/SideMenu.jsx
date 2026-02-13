import React, { useEffect, useState } from "react";
import {
  FaThLarge,
  FaSlidersH,
  FaBoxOpen,
  FaUsers,
  FaShoppingBag,
  FaPercentage,
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
      else if (path.includes("sections")) setActiveMenu("sections");
      else if (path.includes("review")) setActiveMenu("review");
      else if (path.includes("category")) setActiveMenu("category");
      else setActiveMenu("customize");
    } else if (path.startsWith("/products")) {
      setOpenMenu("products");

      if (path.includes("add-product")) setActiveMenu("add-product");
      else if (path.includes("view-products")) setActiveMenu("view-products");
      else if (path.includes("inventory")) setActiveMenu("inventory");
      else if (path.includes("categories")) setActiveMenu("categories");
      else setActiveMenu("products");
    } else if (path.startsWith("/customers")) {
      setActiveMenu("customers");
      setOpenMenu(null);
    } else if (path.startsWith("/orders")) {
      setOpenMenu("orders");

      if (path.includes("all-orders")) setActiveMenu("all-orders");
      else if (path.includes("drafts")) setActiveMenu("drafts");
      else if (path.includes("abandoned")) setActiveMenu("abandoned");
      else setActiveMenu("orders");
    } else if (path.startsWith("/discounts")) {
      setActiveMenu("discounts");
      setOpenMenu(null);
    } else if (path.startsWith("/userandpermission")) {
      setActiveMenu("users");
      setOpenMenu(null);
    } else if (path.startsWith("/dashboard")) {
      setActiveMenu("dashboard");
      setOpenMenu(null);
    } else if (path.startsWith("/dashboard")) {
      setActiveMenu("dashboard");
      setOpenMenu(null);
    } else {
      setActiveMenu(null);
      setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (name) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };
  const productsChildren = [
    "add-product",
    "view-products",
    "inventory",
    "categories",
  ];
  const ordersChildren = ["all-orders", "drafts", "abandoned"];

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
     ${
       isActive
         ? "bg-orange-500 text-white font-medium"
         : "text-gray-500 hover:bg-gray-100"
     }`;

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
      {/* Backdrop*/}
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
          md:translate-x-0 font-inter 
        `}
      >
        {/* Header */}
        <div className="flex justify-center items-center px-6 py-12">
          <div className="w-[64px] h-[64px] font-ivymode rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
            TWB
          </div>

          {/* Close (mobile) */}
          <button className="md:hidden text-xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 px-4 space-y-2 overflow-y-auto">
          {/* DASHBOARD */}
          <button
            onClick={() => {
              navigate("/dashboard");
              onClose?.();
            }}
            className={mainItem(activeMenu === "dashboard")}
          >
            <FaThLarge />
            <span className="ml-3 text-base">Dashboard</span>
          </button>

          {/* CUSTOMIZE */}
          <button
            onClick={() => {
              if (openMenu !== "customize") {
                setOpenMenu("customize");
                setActiveMenu("navbar");
                navigate("/customize/navbar");
              } else {
                setOpenMenu(null);
              }
            }}
            className={mainItem(
              isCustomizeActive || activeMenu === "customize",
            )}
          >
            <FaSlidersH />
            <span className="ml-3 text-base">Customize</span>
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
                className={subItem("sections")}
              >
                Sections
              </button>

              <button
                onClick={() => {
                  navigate("/customize/review");
                  onClose?.();
                }}
                className={subItem("review")}
              >
                Review
              </button>

              <button
                onClick={() => {
                  navigate("/customize/category");
                  onClose?.();
                }}
                className={subItem("category")}
              >
                Category
              </button>
            </div>
          )}

          {/* PRODUCTS */}
          <button
            onClick={() => {
              if (openMenu !== "products") {
                setOpenMenu("products");
                setActiveMenu("add-product");
                navigate("/products/add-product");
              } else {
                setOpenMenu(null);
              }
            }}
            className={mainItem(productsChildren.includes(activeMenu))}
          >
            <FaBoxOpen />
            <span className="ml-3 text-base">Products</span>
            <span className={arrow}>
              {openMenu === "products" ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </button>

          {openMenu === "products" && (
            <div className="space-y-1">
              <button
                onClick={() => navigate("/products/add-product")}
                className={subItem("add-product")}
              >
                Add Product
              </button>
              <button
                onClick={() => navigate("/products/view-products")}
                className={subItem("view-products")}
              >
                View Products
              </button>
              <button
                onClick={() => navigate("/products/inventory")}
                className={subItem("inventory")}
              >
                Inventory
              </button>
              <button
                onClick={() => navigate("/products/categories")}
                className={subItem("categories")}
              >
                Categories
              </button>
            </div>
          )}

          {/* CUSTOMERS */}
          <button
            onClick={() => {
              navigate("/customers");
              onClose?.();
            }}
            className={mainItem(activeMenu === "customers")}
          >
            <FaUsers />
            <span className="ml-3 text-base">Customers</span>
          </button>

          {/* ORDERS */}
          <button
            onClick={() => {
              if (openMenu !== "orders") {
                setOpenMenu("orders");
                setActiveMenu("all-orders");
                navigate("/orders/all-orders");
              } else {
                setOpenMenu(null);
              }
            }}
            className={mainItem(ordersChildren.includes(activeMenu))}
          >
            <FaShoppingBag />
            <span className="ml-3 text-base">Orders</span>
            <span className={arrow}>
              {openMenu === "orders" ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </button>

          {openMenu === "orders" && (
            <div className="space-y-1">
              <button
                onClick={() => navigate("/orders/all-orders")}
                className={subItem("all-orders")}
              >
                All Orders
              </button>
              <button
                onClick={() => navigate("/orders/drafts")}
                className={subItem("drafts")}
              >
                Drafts
              </button>
              <button
                onClick={() => navigate("/orders/abandoned")}
                className={subItem("abandoned")}
              >
                Abandoned Checkouts
              </button>
            </div>
          )}

          {/* DISCOUNTS */}
          <button
            onClick={() => {
              navigate("/discounts");
              onClose?.();
            }}
            className={mainItem(activeMenu === "discounts")}
          >
            <FaPercentage />
            <span className="ml-3 text-base">Discounts</span>
          </button>

          {/* USERS & PERMISSIONS */}
          <button
            onClick={() => {
              navigate("/userandpermission");
              onClose?.();
            }}
            className={mainItem(activeMenu === "users")}
          >
            <FaUsers />
            <span className="ml-3 text-base">User & Permissions</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
