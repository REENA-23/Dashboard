import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from "recharts";

function Dashboard() {
  /*CHART DATA */

  const repeatData = [
    { month: "Jan", current: 20000, old: 24000 },
    { month: "Feb", current: 18000, old: 22000 },
    { month: "Mar", current: 26000, old: 15000 },
    { month: "Apr", current: 17000, old: 30000 },
    { month: "May", current: 52000, old: 20000 },
    { month: "Jun", current: 22000, old: 35000 },
    { month: "Jul", current: 30000, old: 58000 },
    { month: "Aug", current: 15000, old: 40000 },
    { month: "Sep", current: 45000, old: 30000 },
    { month: "Oct", current: 20000, old: 45000 },
    { month: "Nov", current: 12000, old: 20000 },
    { month: "Dec", current: 15000, old: 18000 },
  ];

  const pieData = [
    { name: "Orders", value: 60 },
    { name: "Visitors", value: 1200 },
  ];

  const COLORS = ["#ff7a00", "#e5e7eb"];

  return (
    <div className="grid grid-cols-12 gap-6" >

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Website Visitors</p>
          <h2 className="text-2xl font-bold">34,945</h2>
          <p className="text-green-500 text-sm">+8% from last month</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">₹80K</h2>
          <p className="text-green-500 text-sm">+8% from last month</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Customers</p>
          <h2 className="text-2xl font-bold">892</h2>
          <p className="text-green-500 text-sm">+24% from last month</p>
        </div> <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold">125</h2>
          <p className="text-green-500 text-sm">+2.1% from last month</p>
        </div>
      </div>

      {/* ORDER STATS */}
      <div className="col-span-12 lg:col-span-9 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Order Stats</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="py-3 text-left">Sr.</th>
                <th className="text-left">Product</th>
                <th>Qty.</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Order Type</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-4">{i}</td>
                  <td className="flex items-center gap-3 py-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                    <span>Product Name</span>
                  </td>
                  <td className="text-center">1x</td>
                  <td className="text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                  ${i === 2 && "bg-green-100 text-green-600"}
                  ${i === 3 && "bg-blue-100 text-blue-600"}
                  ${i === 4 && "bg-red-100 text-red-600"}
                  ${(i === 1 || i === 5 || i === 6) && "bg-orange-100 text-orange-600"}
                `}>
                      {i === 2
                        ? "Ready For Pickup"
                        : i === 3
                          ? "Delivered"
                          : i === 4
                            ? "Returned"
                            : "In Packaging"}
                    </span>
                  </td>
                  <td className="text-center">
                    22/06/2025 <br />
                    <span className="text-xs">11:25 AM</span>
                  </td>
                  <td className="text-center">COD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 space-y-6">

        {/* BEST SELLING */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold">Best Selling</h2>
          <p className="text-xs text-gray-400 mb-4">5 Categories</p>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Category {i}</span>
              <span>245</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold mb-4">Today’s Orders</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>New</p>
              <h3 className="text-2xl font-bold text-green-500">125</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Return</p>
              <h3 className="text-2xl font-bold text-orange-500">125</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Pending</p>
              <h3 className="text-2xl font-bold text-orange-500">125</h3>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Cancelled</p>
              <h3 className="text-2xl font-bold text-red-500">125</h3>
            </div>

          </div>

        </div>

      </div>

      {/* REPEAT ORDERS */}
      <div className="col-span-12 lg:col-span-9 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">Repeat Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repeatData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#ff7a00"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="old"
              stroke="#9ca3af"
              strokeDasharray="5 5"
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-12 lg:col-span-3 bg-white rounded-xl shadow p-5">
        <h2 className="font-semibold mb-4">
          Orders Vs Website Visits
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}>

              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2 text-sm text-gray-600 mt-4">
          <div className="flex justify-between">
            <span className="text-orange-500">● Orders</span>
            <span>60</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">● Visitors</span>
            <span>1200</span>
          </div>

        </div>

      </div>

    </div >
  );
}
export default Dashboard;