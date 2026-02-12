import StatsRow from "../page-dashboard/dashboard-components/StatsRow";
import OrderStats from "../page-dashboard/dashboard-components/OrderStats";
import RightSidebarStats from "../page-dashboard/dashboard-components/RightSidebarStats";
import RepeatOrdersChart from "../page-dashboard/dashboard-components/RepeatOrdersChart";
import OrdersVsVisitors from "../page-dashboard/dashboard-components/OrdersVsVisitors";
import Sales from "../page-dashboard/dashboard-components/Sales";
import ReturnOrder from "../page-dashboard/dashboard-components/ReturnOrder";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 bg-[#f6f9fc] min-h-screen">
      {/* TOP STATS ROW */}
      <StatsRow />

      {/* MAIN GRID: 80% LEFT / 20% RIGHT */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6 items-start">
        {/* LEFT SIDE (80%) */}
        <div className="space-y-6">
          <OrderStats />
          <RepeatOrdersChart />
          <Sales />
        </div>

        {/* RIGHT SIDE (20%) */}
        <div className="space-y-6">
          <RightSidebarStats />
          <OrdersVsVisitors />
          <ReturnOrder />
        </div>
      </div>
    </div>
  );
}
