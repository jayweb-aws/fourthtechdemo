import { Avatar } from "flowbite-react";
import Image from "next/image";
import ellicps from "../../../../../../assets/Ellipse 782.png";
import {useGetAllSubmittedQuizOfAnStudentQuery,useGetStudentSubAssignmentQuery,useGetAllEnrollmentInstructorQuery} from "../../../../../feature/api/dashboardApi";
interface ITable {
  id: string | number | any;
  StudentName: string | any;
  Quiz1: string | number;
  Quiz2: number | any;
  Quiz3: string | any;
  Assignment1: string | any;
  Assignment2: string | any;
  Assignment3: string | any;
  Grades: string | any;
}

interface IDataProps {
  course: ITable;
}

function Table() {
  //const { data, isSuccess, isError, isLoading } = useGetAllSubmittedQuizOfAnStudentQuery(item?.student?._id);

  //const { data:assignmentData, isSuccess:assignmentSuccess, isError:assignmentIsError, isLoading:assignmentLoading } = useGetStudentSubAssignmentQuery(item?.student?._id);

  return (
    <tr className={`border-b ${1 % 2 == 1 ? "bg-white" : ""}`}>
      <td scope="row" className="py-6 px-6 text-center flex  items-center">
        <Image
          width={30}
          height={30}
          className=" rounded-full"
          src={ellicps}
          alt="Rounded avatar"
        />
        <p className="ml-5 text-sm font-bold">{"item?.item?.student?.firstName"}</p>
      </td>
      <td className="py-6 px-3 text-center font-normal text-sm">{"Quiz1"}</td>
      <td className="py-6 px-3 text-center font-normal text-sm">{"Quiz2"}</td>
      <td className="py-6 px-3 text-center font-normal text-sm">{"Quiz3"}</td>
      <td className="py-6 px-3 text-center font-normal text-sm">
        {"Assignment1"}
      </td>
      <td className="py-6 px-3 text-center font-normal text-sm">
        {"Assignment3"}
      </td>
      <td className="py-6 px-3 text-center font-normal text-sm">
        {"Assignment2"}
      </td>
      <td className="py-6 px-3 text-center font-normal text-sm">{"Grades"}</td>
    </tr>
  );
}

export default Table;
