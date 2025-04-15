import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../../app/hooks";
import { useUpdateCourseStatusMutation } from "../../../../../../feature/api/dashboardApi";
import DeleteCourseModal from "./DeleteCourseModal";

type ITable = {
  title: string;
  createdAt: Date;
  price: number;
  isPending: boolean;
  isPublished: boolean;
  id: string;
  isActive: boolean;
  totalEnroll: number;
  status: string;
};

function Table(props: ITable) {
  const options = ["pending", "active", "rejected"];
  const { roles } = useAppSelector((state) => state.auth.user);

  const {
    title,
    createdAt,
    price,
    isPending,
    isPublished,
    id,
    isActive,
    totalEnroll,
    status,
  } = props;
  const [showDeleteCourseModal, setshowDeleteCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [
    updateCourseStatus,
    {
      error: updateCourseStatusError,
      isLoading: isUpdateCourseStatusLoading,
      isSuccess: isUpdateCourseStatusSuccess,
      isError: isUpdateCourseStatusError,
    },
  ] = useUpdateCourseStatusMutation();

  const onOptionChangeHandler = (id: string, status: string) => {
    // console.log("User Selected Value - ", event.target.value)
    // setUserStatus(status);
    updateCourseStatus({ id, status });
  };

  useEffect(() => {
    if (isUpdateCourseStatusError) {
      // console.log("update user error", updateUserError);
      toast.error((updateCourseStatusError as any).data.message);
    } else if (isUpdateCourseStatusSuccess) {
      // console.log("updated user", updatedUserData);
      toast.success("Course Status Updated Successfully!");
    }
  }, [isUpdateCourseStatusError, isUpdateCourseStatusSuccess]);

  const handleClose = () => {
    setshowDeleteCourseModal(false);
    setSelectedCourse("");
  };

  const handleDeleteCourse = (id: string) => {
    //console.log("delete course");
    setshowDeleteCourseModal(true);
    setSelectedCourse(id);
  };
  return (
    <tr className="border-b">
      <DeleteCourseModal
        show={showDeleteCourseModal}
        handleClose={handleClose}
        userId={selectedCourse}
      />
      <td scope="row" className="py-4 px-6 font-nunito">
        {title}
      </td>
      <td className="py-4 px-6 text-center font-nunito">{totalEnroll}</td>
      <td className="py-4 px-6 text-center font-nunito">
        {new Date(createdAt).toLocaleDateString()}
      </td>
      <td className="py-4 px-6 font-nunito">${price}</td>
      <td className="py-4 px-6">
        {roles.includes("admin") && (
          <select
            className={`rounded-xl capitalize px-2 py-1 text-[12px] min-w-[100px]
            ${
              (status === "pending" && "text-[#F16A1B]") ||
              (status === "active" && "text-[#1AA053]") ||
              (status === "rejected" && "text-[#C03221]")
            } 
            ${
              (status === "active" && "bg-[#EBEEFD]") ||
              (status === "pending" && "bg-[#FCE1D1]") ||
              (status === "rejected" && "bg-[#F2D6D3]")
            } 
            `}
            onChange={(e) => onOptionChangeHandler(id, e.target.value)}
            defaultValue={status}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option} className="capitalize">
                  {option}
                </option>
              );
            })}
          </select>
        )}
        {roles.includes("instructor") && (
          <button
            className={`rounded-xl px-2 py-1 text-[12px]
               ${
                 (status === "active" && "text-[#3A57E8]") ||
                 (status === "pending" && "text-[#F16A1B]") ||
                 (status === "hold" && "text-white") ||
                 (status === "complete" && "text-[#1AA053]") ||
                 (status === "inactive" && "text-[#C03221]")
               } 
               ${
                 (status === "active" && "bg-[#EBEEFD]") ||
                 (status === "pending" && "bg-[#FCE1D1]") ||
                 (status === "hold" && "bg-[#3A57E8]") ||
                 (status === "complete" && "bg-[#D5EBDF]") ||
                 (status === "inactive" && "bg-[#F2D6D3]")
               } 
               `}
          >
            {status}
          </button>
        )}
      </td>
      <td className="py-4 px-6 font-nunito">
        <div className="flex justify-center space-x-6 font-nunito">
          <Link
            href={"/dashboard/course/edit/[editId]"}
            as={`/dashboard/course/edit/${id}`}
          >
            <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
              <BiEditAlt />
            </button>
          </Link>
          {roles.includes("admin") && (
            <button
              onClick={() => handleDeleteCourse(id)}
              className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
            >
              <AiOutlineDelete />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

export default Table;
