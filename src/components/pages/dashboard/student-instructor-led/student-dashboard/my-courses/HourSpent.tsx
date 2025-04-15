import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Sun",
    Theory: 4,
  },
  {
    name: "Mon",
    Theory: 2000,
    Practise: 3000,
    Design: 2700,
  },
  {
    name: "Tue",
    Theory: 2200,
    Practise: 4000,
    Design: 1000,
  },
  {
    name: "Wed",
    Business: 4000,
    Practise: 3000,
    Design: 1000,
  },
  {
    name: "Thur",
    Business: 1890,
    Branding: 4800,
    Design: 4181,
  },
  {
    name: "Fri",
    Business: 2890,
    Branding: 3800,
    Design: 2500,
  },
  {
    name: "Sat",
    Business: 1490,
    Branding: 2300,
    Design: 4100,
  },
];

export default function HourSpent() {
  return (
    <>
      <div className="flex justify-between items-center border-b pb-4">
        <h3 className="font-semibold text-xl">Hour Spent</h3>
        <div className="flex gap-2 items-center">
          <p className="text-gray-300">Sort By:</p>
          <button className="bg-[#3A57E8] px-4 py-2 rounded text-white flex items-center gap-1">
            Month <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >

            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="7" />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              height={36}
              iconType="circle"
            />

            <Line dataKey="Theory" stroke="#3A57E8" activeDot={{ r: 8 }} strokeWidth="4" />
            <Line dataKey="Practise" stroke="#08B1BA" strokeWidth='4' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
