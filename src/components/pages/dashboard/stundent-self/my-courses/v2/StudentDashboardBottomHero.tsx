import CapIcon from "../../../../../../assets/icons/CapIcon";
import Dot from "../../../../../../assets/icons/Dot";
import ModuleSvg from "../../../../../../assets/icons/Module";
import WatchSvg from "../../../../../../assets/icons/WatchSvg";
import ProgressBar from "./ProgressBar";

const StudentDashboardBottomHero = () => {
  return (
    <div className="bg-[#F8F9FB] relative grid-cols-12 mb-6 grid gap-5 justify-between border-[1px] rounded-[16px] border-[#ECF1F3] p-[24px]">
      <div className=" col-span-7 flex gap-5 flex-col">
        <h1 className="text-[18px] text-[#293642] leading-[18px] font-medium">
          Goal: Understand the basics
        </h1>
        <div className=" flex flex-row items-center gap-4">
          <div className="grid grid-cols-2 items-center gap-[10px]">
            <ProgressBar />
            <p className="text-sm  text-[#5578A0]">97% Complete</p>
          </div>
          <div>
            <Dot />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm  text-[#5578A0]">
              <WatchSvg />
            </p>
            <p className="text-sm  text-[#5578A0]">2 hours left</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <p className="text-sm  text-[#5578A0]">
              <ModuleSvg />
            </p>
            <p className="text-sm  text-[#5578A0]">2 hours left</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-end gap-8">
        <button className="font-medium py-[9px] px-[14px] rounded-[8px] text-[14px] leading-[20px] bg-[#4849E8] text-white">
          Resume Course
        </button>
      </div>
      <div className=" col-span-2">
        {" "}
        <div className="absolute right-[26px] bottom-0">
          <CapIcon />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardBottomHero;
