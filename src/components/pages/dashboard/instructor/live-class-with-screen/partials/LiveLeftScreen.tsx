import Image from "next/image";
import React from "react";
import teacher from "../../../../../../assets/liveclass/teacher.svg";
import presenter from "../../../../../../assets/liveclass/presenter.svg";
import generalStyle from "../../../../../../styles/GeneralStyles.module.css";
const LiveLeftScreen = () => {
  return (
    <div
      className={`${generalStyle.liveBG} w-full h-[600px]  pr-5 lg:pr-0 pt-8  font-nunito`}
    >
      <div className="relative -mt-16 ">
        <Image width={170} height={170} alt="" src={teacher} />
        <div className="absolute top-4  bg-white px-2 py-1 rounded flex items-center ">
          <span className="inline-block bg-[#DD0000] w-3 h-3 rounded-full"></span>
          <span className="text-[15px] font-bold title-clr">LIVE</span>
          <span className="text-small-text-color">20:35</span>
        </div>
        <div className="flex items-center space-x-3 absolute  left-[50%] -translate-x-[50%] lg:translate-y-[550%] translate-y-[350%] md:translate-y-[550%]  bg-white px-5 py-2 shadow rounded">
          <div>
            <Image alt="" src={presenter} width={50} height={50} />
          </div>
          <div>
            <h4 className="font-bold text-[23px] font-nunito">Cody Fisher</h4>
            <p className="text-base font-nunito">Presenter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLeftScreen;
