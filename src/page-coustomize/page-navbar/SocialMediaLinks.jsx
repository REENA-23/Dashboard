import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function SocialMediaLinks() {
  return (
    <div className="w-full bg-white rounded-xl pt-2 p-4 sm:p-6 border border-gray-100">
      {/* Title */}
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Social Media Links
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Instagram */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
            Link to Navigate
          </label>
          <div className="relative">
            <FaInstagram className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base sm:text-lg" />
            <input
              type="text"
              className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-md
                         focus:outline-none focus:border-orange-500
                         hover:border-orange-500 transition"
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
            Link to Navigate
          </label>
          <div className="relative">
            <FaWhatsapp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base sm:text-lg" />
            <input
              type="text"
              className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-md
                         focus:outline-none focus:border-orange-500
                         hover:border-orange-500 transition"
            />
          </div>
        </div>

        {/* Facebook */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
            Link to Navigate
          </label>
          <div className="relative">
            <FaFacebookF className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base sm:text-lg" />
            <input
              type="text"
              className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-md
                         focus:outline-none focus:border-orange-500
                         hover:border-orange-500 transition"
            />
          </div>
        </div>

        {/* YouTube */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
            Link to Navigate
          </label>
          <div className="relative">
            <FaYoutube className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base sm:text-lg" />
            <input
              type="text"
              className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-md
                         focus:outline-none focus:border-orange-500
                         hover:border-orange-500 transition"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
