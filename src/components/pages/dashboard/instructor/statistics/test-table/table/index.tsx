import Image, { StaticImageData } from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import Download from "../../../../../../../Icon/download";
import Watch from "../../../../../../../Icon/watch";
type TableRow = {
  id: string | number;
  mail: string;
  tutor: {
    name: string;
    avatar: string | StaticImageData;
  };
  courseTitle: string;
  date: string;
  status: string;
};
type CoursesRequestTableRowProps = {
  course: TableRow;
};

const Table = (props: CoursesRequestTableRowProps) => {
  const { course } = props;
  const {
    tutor: { name, avatar },
    courseTitle,
    date,
    status,
    mail,
  } = course || {};

  return (
    <tr className="border-b">
      <td scope="row" className="py-4 px-5">
        <div className="flex items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={70}
            objectFit="cover"
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="font-bold">{name}</p>
            <p className="text-sm">{mail}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-center">{date}</td>
      <td className="py-4 px-6">
        <button
          className={`rounded-xl px-2 py-1 text-[12px]
           ${
             (status === "Active" && "text-[#3A57E8]") ||
             (status === "Pending" && "text-[#F16A1B]") ||
             (status === "Hold" && "text-white") ||
             (status === "Complete" && "text-[#1AA053]") ||
             (status === "Inactive" && "text-[#C03221]")
           } 
           ${
             (status === "Active" && "bg-[#EBEEFD]") ||
             (status === "Pending" && "bg-[#FCE1D1]") ||
             (status === "Hold" && "bg-[#3A57E8]") ||
             (status === "Complete" && "bg-[#D5EBDF]") ||
             (status === "Inactive" && "bg-[#F2D6D3]")
           } 
           `}
        >
          {status}
        </button>
      </td>
      <td className="py-4 px-6">
        <div className="flex justify-center items-center space-x-6">
          <button className="">
            <Watch />
          </button>
          <button className=" ">
            <Download />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Table;
