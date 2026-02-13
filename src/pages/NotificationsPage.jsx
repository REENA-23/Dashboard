import { useState } from "react";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaExclamationTriangle,
  FaCommentDots,
  FaTag,
  FaUndo,
  FaTimes,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const TABS = ["All", "Orders", "Stock", "Review", "Offers"];

const notificationsData = [
  {
    id: 1,
    type: "Orders",
    title: "New Order Placed",
    tag: "High Priority",
    meta: "#56789 from Mumbai",
    time: "2 mins ago",
    icon: <FaShoppingCart />,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    type: "Orders",
    title: "Item Shipped",
    meta: "#56789",
    time: "10 mins ago",
    icon: <FaBoxOpen />,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    type: "Stock",
    title: "Low Stock Alert",
    tag: "High Priority",
    meta: "“Anarkali Dress” - 4 left",
    time: "1 hours ago",
    icon: <FaExclamationTriangle />,
    iconBg: "bg-red-100 text-red-500",
  },
  {
    id: 4,
    type: "Review",
    title: "Customer Review",
    meta: "“Love the fit” - 4.2",
    time: "2 hours ago",
    icon: <FaCommentDots />,
    iconBg: "bg-blue-100 text-blue-600",
  },

  {
    id: 5,
    type: "Offers",
    title: "Offer Applied",
    meta: "30% off on Dresses",
    time: "1 days ago",
    icon: <FaTag />,
    iconBg: "bg-pink-100 text-pink-500",
  },
  {
    id: 6,
    type: "Orders",
    title: "Return Requested",
    meta: "Order #56789",
    time: "2 days ago",
    icon: <FaUndo />,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const filtered = notificationsData.filter((n) => {
    const matchesTab = activeTab === "All" || n.type === activeTab;
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      (n.meta && n.meta.toLowerCase().includes(search.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 bg-[#F5F7F9] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">Notifications</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none border rounded-lg px-4 py-2 pr-8 text-sm bg-white"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Unread First</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-20 border-b mb-4 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm whitespace-nowrap ${
              activeTab === tab
                ? "text-orange-500 border-b-2 border-orange-500 font-medium"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filtered.map((n) => (
          <div
            key={n.id}
            className="bg-white rounded-xl border p-4 flex gap-4 items-start"
          >
            {/* Icon */}
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center ${n.iconBg}`}
            >
              {n.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-sm sm:text-base">{n.title}</h3>
                {n.tag && (
                  <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                    {n.tag}
                  </span>
                )}
              </div>

              {n.meta && (
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {n.meta}
                </p>
              )}

              <p className="text-xs text-gray-400 mt-1">{n.time}</p>
            </div>

            {/* Close Button */}
            <button className="text-gray-400 hover:text-gray-600">
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
