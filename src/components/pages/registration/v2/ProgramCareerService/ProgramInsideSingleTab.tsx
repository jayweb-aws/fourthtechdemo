import Image from "next/image";
import { useEffect, useState } from "react";
import pandaImg from "../../../../../assets/single-program/panda.png";
import tickImg from "../../../../../assets/single-program/tick.png";

const ProgramInsideSingleTab = ({ tabArray }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  useEffect(() => {
    setActiveTab(0);
  }, [tabArray]);

  return (
    <div className="pt-[40px] md:flex justify-center gap-x-[40px]">
      <div className="mb-[30px] md:mb-0">
        {tabArray?.map((item: any, i: any) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            className={`p-[0px_20px] md:p-[5px_30px] rounded-full md:rounded-l-[50px] bg-secondary text-white flex items-center w-full md:w-[300px] text-left mb-[13px] last:mb-0 ${
              activeTab === i && "bg-white !text-secondary"
            }`}
          >
            <span className="mr-[20px] text-[24px] md:text-[36px] font-semibold">
              {1 + i}
            </span>
            <span className="text-[14px] md:text-[16px] font-semibold">
              {item?.tabItem}
            </span>
          </button>
        ))}
      </div>

      <div className="col-span-2 text-lightdark relative">
        <h4 className="text-[18px] md:text-[20px] font-semibold mb-[5px]">
          {tabArray[activeTab]?.title}
        </h4>
        <h4 className="text-[16px] font-semibold mb-[5px]">
          {tabArray[activeTab]?.subTitle}
        </h4>
        <p className="text-[14px]">{tabArray[activeTab]?.description}</p>

        <div className="mt-[34px]">
          <h4 className="text-[16px] font-semibold mb-[5px]">
            {tabArray[activeTab]?.listTitle}
          </h4>

          <ul>
            {tabArray[activeTab]?.lists?.map((item: any, i: any) => (
              <li
                key={i}
                className="flex items-center gap-x-[15px] mb-[5px] last:mb-0"
              >
                <Image src={tickImg} alt="tick" />
                <span className="text-[14px]">{item?.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Panda Image  */}
        <div className="absolute right-0 bottom-[-50px] w-[180px] xl:w-[200px] hidden lg:block">
          <Image src={pandaImg} alt="panda" />
        </div>
      </div>
    </div>
  );
};

export default ProgramInsideSingleTab;
