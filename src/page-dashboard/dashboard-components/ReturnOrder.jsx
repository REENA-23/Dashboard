export default function ReturnOrder() {
  const size = 262;
  const center = size / 2;
  const radius = 90; // SAME radius for all arcs

  const outerStroke = 36; // F0F5F9 (thick shell)
  const innerStroke = 12; // E6E7E7 (thin track)

  const progress = 0.08; // short orange segment like Figma

  const polarToCartesian = (cx, cy, r, angle) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  });

  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, endAngle);
    const largeArcFlag = Math.abs(endAngle - startAngle) <= Math.PI ? "0" : "1";

    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  const fullArc = describeArc(center, center, radius, Math.PI, 0);
  const startOffset = Math.PI * 0.015;

  const progressArc = describeArc(
    center,
    center,
    radius,
    Math.PI + startOffset,
    Math.PI + startOffset + Math.PI * progress,
  );

  return (
    <div className="w-full  p-3 bg-white rounded-2xl">
      <h3 className="mb-1 font-switzer text-xl font-semibold text-black">
        Return Orders
      </h3>

      <svg
        width={300}
        height={200}
        viewBox={`0 0 ${size} ${size / 1.3}`}
        className="overflow-visible mx-auto mt-10"
      >
        {/* OUTER BIG ARC (F0F5F9) */}
        <path
          d={fullArc}
          fill="none"
          stroke="#F0F5F9"
          strokeWidth={outerStroke}
          strokeLinecap="butt"
        />

        {/* INNER TRACK ARC (E6E7E7) */}
        <path
          d={fullArc}
          fill="none"
          stroke="#E6E7E7"
          strokeWidth={innerStroke}
          strokeLinecap="butt"
        />

        {/* PROGRESS ARC (FF6A0D) */}
        <path
          d={progressArc}
          fill="none"
          stroke="#FF6A0D"
          strokeWidth={innerStroke}
          strokeLinecap="butt"
        />
      </svg>

      <div className="mb-10">
        <div className="flex items-center justify-between text-[#8aa0b6]">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-[#FF6A0D]"></span>
           Return Orders
          </span>
          <span>60</span>
        </div>

        <div className="flex items-center justify-between text-[#b0bcc9]">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-[#d1d5db]"></span>
            Total Orders
          </span>
          <span>1200</span>
        </div>
      </div>
    </div>
  );
}
