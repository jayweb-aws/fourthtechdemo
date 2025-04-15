import React, { useRef, useState } from "react";
import AttendanceTable from "./attendance-table/table";
import Nav from "./nav";
import TableController from "./table-controller";
export type ActiveTab = "Student" | "Absentees(15)";
import dynamic from "next/dynamic";

function Attendance() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Student");
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg mt-20">
      <h1 className="font-bold text-xl ">Attendance </h1>
      <div className="col-span-12 lg:col-span-12">
        <TableController />
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* table controller  */}
        {/* table  */}
        {activeTab === "Student" &&
          <AttendanceTable />
          }
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Attendance), { ssr: false });
