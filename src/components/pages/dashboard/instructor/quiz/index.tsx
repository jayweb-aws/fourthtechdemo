import QuizCalendar from "./calendar";
import AllQuiz from "./all-quiz";

function Quiz() {
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg  min-h-[100vh]">
      <div className="col-span-12 lg:col-span-8">
        <AllQuiz />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-12 lg:col-span-12 my-10">
            <QuizCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
