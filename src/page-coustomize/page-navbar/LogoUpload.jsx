import { FaImage } from "react-icons/fa";
import { useRef } from "react";

export default function LogoUpload() {
  const fileRef = useRef(null);

  const handleClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-full">
      {/* Title */}
      <h2 className="text-base sm:text-[18px] font-semibold text-gray-800 mb-3 sm:mb-4">
        Logo
      </h2>

      {/* Upload Box */}
      <div
        onClick={handleClick}
        className="
          w-full
          h-[120px] sm:h-[140px] md:h-[160px]
          bg-[#F4F4F4]
          border-2 border-dashed border-gray-300
          rounded-lg
          flex flex-col items-center justify-center
          cursor-pointer
          hover:border-orange-500
          transition
        "
      >
        {/* Icon */}
        <div className="text-orange-500 text-xl sm:text-2xl mb-2">
          <FaImage />
        </div>

        {/* Upload Button */}
        <div className="bg-black text-white text-xs sm:text-[13px] px-3 sm:px-4 py-1.5 rounded-md">
          Upload
        </div>

        {/* Hidden Input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
}
