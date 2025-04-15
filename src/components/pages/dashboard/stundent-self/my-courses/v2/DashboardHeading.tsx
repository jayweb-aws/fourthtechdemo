import BottonArrowSvg from "../../../../../../assets/icons/BottonArrowSvg";
import GridIcon from "../../../../../../assets/icons/GridIcon";
import ListSvg from "../../../../../../assets/icons/ListSvg";
const DashboardHeading = ({ GridButton, setGridButton }: any) => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mb-[18px]">
        <h1 className="text-[21px]  font-medium text-[#293642]">
          Upcoming Deadline
        </h1>
        <div className="flex items-center gap-5">
          {" "}
          <button className="py-[6px] w-[141px] flex justify-between items-center px-[11px] rounded-[8px] border-[1px] border-[#ECF1F3]">
            <div>
              {" "}
              <span className="text-sm text-[#6080B0] leading-[18px]">
                Filter:
              </span>
              <span className="text-sm ml-1 leading-[20px] !font-medium text-[#293642]">
                All
              </span>
            </div>
            <BottonArrowSvg />
          </button>
          <div className="flex items-center px-3 gap-1 pt-[5px] pb-[2px] rounded-[8px] border-[1px] border-[#ECF1F3]">
            <div>
              <button
                className={`${
                  GridButton === "grid" && "bg-[#4849E81A]  rounded-[6px]"
                } w-[30px] transition-all p-1 h-[30px]`}
                onClick={() => setGridButton("grid")}
              >
                {" "}
                <GridIcon />
              </button>
            </div>
            <div>
              <button
                className={`${
                  GridButton === "list" && "bg-[#4849E81A] rounded-[6px]"
                } w-[30px]  p-1  transition-all h-[30px]`}
                onClick={() => setGridButton("list")}
              >
                {" "}
                <ListSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeading;
