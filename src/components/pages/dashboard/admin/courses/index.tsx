import { useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import TableController from "../common/TableController";
import CoursesCategoriesSection from "./courses-categories";
import CourseTable from "./courses-list/CourseTable";
import CoursesRequestTable from "./courses-request/CoursesRequestTable";
import Nav from "./Nav";
import Link from "next/link";
import StudentPerformance from "./StudentPerformance";
import TestSummery from "./TestSummery";
import dynamic from "next/dynamic";
import Admindashboardcard from "../../dashboardcard/Admindashboardcard";
export type ActiveTab =
  | "courses-list"
  | "courses-request"
  | "courses-categories";

const Courses = () => {
  const {
    user: { roles },
  } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState<ActiveTab>("courses-list");
  const [CreateCategoryModal, setCreateCategoryModal] =
    useState<boolean>(false);
  return (
    <>
    <Admindashboardcard 
      title="Courses"
      subTitle="Improve your design skills through interactive, hands-on professional courses."
      data={""}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      Modal={CreateCategoryModal}
      setShowModal={setCreateCategoryModal}
    />
    <div className="">
      {/* <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <StudentPerformance />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <TestSummery />
        </div>
      </div> */}
      <div className="py-8 px-9 bg-[#ffffff]">
        {/* <Nav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          Modal={CreateCategoryModal}
          setShowModal={setCreateCategoryModal}
        /> */}
        {activeTab === "courses-list" && (
                <Link href="/dashboard/course/creation">
                  <button className="bg-[#3A57E8] rounded text-white p-[8px_20px] md:mb-[20px] font-nunito sm:ml-auto">
                    Create New Course
                  </button>
                </Link>
              )}
        
              {activeTab === "courses-categories" && (
                <button
                  onClick={() => setShowModal(!Modal)}
                  className="bg-[#3A57E8] rounded text-white p-[8px_20px] md:mb-[20px] font-nunito sm:ml-auto"
                >
                  Create Category
                </button>
              )}
        {activeTab !== "courses-categories" && <TableController />}
        {activeTab === "courses-list" ? (
          <CourseTable />
        ) : activeTab === "courses-request" ? (
          <CoursesRequestTable />
        ) : (
          activeTab === "courses-categories" && (
            <CoursesCategoriesSection
              Modal={CreateCategoryModal}
              setShowModal={setCreateCategoryModal}
            />
          )
        )}
      </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Courses), { ssr: false });
