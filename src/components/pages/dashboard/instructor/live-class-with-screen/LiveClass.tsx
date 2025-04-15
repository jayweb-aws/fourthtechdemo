import React from "react";
import LiveClassFooter from "./components/LiveClassFooter";
import LiveClassLeft from "./components/LiveClassLeft";
// import LiveSharingOption rom
const LiveClass: any = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="">
        <div className="">
          <LiveClassLeft />
          {/* <LiveSharingOption/> */}
        </div>
        {/* <LiveClassRight /> */}
      </div>
    </div>
  );
};

export default LiveClass;
