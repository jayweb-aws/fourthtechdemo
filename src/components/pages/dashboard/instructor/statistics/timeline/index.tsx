import Image from "next/image";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import User from "../../../../../../assets/images/avatars/12.png";
const Timeline = () => {
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className=" mb-10 w-full grid grid-cols-12 p-3 gap-x-5 font-nunito rounded-lg bg-white content-center h-auto">
        <div className="col-span-12 grid grid-cols-12 sm:col-span-12">
          <div className="col-span-3">
            <div className="relative">
              <Image
                width={60}
                height={60}
                className="rounded-full"
                src={User}
                alt=""
              />
              <span className="bottom-0 left-8  absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div className="col-span-4">
            <p className="font-bold text-slate-900 text-2xl">Elon Musk</p>
            <p className="text-xs text-small-text-color">Maths Teacher</p>
          </div>
        </div>
        <div className="col-span-12 mt-2">
          <div className="h-1  bg-gray-100 w-full"></div>
        </div>

        <div className="col-span-12 sm:col-span-12">
          <Calendar onChange={onChange} value={value} className="mx-auto" />
        </div>

        <div className="col-span-12 sm:col-span-12  py-5">
          <h1 className="text-xl text-black mb-3 font-bold">Timeline</h1>

          {[1, 2].map((idx) => (
            <div key={idx}>
              <div
                className={`flex flex-col items-start py-2 px-0 justify-between  border rounded-lg shadow-md md:flex-row md:max-w-xl  bg-gray-bg ${
                  idx === 1 ? "mb-4" : "mb-0"
                }`}
                onClick={() => setSelected(true)}
              >
                <div className="flex">
                  <div
                    className={`${
                      idx === 1 ? "bg-violet-500" : "bg-transparent"
                    } w-[2px] h-16 rounded-t-xl rounded-b-xl  `}
                  ></div>
                  <div className="flex flex-col justify-between px-2  leading-normal">
                    <h5 className="my-2 font-bold tracking-normal text-gray-500 dark:text-white">
                      Pair of Linear Equations in 2 Variables.
                    </h5>
                    <div className=" flex  justify-between w-full text-sm font-normal  text-small-text-color">
                      <p className="text-indigo-600">Class: 5th</p>
                      <p className="text-indigo-600">09:00 am</p>
                    </div>
                  </div>
                </div>
              </div>

              {idx == 1 ? (
                <div className=" my-5 w-full flex justify-end ">
                  <div>
                    <p className="text-green-400">// next 10 minutes</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
