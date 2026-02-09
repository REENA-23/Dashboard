import { FaImage, FaUpload, FaGripVertical, FaChevronDown } from "react-icons/fa";

export default function Slider() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-lg md:text-xl font-semibold">Sliders</h2>
        <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg">
          Main Slider at Home page
        </span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Preview */}
        <div
          className="
            border-2 border-dashed border-gray-300 rounded-xl
            flex flex-col items-center justify-center
            text-gray-400 bg-[#F4F4F4]
            min-h-[200px]
            sm:min-h-[240px]
            md:min-h-[260px]
            lg:min-h-[300px]
          "
        >
          <FaImage className="text-orange-500 text-3xl mb-2" />
          <span className="text-sm">Preview</span>
        </div>

        {/* RIGHT: Upload List */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 p-1 rounded-lg"
            >
              {/* Drag */}
              <FaGripVertical className="text-gray-400 shrink-0" />

              {/* Index */}
              <div className="w-[44px] h-[40px] bg-gray-100 rounded-lg flex items-center justify-center gap-1 text-sm shrink-0">
                {i}
                <FaChevronDown className="text-orange-500 text-xs" />
              </div>

              {/* Upload Box */}
              <div className="flex-1 h-[52px] bg-gray-200 rounded-lg flex items-center justify-center">
                <button className="bg-black font-poppins text-white text-xs px-2 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2">
                  <FaUpload />
                  Upload
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
