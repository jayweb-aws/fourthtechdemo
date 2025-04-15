import { Spinner } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../../../../../app/hooks";
import {
  useGetAllEnrollmentInstructorQuery,
  useGetAllSubmittedQuizOfAnStudentQuery,
  useGetStudentSubAssignmentQuery,
} from "../../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../../styles/ContactStyle.module.css";

function GradeTable() {
  const { id } = useAppSelector((state) => state.auth.user);
  const {
    data: enrollData,
    isSuccess: enrollSuccess,
    isError: enrollIsError,
    isLoading: enrollLoading,
  } = useGetAllEnrollmentInstructorQuery(id);
  const { data, isSuccess, isError, isLoading } =
    useGetAllSubmittedQuizOfAnStudentQuery(id);

  const {
    data: assignmentData,
    isSuccess: assignmentSuccess,
    isError: assignmentIsError,
    isLoading: assignmentLoading,
  } = useGetStudentSubAssignmentQuery(id);

  return (
    <div className="w-full md:overflow-scroll xl:overflow-hidden lg:overflow-hidden xsm:overflow-scroll sm:overflow-x-visible h-[100vh]">
      <div
        className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full `}
      >
        <table className={`w-full text-[16px] md:text-[18px] text-left`}>
          <thead className="text-small-text-color text-sm ">
            <tr>
              <th scope="col" className=" font-normal py-3">
                Student Name
              </th>
            </tr>
          </thead>
          <tbody className="text-[#232D42]">
            {enrollLoading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : isError ? (
              <div>Error...</div>
            ) : enrollSuccess && enrollData?.data?.enrollments?.length > 0 ? (
              enrollData?.data?.enrollments?.map((val: any) => (
                <tr
                  className={`border-b ${val.id % 2 == 1 ? "bg-white" : ""}`}
                  key={val}
                >
                  <Link
                    href={`/dashboard/grades/[id]`}
                    as={`/dashboard/grades/${val?.student?._id}`}
                  >
                    <td
                      scope="row"
                      className="py-6 px-6 text-center flex  items-center cursor-pointer"
                    >
                      <Image
                        width={30}
                        height={30}
                        className=" rounded-full"
                        src={val?.student?.avatar}
                        alt="Rounded avatar"
                      />
                      <p className="ml-5 text-sm font-bold">{`${val?.student?.firstName} ${val?.student?.lastName}`}</p>
                    </td>
                  </Link>
                </tr>
              ))
            ) : (
              <div className="h-[50vh] flex justify-center items-center">
                <p>No data available!</p>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradeTable;
