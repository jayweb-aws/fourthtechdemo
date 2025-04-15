import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 900 },
  { name: "Group C", value: 100 },
  { name: "Group C", value: 200 },
];
const COLORS = ["#FFD329", "#3A57E8", "#1AA053", "#08B1BA"];
const times = [
  { title: "09:00AM-06:00PM", color: "#FFD329" },
  { title: "06:00AM-07:00PM", color: "#3A57E8" },
  { title: "01:00AM-03:00PM", color: "#1AA053" },
  { title: "02:00AM-04:00PM", color: "#08B1BA" },
];
const WorkingHoursChart = () => {
  return (
    <div className="bg-white p-5">
      <div>
        <h4 className="text-[23px] text-[#232D42] font-semibold leading-9">
          Working Hours
        </h4>
      </div>
      <div className="flex items-center  flex-col sm:flex-row">
        <div className="">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={"40%"}
              cy={"50%"}
              innerRadius={30}
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
        <div className="flex flex-wrap justify-between ">
          {times?.map((item) => (
            <div key={item.title} className="flex items-center">
              <span className={`bg-[${item.color}] w-2 h-2`}></span>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursChart;
