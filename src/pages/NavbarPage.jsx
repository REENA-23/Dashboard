import NavbarMenuItems from "../page-coustomize/page-navbar/NavbarMenuItems";
import OffersScrollingNavbar from "../page-coustomize/page-navbar/OffersScrollingNavbar";
import NavbarThumbnails from "../page-coustomize/page-navbar/NavbarThumbnails";
import LogoUpload from "../page-coustomize/page-navbar/LogoUpload";
import SocialMediaLinks from "../page-coustomize/page-navbar/SocialMediaLinks";

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] p-4 sm:p-6">
      <div className="max-w-[1400px] mx-auto space-y-4 sm:space-y-6">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <NavbarMenuItems />
          </div>

          <div className="xl:col-span-1">
            <OffersScrollingNavbar />
          </div>
        </div>

        {/* MIDDLE ROW (FULL WIDTH) */}
        <div>
          <NavbarThumbnails />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left: Social Media Links (2 columns on large) */}
          <div className="lg:col-span-2">
            <SocialMediaLinks />
          </div>

          {/* Right: Logo Upload */}
          <div className="lg:col-span-1">
            <LogoUpload />
          </div>
        </div>
      </div>
    </div>
  );
}
