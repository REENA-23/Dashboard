import { FaImage } from "react-icons/fa";

export default function OfferSlider() {
  return (
    <div className="w-full bg-white rounded-xl p-4 sm:p-6">
      {/* Top Button */}
      <div className="flex justify-center mb-4">
        <button className="bg-orange-500 text-white text-sm sm:text-base font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Offer Slider
        </button>
      </div>

      {/* Preview Box */}
      <div
        className="
          w-full
          min-h-[180px]
          sm:min-h-[220px]
          md:min-h-[260px]
          lg:min-h-[320px]
          border-2 border-dashed border-gray-300
          rounded-lg
          bg-[#F4F4F4]
          flex flex-col items-center justify-center
          gap-2
        "
      >
        <FaImage className="text-orange-500 text-3xl" />
        <p className="text-gray-500 text-sm">Preview</p>
      </div>
    </div>
  );
}
