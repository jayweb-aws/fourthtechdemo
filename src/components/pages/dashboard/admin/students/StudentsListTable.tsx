/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import toast from 'react-hot-toast';
import {
  useGetAllStudentsQuery,
  useUpdateUserMutation,
} from "../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
import Loading from "../../../../common/Loading";
import Pagination from "../../../../common/pagination/Pagination";
import ModalDialog from "../../../../layouts/ModalDialog";
import DeleteUserConfirmModal from "../users/DeleteUserConfirmModal";
import EditUserModal from "../users/EditUsersModal";
import ViewModal from "./ViewModal";

interface IStudentProps {
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    userName: string;
    studentType: string;
  };
  id: string;
  contact: string;
  email: string;
  country: string;
  status: string;
}

function Table(props: IStudentProps) {
  const options = ["inactive", "complete", "hold", "pending", "active"];

  const {
    profile: { avatar, firstName, lastName, userName, studentType },
    id,
    contact,
    email,
    status,
    country,
  } = props;
  const [userStatus, setUserStatus] = useState(status);

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
  let [isOpen, setIsOpen] = useState(false);
  const [userId, setuserId] = useState("");
  const [modal, setModal] = useState("");
  const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] =
    useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);

  const handleDeleteUser = (id: string) => {
    setShowDeleteUserConfirmModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteUserConfirmModal(false);
  };
  const handleCloseEditUserModal = () => setShowEditUserModal(false);

  useEffect(() => {
    if (isUpdateUserError) {
      // console.log("update user error", updateUserError);
      toast.error((updateUserError as any).data.message);
    } else if (isUpdateUserSuccess) {
      // console.log("updated user", updatedUserData);
      toast.success("Student status updated Successfully!");
    }
  }, [isUpdateUserError, isUpdateUserSuccess]);

  // New View Modal
  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (value: any, id: any) => {
    setIsOpen(true);
    setModal(value);
    setuserId(id);
  };

  return (
    <tr className="border-b font-nunito">
      <DeleteUserConfirmModal
        show={showDeleteUserConfirmModal}
        handleClose={handleCloseDeleteModal}
        userId={id}
      />

      <td scope="row" className="py-4 px-6">
        <div className="flex space-x-2">
          <div className="lg:w-[60px] relative w-[40px] lg:h-[60px] h-[40px] ">
            <Image
              // className="w-[15px] h-[15px] rounded-md"
              src={avatar}
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h2 className="text-[14px] md:text-[16px] text-[#232D42] font-medium">
              {firstName} {lastName}
            </h2>
            <p className="text-[16px] text-[#8A92A6]">{studentType}</p>
          </div>
        </div>
      </td>

      <td className="py-4 px-6">{email}</td>

      {/* <td className="py-4 px-6">{grade}</td> */}
      <td className="py-4 px-6">
        <select
          className={`rounded-xl px-2 py-1 text-[12px] capitalize min-w-[100px]
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
                {option}
              </option>
            );
          })}
        </select>
      </td>
      <td className="py-4 px-6">
        <div className="flex justify-center space-x-6">
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
          {/* <button className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] ">
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
            <ViewModal closeModal={closeModal} id={userId} />
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
              }}
            />
          </ModalDialog>
        </td>
      )}
    </tr>
  );
}

function StudentsListTable({ componentPdf, searchValue, setsearchValue }: any) {
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, isError, isSuccess, error } =
    useGetAllStudentsQuery({
      page: currentPage,
      limit: limit,
      search: searchValue,
    });
  //console.log(data);

  //pagination functions
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : isError ? (
        <div>Error...</div>
      ) : isSuccess && data?.data?.users && data.data.users.length > 0 ? (
        <div
          className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full mx-auto shadow-md sm:rounded-lg mt-12 font-nunito`}
        >
          <table
            ref={componentPdf}
            className="w-full text-[16px] md:text-[18px] text-left font-nunito"
          >
            <thead className="text-[#ADB5BD] font-normal">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Profiles
                </th>

                <th scope="col" className="py-3 px-6 ">
                  Email ID
                </th>

                {/* <th scope="col" className="py-3 px-6">
                  Grades
                </th> */}
                <th scope="col" className="py-3 px-6 ">
                  Status
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-[#232D42]">
              {data.data.users.map(
                ({
                  _id,
                  firstName,
                  lastName,
                  avatar,
                  email,
                  phone,
                  country,
                  status,
                  userName = "",
                  studentType,
                }: {
                  _id: string;
                  firstName: string;
                  lastName: string;
                  avatar: string;
                  email: string;
                  studentType: string;
                  phone: string;
                  country: string;
                  status: string;
                  userName: string;
                }) => (
                  <Table
                    key={_id}
                    profile={{
                      avatar,
                      firstName,
                      lastName,
                      userName,
                      studentType,
                    }}
                    id={_id}
                    contact={phone}
                    country={country}
                    email={email}
                    status={status}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p>No data available!</p>
        </div>
      )}
      <div className="flex justify-end my-8 pr-2">
        {isSuccess && (
          <Pagination
            limit={limit}
            itemsCount={data?.data?.totalCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
          />
        )}
      </div>
    </>
  );
}

export default StudentsListTable;
