import { FaUpload } from "react-icons/fa";

export default function NavbarThumbnails() {
  const items = [1, 2, 3, 4];

  return (
    <div className="w-full bg-white rounded-xl p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT: CIRCLES */}
        <div className="flex flex-wrap justify-center lg:justify-start items-start gap-4 sm:gap-6">
          {items.map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {/* Circle */}
              <div className="w-[88px] h-[88px] sm:w-[110px] sm:h-[110px] lg:w-[132px] lg:h-[132px] rounded-full bg-black/90 border-4 border-gray-200 flex items-center justify-center">
                <button className="bg-orange-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-md hover:bg-orange-600 transition">
                  Edit
                </button>
              </div>

              {/* Drag dots */}
              <div className="grid grid-cols-3 gap-1 opacity-40">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER (desktop only) */}
        <div className="hidden lg:block h-[140px] w-px bg-gray-200" />

        {/* RIGHT: FORM */}
        <div className="flex flex-col sm:flex-row gap-6 flex-1">
          {/* Inputs */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[260px]">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Sale"
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Link to Navigate
              </label>
              <input
                type="text"
                placeholder="Sale"
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Upload Box */}
          <div className="flex flex-col gap-2 w-full sm:max-w-[260px]">
            <label className="text-xs text-gray-500">Thumbnail Image</label>
            <div className="w-full h-[120px] sm:h-[130px] border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center gap-2">
              <FaUpload className="text-orange-500 text-xl" />
              <button className="bg-black font-poppins text-white text-xs px-4 py-1.5 rounded-md hover:bg-gray-800 transition">
                Upload
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
