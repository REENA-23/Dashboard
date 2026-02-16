import StatsRow from "../page-dashboard/dashboard-components/StatsRow";
import OrderStats from "../page-dashboard/dashboard-components/OrderStats";
import RightSidebarStats from "../page-dashboard/dashboard-components/RightSidebarStats";
import RepeatOrdersChart from "../page-dashboard/dashboard-components/RepeatOrdersChart";
import OrdersVsVisitors from "../page-dashboard/dashboard-components/OrdersVsVisitorsGauge";
import Sales from "../page-dashboard/dashboard-components/Sales";
import ReturnOrder from "../page-dashboard/dashboard-components/ReturnOrder";

export default function DashboardPage() {
  return (
    <div className="p-2 sm:p-6 bg-[#f6f9fc] min-h-screen overflow-x-hidden">
      {/* TOP STATS ROW */}
      <StatsRow />

      {/* ===== DESKTOP / NEST HUB MAX (2 COLUMNS) ===== */}
  <div className="mt-6 grid grid-cols-1 xl:grid-cols-[minmax(0,4fr)_minmax(260px,1fr)] gap-4 items-start w-full">

        {/* LEFT COLUMN */}
        <div className="space-y-6 min-w-0">
          <OrderStats />
          <RepeatOrdersChart />
          <Sales />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6 min-w-0">
          <RightSidebarStats />
          <OrdersVsVisitors />
          <ReturnOrder />
        </div>
      </div>

      {/* ===== TABLET / iPAD / NEST HUB (STACKED) ===== */}
      <div className="mt-6 lg:hidden space-y-6">
        {/* Full width */}
        <OrderStats />

        {/* 2 cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RightSidebarStats />
          <div className="space-y-4">
            {/* Today’s Orders is inside RightSidebarStats already,
                so if you want to split them later we can */}
          </div>
        </div>

        {/* Full width charts */}
        <RepeatOrdersChart />
        <Sales />

        {/* 2 gauges row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <OrdersVsVisitors />
          <ReturnOrder />
        </div>
      </div>
    </div>
  );
}
