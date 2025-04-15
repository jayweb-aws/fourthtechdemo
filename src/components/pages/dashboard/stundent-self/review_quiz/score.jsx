import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const score = ({ data, setnum }) => {
  const count = [1, 2, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

  return (
    <div className="pt-1">
      <div className="flex flex-wrap gap-7">
        {data?.data?.subQuiz?.answers?.map((val, indx) => (
          <div
            className="w-fit cursor-pointer text-center"
            onClick={() => setnum(indx)}
          >
            <span className="font-poppins text-lg font-medium text-[#343434]">
              {indx + 1}
            </span>
            <div
              className={`w-fit rounded-full ${
                val?.correct ? "bg-[#1AA053]" : "bg-[#ff0000cb]"
              } p-1.5`}
            >
              {val?.correct ? (
                <FaCheck className="text-[16px] font-semibold text-white" />
              ) : (
                <MdOutlineClose className="text-[16px] font-semibold text-white" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex  gap-3">
        <div className="flex items-center gap-2.5">
          <p className="font-poppins text-sm text-[#343434]">Your Score:</p>
          <h3 className="font-poppins text-[22px] font-semibold text-[#00ADEF]">
            {data?.data?.subQuiz?.mark}/{data?.data?.subQuiz?.totalMark}
          </h3>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-poppins text-sm text-[#343434] ">Time Token:</p>
          <h3 className="flex items-end gap-[2px] font-poppins text-[22px] font-semibold text-[#00ADEF]">
            {data?.data?.subQuiz?.quiz?.timeAllowed}
            <span className="text-sm font-medium">min</span>
          </h3>
        </div>
      </div>
      <div className="mt-6 flex items-center  gap-7">
        <Link
          href={"/dashboard/quiz/[courseId]/[quiz]"}
          as={`/dashboard/quiz/${data?.data?.subQuiz?.course}/${data?.data?.subQuiz?.quiz?._id}`}
        >
          <button className="btn_custom_hover px-2 flex items-center gap-0.5 rounded-3xl border-[1px] border-[#00ADEF] bg-transparent px-6.5 py-1.5 font-poppins text-[15px] font-semibold text-[#00ADEF] transition-all">
            Try Again
          </button>
        </Link>
        <Link
          href={"/dashboard/quiz/submit-result/[id]"}
          as={`/dashboard/quiz/submit-result/${data?.data?.subQuiz?._id}`}
        >
          <button className="btn_custom_hover flex items-center gap-0.5 rounded-3xl border-[1px]  bg-[#00ADEF] px-8 py-2 font-poppins text-[15px] font-semibold text-[#fff] transition-all">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default score;
