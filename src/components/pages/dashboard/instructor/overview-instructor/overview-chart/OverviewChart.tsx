import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 900 },
  { name: "Group C", value: 100 },
  { name: "Group C", value: 200 },
];
const COLORS = ["#3A57E8", "#08B1BA", "#FFD329", "#F16A1B"];
const times = [
  { title: "AA Grades", color: "#3A57E8", percent: "50%" },
  { title: "BA Grades", color: "#08B1BA", percent: "60%" },
  { title: "BC Grades", color: "#FFD329", percent: "70%" },
  { title: "BB Grades", color: "#F16A1B", percent: "80%" },
];
const OverviewChart = () => {
  return (
    <div className="bg-white p-5">
      <div>
        <h4 className="text-[23px] text-[#232D42] font-semibold leading-9">
          Working Hours
        </h4>
      </div>
      <div className="xsm:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className=" ">
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
        <div className="flex flex-col w-full h-full gap-y-3">
          {times?.map((item, idx) => (
            <div key={item.title} className="flex items-center justify-between">
              <span
                className={`${
                  idx == 0
                    ? "bg-[#3A57E8]"
                    : idx == 1
                    ? "bg-[#08B1BA]"
                    : idx == 2
                    ? "bg-[#FFD329]"
                    : idx == 3
                    ? "bg-[#F16A1B]"
                    : ""
                } w-2 h-2`}
              ></span>
              <span className="text-sm mx-4">{item.title}</span>
              <span className="text-sm">{item.percent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
