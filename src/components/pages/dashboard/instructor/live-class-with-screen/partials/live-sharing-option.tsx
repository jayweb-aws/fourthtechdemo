import React from "react";
import Pause from "../../../../../../Icon/pause";
export default function LiveSharingOption() {
  return (
    <div className="flex py-5 font-nunito">
      <div className=" px-8 py-1 bg-[#D5EBDF]">
        <p>You are screen sharing</p>
      </div>
      <div className="px-8 py-1 bg-[#D5EBDF] mx-3">
        <div className="flex">
          <Pause />
          <p className="ml-1">Pause sharing</p>
        </div>
      </div>
      <div className=" px-8 py-1 bg-[#D5EBDF]">
        <p>You are screen sharing</p>
      </div>
    </div>
  );
}
