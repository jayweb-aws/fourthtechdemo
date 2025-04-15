/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import notice1 from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import { Dropdown } from "flowbite-react";

const Attendance = () => {
  const attendance = [
    {
      img: notice1,
      name: "Robert",
      percentage: 25,
    },
    {
      img: notice1,
      name: "Robert",
      percentage: 25,
    },
    {
      img: notice1,
      name: "Bruce",
      percentage: 50,
    },
    {
      img: notice1,
      name: "Lee",
      percentage: 75,
    },
    {
      img: notice1,
      name: "Michel",
      percentage: 100,
    },
  ];
  const showOpt = 100;
  return (
    <div>
      <div className="block py-2 px-2 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-semibold text-xl">Attendance</h3>
          <div className="flex gap-2 items-center">
            <p className="text-small-text-color text-xs">Short By:</p>
            <div>
              <Dropdown label="Days" dismissOnClick={false}>
                <Dropdown.Item>Days</Dropdown.Item>
                <Dropdown.Item>Weeks</Dropdown.Item>
                <Dropdown.Item>Months</Dropdown.Item>
                <Dropdown.Item>Year</Dropdown.Item>
              </Dropdown>
              {/* <Shortby /> */}
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div className="overflow-y-auto overflow-x-auto scrollbar relative scrollbar-thumb-blue-600 scrollbar-track-slate-300">
            <div className="grid grid-cols-1 gap-y-3">
              {attendance.map((student, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center max-w-[230px] max-h-[236px]"
                >
                  <Image
                    width={70}
                    height={70}
                    className="rounded-xl"
                    src={student.img}
                    alt=""
                  />
                  <p className="ml-2">{student.name}</p>
                  <div className="w-full bg-gray-200 mx-[10px] h-2.5 ">
                    <div
                      className={`bg-green-400  h-2.5 rounded-full ${
                        student.percentage === 25
                          ? "w-1/4"
                          : student.percentage === 50
                          ? "w-2/4"
                          : student.percentage === 75
                          ? "w-3/4"
                          : student.percentage === 100
                          ? "w-full"
                          : ""
                      }`}
                    ></div>
                  </div>
                  <p>{student.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
