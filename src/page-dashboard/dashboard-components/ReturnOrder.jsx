export default function ReturnOrder() {
  const size = 262;
  const center = size / 2;
  const radius = 90;

  const outerStroke = 36;
  const innerStroke = 12;

  const progress = 0.08;

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
    Math.PI + startOffset + Math.PI * progress
  );

  return (
    <div className="w-full bg-white rounded-2xl p-4 min-w-0 overflow-hidden pt-4">
      <h3 className="mb-4 font-switzer text-base md:text-lg lg:text-xl font-semibold text-black leading-tight">
       Return Orders 
      </h3>

      {/* SVG wrapper */}
      <div className="w-full flex justify-center items-center overflow-hidden">
        <svg
          viewBox={`0 0 ${size} ${size / 1.3}`}
          className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* OUTER BIG ARC */}
          <path
            d={fullArc}
            fill="none"
            stroke="#F0F5F9"
            strokeWidth={outerStroke}
            strokeLinecap="butt"
          />

          {/* INNER TRACK ARC */}
          <path
            d={fullArc}
            fill="none"
            stroke="#E6E7E7"
            strokeWidth={innerStroke}
            strokeLinecap="butt"
          />

          {/* PROGRESS ARC */}
          <path
            d={progressArc}
            fill="none"
            stroke="#FF6A0D"
            strokeWidth={innerStroke}
            strokeLinecap="butt"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2 text-sm min-w-0 mb-8">
        <div className="flex items-center justify-between text-[#8aa0b6] min-w-0">
          <span className="flex items-center gap-2 truncate">
            <span className="w-3 h-3 rounded-full border-2 border-[#FF6A0D] shrink-0"></span>
            Return Orders
          </span>
          <span className="shrink-0">60</span>
        </div>

        <div className="flex items-center justify-between text-[#b0bcc9] min-w-0">
          <span className="flex items-center gap-2 truncate">
            <span className="w-3 h-3 rounded-full border-2 border-[#d1d5db] shrink-0"></span>
           Total Orders
          </span>
          <span className="shrink-0">1200</span>
        </div>
      </div>
    </div>
  );
}
