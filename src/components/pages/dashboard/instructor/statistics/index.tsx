import React from "react";
import StatisticsChart from "./statistics-chart";
import TestTable from "./test-table";
import Timeline from "./timeline";
import TopStudents from "./top-students";

export default function Statistics() {
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
      <div className="col-span-12 lg:col-span-8">
        <StatisticsChart />
        <TestTable />
      </div>
      <div className="col-span-12 lg:col-span-4 ">
        <Timeline />
        <TopStudents />
      </div>
    </div>
  );
}
