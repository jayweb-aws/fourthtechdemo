import React from "react";
import Attendance from "./attendance";
import ClassProgress from "./class-progress";
import ExamResult from "./exam-result";
import PopularCourses from "./popular-courses/popular-courses";
import ResultLineChart from "./result-line-chart";
import TestSummaryPieChart from "./test-summary-pie-chart";
import dynamic from "next/dynamic";

function QuizResult() {
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
      <div className="col-span-12 lg:col-span-8">
        <ResultLineChart />
        <Attendance />
      </div>

      <div className="col-span-12 lg:col-span-4 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-12">
          <TestSummaryPieChart />

          <div className="col-span-12 md:col-span-6 lg:col-span-12 ">
            <ExamResult />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <ClassProgress />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <PopularCourses />
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(QuizResult), { ssr: false });
