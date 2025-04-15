import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import dynamic from "next/dynamic";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 900 },
  { name: "Group C", value: 100 },
  { name: "Group C", value: 200 },
  { name: "Group C", value: 200 },
];
const COLORS = ["#3A57E8", "#85F4FA", "#0048B3", "#08B1BA", "#C03221"];
const times = [
  { title: "Attendance", color: "#3A57E8", percent: "50%" },
  { title: "Pass", color: "#85F4FA", percent: "60%" },
  { title: "Average", color: "#0048B3", percent: "70%" },
  { title: "Absentees", color: "#08B1BA", percent: "80%" },
  { title: "Fail", color: "#C03221", percent: "80%" },
];
const TestSummaryPieChart = () => {
  return (
    <div className="bg-white px-4 py-3 rounded-lg">
      <div>
        <h4 className="text-[23px] text-[#232D42] font-semibold leading-9">
          Working Hours
        </h4>
      </div>
      <div className="">
        <div className="">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={"40%"}
              cy={"50%"}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="grid grid-cols-12">
          {times?.map((item, idx) => (
            <div
              key={item.title}
              className=" col-span-4 flex items-center justify-evenly"
            >
              <div
                className={`${
                  idx === 0
                    ? `bg-[${COLORS[0]}]`
                    : idx === 1
                    ? `bg-[#85F4FA]`
                    : idx === 2
                    ? `bg-[#0048B3]`
                    : idx === 3
                    ? `bg-[${COLORS[3]}]`
                    : idx === 4
                    ? `bg-[${COLORS[4]}]`
                    : ""
                } w-2 h-2`}
              ></div>
              <div className="text-sm ">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TestSummaryPieChart), {
  ssr: false,
});
