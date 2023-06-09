import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./style.css"

const LineChartExample = () => {
  const data = [
    { name: "", User: 100, Guest: 200 },
    { name: "Week 1", User: 110, Guest: 150 },
    { name: "Week 2", User: 230, Guest: 310 },
    { name: "Week 3", User: 488, Guest: 413 },
    { name: "Week 4", User: 90, Guest: 120 },
    // Add more data points as needed
  ];

  const customYAxisStyle = {
    axisLine: { stroke: "none" },
    tickLine: { stroke: "none" },
  };

  const customXAxisStyle = {
    axisLine: { stroke: "none" },
    tickLine: { stroke: "none" },
  };

  return (
    <div className="chart">
      <LineChart width={850} height={250} data={data}>
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={customXAxisStyle.axisLine}
          tickLine={customXAxisStyle.tickLine}
        />
        <YAxis
          axisLine={customYAxisStyle.axisLine}
          tickLine={customYAxisStyle.tickLine}
          tickCount={5}
          interval="preserveStartEnd"
        />

        <Tooltip />
        <Line
          type="monotone"
          dataKey="User"
          stroke="#9BDD7C"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Guest"
          stroke="#E9A0A0"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default LineChartExample;
