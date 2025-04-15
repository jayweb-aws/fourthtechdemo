import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetOneSubQuizQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import NumberOfquestion from "../../student-instructor-led/quiz/NumberOfQuestion";
import Question from "./question";
import Score from "./score";

const review_quiz = () => {
  const router = useRouter();
  const id = router.query.id;
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState("");
  const { user } = useSelector((state) => state?.auth);
  const [num, setnum] = useState(0);
  const { data, isSuccess, isError, isLoading } = useGetOneSubQuizQuery(id);

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(true);
    setShowModal("report");
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        isSuccess && (
          <>
            <h2 className="font-poppins text-[21px] font-semibold text-[#343434]">
              Quiz Review
            </h2>
            <div className="mt-5 grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <Score data={data} setnum={setnum} />
              </div>
              <div className="col-span-12  sm:col-span-8 ">
                <Question
                  data={data?.data?.subQuiz?.quiz}
                  num={num}
                  setnum={setnum}
                />
              </div>

              <div className="col-span-12 sm:col-span-4">
                {
                  <NumberOfquestion
                    num={num}
                    datas={data?.data?.subQuiz?.quiz}
                  />
                }
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default review_quiz;
