import StatsRow from "./dashboard-components/StatsRow";
import OrderStats from "./dashboard-components/OrderStats";
import RightSidebarStats from "./dashboard-components/RightSidebarStats";
import RepeatOrdersChart from "./dashboard-components/RepeatOrdersChart";
import OrdersVsVisitors from "./dashboard-components/OrdersVsVisitors";
import Sales from "./dashboard-components/Sales";
import ReturnOrder from "./dashboard-components/ReturnOrder";

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 bg-[#f6f9fc] min-h-screen">
      {/* TOP STATS ROW */}
      <StatsRow />

      {/* MIDDLE SECTION */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* ORDER STATS TABLE */}
        <div className="md:col-span-12 lg:col-span-8">
          <OrderStats />
        </div>

        {/* RIGHT SIDEBAR (Best Selling + Today's Orders) */}
        <div className="md:col-span-12 lg:col-span-4">
          <RightSidebarStats />
        </div>
      </div>

      {/* BOTTOM SECTION 1 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* REPEAT ORDERS CHART */}
        <div className="md:col-span-12 lg:col-span-8">
          <RepeatOrdersChart />
        </div>

        {/* ORDERS VS VISITORS GAUGE */}
        <div className="md:col-span-12 lg:col-span-4">
          <OrdersVsVisitors />
        </div>
      </div>

      {/* BOTTOM SECTION 2 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* SALES */}
        <div className="md:col-span-12 lg:col-span-8">
          <Sales />
        </div>

        {/* RETURN ORDER */}
        <div className="md:col-span-12 lg:col-span-4">
          <ReturnOrder />
        </div>
      </div>
    </div>
  );
}
