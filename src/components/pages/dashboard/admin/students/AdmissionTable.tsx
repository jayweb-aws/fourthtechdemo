import Image from "next/image";
import { useState } from "react";
import {
  useAcceptStudentAdmissionRequestMutation,
  useDeleteUserMutation,
} from "../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
import Loading from "../../../../common/Loading";
import Pagination from "../../../../common/pagination/Pagination";
import ActionConfirmModal from "../../../../utils/modals/ActionConfirmModal";

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
  createdAt: Date;
  currentJob: string;
}

function Table(props: IStudentProps) {
  const {
    profile: { avatar, firstName, lastName, userName, studentType },
    id,
    contact,
    email,
    status,
    country,
    createdAt,
    currentJob,
  } = props;

  const [showAcceptStudentModal, setShowAcceptStudentModal] = useState(false);
  const [showRejectStudentModal, setShowRejectStudentModal] = useState(false);

  const handleCloseAcceptStudentModal = () => setShowAcceptStudentModal(false);
  const handleCloseRejectStudentModal = () => setShowRejectStudentModal(false);

  return (
    <tr className="border-b">
      <ActionConfirmModal
        id={id}
        show={showAcceptStudentModal}
        handleClose={handleCloseAcceptStudentModal}
        title="Are you sure you want to accept this student admission?"
        successMessage="Student admission accepted Successfully!"
        mutationHook={useAcceptStudentAdmissionRequestMutation}
        sureButtonColor="success"
        cancelButtonColor="failure"
      />

      <ActionConfirmModal
        id={id}
        show={showRejectStudentModal}
        handleClose={handleCloseRejectStudentModal}
        title="Are you sure you want to reject this student admission?"
        successMessage="Student admission rejected Successfully!"
        mutationHook={useDeleteUserMutation}
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
            <h2 className="text-[16px] md:text-[18px] text-[#232D42] font-medium">
              {firstName} {lastName}
            </h2>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">{email}</td>
      <td className="py-4 px-6">{new Date(createdAt).toLocaleDateString()}</td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-2">{currentJob}</div>
      </td>
      <td className="py-4 px-6">{studentType}</td>
      <td className="py-4 px-6">
        <div className="flex justify-center space-x-6">
          {(status === "" || status === "Accept") && (
            <button
              className={`text-[16px] px-4 py-1.5 rounded
              ${status === "Accept" ? "text-[#1AA053]" : "text-white"}
               ${status === "Accept" ? "bg-[#D5EBDF]" : "bg-[#1AA053]"} `}
            >
              Accept
            </button>
          )}
          {(status === "" || status === "Reject") && (
            <button
              className={`text-[16px] px-4 py-1.5 rounded
              text-white
               ${status === "Reject" ? "bg-[#ADB5BD]" : "bg-[#C03221]"} `}
            >
              Reject
            </button>
          )}
          <button
            onClick={() => setShowAcceptStudentModal(true)}
            className="bg-[#3A57E8] rounded text-white px-3 lg:px-5 py-1 lg:py-2 "
          >
            Accept
          </button>
          <button
            onClick={() => setShowRejectStudentModal(true)}
            className="bg-[#C03221] rounded text-white px-3 lg:px-5 py-1 lg:py-2 "
          >
            Reject
          </button>
          {/* <button className="text-[16px] text-white px-4 py-1.5 rounded bg-[#3A57E8] ">
            View
          </button> */}
        </div>
      </td>
    </tr>
  );
}

function AdmissionTable({
  componentPdf,
  isLoading,
  isFetching,
  isSuccess,
  isError,
  data,
  handlePageChange,
  handlePreviousClick,
  handleNextClick,
  currentPage,
  limit,
}: any) {
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
            className="w-full text-[16px] md:text-[18px] text-left"
          >
            <thead className="text-[#ADB5BD] font-normal">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Profiles
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Email
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Enrolled Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Job Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Learning Preference
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
                  createdAt,
                  currentJob,
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
                  createdAt: Date;
                  currentJob: string;
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
                    createdAt={createdAt}
                    currentJob={currentJob}
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

export default AdmissionTable;
