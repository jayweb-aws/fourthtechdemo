import { MdArrowForward } from "react-icons/md";

const question = ({ data, num, setnum }) => {
  function htmlDecode(input) {
    var e = document.createElement("p");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  const handleNext = () => {
    if (0 < data?.questions?.length && num !== data?.questions?.length - 1) {
      setnum((prev) => prev + 1);
    }
  };
  return (
    <div className="rounded-md bg-[#fff]">
      <div className="p-5">
        <p
          className="flex gap-1 font-poppins text-[19px] font-medium text-[#343434]"
          dangerouslySetInnerHTML={{
            __html: htmlDecode(`${num + 1}. ${data?.questions[num]?.question}`),
          }}
        ></p>
        <div className="mt-7 mb-3 ">
          {data?.questions[num]?.answers?.map((val, num) => (
            <div className="mb-1.5 flex items-center gap-2" key={num}>
              <input
                type="checkbox"
                name="same"
                className="h-[18px] w-[18px]"
                checked={val?.checked}
              />
              <label className="font-poppins text-sm leading-[33px] text-[#5A5A5A]">
                {val?.value}
              </label>
            </div>
          ))}

          <div className="mt-5">
            <p className="mb-2 font-poppins text-[19px] font-medium text-[#343434]">
              Explanation:
            </p>
            <p
              className="font-poppins text-sm  text-[#5A5A5A]"
              dangerouslySetInnerHTML={{
                __html: htmlDecode(
                  `${
                    data?.questions[num]?.explanation
                      ? data?.questions[num]?.explanation
                      : "Empty Explanation"
                  }`
                ),
              }}
            ></p>
          </div>
          <div className="pt-5">
            <button
              className="btn_custom_hover rou flex items-center gap-2 rounded-[25px] bg-[#00ADEF] px-8 py-2 font-poppins  font-medium text-white transition-all hover:-translate-y-1"
              style={{ boxShadow: "0px 10px 30px rgba(0, 173, 239, 0.36)" }}
              onClick={handleNext}
            >
              Next
              <MdArrowForward className="font-medium" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default question;
