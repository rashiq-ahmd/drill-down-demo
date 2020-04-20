import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const BarChartWidget = ({ dataSource, setDataSource }) => {
  const [yAxisKeys, setYAxisKeys] = useState([]);
  useEffect(() => {
    setYAxisKeys(
      Object.keys(dataSource[0]).filter(key => key !== "x" && key !== "child")
    );
  }, [dataSource]);
  return (
    <ResponsiveContainer>
      <BarChart
        data={dataSource}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        {yAxisKeys.map(key => (
          <Bar dataKey={key} fill="#8884d8" stackId="a" />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartWidget;
