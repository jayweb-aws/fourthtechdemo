import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";
import dynamic from "next/dynamic";

const data = [
  {
    name: "Q 1",
    Attendees: 40,
    Average: 24,
  },
  {
    name: "Q 2",
    Attendees: 30,
    Average: 13,
  },
  {
    name: "Q 3",
    Attendees: 20,
    Average: 38,
  },
  {
    name: "Q 4",
    Attendees: 27,
    Average: 19,
  },
  {
    name: "Q 5",
    Attendees: 18,
    Average: 38,
  },
  {
    name: "Q 6",
    Attendees: 23,
    Average: 28,
  },
  {
    name: "Q 7",
    Attendees: 34,
    Average: 13,
  },
];

const ResultLineChart = () => {
  return (
    <div className="bg-white rounded px-2 py-2">
      <div className="md:flex justify-between items-center">
        <h3 className="font-semibold text-[24px] md:text-[28px] leading-9">
          Student Performance
        </h3>
        <div className="flex gap-4 mb-[10px] md:mb-0">
          <p className=" text-sm font-normal text-[#8A92A6]">
            Time Allotted: 1hr 30 mins
          </p>
          <p className=" text-sm font-normal text-[#8A92A6]">
            Total Marks: 60 (Passing: 40)
          </p>
        </div>
      </div>

      <div className="">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorAttendees" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3A57E8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3A57E8" stopOpacity={0} />
                </linearGradient>
                <Line
                  type="monotone"
                  id="colorAverage"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#08B1BA" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#08B1BA" stopOpacity={0} />
                </Line>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Legend
                verticalAlign="top"
                align="left"
                height={36}
                iconType="circle"
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Attendees"
                stroke="#3A57E8"
                fillOpacity={1}
                strokeWidth={3}
                fill="url(#colorAttendees)"
              />
              <Area
                type="monotone"
                dataKey="Average"
                stroke="#08B1BA"
                fillOpacity={1}
                strokeWidth={3}
                fill="url(#colorAverage)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ResultLineChart), { ssr: false });
