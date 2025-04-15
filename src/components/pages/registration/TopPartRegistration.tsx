import React from "react";
import TopFormRegistration from "./TopFormRegistration";
import RegistraTionStyles from "../../../styles/GeneralStyles.module.css";

const TopPartRegistration = () => {
  return (
    <div
      className={`${RegistraTionStyles.registrationTopBGCyberSecurity}  h-auto md:h-[700px] lg:h-[700px] font-nunito `}
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 lg:gap-8 xl:gap-8 md:gap-5 container ">
        <div className=" sm:px-6 xsm:px-6 md:px-3 lg:px-4 xl:px-4">
          <h1 className="text-5xl font-bold text-white my-8">
            Your path into GRC
          </h1>
          <p className="font-semibold text-white text-3xl mb-5">
            Learn cybersecurity in 8 modules
          </p>
          <div>
            <ul className="text-white ">
              <li className="flex ">
                <div className="text-amber-300 font-bold text-5xl">
                  &#x2022;
                </div>
                <div className="pt-4">
                  <span className="font-bold">Global network:</span> Gain
                  understating of various frameworks using RMF as a prototype
                  <br />
                  employers looking to hire.
                </div>
              </li>
              <br />
              <li className="flex ">
                <div className="text-amber-300 font-bold text-5xl">
                  &#x2022;
                </div>
                <div className="pt-4">
                  <span className="font-bold">Interview Support: </span>
                  Get interview preparation guidance - Academic Plan – Get
                  access to a personalized learning trajectory
                </div>
              </li>
              <br />

              <li className="flex ">
                <div className="text-amber-300 font-bold text-5xl">
                  &#x2022;
                </div>
                <div className="pt-4">
                  <span className="font-bold">Career Success:</span>
                  et access to professional resources to help equip you into
                  your next role.
                </div>
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div className="sm:px-6 xsm:px-6 md:px-0 lg:px-0 xl:px-0">
          <TopFormRegistration />
        </div>
      </div>
    </div>
  );
};

export default TopPartRegistration;
