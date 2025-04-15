/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import {
  useGetOneQuizQuery,
  useSubmitQuizMutation,
} from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import NumberOfQuestion from "./NumberOfQuestion";

export default function Quiz() {
  const router = useRouter();
  const [num, setnum] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  let [counter, setCounter] = useState(60);
  const { quiz, courseId } = router.query;
  const [
    submitQuiz,
    {
      error,
      data: quizData,
      isLoading: quizLoading,
      isSuccess: quizSuccess,
      isError: quizError,
    },
  ] = useSubmitQuizMutation();
  const { data, isSuccess, isError, isLoading } = useGetOneQuizQuery(quiz);
  const [value, setvalue] = useState("");
  const [answer, setanswer] = useState<any>([]);

  const handleNext = () => {
    if (
      0 < data.data.quiz.questions.length &&
      num !== data.data.quiz.questions.length - 1
    ) {
      if (value === "") {
        alert("Please select option. Value cannot be empty");
        return;
      }
      const answerObject = {
        question: data.data.quiz.questions[num].id,
        answer: value,
      };
      answer.push(answerObject);
      // console.log(answer);
      setnum((prev) => prev + 1);
      setvalue("");
    } else {
      // console.log("submit btn enabled plz");
    }
  };

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    setvalue(value);
  };

  const submitBtn = () => {
    if (value === "") {
      alert("Please select option. Value cannot be empty");
      return;
    }
    const answerObject = {
      question: data.data.quiz.questions[num].id,
      answer: value,
    };
    const abc = answer.find(
      (ans: any) => ans.question === data.data.quiz.questions[num].id
    );

    !abc && answer.push(answerObject);

    submitQuiz({
      quiz: quiz,
      course: courseId,
      answers: answer,
    });
    // console.log(answer);
  };
  // console.log(data, "error this");
  useEffect(() => {
    if (quizError) {
      toast.error("quiz has submit error");
      // console.log(error);
    } else if (quizSuccess) {
      toast.success("Quiz submit Successfully!");
      router.push(`/dashboard/quiz/submit-result/${quizData.data.subQuiz._id}`);
      // console.log(data);
    }
  }, [quizError, quizSuccess]);

  //timer function
  useEffect(() => {
    if (isSuccess) {
      setTimeLeft(
        data?.data?.quiz?.timeAllowed * 60
          ? data?.data?.quiz?.timeAllowed * 60
          : data?.data?.quiz?.timeAllowed.split(":").shift() * 60
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      } else {
        clearInterval(timerInterval);
        // Handle quiz time over here, for example, show a message or submit the quiz.
        toast.error("Time's up! Quiz is over.");
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : isError ? (
        <div>Error</div>
      ) : isSuccess && data?.data?.quiz?.questions?.length > 0 ? (
        <div className="grid grid-cols-12 gap-8 font-nunito bg-gray-bg">
          <div className="col-span-12 xl:col-span-8">
            <div>
              <div>
                <h2
                  className="md:mb-3 xsm:md-1"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: " 130%",
                    letterSpacing: " 0.02em",
                    color: " #232D42",
                  }}
                >
                  {data.data.quiz.title}
                </h2>
                <h5 className="text-[#3A57E8] font-semibold">
                  Question {num + 1}
                </h5>
              </div>

              <div>
                <div>
                  <p
                    className="font-medium text-[20px] mt-3 mb-3 font-sans"
                    dangerouslySetInnerHTML={{
                      __html: data?.data.quiz.questions[num].question,
                    }}
                  ></p>
                </div>
                {data.data.quiz.questions[num].answers.map(
                  (val: any, id: any) => (
                    <div key={id}>
                      <div className="flex gap-3 items-center bg-[#E9ECEF] p-5 rounded mb-2">
                        <input
                          type="checkbox"
                          className="w-5 rounded-full h-5"
                          name="same"
                          value={val.value}
                          onChange={handleChange}
                          checked={val.value === value ? true : false}
                        />
                        <label>{val.value}</label>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-end">
                {num !== data.data.quiz.questions.length - 1 && (
                  <div className="mt-4">
                    <button
                      className="bg-[#3A57E8] py-2 px-3 text-[#fff]"
                      onClick={handleNext}
                    >
                      Next Question
                    </button>
                  </div>
                )}

                {num === data.data.quiz.questions.length - 1 && (
                  <div className="mt-4">
                    <button
                      className="bg-[#3A57E8] py-2 px-3 text-[#fff]"
                      onClick={submitBtn}
                      disabled={quizLoading || quizSuccess || timeLeft === 0}
                    >
                      {quizLoading || quizSuccess ? (
                        <div className="flex justify-center items-center gap-1">
                          <Spinner />
                          Loading
                        </div>
                      ) : (
                        "Submit Quiz"
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="mb-4">
              <div className="flex w-full items-center gap-2 rounded-[35px] bg-[#CBF1FF] p-[4px] px-4 sm:w-fit">
                <div className="h-[40px] w-[62px] rounded-[12px] bg-white p-1 px-2 text-center">
                  <h4 className="h-[10px] font-poppins text-[16px] font-semibold text-[#343434]">
                    {minutes < 10 ? "0" : ""}
                    {minutes}:{seconds < 10 ? "0" : ""}
                    {seconds}
                  </h4>
                  <span className="font-poppins text-[9px] font-normal uppercase  text-[#5A5A5A]">
                    Min
                  </span>
                </div>
                <h3 className="font-poppins text-sm font-medium text-[#343434]">
                  Quiz Time Start
                </h3>
              </div>
            </div>
            <div className="bg-[#fff] p-4 rounded">
              <NumberOfQuestion num={num} datas={data?.data?.quiz} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p>No data available!</p>
        </div>
      )}
    </>
  );
}
