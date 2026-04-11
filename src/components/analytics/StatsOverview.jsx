import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const StatsOverview = () => {
  const efficiencyData = [
    { name: "Unit 1", efficiency: 98, fill: "#10b981" },
    { name: "Unit 2", efficiency: 85, fill: "#f97316" },
    { name: "Unit 3", efficiency: 99, fill: "#10b981" },
  ];

  const weeklyTrend = [
    { day: "Mon", output: 400 },
    { day: "Tue", output: 450 },
    { day: "Wed", output: 300 },
    { day: "Thu", output: 520 },
    { day: "Fri", output: 480 },
    { day: "Sat", output: 600 },
    { day: "Sun", output: 550 },
  ];
  return (
    <div className="bg-white p-3 pt-5 rounded-[10px] border border-gray-200 hover:shadow-md h-[300px] w-full">
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={efficiencyData}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f3f4f6"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 600 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "#f9fafb" }}
            contentStyle={{
              borderRadius: "16px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
          />
          <Bar dataKey="efficiency" radius={[10, 10, 10, 10]} barSize={40}>
            {efficiencyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default StatsOverview;
