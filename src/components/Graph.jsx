import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ data }) => {
  // Extract x and y axis values from the data prop
  const { xAxis, yAxis1, yAxis2 } = data;

  // Combine x and y values into a single data array
  const chartData = xAxis.map((xValue, index) => ({
    x: index,
    y1: yAxis1[index],
    y2: yAxis2[index],
  }));

  return (
    <>
      <div>
        <div className="p-10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Activities</h1>

            <p className="text-sm text-gray-500 flex items-center gap-5 mt-3">
              May - June 2021
              <span>
                <BiChevronDown className="text-xl" />
              </span>
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-3">
              <BsCircleFill className="text-xs text-[#EE8484]" />
              <p className="text-md font-medium">Guest</p>
            </div>
            <div className="flex items-center gap-3">
              <BsCircleFill className="text-xs text-[#98D89E]" />
              <p className="text-md font-medium">user</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" tick={{ dy: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="y1"
                stroke="#98D89E"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="y2"
                stroke="#EE8484"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Graph;
