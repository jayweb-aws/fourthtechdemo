import { useEffect, useState } from "react";
import { sProgramCareerServiceTabs } from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";
import ProgramInsideSingleTab from "./ProgramInsideSingleTab";

const ProgramCareerService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeChildTab, setActiveChildTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
    setActiveChildTab(0);
  };
  useEffect(() => {
    setActiveTab(0);
  }, []);

  return (
    <div className="pt-[71px]">
      <Title title="Career Service" />

      <div className="container px-[30px] mt-[48px]">
        <div className="flex md:block">
          {sProgramCareerServiceTabs?.map((item, i) => (
            <button
              onClick={() => handleTabClick(i)}
              key={i}
              className={`bg-secondary text-white rounded-t-[20px] p-[10px_20px] md:p-[25px_44px] text-[14px] md:text-[16px] font-semibold mr-[21px] ${activeTab === i && "!bg-[#B9E0FE] !text-lightdark"
                }`}
            >
              {item?.tabName}
            </button>
          ))}
        </div>

        <div className="bg-[#B9E0FE] px-[10px] md:px-[30px] lg:px-[72px] py-[30px] md:py-[55px]">
          <p>{sProgramCareerServiceTabs[activeTab]?.body}</p>

          <ProgramInsideSingleTab
            tabArray={sProgramCareerServiceTabs[activeTab]?.content}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCareerService;
