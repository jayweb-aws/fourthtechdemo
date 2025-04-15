import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { ClipLoader } from "react-spinners";
import { useGetMyEnrollmentAllQuery } from "../../../../../../feature/api/dashboardApi";
import Pagination from "../../../../../common/pagination/Pagination";
import CourseCard from "./CourseCard";

const Student = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { isError, data, error, isLoading, isSuccess, isFetching } =
    useGetMyEnrollmentAllQuery({ page: currentPage, limit: limit });
  //pagination functions
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  // Calculate the date two weeks ago from the current date
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

  return (
    <>
      <div className="grid grid-cols-12 gap-8 font-nunito bg-gray-bg">
        <div className="col-span-12 xl:col-span-8">
          <div className="">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-xl">Your Courses</h3>
              <button className="bg-[#3A57E8] py-2 px-4 text-white rounded">
                View all
              </button>
            </div>

            <div className="grid  gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
              {isLoading || isFetching ? (
                <div className="col-span-12 text-center justify-center items-center py-5">
                  {" "}
                  <ClipLoader color="#3A57E8" />
                </div>
              ) : isError ? (
                <div>Error...</div>
              ) : isSuccess &&
                data?.data?.enrollments &&
                data.data.enrollments.length > 0 ? (
                <>
                  {data.data.enrollments.map((item: any, i: any) => (
                    <CourseCard key={i} item={item} />
                  ))}
                </>
              ) : (
                <div className="h-[50vh] flex justify-center items-center">
                  <p>No data available!</p>
                </div>
              )}
            </div>
            <div className="mt-5 text-right">
              {isSuccess && (
                <Pagination
                  limit={limit}
                  itemsCount={data?.data?.totalCount}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  onPreviousClick={handlePreviousClick}
                  onNextClick={handleNextClick}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <div className="bg-[#fff] p-4 rounded">
            <h3 className="font-medium text-xl">Calender</h3>
            <Calendar className="w-full" />
          </div>
          <div className="mt-6 bg-[#ffffff] p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[19px] font-medium">Upcoming Tasks</h3>
              <button className="bg-[#3A57E8] px-3 py-2 rounded text-white capitalize">
                view all
              </button>
            </div>
            <div className="flex flex-col gap-4 h-[300px] overflow-y-auto custom_scroll">
              {data?.data?.enrollments?.map((val: any) =>
                val?.course?.modules?.map((val2: any) =>
                  val2?.quizzes
                    ?.filter(
                      (item: any) => new Date(item.createdAt) > twoWeeksAgo
                    )
                    .map((val3: any) => (
                      <div className="bg-[#F9F9F9] p-4 rounded cursor-pointer">
                        <Link
                          href={"/dashboard/quiz/[courseId]/[quiz]"}
                          as={`/dashboard/quiz/${val?.course?.id}/${val3?._id}`}
                        >
                          <div>
                            <h4 className="text-lg font-medium">
                              {val3?.title}
                            </h4>
                            <div className="flex justify-between text-[#3A57E8] mt-2">
                              <span>
                                {moment(val3?.startDate)
                                  .utc()
                                  .format("YYYY/MM/DD")}
                              </span>
                              <span> {val3?.startTime}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                )
              )}
              {data?.data?.enrollments?.map((val: any) =>
                val?.course?.modules?.map((val2: any) =>
                  val2?.assignments
                    ?.filter(
                      (item: any) => new Date(item.createdAt) > twoWeeksAgo
                    )
                    .map((val: any) => (
                      <div className="bg-[#F9F9F9] p-4 rounded cursor-pointer">
                        <Link href={`dashboard/assignments/${val?._id}`}>
                          <div>
                            <h4 className="text-lg font-medium">{val?.name}</h4>
                            <div className="flex justify-between text-[#3A57E8] mt-2">
                              <span>
                                {moment(val?.availFrom)
                                  .utc()
                                  .format("YYYY/MM/DD")}
                              </span>
                              <span>
                                {moment(val?.availUntil)
                                  .utc()
                                  .format("YYYY/MM/DD")}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
