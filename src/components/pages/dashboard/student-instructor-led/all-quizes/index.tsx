/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "flowbite-react";
import Link from "next/link";
import File from "../../../../../Icon/File";
import { useAppSelector } from "../../../../../app/hooks";
import { useGetAllSubmittedQuizOfAnStudentQuery } from "../../../../../feature/api/dashboardApi";

export default function Allquizes() {
  const {
    user: { id },
    refresh,
  } = useAppSelector((state: any) => state.auth);

  //const { data:enrollData, isSuccess:enrollSuccess, isError:enrollError, isLoading:enrollLoading } = useGetMyEnrollmentAllQuery({});
  const { data, isSuccess, isError, isLoading } =
    useGetAllSubmittedQuizOfAnStudentQuery(id);

  //console.log(data);
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg min-h-[100vh]">
      <div className="col-span-12 lg:col-span-12">
        <h4 className="text-[28px] font-semibold px-[10px]">Quiz</h4>
        <div className="flex flex-wrap  ">
          {isLoading ? (
            <div className="flex justify-center text-center m-auto items-center">
              <Spinner />
            </div>
          ) : isError ? (
            <div>Network Error...</div>
          ) : isSuccess && data?.data?.subQuizzes?.length > 0 ? (
            data?.data?.subQuizzes?.map((val: any) => (
              <QuizCard item={val} courseId={val.course} key={val._id} />
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
const QuizCard = ({ item, courseId }: { item: any; courseId: any }) => {
  // console.log(item, courseId)
  const totalPercentage = item.percent;
  const stringPercentage = totalPercentage.toString();
  return (
    <div className="bg-white h-fit shadow rounded-xl flex flex-col max-w-[200px] min-w-[200px]  ml-[10px]  p-[40px_10px] mt-[20px] lg:mt-[30px]">
      <div className="flex items-center px-[20px]">
        <div className="bg-gray-300 relative h-[10px] w-full rounded-2xl my-[10px]">
          <div
            style={{
              width: stringPercentage + "%",
            }}
            className={`bg-green-400 absolute top-0 left-0 h-full  rounded-2xl`}
          ></div>
        </div>
        <div className="ml-[5px]">{item.percent}%</div>
      </div>

      <div className="w-full flex mt-4 justify-center items-center">
        {/* <Image src={file} width={"48px"} height={"41px"} alt="" /> */}
        <File width={"48px"} height={"41px"} color="blue" fill="blue" />
      </div>
      <div className="text-center my-[10px]">
        <h3>{item?.quiz?.title}</h3>
      </div>
      <div className="text-blue-700 mb-5">{/* <p>{time}</p> */}</div>
      <div className="flex justify-center items-center">
        <button className="btn bg-blue-600 text-white px-5 rounded py-2 text-sm">
          {item.percent === 100 ? (
            <Link
              href={"/dashboard/quiz/review/[id]"}
              as={`/dashboard/quiz/review/${item?._id}`}
            >
              Review Quiz
            </Link>
          ) : (
            <Link
              href={"/dashboard/quiz/[courseId]/[quiz]"}
              as={`/dashboard/quiz/${courseId}/${item?.quiz?._id}`}
            >
              Take the Quiz
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};
