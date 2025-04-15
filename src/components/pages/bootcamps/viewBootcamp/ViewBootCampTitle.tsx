import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { MdError } from "react-icons/md";
import moment from "moment";

const ViewBootCampTitle = ({ course }: { course: any }) => {
  return (
    <div className="font-nunito">
      <h1 className="font-bold text-3xl ">{course.title}</h1>
      <p className="text-[#747579] text-sm my-4">{course.shortDescription}</p>
      <div className="pb-3">
        <div className="flex gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-1 font-medium">
            <AiFillStar className="text-[18px] text-[#F7C32E]" />
            {course.ratingsAverage}
          </div>
          <div className="flex items-center gap-1 font-medium">
            <FaUserGraduate className="text-[18px] text-[#FD7E14]" />
            {course.totalEnroll}
          </div>
          <div className="flex items-center gap-1 font-medium">
            <GiNetworkBars className="text-[18px] text-[#21C191]" />
            All levels
          </div>
          <div className="flex items-center gap-1 font-medium">
            <MdError className="text-[18px] text-[#D6293E]" />
            Last updated {moment(course.updatedAt).utc().format("YYYY/MM/DD")}
          </div>
          <div className="flex items-center gap-1 font-medium">
            <TbWorld className="text-[18px] text-[#17A2B8]" />
            {course.language}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBootCampTitle;
