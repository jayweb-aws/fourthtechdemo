import { useState } from "react";
import { useGetAllCourseRequestQuery } from "../../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../../styles/ContactStyle.module.css";
import Loading from "../../../../../common/Loading";
import Pagination from "../../../../../common/pagination/Pagination";
import CoursesRequestTableRow from "./CoursesRequestTableRow";

const CoursesRequestTable = () => {
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetAllCourseRequestQuery({
      page: currentPage,
      limit: limit,
    });

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
  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : isError ? (
        <div>Error...</div>
      ) : isSuccess && data?.data?.courses && data.data.courses.length > 0 ? (
        <div
          className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full shadow-md sm:rounded-lg mt-12`}
        >
          <table className={`w-full text-[16px] md:text-[18px] text-left`}>
            <thead className="text-[#ADB5BD] font-normal">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Tutor
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Course title
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Date Requested
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-[#232D42]">
              {data.data.courses.map(
                ({
                  _id,
                  title,
                  instructors,
                  createdAt,
                  isActive,
                  isPending,
                  status,
                }: {
                  status: string;
                  _id: string;
                  title: string;
                  instructors: {
                    id: string;
                    firstName: string;
                    lastName: string;
                  }[];
                  createdAt: Date;
                  isActive: boolean;
                  isPending: boolean;
                }) => (
                  <CoursesRequestTableRow
                    key={_id}
                    id={_id}
                    instructors={instructors}
                    courseTitle={title}
                    isPending={isPending}
                    isActive={isActive}
                    date={createdAt}
                    status={status}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p>No data available!</p>
        </div>
      )}
      <div className="flex justify-end my-8 pr-2">
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
    </>
  );
};

export default CoursesRequestTable;
