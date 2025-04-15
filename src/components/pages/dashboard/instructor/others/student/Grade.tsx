import { Spinner } from "flowbite-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks";
import PrintIcon from "../../../../../../assets/print.png";
import {
  useGetMyEnrollmentAllQuery,
  useGetOneCourseQuery,
  useSubmitassignmentBystudentBycourseQuery,
  useSubmitquizBystudentBycourseQuery,
} from "../../../../../../feature/api/dashboardApi";
import CourseTable from "./GradeTable";

const Grade = () => {
  const componentPdf = useRef<any>();
  const { firstName, lastName, _id } = useAppSelector(
    (state) => state.auth.user
  );
  const [courseId, setcourseId] = useState("");
  const dispatch = useAppDispatch();
  const { isError, data, error, isLoading, isSuccess } =
    useGetMyEnrollmentAllQuery({});
  const [course, setcourse] = useState();
  const [loading, setloading] = useState(false);
  const [asD, setasD] = useState();

  const handleSelect = (e: any) => {
    setcourseId(e.target.value);

    setloading(true);
    setTimeout(() => {
      if (couseSuccess) {
        setloading(false);
      }
    }, 1500);
  };

  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "user-information",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  //console.log(course)

  const {
    isError: courseError,
    data: courseData = [],
    error: courseERr,
    isLoading: courseLoading,
    isSuccess: couseSuccess,
  } = useGetOneCourseQuery(courseId);
  const {
    isError: subAsssginmentIsError,
    data: subAsssginmentData,
    error: subAsssginmentError,
    isLoading: subAsssginmentLoading,
    isSuccess: subAsssginmentIsSuccess,
  } = useSubmitassignmentBystudentBycourseQuery({
    student: _id,
    course: courseId,
  });
  const {
    isError: subQuizIsError,
    data: subQuizData,
    error: subQuizError,
    isLoading: subQuizLoading,
    isSuccess: subQuizIsSuccess,
  } = useSubmitquizBystudentBycourseQuery({ student: _id, course: courseId });

  useEffect(() => {
    setTimeout(() => {
      if (couseSuccess) {
        setloading(false);
      }
    }, 1500);
  }, [couseSuccess]);

  //console.log(asD)
  return (
    <>
      <div className="grid grid-cols-12 gap-8 font-nunito">
        <div
          ref={componentPdf}
          className=" font-nunito col-span-12 lg:col-span-8"
        >
          <div className=" font-nunito bg-[#fff] rounded">
            <div className=" font-nunito lg:p-5">
              <div className=" font-nunito flex justify-between mb-6 xsm:gap-5 lg:gap-0 items-center flex-col lg:flex-row">
                <input
                  type="number"
                  placeholder="All Grading Periods"
                  className=" font-nunito border-none rounded-md w-[100%] lg:w-[40%] h-[50px] text-sm font-normal"
                  style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                />
                <button
                  onClick={generatePDF}
                  className=" font-nunito bg-[#EBEEFD] w-full lg:w-[135px] justify-center flex items-center gap-2 border-[1px] border-[#3A57E8] font-normal text-[15px] px-3 h-[41px] rounded"
                >
                  <Image src={PrintIcon} width="17px" height="17px" alt="" />{" "}
                  Print grades
                </button>
              </div>
              <h3 className=" font-nunito font-semibold text-[21px] mb-3">
                Grades for {`${firstName} ${lastName}`}
              </h3>
              <div className=" font-nunito flex justify-between mb-3 flex-col lg:flex-row xsm:gap-5 lg:gap-0">
                <div className=" font-nunito flex gap-3 lg:items-center w-full flex-col lg:flex-row">
                  <label className=" font-nunito font-medium text-[15px]">
                    For the course
                  </label>
                  {isLoading ? (
                    <div>
                      <Spinner />
                    </div>
                  ) : (
                    isSuccess && (
                      <select defaultValue={0} onChange={handleSelect}>
                        <option key={0} value={""}>
                          Select the course
                        </option>
                        {data?.data?.enrollments?.map((val: any, indx: any) => (
                          <option
                            key={indx}
                            value={val?.course?._id}
                            selected={courseId == val?.course?._id}
                          >
                            {val?.course?.title}
                          </option>
                        ))}
                      </select>
                    )
                  )}
                </div>
                {/*
                <div className=" font-nunito flex gap-3 lg:items-center w-full flex-col lg:flex-row">
                  <label className=" font-nunito font-medium text-[15px]">Arrange by</label>
                  <input
                    type="number"
                    className=" font-nunito border-none rounded-md w-full lg:w-[54%] h-[50px] text-sm font-normal"
                    placeholder="Due Date 101"
                    style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                  />
                </div>
                */}
              </div>
            </div>

            {courseId && loading ? (
              <div className=" font-nunito flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              couseSuccess && (
                <CourseTable
                  setasD={setasD}
                  courseData={courseData}
                  courseLoading={courseLoading}
                />
              )
            )}
          </div>
        </div>
        <div className=" font-nunito col-span-12 lg:col-span-4">
          <div>
            <div>
              <div className=" font-nunito flex flex-col mb-4">
                <label className=" font-nunito font-medium mb-2">
                  Total{" "}
                  {subQuizData?.data?.subQuizzes[0]?.totalGrade
                    ? subQuizData?.data?.subQuizzes[0]?.totalGrade
                    : subAsssginmentData?.data?.subAssignments[0]?.totalGrade}
                </label>
                {/*
                <input
                  type="text"
                  placeholder='Show saved "what-if" Scores'
                  style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                  className=" font-nunito border-none text-[#8A92A6] text-sm w-full lg:w-[75%] py-4 rounded"
                />
                */}
              </div>
              {/*
              <button className=" font-nunito bg-[#3A57E8] text-sm font-normal px-4 py-2 text-white rounded xsm:w-full lg:w-[138px]">
                Show All Details
              </button>
              */}
            </div>

            {courseId && loading ? (
              <div className=" font-nunito flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              couseSuccess && (
                <div className=" font-nunito bg-[#fff] mt-4 p-5 rounded">
                  <h3 className=" font-nunito font-medium text-[#8A92A6] text-[15px]">
                    Assignments are weighted by group:
                  </h3>
                  <table className=" font-nunito mb-4 table-fixed w-full">
                    <thead>
                      <tr className=" font-nunito border-b border-[#EEEEEE]">
                        <th className=" font-nunito py-3 pr-[15rem]">Group</th>
                        <th className=" font-nunito  py-3">Weight</th>
                      </tr>
                    </thead>
                    <tbody className=" font-nunito text-center">
                      <tr className=" font-nunito border-b border-[#EEEEEE]">
                        <td className=" font-nunito py-3 pr-[15rem] text-[15px] font-medium">
                          Assignments
                        </td>
                        <td>
                          {subAsssginmentLoading ? (
                            <div>
                              <Spinner />
                            </div>
                          ) : (
                            <div>
                              {subAsssginmentData?.data?.subAssignments[0]?.grade
                                ?.charAt(0)
                                .toUpperCase()
                                ? subAsssginmentData?.data?.subAssignments[0]?.grade
                                    ?.charAt(0)
                                    .toUpperCase()
                                : "#"}
                            </div>
                          )}
                        </td>
                      </tr>

                      <tr className=" font-nunito border-b border-[#EEEEEE]">
                        <td className=" font-nunito py-3 pr-[15rem] text-[15px] font-medium">
                          Quizzes
                        </td>
                        <td>
                          {subQuizLoading ? (
                            <div>
                              <Spinner />
                            </div>
                          ) : (
                            <div>
                              {subQuizData?.data?.subQuizzes[0]?.grade
                                ? subQuizData?.data?.subQuizzes[0]?.grade
                                : "#"}
                            </div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <span className=" font-nunito text-[#8A92A6] font-medium text-[15px] rounded ml-3">
                    Calculated based only on graded
                  </span>
                  <div className=" font-nunito flex gap-2 items-center py-3">
                    <input type="checkbox" />
                    <label className=" font-nunito font-medium text-[15px]">
                      Assignments
                    </label>
                  </div>
                </div>
              )
            )}

            <div className=" font-nunito mt-4">
              <p className=" font-nunito font-medium text-[#8A92A6] text-[15px]">
                Click any score and enter a new value to see how the change will
                affect your total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grade;
