import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaChevronDown, FaStar } from "react-icons/fa";

const baseReviews = [
  { id: 1, status: "displayed" },
  { id: 2, status: "neutral" },
  { id: 3, status: "neutral" },
  { id: 4, status: "removed" },
  { id: 5, status: "displayed" },
  { id: 6, status: "neutral" },
];

function AllReview() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const getCardStatus = (review) => {
    if (activeTab === "displayed") return "displayed";
    if (activeTab === "removed") return "removed";
    return review.status; // all -> mixed (green/white/orange)
  };

  const getCardClasses = (status) => {
    if (status === "displayed") {
      return "bg-green-50 border border-green-300";
    }
    if (status === "removed") {
      return "bg-orange-50 border border-orange-300";
    }
    return "bg-white border border-gray-200"; // neutral
  };

  const getToggleClasses = (status) => {
    if (status === "displayed") return "bg-green-500 justify-end";
    if (status === "removed") return "bg-orange-600 justify-start";
    return "bg-black justify-start"; // neutral (like your image dots)
  };

  return (
    <div className="p-4 md:p-6 bg-[#eef2f6] min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold">Review</h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full xl:w-auto">
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 w-full md:w-64">
              <FaSearch size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm">
              <span className="text-gray-500">From:</span>
              <span>01/07/2025</span>
              <FaCalendarAlt size={14} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm">
              <span className="text-gray-500">To:</span>
              <span>01/07/2025</span>
              <FaCalendarAlt size={14} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm cursor-pointer">
              <span>Last 7 days</span>
              <FaChevronDown size={12} />
            </div>

            <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm cursor-pointer">
              <span>1</span>
              <FaStar className="text-yellow-400" size={12} />
              <FaChevronDown size={12} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-20 border-b border-gray-200 mb-6 overflow-x-auto">
          {["all", "displayed", "removed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize font-medium whitespace-nowrap transition ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 text-black"
                  : "text-gray-500"
              }`}
            >
              {tab === "displayed"
                ? "Displayed on Website"
                : tab === "removed"
                  ? "Removed from website"
                  : "All"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-5
  "
        >
          {baseReviews.map((review) => {
            const status = getCardStatus(review);

            return (
              <div
                key={review.id}
                onClick={() => {
                  navigate("/customize/review", {
                    state: { fromStatus: status }, // pass which card was clicked
                  });
                }}
                className={`relative rounded-2xl p-4 transition cursor-pointer ${getCardClasses(
                  status,
                )}`}
              >
                {/* Toggle */}
                <div
                  className={`absolute top-3 left-3 w-10 h-5 rounded-full flex items-center px-1 transition ${getToggleClasses(
                    status,
                  )}`}
                >
                  <div className="w-3.5 h-3.5 bg-white rounded-full shadow" />
                </div>

                {/* Image */}
                <div className="w-full h-36 sm:h-40 md:h-44 lg:h-60 rounded-xl bg-gray-100 mx-auto mt-8" />

                {/* Content */}
                <div className="text-center mt-4">
                  <p className="font-medium text-gray-700 text-sm sm:text-base leading-snug">
                    Impressed by the Quality !!
                  </p>
                  <div className="flex justify-center gap-1 text-yellow-400 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                   -rena Chaudhari
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllReview;
