import SectionCard from "../page-coustomize/page-sections/SectionCard";
import SelectedProducts from "../page-coustomize/page-sections/SelectedProducts";

export default function SectionPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fb] p-3 sm:p-4 md:p-6">
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          gap-4
          sm:gap-5
          md:gap-6
          xl:grid-cols-[360px_1fr]
        "
      >
        {/* TOP on mobile & tablet, LEFT on big desktop */}
        <div className="w-full">
          <SectionCard />
        </div>

        {/* BOTTOM on mobile & tablet, RIGHT on big desktop */}
        <div className="w-full">
          <SelectedProducts />
        </div>
      </div>
    </div>
  );
}
