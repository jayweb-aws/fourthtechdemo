import React, { useRef, useState } from "react";
import GradeTable from "./grade-table";
import Nav from "./nav";
import TableController from "./table-controller";
export type ActiveTab = "Student";

export default function Grades() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Student");
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
      <div className="col-span-12 lg:col-span-12">
        <TableController />
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* table controller  */}
        {/* table  */}
        {activeTab === "Student" && <GradeTable />}
      </div>
    </div>
  );
}
