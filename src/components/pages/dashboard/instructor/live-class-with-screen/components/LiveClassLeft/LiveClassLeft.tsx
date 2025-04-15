import React from "react";
import LiveLeftHeader from "../../partials/LiveLeftHeader";
import LiveLeftScreen from "../../partials/LiveLeftScreen";
import LiveLeftVideoOptions from "../../partials/LiveLeftVideoOptions";
import LiveSharingOption from "./../../partials/live-sharing-option";

const LiveClassLeft = () => {
  return (
    <div>
      {
        /*
      <LiveLeftHeader />
      <div className="flex items-center justify-center">
        <LiveSharingOption />
      </div>
      */
      }
      <h3 className="text-[32px] font-semibold text-dark">Live Class</h3>
      <LiveLeftVideoOptions />
    </div>
  );
};

export default LiveClassLeft;
