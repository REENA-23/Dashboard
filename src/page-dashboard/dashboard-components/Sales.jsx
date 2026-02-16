import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const data = [
  { name: "Jan", current: 15000, old: 23000 },
  { name: "Feb", current: 18000, old: 20000 },
  { name: "Mar", current: 26000, old: 15000 },
  { name: "Apr", current: 17000, old: 33000 },
  { name: "May", current: 53000, old: 20000 },
  { name: "Jun", current: 22000, old: 36000 },
  { name: "Jul", current: 30000, old: 39000 },
  { name: "Aug", current: 14000, old: 58000 },
  { name: "Sep", current: 40000, old: 36000 },
  { name: "Oct", current: 47000, old: 45000 },
  { name: "Nov", current: 15000, old: 18000 },
  { name: "Dec", current: 12000, old: 14000 },
];

const tabs = ["12 months", "30 days", "7 days", "24 hours"];

export default function Sales() {
  const [active, setActive] = useState("12 months");
  const [showMobileOptions, setShowMobileOptions] = useState(false);

  return (
    <div className="bg-white h-[380px] rounded-2xl p-5 w-full max-w-full min-w-0 overflow-x-hidden">
      {/* HEADER */}
      <div className="mb-4 min-w-0">
        <div className="flex items-center justify-between min-w-0">
          <h2 className="text-base lg:text-xl font-bold text-gray-900 truncate">
            Sales
          </h2>

          {/* 3 dots for mobile + tablets */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 shrink-0"
            onClick={() => setShowMobileOptions((prev) => !prev)}
          >
            <HiOutlineDotsVertical className="text-xl text-gray-500" />
          </button>

          {/* Desktop only */}
          <div className="hidden lg:flex items-center gap-6 min-w-0">
            {/* Tabs */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`px-4 py-1.5 text-sm transition ${
                    active === tab
                      ? "bg-orange-500 text-white"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 text-sm min-w-0">
              <div className="flex items-center gap-2 text-gray-500 min-w-0">
                <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0"></span>
                <span className="truncate">Current Repeat Rate</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 min-w-0">
                <span className="w-3 h-3 rounded-full bg-gray-500 shrink-0"></span>
                <span className="truncate">Old Repeat Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile + Tablet Options */}
        {showMobileOptions && (
          <div className="lg:hidden mt-3 space-y-3 min-w-0">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`flex-1 px-3 py-1.5 text-xs transition ${
                    active === tab
                      ? "bg-orange-500 text-white"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex gap-4 text-xs min-w-0">
              <div className="flex items-center gap-2 text-gray-500 min-w-0">
                <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0"></span>
                <span className="truncate">Current Repeat Rate</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 min-w-0">
                <span className="w-3 h-3 rounded-full bg-gray-500 shrink-0"></span>
                <span className="truncate">Old Repeat Rate</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CHART */}
      <div className="h-[260px] w-full max-w-full min-w-0 overflow-x-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#EEF2F7" vertical={false} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 60000]}
              ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}k`)}
              width={36}
            />

            <Line
              type="natural"
              dataKey="old"
              stroke="#6B7280"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              isAnimationActive={false}
            />

            <Line
              type="natural"
              dataKey="current"
              stroke="#FF6A0D"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
