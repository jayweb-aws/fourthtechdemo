/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
// import notice1 from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import notice1 from "../../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import { Dropdown } from "flowbite-react";

const ClassProgress = () => {
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
      <div className="block mb-5 bg-white px-4 py-3  rounded-lg  hover:bg-gray-100">
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-semibold text-xl">Class Progress</h3>
        </div>
        <div>
          <div className="">
            <div className="">
              {attendance.map((student, idx) => (
                <div key={idx} className="grid grid-cols-12 my-3 ">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <p className="">{student.name}</p>
                    </div>
                  </div>

                  <div className="col-span-10 flex items-center">
                    <div className="w-full bg-gray-200 h-2.5 ">
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
                    <p className="ml-3">{student.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassProgress;
