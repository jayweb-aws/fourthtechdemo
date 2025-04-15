import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

import Calendar from "../../../../../assets/dashboard/Calendar.png";
import certificate from "../../../../../assets/dashboard/certificate.png";
import chart from "../../../../../assets/dashboard/Chart.png";
import file from "../../../../../assets/dashboard/Paper.png";
import Certificate from "../../../../../Icon/Certificate";
import Chart from "../../../../../Icon/Chart";
import File from "../../../../../Icon/File";
import Image from "next/image";
const CourseOverview = () => {
  const courseData = [
    {
      img: IoCalendarOutline,
      number: "04",
      title: "Weeks Practised",
    },
    {
      img: "",
      number: "56",

      title: "Lessons Learned",
    },
    {
      img: "",
      number: "82%",

      title: "Average Score",
    },
    {
      img: "",
      number: "42",

      title: "Mock Test Attempt",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-5 mt-6">
      {courseData.map((card, idx) => (
        <div
          key={idx}
          className="col-span-12 sm:col-span-6 md:col-span-3 xl:col-span-6 2xl:col-span-3"
        >
          <div
            className={`py-7 px-3 rounded-lg  ${
              idx == 0
                ? "bg-[#3A57E8]"
                : idx == 1
                ? "bg-[#369BFF]"
                : idx == 2
                ? "bg-[#08B1BA]"
                : idx == 3
                ? "bg-[#0048B2]"
                : ""
            }`}
          >
            <div className="mb-5 mx-auto">
              {idx === 0 ? (
                <Image width={62} height={68} src={Calendar} alt="" />
              ) : idx == 1 ? (
                <Image width={62} height={68} src={certificate} alt="" />
              ) : idx == 2 ? (
                <Image width={62} height={68} src={chart} alt="" />
              ) : idx == 3 ? (
                <Image width={62} height={68} src={file} alt="" />
              ) : (
                ""
              )}
            </div>

            <p className="text-white font-bold text-xl mb-3">{card.number}</p>
            <p className="mb-3 font-normal text-sm text-white">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOverview;
