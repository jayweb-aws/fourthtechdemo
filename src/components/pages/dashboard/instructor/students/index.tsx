import { useState } from "react";
import TableController from "../../admin/common/TableController";
import Nav from "./nav";
import StudentsListTable from "../../admin/students/StudentsListTable";
import AdmissionTable from "../../admin/students/AdmissionTable";
import ResultLineChart from "../quiz-result/result-line-chart";
import TestSummaryPieChart from "../quiz-result/test-summary-pie-chart";

export type ActiveTab = "students-list" | "admission-request";

const Students = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("students-list");

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <ResultLineChart />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <TestSummaryPieChart />
        </div>
      </div>
      <div className="py-[40px] bg-[#ffffff] px-4 mt-6">
        {/* Nav */}
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* table controller  */}
        <TableController />
        {/* table  */}
        {activeTab === "students-list" ? (
          // <StudentsList />
          <StudentsListTable />
        ) : (
          activeTab === "admission-request" && <AdmissionTable />
        )}
      </div>
    </>
  );
};

export default Students;
