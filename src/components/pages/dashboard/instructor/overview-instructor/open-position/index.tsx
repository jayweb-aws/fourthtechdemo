import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

export default function OpenPositions() {
  return (
    <div className="grid grid-cols-12 bg-white px-4 py-3 rounded-lg">
      <div className="col-span-6">
        <div>
          <p className="text-xl font-bold ">Open Positions</p>
        </div>
        <div>
          <p className="text-[#08B1BA] text-2xl font-bold mt-7 ">22</p>
        </div>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col items-end">
          <div>
            <div className="text-white w-20 bg-[#08B1BA]   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 flex justify-center items-center">
              <p>+14%</p>
            </div>
          </div>
          <div className="ml-14">
            <AreaChart
              width={150}
              height={50}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#08B1BA"
                fill="#08B1BA"
                // fill="linear-gradient(180.47deg, #3A57E8 -128.76%, rgba(255, 255, 255, 0) 128.7%)"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}
