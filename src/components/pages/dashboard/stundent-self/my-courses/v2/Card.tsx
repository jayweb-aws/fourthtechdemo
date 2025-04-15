import Dot from "../../../../../../assets/icons/Dot";
import StarSvg from "../../../../../../assets/icons/StarSvg";
import WatchSvg from "../../../../../../assets/icons/WatchSvg";
import ProgressBar from "./ProgressBar";

const Card = () => {
  return (
    <div>
      {" "}
      <div className="border-[1px] rounded-[16px] px-[6px] pt-[6px] pb-[16px]">
        <div className="relative">
          <img
            className="rounded-[16px] h-[292px] bg-cover bg-no-repeat bg-center"
            src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"
          />
          <div className="bg-[#1B232BCC] text-white flex items-center gap-2 absolute top-[18px] right-[18px] text-[12px] leading-[12px] rounded-[6px] text-center px-[6px] py-[6px]">
            <StarSvg />
            5.5
          </div>
        </div>
        <div className="p-[16px]">
          <h1 className="text-[18px] leading-[18px]  font-medium text-[#293642]">
            Upcoming Deadline
          </h1>
          <div className=" flex flex-row items-center gap-3 pt-[16px]">
            <div className="grid grid-cols-2 items-center gap-2">
              <ProgressBar h={6} />
              <p className="text-sm  text-[#5578A0]">97% Complete</p>
            </div>
            <div className="">
              <p className="text-sm  text-[#5578A0]"></p>
              <p className="text-sm  text-[#5578A0]">
                {" "}
                <Dot />
              </p>
            </div>
            <div className=" flex items-center gap-[7px]">
              <p className="text-sm  text-[#5578A0]">
                <WatchSvg />
              </p>
              <p className="text-sm  text-[#5578A0]"> 6 Hours Left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
