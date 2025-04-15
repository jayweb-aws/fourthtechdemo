import Image from "next/image";
import { AiFillStar, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

type InstructorGridCardProps = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export default function InstructorGridCard(props: InstructorGridCardProps) {
  const { firstName, lastName, avatar } = props;
  return (
    <div className="grid col-span-12 sm:col-span-6 xl:col-span-4 grid-cols-3 gap-2 bg-white shadow-sm rounded-sm mt-5">
      <div className="col-span-1 relative">
        <Image
          className="h-full w-auto"
          layout="fill"
          objectFit="cover"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-3 pr-2 p-2">
        <div className="flex justify-between">
          <h6 className="font-medium text-[20px] leading-[30px] text-[#232D42]">
            {firstName} {lastName}
          </h6>
          <div className="flex items-center gap-1">
            <AiFillStar className="text-[#FFD329]" />
            <p className="font-medium text-[19px] leading-[25px] text-[#8A92A6]">
              4.2
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-[16px] leading-[25px] text-[#8A92A6]">
            No. of Students
          </p>

          <p className="font-medium text-[16px] leading-[25px] text-[#8A92A6]">
            (315k)
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-[16px] leading-[25px] text-[#8A92A6]">
            No. of Courses
          </p>
          <p className="font-medium text-[16px] leading-[25px] text-[#8A92A6]">
            (19)
          </p>
        </div>

        <div className="flex justify-end space-x-2 mb-1">
          <button className="w-[22px] h-[22px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <BiEditAlt />
          </button>
          <button className="w-[22px] h-[22px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
