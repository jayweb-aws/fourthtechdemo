import moment from "moment";
import { useState } from "react";
import { useAppSelector } from "../../../../../../app/hooks";

const GradeTable = ({ setasD, courseData, courseLoading }: any) => {
  const { firstName, lastName, _id } = useAppSelector(
    (state) => state.auth.user
  );

  const [test, settest] = useState<any>("");
  //console.log(courseId)
  return (
    <div>
      <div>
        <table className="table-fixed w-full ">
          <thead className="border-t border-b border-[#ADB5BD]">
            <tr className="font-medium ">
              <th className="py-3 bg-[#E3E3E3] text-left px-3 text-[16px] font-medium">
                Name
              </th>
              <th className="py-3  bg-[#E3E3E3] text-[16px] font-medium">
                Due
              </th>
              <th className="py-3 bg-[#E3E3E3] text-[16px] font-medium">
                Score
              </th>
              <th className="py-3  bg-[#E3E3E3] text-[16px] font-medium">
                Out of
              </th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            {courseLoading ? (
              <div>L</div>
            ) : courseData?.data?.course?.modules?.length > 0 ? (
              courseData?.data?.course?.modules?.map((val: any) => (
                <>
                  {val?.assignments?.map((val1: any) => (
                    <tr key={val1?._id} className="cursor pointer duration-300">
                      <th className="py-3 px-3 text-left text-[15px] font-semibold capitalize">
                        {val1?.name}
                      </th>
                      <th className="py-3 px-6 font-normal text-sm">
                        {moment(val1.createdAt).utc().format("DD MMMM YYYY")}
                      </th>
                      <th className="py-3 px-6  font-normal text-sm">
                        {val1?.submissions.length > 0 ? (
                          val1.submissions
                            .filter(
                              (val3e: any) =>
                                val3e?.student?._id === _id &&
                                val3e?.course === courseData?.data?.course?._id
                            )
                            .map((value: any) => value?.mark)
                        ) : (
                          <div>#</div>
                        )}
                        {val1.submissions.filter(
                          (val3e: any) =>
                            val3e?.student?._id === _id &&
                            val3e?.course === courseData?.data?.course?._id
                        ).length > 0
                          ? ""
                          : "#"}
                      </th>
                      <th className="py-3 px-6  font-normal text-sm">
                        {val1?.score}
                      </th>
                    </tr>
                  ))}
                  {val?.quizzes?.map((val2: any) => (
                    <tr key={val2?._id} className="cursor pointer duration-300">
                      <th className="py-3 px-3 text-left text-[15px] font-semibold">
                        {val2?.title}
                      </th>
                      <th className="py-3 px-6 font-normal text-sm">
                        {moment(val2?.createdAt).utc().format("DD MMMM YYYY")}
                      </th>
                      <th className="py-3 px-6  font-normal text-sm">
                        {val2?.submissions
                          ?.filter(
                            (val3: any) =>
                              val3?.student?._id === _id &&
                              val3?.course === courseData?.data?.course?._id
                          )
                          ?.map((val4: any) => (
                            <span>{val4?.mark}</span>
                          ))}
                        {val2?.submissions.length > 0 ? (
                          val2?.submissions
                            ?.filter(
                              (val3: any) =>
                                val3?.student?._id !== _id &&
                                val3?.course !== courseData?.data?.course?._id
                            )
                            .map((val4: any) => <div>Not submit</div>)
                        ) : (
                          <div>Not submit</div>
                        )}
                      </th>
                      <th className="py-3 px-6  font-normal text-sm">
                        {val2?.totalMark}
                      </th>
                    </tr>
                  ))}
                </>
              ))
            ) : (
              <div>No grades found </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeTable;
