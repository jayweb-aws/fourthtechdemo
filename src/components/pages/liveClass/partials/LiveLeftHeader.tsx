import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../assets/liveclass/logo.svg";
import upload from "../../../../assets/liveclass/Upload.svg";
import notificationImg from "../../../../assets/liveclass/notification-new.svg";
import more from "../../../../assets/liveclass/More.svg";
import { AiOutlineClose } from "react-icons/ai";

const LiveLeftHeader = () => {
  const [toggleOption, setToggleOption] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <div className="py-4 pl-5 lg:pl-10 pr-3 bg-white shadow flex justify-between items-center">
      <div className="cursor-pointer">
        <Image src={logo} width={250} height={40} />
      </div>
      <div>
        <p className="text-[16px] lg:text-[28px] font-bold text-[#232D42]">
          Topic of Lecture...
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer">
          <Image src={upload} width={20} height={30} />
        </div>
        <div
          onClick={() => setNotification(!notification)}
          className="cursor-pointer relative"
        >
          <Image src={notificationImg} width={25} height={30} />
          {notification && (
            <div className="absolute top-12 -left-10 w-[300px] bg-white shadow-lg z-10 px-5 py-2 rounded-xl">
              <h4 className="flex justify-between items-center pb-1 text-[23px] text-[#232D42] font-medium">
                Notifications <AiOutlineClose className="text-[16px]" />
              </h4>
              <span className="block w-full h-[1px] bg-slate-200 mb-2"></span>
              <ul className="space-y-3">
                <li className="text-[#232D42] flex justify-between">
                  <span>Daven Lane</span>
                  <span>Raise Hand</span>
                </li>
                <li className="text-[#232D42] flex justify-between">
                  <span>Elon Musk</span>
                  <span>Raise Hand</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => setToggleOption(!toggleOption)}
          className="cursor-pointer relative"
        >
          <Image src={more} width={30} height={30} alt="" />
          {toggleOption && (
            <div className="absolute top-12 -left-10 w-[300px] bg-white shadow-lg z-10 px-5 py-2 rounded-xl">
              <h4 className="flex justify-between items-center pb-1 text-[23px] text-[#232D42] font-medium">
                Advanced Options <AiOutlineClose className="text-[16px]" />
              </h4>
              <span className="block w-full h-[1px] bg-slate-200 mb-2"></span>
              <ul>
                <li className="text-[#727272]">Reactions</li>
                <li className="text-[#727272]">Enable Waiting Room</li>
                <li className="text-[#727272]">Full Screen</li>
              </ul>
            </div>
          )}
        </div>
        <button className="bg-[#3A57E8] text-white text-[12px] lg:text-base lg:px-5 px-2 py-2 rounded">
          Finish the lesson
        </button>
      </div>
    </div>
  );
};

export default LiveLeftHeader;
