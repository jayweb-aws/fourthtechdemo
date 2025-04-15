import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineEye } from "react-icons/ai";
import { useGetOneSubQuizQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import Circle from "./chart";

const quizResult = () => {
  const router = useRouter();
  const id = router.query.id as any;
  const { data, isSuccess, isError, isLoading } =
    useGetOneSubQuizQuery<any>(id);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        isSuccess && (
          <div className="flex  items-center justify-center">
            <div className="w-full rounded-xl bg-white py-5 px-3 sm:px-4 md:px-8 lg:px-13 xl:px-29">
              <div className="text-center">
                <h1 className="border-b-[2px] border-[#DEDEDE] pt-6 pb-9 font-poppins text-[24px] font-semibold leading-7 text-[#343434]">
                  Result: {data?.data?.subQuiz?.quiz?.title}
                </h1>
                <div className="pt-2">
                  <div className="flex justify-center gap-5 pt-4 text-[#343434]">
                    <h4 className="font-poppins text-[21px] font-medium">
                      Candidate:
                    </h4>
                    <h3 className="font-poppins text-[21px] font-semibold">
                      {" "}
                      {data?.data?.subQuiz?.student?.firstName}{" "}
                      {data?.data?.subQuiz?.student?.lastName}
                    </h3>
                  </div>
                  <div className="flex justify-center gap-3.5 pt-3 font-poppins text-sm font-medium text-[#A4A4A4]">
                    <p>
                      Start Time:{" "}
                      <span className="font-normal">
                        {" "}
                        {moment(data?.data?.result?.quiz?.updatedAt).format(
                          "DD/MM/YYYY HH:mm:ss"
                        )}
                      </span>
                    </p>
                    <p>
                      Submit Time:{" "}
                      <span className="font-normal">
                        {" "}
                        {moment(data?.data?.result?.updatedAt).format(
                          "DD/MM/YYYY HH:mm:ss"
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 py-9.5 sm:flex-row sm:gap-10 md:gap-20">
                    <div>
                      <h3 className="font-poppins text-[24px] font-semibold text-[#00ADEF]">
                        {data.data.subQuiz.totalMark}
                      </h3>
                      <p className="mt-1 text-[14px] text-[#343434]">
                        Total Score
                      </p>
                    </div>

                    <div>
                      {
                        //@ts-ignore
                      }
                      <Circle data={data} />
                    </div>
                    <div>
                      <h3 className="font-poppins  text-[24px] font-semibold text-[#00ADEF]">
                        {data?.data?.subQuiz?.quiz?.timeAllowed}
                        <span className="text-sm">min</span>
                      </h3>
                      <p className="mt-1 text-[14px] text-[#343434]">
                        Total Time
                      </p>
                    </div>
                  </div>
                  <div className="xsmgap-12 flex flex-col justify-center  gap-4 border-b-[2px] border-[#DEDEDE] pb-9 xsm:flex-row">
                    <Link
                      href={`/dashboard/quiz/review/${data?.data?.subQuiz?._id}`}
                    >
                      <button
                        style={{
                          boxShadow: "0px 4px 30px rgba(0, 173, 239, 0.36)",
                        }}
                        className="btn_custom_hover h-[38px] rounded-3xl border-[1px] border-[#00ADEF] bg-transparent px-7 font-poppins text-[15px] font-semibold text-[#00ADEF] transition-all hover:-translate-y-1"
                      >
                        Review Quiz
                      </button>
                    </Link>
                    <Link
                      href={"/dashboard/quiz/[courseId]/[quiz]"}
                      as={`/dashboard/quiz/${data?.data?.subQuiz?.course}/${data?.data?.subQuiz?.quiz?._id}`}
                    >
                      <button
                        style={{
                          boxShadow: "0px 4px 30px rgba(0, 173, 239, 0.36)",
                        }}
                        className="btn_custom_hover h-[38px] px-5  rounded-3xl bg-[#00ADEF] font-poppins text-[15px] font-medium text-white transition-all hover:-translate-y-1"
                      >
                        Next Topic
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href={`/dashboard/quiz/review/${data?.data?.subQuiz?._id}`}
                  >
                    <button className="m-auto mb-2 flex items-center justify-center  gap-2 rounded-3xl border-[1px] border-[#005C85] py-1.5 px-14 font-poppins text-[16px] font-semibold text-[#005C85] ">
                      <AiOutlineEye className="text-[23px]" /> View Feedback
                    </button>
                  </Link>
                  <Link
                    href={"/dashboard/quiz/[courseId]/[quiz]"}
                    as={`/dashboard/quiz/${data?.data?.subQuiz?.course}/${data?.data?.subQuiz?.quiz?._id}`}
                  >
                    <span className="pt-2 cursor-pointer font-poppins text-sm font-semibold text-[#0073EC]">
                      Try again
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default quizResult;
