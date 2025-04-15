import { Avatar } from "flowbite-react";
import Image from "next/image";
import ellicps from "../../../../../../../assets/Ellipse 782.png";
import moment from "moment"


function AttendanceTableRow({quiz}:{quiz:any}) {
  // console.log(quiz)
  return (
    <tr className={`border-b `}>
    <td scope="row" className="py-5   px-2 text-center flex  items-center">
      <Image
        width={30}
        height={30}
        className=" rounded-full"
        src={quiz?.student?.avatar}
        alt="Rounded avatar"
      />
      <p className="ml-2 text-sm font-bold">{`${quiz?.student?.firstName} ${quiz?.student?.lastName}`}</p>
    </td>
    <td className="py-5   px-1  text-center font-normal text-sm">{
      `  ${quiz.grade === "F" ? "Fail" : "Pass"} `
    }</td>
    <td className="py-5   px-1  text-center font-normal text-sm">{quiz?.grade}</td>
    <td className="py-5   px-1  text-center font-normal text-sm">{`${quiz?.mark}/${quiz?.totalMark} (${quiz?.percent && quiz?.percent}%)`}</td>
    <td className="py-5   px-1  text-center font-normal text-sm">
      {moment(quiz.createdAt).format('MM/DD/YYYY')}
    </td>
    <td className="py-5   px-1  text-center font-normal text-sm">
      <p className="text-indigo-600 text-sm text-center">Details</p>
    </td>
  </tr>
  );
}

export default AttendanceTableRow;
