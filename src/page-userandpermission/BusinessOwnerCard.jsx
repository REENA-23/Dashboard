export default function BusinessOwnerCard({ onMoveClick }) {
  return (
    <div className="bg-[#F3F8FB] rounded-lg p-4 sm:p-6 w-full">
      {/* Title */}
      <h2 className="text-base sm:text-lg font-semibold mb-3">
        Business Owner
      </h2>

      {/* Owner Row */}
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Avatar Placeholder */}
        <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]  bg-gray-100 shrink-0" />

        {/* Text */}
        <div>
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Business owner name
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Last log in 10/07/2025, 3:30 a.m.
          </p>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={onMoveClick}
        className="text-blue-600 text-sm sm:text-base underline hover:text-blue-700 transition"
      >
        Move to new owner
      </button>
    </div>
  );
}
