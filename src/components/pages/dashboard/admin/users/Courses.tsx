import { Dropdown } from "flowbite-react";
import Image from "next/image";
import React from "react";
import notice1 from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Courses = () => {
  const courses = [
    {
      img: notice1,
      name: "UI/UX Design",
      quantity: 30,
    },
    {
      img: notice1,
      name: "Marketing",
      quantity: 30,
    },
    {
      img: notice1,
      name: "Lifestyle",
      quantity: 30,
    },
    {
      img: notice1,
      name: "Interiors",
      quantity: 30,
    },
  ];
  return (
    <div className="bg-white rounded-xl py-4 px-3 flex flex-col">
      <h1 className="text-xl text-title-clr mb-3 font-bold">Courses</h1>

      <div className="flex flex-col ">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-evenly items-center py-3 bg-transparent rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <Image
              width={60}
              height={80}
              className="rounded-xl"
              src={notice1}
              alt=""
            />
            <div className="flex flex-col max-w-2xl justify-between leading-normal">
              <h5
                className={`${
                  idx === 0 ? "text-blue-600" : "text-title-clr"
                } mb-2 font-semi-bold text-[1.188rem] tracking-normal `}
              >
                {course.name}
              </h5>
              <p className=" font-normal text-[1rem] text-small-text-color">
                {course.quantity}+ course
              </p>
            </div>
            <button>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </a>
            </button>
            <div>
              <button>
                <BiDotsVerticalRounded className="text-small-text-color" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
