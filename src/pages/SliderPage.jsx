import Slider from "../page-coustomize/page-sliders/Slider";
import OfferSlider from "../page-coustomize/page-sliders/OfferSlider";

export default function SlidersPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] p-4 sm:p-6">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <Slider />
        <OfferSlider />
      </div>
    </div>
  );
}
