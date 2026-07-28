"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const salesData = [
  {
    day: "Mon",
    sales: 120,
  },
  {
    day: "Tue",
    sales: 180,
  },
  {
    day: "Wed",
    sales: 250,
  },
  {
    day: "Thu",
    sales: 220,
  },
  {
    day: "Fri",
    sales: 300,
  },
  {
    day: "Sat",
    sales: 260,
  },
  {
    day: "Sun",
    sales: 340,
  },
];

const SalesChart = () => {
  return (
    <div className="sales-chart">
      <h3 className="chart-title">
        Sales Overview
      </h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={salesData}>
          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#ff8c00"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;