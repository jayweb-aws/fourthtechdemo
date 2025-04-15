/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import toast from 'react-hot-toast';
import {
  useGetCourseInstructorQuery,
  useUpdateUserMutation,
} from "../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
import ModalDialog from "../../../../layouts/ModalDialog";
import DeleteUserConfirmModal from "./DeleteUserConfirmModal";
import EditUserModal from "./EditUsersModal";
import ViewModal from "./ViewModal";

type UsersTableProps = {
  users: any[];
  componentPdf: any;
  course: any;
};

const UsersTable = (props: UsersTableProps) => {
  const { users, componentPdf, course } = props;

  // console.log(props);
  return (
    <div
      className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full shadow-md sm:rounded-lg mt-12 font-nunito`}
    >
      <table
        ref={componentPdf}
        className={`w-full text-[14px] md:text-[16px] text-left`}
      >
        <thead className="text-[#ADB5BD] font-normal">
          <tr>
            <th scope="col" className="py-3 px-6">
              Profile
            </th>
            {!course && (
              <th scope="col" className="py-3 px-6 text-center">
                Contact
              </th>
            )}
            {!course && (
              <th scope="col" className="py-3 px-6 text-center">
                Email ID
              </th>
            )}

            {course && (
              <th scope="col" className="py-3 px-6 text-center">
                No. of Students
              </th>
            )}
            {course && (
              <th scope="col" className="py-3 px-6 text-center">
                No. of Courses
              </th>
            )}

            {course && (
              <th scope="col" className="py-3 px-6 text-center">
                Earnings
              </th>
            )}
            {!course && (
              <th scope="col" className="py-3 px-6">
                Country
              </th>
            )}

            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-[#232D42]">
          {users.map(
            ({
              _id,
              firstName,
              lastName,
              avatar,
              email,
              phone,
              country,
              status,
              currentJob,
              studentType,
              userName = "",
              knowFrom,
              highestStudy,
              state,
              nCourse,
              nEarning,
              nEnroll,
            }) => (
              <UserTableRow
                course={course}
                key={_id}
                profile={{ avatar, firstName, lastName, userName }}
                id={_id}
                contact={phone}
                country={country}
                nCourse={nCourse}
                nEarning={nEarning}
                nEnroll={nEnroll}
                email={email}
                status={status}
                currentJob={currentJob}
                studentType={studentType}
                knowFrom={knowFrom}
                highestStudy={highestStudy}
                state={state}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

type UsersTableRowProps = {
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    userName: string;
  };
  id: string;
  contact: string;
  email: string;
  status: string;
  highestStudy: string;
  knowFrom: string;
  studentType: string;
  currentJob: string;
  state: string;
  country: string;
  course: any;
  nCourse: any;
  nEarning: any;
  nEnroll: any;
};

const UserTableRow = (props: UsersTableRowProps) => {
  const options = ["inactive", "complete", "hold", "pending", "active"];
  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetCourseInstructorQuery(props.id);
  const {
    profile: { firstName, lastName, avatar, userName },
    id,
    contact,
    course,
    nEnroll,
    nEarning,
    nCourse,
    email,
    country,
    status,
    currentJob,
    studentType,
    knowFrom,
    highestStudy,
    state,
  } = props;
  let [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState("");
  const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] =
    useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [userStatus, setUserStatus] = useState(status);
  const [userId, setuserId] = useState("");

  const [
    updateUser,
    {
      error: updateUserError,
      isLoading: isUpdateUserLoading,
      isSuccess: isUpdateUserSuccess,
      isError: isUpdateUserError,
    },
  ] = useUpdateUserMutation();

  const onOptionChangeHandler = (id: string, status: string) => {
    // console.log("User Selected Value - ", event.target.value)
    setUserStatus(status);
    updateUser({ id, user: { status } });
  };

  const handleClose = () => {
    setShowDeleteUserConfirmModal(false);
    setSelectedUser("");
  };
  const handleDeleteUser = (id: string) => {
    setShowDeleteUserConfirmModal(true);
    setSelectedUser(id);
  };
  const handleCloseEditUserModal = () => setShowEditUserModal(false);
  // New View Modal
  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (value: any, id: any) => {
    setIsOpen(true);
    setModal(value);
    setuserId(id);
  };

  useEffect(() => {
    if (isUpdateUserError) {
      // console.log("update user error", updateUserError);
      toast.error((updateUserError as any).data.message);
    } else if (isUpdateUserSuccess) {
      // console.log("updated user", updatedUserData);
      toast.success("User status updated Successfully!");
    }
  }, [isUpdateUserError, isUpdateUserSuccess]);

  return (
    <tr className="border-b">
      <DeleteUserConfirmModal
        show={showDeleteUserConfirmModal}
        handleClose={handleClose}
        userId={selectedUser}
      />

      <td scope="row" className="py-4 px-6">
        <div className="flex space-x-2">
          <div className="lg:w-[60px] relative w-[40px] lg:h-[60px] h-[40px] ">
            <Image
              className="w-full h-full rounded-md"
              src={avatar}
              alt=""
              layout="fill"
            />
          </div>
          <div>
            <h2 className="text-[14px] md:text-[16px] text-[#232D42] font-medium">
              {firstName} {lastName}
            </h2>
            <p className="text-[16px] text-[#8A92A6]">{userName}</p>
          </div>
        </div>
      </td>
      {!course && <td className="py-4 px-6 text-center">{contact}</td>}
      {!course && <td className="py-4 px-6 text-center">{email}</td>}

      {course && <td className="py-4 px-6 text-center">{nEnroll}</td>}
      {course && <td className="py-4 px-6 text-center">{nCourse}</td>}
      {course && <td className="py-4 px-6 text-center">$ {nEarning}</td>}
      {!course && <td className="py-4 px-6 capitalize">{country}</td>}
      <td className="py-4 px-6">
        <select
          className={`rounded-xl px-2 capitalize py-1 text-[12px] min-w-[100px]
       ${
         (userStatus === "active" && "text-[#3A57E8]") ||
         (userStatus === "pending" && "text-[#F16A1B]") ||
         (userStatus === "complete" && "text-[#1AA053]") ||
         (userStatus === "hold" && "text-white") ||
         (userStatus === "inactive" && "text-[#C03221]")
       } 
       ${
         (userStatus === "active" && "bg-[#EBEEFD]") ||
         (userStatus === "pending" && "bg-[#FCE1D1]") ||
         (userStatus === "hold" && "bg-[#3A57E8]") ||
         (userStatus === "complete" && "bg-[#D5EBDF]") ||
         (userStatus === "inactive" && "bg-[#F2D6D3]")
       } 
       
       
       `}
          onChange={(e) => onOptionChangeHandler(id, e.target.value)}
          defaultValue={status || userStatus}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option} className="capitalize">
                {option}{" "}
              </option>
            );
          })}
        </select>
      </td>
      <td className="py-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleModal("viewModal", id)}
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
          >
            <AiOutlineEye />
          </button>
          <button
            onClick={() => handleModal("editModal", id)}
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
          >
            <BiEditAlt />
          </button>
          {/* <button
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
            onClick={() => setShowEditUserModal(true)}
          >
            <BiEditAlt />
          </button> */}
          <button
            onClick={() => handleDeleteUser(id)}
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
          >
            <AiOutlineDelete />
          </button>
        </div>
      </td>

      {isOpen && modal === "viewModal" && (
        <td>
          <ModalDialog
            isOpen={isOpen}
            closeModal={closeModal}
            title=""
            width="600"
          >
            <ViewModal closeModal={closeModal} id={userId} data={data?.data} />
          </ModalDialog>
        </td>
      )}
      {isOpen && modal === "editModal" && (
        <td>
          <ModalDialog
            isOpen={isOpen}
            closeModal={closeModal}
            title=""
            width="600"
          >
            <EditUserModal
              show={true}
              handleClose={closeModal}
              user={{
                id,
                firstName,
                lastName,
                avatar,
                userName,
                email,
                contact,
                status,
                currentJob,
                studentType,
                knowFrom,
                country,
                highestStudy,
                state,
              }}
            />
          </ModalDialog>
        </td>
      )}
    </tr>
  );
};
