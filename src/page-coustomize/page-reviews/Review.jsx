import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaChevronDown,
  FaStar,
  FaCheck,
  FaEye,
} from "react-icons/fa";

export default function Review() {
  const reviews = Array(6).fill({
    title: "Impressed by the Quality !!",
    name: "-rena Chaudhari",
    rating: 4,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // coming from AllReview page
  const fromStatus = location.state?.fromStatus;

  const [selected, setSelected] = useState(fromStatus === "displayed");
  const [showHint, setShowHint] = useState(fromStatus === "removed");

  return (
    <div className="bg-[#eef2f6] p-3 sm:p-4 md:p-6 min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
        {/* Header + Filters */}
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

        {/* Messages */}
        {showHint && !selected && (
          <div className="mb-4 w-fit bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
            <p className="font-medium">Display this review on website</p>
            <p className="text-xs text-red-500">Turn this toggle on.</p>
          </div>
        )}

        {selected && (
          <div
            onClick={() => navigate("/allreviewpage")}
            className="cursor-pointer mb-4 w-fit bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2 hover:bg-green-100 transition"
          >
            <FaEye size={14} />
            <span className="font-medium">Displayed on Website!</span>
          </div>
        )}

        {/* Cards Grid */}
        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-1
    lg:grid-cols-2
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-5
  "
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              onClick={() => index === 0 && setShowHint(true)}
              className="relative bg-white rounded-2xl shadow-md p-4 flex flex-col cursor-pointer max-w-[300px] mx-auto w-full"
            >
              {/* Toggle (only first card) */}
              {index === 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(!selected);
                    setShowHint(false);
                  }}
                  className={`absolute top-4 left-4 w-9 h-5 rounded-full flex items-center transition-all duration-300 ${
                    selected ? "bg-green-500" : "bg-black"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform transition-all duration-300 flex items-center justify-center ${
                      selected ? "translate-x-4" : "translate-x-0"
                    }`}
                  >
                    {selected && <FaCheck size={10} className="text-black" />}
                  </div>
                </button>
              )}

              {/* Image Placeholder */}
              <div className="w-full h-40 sm:h-44 md:h-48 lg:h-56 bg-gray-100 rounded-xl mb-4" />

              {/* Dots */}
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4].map((d) => (
                  <div key={d} className="w-1.5 h-1.5 bg-black rounded-full" />
                ))}
              </div>

              {/* Title */}
              <p className="text-sm font-medium mb-2 text-center">
                {review.title}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
              </div>

              {/* Name */}
              <p className="text-xs text-gray-500 text-center">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
