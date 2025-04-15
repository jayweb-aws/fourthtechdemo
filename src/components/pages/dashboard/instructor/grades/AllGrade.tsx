import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import {
  useGetAllEnrollmentInstructorQuery,
  useGetAllSubmittedQuizOfAnStudentQuery,
  useGetStudentSubAssignmentQuery,
} from "../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";

function GradeTable() {
  const router = useRouter();
  const id = router.query.id;
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
    <div className="w-full md:overflow-scroll xl:overflow-hidden lg:overflow-hidden xsm:overflow-scroll sm:overflow-x-visible min-h-screen">
      <div
        className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full `}
      >
        {isLoading && assignmentLoading ? (
          <div>
            <Spinner />
          </div>
        ) : isSuccess &&
          assignmentSuccess &&
          assignmentData.data.subAssignments.length +
            data.data.subQuizzes.length >
            0 ? (
          <table className={`w-full text-[16px] md:text-[18px] text-left`}>
            <thead className="text-small-text-color text-sm ">
              <tr>
                {data.data.subQuizzes.map((val: any) => (
                  <th
                    scope="col"
                    className="py-3 px-6  font-nunito  font-bold "
                    key={val}
                  >
                    {val?.quiz?.title}
                  </th>
                ))}

                {assignmentData.data.subAssignments.map((val: any) => (
                  <th
                    scope="col"
                    className="py-3 px-6 font-bold   font-nunito"
                    key={val}
                  >
                    {val?.assignment?.name}
                  </th>
                ))}
                <th scope="col" className="py-3 px-6 font-bold   ">
                  Grades
                </th>
              </tr>
            </thead>
            <tbody className="text-[#232D42]">
              <tr className={`border-b ${1 % 2 == 1 ? "bg-white" : ""}`}>
                {data.data.subQuizzes.map((val: any) => (
                  <td
                    scope="col"
                    className="py-3 px-6 font-normal  font-nunito "
                    key={val}
                  >
                    {val.mark ? val.mark : "#"}
                  </td>
                ))}
                {assignmentData.data.subAssignments.map((val: any) => (
                  <td
                    scope="col"
                    className="py-3 px-6 font-normal  font-nunito "
                    key={val}
                  >
                    {val.mark ? val.mark : "#"}
                  </td>
                ))}

                <td scope="col" className="py-3 px-6 font-normal  font-nunito ">
                  {assignmentData.data.subAssignments[0]?.totalGrade
                    ? assignmentData.data.subAssignments[0]?.totalGrade
                    : "#"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <p>No data available!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GradeTable;
