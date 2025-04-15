import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 800 },
  { name: "Group C", value: 300 },
 
];
const COLORS = ["#08B1BA", "#3A57E8", "#0048B2"];

const TestSummery = () => {
  return (
    <div className="w-full bg-white rounded p-5 h-full">
      <h3 className="text-[23px] leading-7 font-medium text-[#232D42]">
        Progress
      </h3>
      <div className="flex justify-center">
        <PieChart width={400} height={200}>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          />
            
        </PieChart>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["#08B1BA", "#3A57E8", "#0048B2"].map(
          (color, id) => (
            <div key={id} className="flex items-center gap-2">
              <div className={`h-2 w-2 bg-[${color}] shadow-lg`}></div>
              <p>Average</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TestSummery;
