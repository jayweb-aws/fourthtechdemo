import Image from "next/image";
import { useEffect, useState } from "react";
import tickImg from "../../../../../assets/single-program/tick.png";
import { sProgramCurriculamTabs } from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";

const ProgramCurriculam = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  useEffect(() => {
    setActiveTab(0);
  }, []);
  return (
    <div>
      <Title title="Curriculum Overview" />

      <div className="relative z-10 before:absolute before:w-full before:h-full before:bg-secondary before:z-[-1] before:skew-y-[6deg] h-[750px] md:h-[446px] my-[60px] md:my-[100px]">
        <div className="container px-[30px] pt-[60px] md:flex justify-center gap-x-[40px]">
          <div className="mb-[30px] md:mb-0">
            {sProgramCurriculamTabs?.map((item, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`p-[0px_20px] md:p-[5px_30px] rounded-full md:rounded-l-[50px] bg-white text-secondary flex items-center w-full md:w-[300px] text-left mb-[13px] last:mb-0 ${activeTab === i && "!text-dark"
                  }`}
              >
                <span className="mr-[20px] text-[36px] font-semibold">
                  {1 + i}
                </span>
                <span className="text-[16px] font-semibold">
                  {item?.tabItem}
                </span>
              </button>
            ))}
          </div>

          <div className="col-span-2 text-white">
            <h4 className="text-[20px] font-semibold mb-[5px]">
              {sProgramCurriculamTabs[activeTab]?.title}
            </h4>
            <h4 className="text-[16px] font-semibold mb-[5px]">
              {sProgramCurriculamTabs[activeTab]?.subTitle}
            </h4>
            <p className="text-[14px]">
              {sProgramCurriculamTabs[activeTab]?.description}
            </p>

            <div className="mt-[40px]">
              <h4 className="text-[16px] font-semibold mb-[5px]">
                {sProgramCurriculamTabs[activeTab]?.listTitle}
              </h4>

              <ul>
                {sProgramCurriculamTabs[activeTab]?.lists?.map((item, i) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCurriculam;
