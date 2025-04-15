import { Avatar, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import notice1 from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import { AiFillStar } from "react-icons/ai";

const NewStudent = () => {
  const students = [
    {
      img: notice1,
      name: "Robert",
      subject: "web development",
      ratting: 3,
    },
    {
      img: notice1,
      name: "Robert",
      subject: "Character Design",
      ratting: 3.5,
    },
    {
      img: notice1,
      name: "Bruce",
      subject: "Finance",
      ratting: 4,
    },
    {
      img: notice1,
      name: "Lee",
      subject: "web development",
      ratting: 5,
    },
    {
      img: notice1,
      name: "Michel",
      subject: "web development",
      ratting: 5,
    },
  ];

  return (
    <div className="block py-7 px-2 bg-white  rounded-lg  hover:bg-gray-100">
      <div className="flex justify-between items-center pb-4">
        <h3 className="font-semibold text-xl">New Students</h3>
      </div>
      <div></div>
      <div>
        <div className=" relative">
          <Card className="p-0">
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {students.map((student, idx) => (
                  <li key={idx} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <Image
                          width={40}
                          height={40}
                          className="h-8 w-8 rounded-full"
                          src={notice1}
                          alt="Neil image"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-lg font-bold text-gray-900 dark:text-white">
                          {student.name}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {student.subject}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <AiFillStar className="text-yellow-300 w-7  mr-3 h-7" />

                        {student.ratting}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
