import { useState } from "react";
import {
  useGetMyEnrollmentAllQuery,
  useGetSingleCourseQuery,
} from "../../../../../feature/api/dashboardApi";
import DashboardHeading from "./v2/DashboardHeading";
import GridView from "./v2/GridView/GridView";
import ListView from "./v2/ListView/ListView";
import StudentDashboardBottomHero from "./v2/StudentDashboardBottomHero";
import TaskCard from "./v2/TaskCard";
const Student = () => {
  const [GridButton, setGridButton] = useState("grid");
  const { isError, data, error, isLoading, isSuccess } =
    useGetSingleCourseQuery("647939fe6a6659ee0d7c3744");
  const {
    isError: enrollIsError,
    data: enrollData,
    error: enrollError,
    isLoading: enrollLoading,
    isSuccess: enrollSuccess,
  } = useGetMyEnrollmentAllQuery({});

  // Calculate the date two weeks ago from the current date
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  // console.log(enrollData?.data?.enrollments[0]?.createdAt);

  return (
    <>
      <StudentDashboardBottomHero />
      <div className="grid grid-cols-12 lg:gap-8 font-nunito bg-gray-bg">
        <div className="col-span-12 xl:col-span-8">
          <DashboardHeading
            setGridButton={setGridButton}
            GridButton={GridButton}
          />
          <div>{GridButton === "grid" ? <GridView /> : <ListView />}</div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <div className="  mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[21px] leading-[26px] font-medium">
                Upcoming Tasks
              </h3>
              <button className="text-[#4849E8] text-sm font-medium bg-none px-3 py-2 rounded  capitalize">
                view all
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
