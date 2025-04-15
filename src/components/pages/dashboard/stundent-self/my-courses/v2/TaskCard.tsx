import CircleRightSvg from "../../../../../../assets/icons/CircleRightSvg";
import RightArrowSvg from "../../../../../../assets/icons/RightArrowSvg";

const TaskCard = () => {
  return (
    <div>
      <div className="border-[1px] justify-between flex items-center gap-3 rounded-r-[16px] rounded-l-[55px] px-[15px] py-[10px] border-[#E8ECEE]">
        <div className="flex items-center gap-3">
          {" "}
          <div>
            <CircleRightSvg />
          </div>
          <div>
            <h1 className="font-medium mb-2 text-[16px] leading-[16px] text-[#293642]">
              Cyber Security
            </h1>
            <div className="flex gap-4 items-center">
              <span className="text-sm leading-[18px] text-[#5578A0]">
                Days:{" "}
                <span className="text-sm leading-[16px] !font-medium text-[#293642]">
                  3/5
                </span>
              </span>
              <span className="text-sm leading-[16px] !font-medium text-[#4849E8]">
                15:55 <span>AM</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <RightArrowSvg />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
