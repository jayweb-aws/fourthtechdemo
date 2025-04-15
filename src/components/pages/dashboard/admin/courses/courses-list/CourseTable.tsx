/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks";
import {
  useGetAllCourseQuery,
  useGetAllInstructorCourseQuery,
} from "../../../../../../feature/api/dashboardApi";
import { DelEditCourse } from "../../../../../../feature/course/courseSlice";
import responsiveStyle from "../../../../../../styles/ContactStyle.module.css";
import Loading from "../../../../../common/Loading";
import Pagination from "../../../../../common/pagination/Pagination";
import Table from "./Table";
import DynamicTable from "../../../../../common/commonTable/Table";
import { render } from "@headlessui/react/dist/utils/render";
import Image from "next/image";
import peopel from '../../../../../../assets/dashboard/Icons.svg'
import user from '../../../../../../assets/dashboard/User.svg'


function CourseTable() {
  const { roles } = useAppSelector((state) => state.auth.user);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetAllCourseQuery<any>({
      page: currentPage,
      limit: limit,
    });
  const {
    data: instructorCourseData,
    isSuccess: instructorCourseSuccess,
    isError: instructorCourseIsError,
    isLoading: instructorCourseLoading,
    isFetching: instructorFetch,
  } = useGetAllInstructorCourseQuery<any>({
    page: currentPage,
    limit: limit,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(DelEditCourse());
  }, [isSuccess]);

  console.log(data);

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

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <Image src={row.courseImage} alt={row.title} width= {58} height={36} className="w-14 h-9 rounded-md object-cover" />
          <div className="flex flex-col">
            <p className="truncate text-[#293642] font-[Poppins] text-sm font-medium leading-4">
              {row.title}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: 'Students Enrolled',
      accessor: 'students',
      render: (val,row) => (
        // <div className="bg-[rgba(72,73,232,0.10)] text-[#4A6680] px-3 py-2 rounded-md inline-flex items-center justify-center gap-2">
        //   <Image src={peopel} alt="person" width={18} height={18} />
        //     <p className="text-[14px] leading-[16px] font-medium text-[#4849E8] font-poppins">{row.totalEnroll}</p>
        // </div>
        <div
  className={`${
    row.totalEnroll === 0
      ? 'bg-[#F7F9FC] text-[#4A6680]' // when totalEnroll is 0
      : 'bg-[rgba(72,73,232,0.10)] text-[#4A6680]'
  } px-3 py-2 rounded-md inline-flex items-center justify-center gap-2`}
>
  <Image
    src={row.totalEnroll === 0 ? peopel : user}
    alt="person"
    width={18}
    height={18}
  />
  <p
    className={`text-[14px] leading-[16px] font-medium font-poppins ${
      row.totalEnroll === 0 ? 'text-[#4A6680]' : 'text-[#4849E8]'
    }`}
  >
    {row.totalEnroll}
  </p>
</div>
      ),
    },
    {
      header: 'Published Date',
      accessor: 'date',
      render : (val,row) => (
        <div className="text-[#293642] font-normal text-sm leading-[18px] font-[Poppins]">
        <p>{new Date(row.createdAt).toLocaleString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}</p>
      </div>
      )
    },
    {
      header: 'Price',
      accessor: 'price',
      render: (val, row) => (
        <p className="text-[#293642] text-sm leading-[16px] font-medium font-[Poppins]">
          ${row.price}
        </p>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (val, row) => {
        const status = row.status?.toLowerCase(); 
        const statusColors: Record<string, string> = {
          active: 'bg-[#E0F3E4] text-[#80CA8F] px-5 py-2',
          pending: 'bg-[#FAF3DF] text-[#F3CC43] px-3 py-2',
          inactive: 'bg-[#ECF1F3] text-[#84848B]',
        };
      
        const colorClass = statusColors[status] || 'bg-gray-100 text-gray-700';
      
        return (
          <span className={`rounded-md text-xs font-poppins text-center font-poppins font-medium  ${colorClass}`}>
            {row.status.charAt(0).toUpperCase() + row.status.slice(1).toLowerCase()}
          </span>
        );
      }
    },
  ];

  return (
    <div
      className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full shadow-md sm:rounded-lg mt-12`}
    >
      {roles.includes("admin") &&
        (isFetching || isLoading ? (
          <Loading />
        ) : isError ? (
          <div>Error...</div>
        ) : isSuccess &&
          data?.data?.courses &&
          data?.data?.courses?.length > 0 ? (
          <>
          <DynamicTable columns={columns} data={data?.data?.courses}  />
            {/* <table className={`w-full text-[16px] md:text-[18px] text-left`}>
              <thead className="text-[#ADB5BD] font-normal">
                <tr>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Courses
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Enroll
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Published Date
                  </th>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#232D42] font-nunito">
                {data?.data?.courses?.map(
                  ({
                    title,
                    createdAt,
                    price,
                    isPending,
                    isPublished,
                    id,
                    isActive,
                    totalEnroll,
                    status,
                  }: {
                    title: string;
                    createdAt: Date;
                    price: number;
                    isPending: boolean;
                    isPublished: boolean;
                    id: string;
                    isActive: boolean;
                    totalEnroll: number;
                    status: string;
                  }) => (
                    <Table
                      key={id}
                      title={title}
                      createdAt={createdAt}
                      price={price}
                      isPending={isPending}
                      isPublished={isPublished}
                      id={id}
                      isActive={isActive}
                      totalEnroll={totalEnroll}
                      status={status}
                    />
                  )
                )}
              </tbody>
            </table> */}
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
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <p>No data available!</p>
          </div>
        ))}

      {roles.includes("instructor") &&
        (instructorCourseLoading ? (
          <Loading />
        ) : instructorCourseIsError ? (
          <div>Error...</div>
        ) : instructorCourseSuccess &&
          instructorCourseData?.data?.courses &&
          instructorCourseData?.data?.courses?.length > 0 ? (
          <>
            <table className={`w-full text-[16px] md:text-[18px] text-left`}>
              <thead className="text-[#ADB5BD] font-normal">
                <tr>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Courses
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Enroll
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Published Date
                  </th>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 font-nunito">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 text-center font-nunito">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#232D42] font-nunito">
                {instructorCourseData?.data?.courses?.map(
                  ({
                    title,
                    createdAt,
                    price,
                    isPending,
                    isPublished,
                    id,
                    isActive,
                    totalEnroll,
                    status,
                  }: {
                    title: string;
                    createdAt: Date;
                    price: number;
                    isPending: boolean;
                    isPublished: boolean;
                    id: string;
                    isActive: boolean;
                    totalEnroll: number;
                    status: string;
                  }) => (
                    <Table
                      key={id}
                      title={title}
                      createdAt={createdAt}
                      price={price}
                      isPending={isPending}
                      isPublished={isPublished}
                      id={id}
                      isActive={isActive}
                      totalEnroll={totalEnroll}
                      status={status}
                    />
                  )
                )}
              </tbody>
            </table>
            <div className="flex justify-end my-8 pr-2">
              {instructorCourseSuccess && (
                <Pagination
                  limit={limit}
                  itemsCount={instructorCourseData?.data?.totalCount}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  onPreviousClick={handlePreviousClick}
                  onNextClick={handleNextClick}
                />
              )}
            </div>
          </>
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <p>No data available!</p>
          </div>
        ))}
    </div>
  );
}

export default CourseTable;
