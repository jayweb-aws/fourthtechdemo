import { Spinner } from "flowbite-react";
import Link from "next/link";
import { useAppSelector } from "../../../../../app/hooks";
import { useGetAllSubmitAssignmentInstructorQuery } from "../../../../../feature/api/dashboardApi";

export default function AllAssignments() {
  const { id } = useAppSelector((state) => state.auth.user);
  const { data, isSuccess, isError, isLoading } =
    useGetAllSubmitAssignmentInstructorQuery(id);

  return (
    <div className="xsm:p-1 sm:p-1 lg:p-4 md:p-3 xl:p-5 font-nunito h-[100vh]">
      <div className="flex justify-between items-center mb-[20px] xsm:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        <div>
          <h1 className="font-bold text-lg">All Submitted Assignments</h1>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-[100vw] max-h-[100vh] overflow-y-scroll">
        <div className="">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : isSuccess && data.data.subAssignments.length > 0 ? (
            data.data.subAssignments.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={"/dashboard/assignmentmarking/[id]"}
                as={`/dashboard/assignmentmarking/${item._id}`}
              >
                <div
                  key={item._id}
                  className="p-3 cursor-pointer bg-white flex justify-between items-center w-full border-l-blue-400 border-l-[8px] border-b-slate-400 border-b-[2px]"
                >
                  <div className="w-full flex xsm:items-start sm:items-start md:items-start lg:items-center xl:items-center gap-3">
                    <div className="xl:mx-[15px] md:mx-[5px] xsm:[mx-5px] lg:[mx-5px] sm:[mx-5px] flex justify-center flex-col items-center w-[7rem]">
                      <img
                        src={item?.student?.avatar}
                        className="w-[50px] h-[50px] rounded-full"
                        alt=""
                      />
                      <div>
                        <h4 className="font-nunito text-sm mt-1 ">
                          {item?.student?.firstName} {item?.student?.lastName}
                        </h4>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="font-bold text-2xl">
                        {item?.assignment?.name}
                      </h1>
                      {/*
                  <div className="flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between xsm:items-start sm:items-start md:items-start lg:items-center xl:items-center md:text-sm sm:text-sm xsm:text-sm xl:text-sm lg:text-xs ">
                    <p>Week 1</p>
                    <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                      |
                    </p>
                    <p>March 29-32</p>
                    <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                      |
                    </p>
                    <p>Course Overview & Module 1 Module</p>
                    <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                      |
                    </p>
                    <p>Due Apr 1 at 11:59pm</p>
                    <p className="mx-[2px]  xsm:hidden sm:hidden lg:block md:hidden xl:block">
                      |
                    </p>
                    <p>{item.score} pts</p>
                   </div> */}
                    </div>
                  </div>
                  <div className="ml-[10px] flex justify-end ">
                    <div className="flex justify-between items-center">
                      <div className="mr-[20px]">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.9141"
                              cy="16.917"
                              r="15.75"
                              fill="white"
                            />
                            <path
                              d="M35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5ZM26.3156 10.8719C26.1594 10.7162 25.9733 10.5936 25.7686 10.5114C25.5639 10.4293 25.3447 10.3892 25.1241 10.3937C24.9036 10.3982 24.6862 10.4471 24.485 10.5376C24.2838 10.628 24.1029 10.7581 23.9531 10.92L16.3559 20.5997L11.7775 16.0191C11.4665 15.7293 11.0551 15.5715 10.6301 15.579C10.2051 15.5865 9.79954 15.7587 9.49895 16.0593C9.19836 16.3599 9.02618 16.7654 9.01868 17.1904C9.01118 17.6155 9.16895 18.0268 9.45875 18.3378L15.2469 24.1281C15.4028 24.2838 15.5885 24.4064 15.7928 24.4887C15.9972 24.5711 16.216 24.6114 16.4363 24.6073C16.6566 24.6032 16.8738 24.5548 17.075 24.465C17.2761 24.3751 17.4571 24.2457 17.6072 24.0844L26.3397 13.1687C26.6374 12.8592 26.8019 12.4453 26.7978 12.0158C26.7937 11.5864 26.6214 11.1757 26.3178 10.8719H26.3156Z"
                              fill="#1F8E61"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span>
                          <svg
                            width="15"
                            height="20"
                            viewBox="0 0 9 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 34.5C9 35.6935 8.5259 36.8381 7.68198 37.682C6.83807 38.5259 5.69347 39 4.5 39C3.30653 39 2.16193 38.5259 1.31802 37.682C0.474105 36.8381 0 35.6935 0 34.5C0 33.3065 0.474105 32.1619 1.31802 31.318C2.16193 30.4741 3.30653 30 4.5 30C5.69347 30 6.83807 30.4741 7.68198 31.318C8.5259 32.1619 9 33.3065 9 34.5ZM9 19.5C9 20.6935 8.5259 21.8381 7.68198 22.682C6.83807 23.5259 5.69347 24 4.5 24C3.30653 24 2.16193 23.5259 1.31802 22.682C0.474105 21.8381 0 20.6935 0 19.5C0 18.3065 0.474105 17.1619 1.31802 16.318C2.16193 15.4741 3.30653 15 4.5 15C5.69347 15 6.83807 15.4741 7.68198 16.318C8.5259 17.1619 9 18.3065 9 19.5ZM9 4.5C9 5.69347 8.5259 6.83807 7.68198 7.68198C6.83807 8.52589 5.69347 9 4.5 9C3.30653 9 2.16193 8.52589 1.31802 7.68198C0.474105 6.83807 0 5.69347 0 4.5C0 3.30653 0.474105 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0C5.69347 0 6.83807 0.474106 7.68198 1.31802C8.5259 2.16193 9 3.30653 9 4.5Z"
                              fill="#707070"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
          <p>No data available!</p>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}
