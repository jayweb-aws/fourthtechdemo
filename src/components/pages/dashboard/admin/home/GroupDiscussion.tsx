import Image from "next/image";
import React from "react";
import av1 from "../../../../../assets/images/avatars/06.png";
import av2 from "../../../../../assets/images/avatars/07.png";
import av3 from "../../../../../assets/images/avatars/08.png";
import av4 from "../../../../../assets/images/avatars/09.png";
import calenderLogo from "../../../../../assets/Iconly/DualTone/Calendar.svg";
import { IoCalendar } from "react-icons/io5";
import person from '../../../../../assets/dashboard/person.svg'
import Calendar from '../../../../../assets/Calendar.svg'
const GroupDiscussion = () => {

  const instructors = [
    {
      name: "Darrell Steward",
      title: "Chief Instructor of Design & Ethics",
      date: "18 Dec, 2024",
      participants: [
        person,person,person,person,person
      ],
      extraCount: 20,
      buttonLabel: "Join Lesson",
    },
    {
      name: "Jane Cooper",
      title: "Senior UX Mentor",
      date: "22 Jan, 2025",
      participants: [
        person,person,person,person,person
      ],
      extraCount: 15,
      buttonLabel: "Join Lesson",
    },
  ];
  return (
    <div className="mt-8">
       <div className="flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4">
  <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">
  Live Classes Monitor
  </p>
  <button className="text-sm   hover:underline transition-all text-[#4849E8] font-[Poppins] text-[14px] font-medium">
    View All
  </button>
</div>


<div className="grid grid-cols-1 gap-6">
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="w-full p-4 rounded-xl bg-white border border-[#E8ECEE] text-white"
        >
          <div className="mb-4">
            <h5 className="mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-[#293642] font-[Poppins] text-[16px] font-medium leading-[16px]">{instructor.name}</h5>
            <p className="text-[#5578A0] font-[Poppins] text-[14px] font-normal leading-[18px]">{instructor.title}</p>
          </div>

          <p className="mb-3 text-[#8EABCC] font-[Poppins] text-[12px] font-normal leading-[12px]">Participants</p>
          <div className="flex items-center mb-4">
  {instructor.participants.slice(0, 5).map((src, i) => (
    <div
      key={i}
      className={`w-9 h-9 rounded-full border-2 border-white overflow-hidden ${
        i !== 0 ? '-ml-4' : ''
      }`}
    >
      <Image
        src={src}
        alt={`avatar-${i}`}
        width={36}
        height={36}
        className="w-full h-full object-cover"
      />
    </div>
  ))}

  {instructor.extraCount > 0 && (
    <div className="-ml-4 w-9 h-9 rounded-full bg-[#F0F4F8]  text-[#3E63DD] text-xs font-semibold flex items-center justify-center border-2 border-white">
      +{instructor.extraCount}
    </div>
  )}
</div>


          <hr className="border-[#E8ECEE] my-4" />

          <div className="flex items-center justify-between">
            <div className="flex items-center  gap-2">
              {/* <IoCalendar className="w-5 h-5" /> */}
              <Image src={Calendar} alt="Calendar" width={21} height={21} />
              <span className="text-[#5578A0] font-[Poppins] text-[14px] font-normal leading-[18px]">{instructor.date}</span>
            </div>
            <button className="bg-[#3E63DD] px-4 py-2 rounded-xl hover:bg-[#3456c0] transition text-white font-[Poppins] text-[14px] font-medium leading-[20px]">
              {instructor.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default GroupDiscussion;
