import ReactStars from "react-stars";
import Dot from "../../../../../../../assets/icons/Dot";
import WatchSvg from "../../../../../../../assets/icons/WatchSvg";
import ProgressBar from "../ProgressBar";

const ListCard = () => {
  return (
    <div>
      <div className="border-[1px] grid items-center gap-5 grid-cols-12 rounded-[16px] px-[6px] py-[6px] ">
        <div className="col-span-4">
          <img
            className="rounded-[16px]"
            src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"
          />
        </div>
        <div className="col-span-8">
          <h1 className="text-[18px] leading-[18px]  font-medium text-[#293642]">
            Upcoming Deadline
          </h1>
          <div className="flex items-center gap-2 py-3">
            <span className="text-[12px] leading-[12px] text-[#293642]">
              5.5
            </span>
            <ReactStars size={18} value={3} edit={false} half={true} />
            <span className="text-[12px] leading-[12px] text-[#8EABCC]">
              5.2
            </span>
          </div>
          <div className=" flex flex-row items-center gap-3">
            <div className="grid grid-cols-2 items-center gap-2">
              <ProgressBar h={6} />
              <p className="text-sm  text-[#5578A0]">97% Complete</p>
            </div>
            <Dot />

            <div className="flex gap-1 items-center">
              <p className="text-sm  text-[#5578A0]">
                {" "}
                <WatchSvg />
              </p>
              <p className="text-sm  text-[#5578A0]">6 Hours left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
