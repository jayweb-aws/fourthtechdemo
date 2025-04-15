import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from "flowbite-react";

export default function UpcomingTask() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="p-5 bg-white">
      <div className="flex mb-3 justify-between items-center">
        <h1 className="text-xl text-black  font-bold">Timeline</h1>
        <Button>View all</Button>
      </div>

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
        </div>
      ))}
    </div>
  );
}
