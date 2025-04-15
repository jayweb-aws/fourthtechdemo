import React from "react";
import CourseOverview from "./CourseOverview";
import Attendance from "./Attendance";
import NewStudent from "./NewStudent";
import StudentEnrollmentChart from "./StudentEnrollmentChart";
import WorkingHoursChart from "./WorkingHoursChart";
import PopularCourses from "../courses/courses-categories/PopularCourses";
import BestCourse from "./best-course";
import dynamic from "next/dynamic";

const Main = () => {
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
      <div className="col-span-12 xl:col-span-8">
        <StudentEnrollmentChart />
        <CourseOverview />
        <div className="grid grid-cols-12 gap-2 my-5">
          <div className="col-span-12 md:col-span-6">
            <WorkingHoursChart />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Attendance />
          </div>
        </div>
        <div></div>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="bg-[#ffffff] p-2 rounded-md col-span-12 md:col-span-6 xl:col-span-12">
            <PopularCourses />
          </div>
          <div className="my-14 col-span-12 md:col-span-6 xl:col-span-12 ">
            <BestCourse />
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-12">
            <NewStudent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Main), { ssr: false });
