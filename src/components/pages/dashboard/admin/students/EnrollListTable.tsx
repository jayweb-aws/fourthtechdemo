/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../app/hooks";
import {
  useDeleteEnrollmentMutation,
  useGetAllEnrollmentInstructorQuery,
  useGetAllEnrollmentQuery,
  useUpdateEnrollmentMutation,
} from "../../../../../feature/api/dashboardApi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
import Loading from "../../../../common/Loading";
import DeleteModal from "../../../../common/deleteModal/DeleteModalById";
import Pagination from "../../../../common/pagination/Pagination";
import ModalDialog from "../../../../layouts/ModalDialog";
import ActionConfirmModal from "./ActionModal";

interface IStudentProps {
  course: any;
  student: any;
  createdAt: any;
  active: any;
  _id: any;
}

function Table(props: IStudentProps) {
  const { course, student, createdAt, active, _id } = props;
  const [showAcceptStudentModal, setShowAcceptStudentModal] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [showRejectStudentModal, setShowRejectStudentModal] = useState(false);
  const [modal, setModal] = useState("");
  const [userId, setuserId] = useState("");

  const [
    update,
    {
      error,
      data: enrollData,
      isLoading: loading,
      isSuccess: success,
      isError: iserror,
    },
  ] = useUpdateEnrollmentMutation<any>();

  //update status function
  const onOptionChangeHandler = (id: string, status: string) => {
    // console.log("User Selected Value - ", event.target.value)
    update({ id: id, active: status });

    // updateUser({ id, user: { status } });
  };

  useEffect(() => {
    if (iserror) {
      toast.error(error?.data?.message);
    } else if (success) {
      toast.success("Enrollment Status Updated");
    }
  }, [iserror, success]);

  // New View Modal
  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (id: any, value: any) => {
    setIsOpen(true);
    setModal(value);
    setuserId(id);
  };

  const handleCloseAcceptStudentModal = () => setShowAcceptStudentModal(false);

  const handleCloseRejectStudentModal = () => setShowRejectStudentModal(false);
  return (
    <tr className="border-b font-nunito">
      <ActionConfirmModal
        id={_id}
        obj={{ id: _id, active: true }}
        show={showAcceptStudentModal}
        handleClose={handleCloseAcceptStudentModal}
        title="Are you sure you want to accept this course enroll?"
        successMessage="Enroll accepted Successfully!"
        mutationHook={useUpdateEnrollmentMutation}
        sureButtonColor="success"
        cancelButtonColor="failure"
      />
      <ActionConfirmModal
        id={_id}
        obj={{ id: _id }}
        show={showRejectStudentModal}
        handleClose={handleCloseRejectStudentModal}
        title="Are you sure you want to reject this enroll course?"
        successMessage="Enroll Course rejected Successfully!"
        mutationHook={useDeleteEnrollmentMutation}
      />

      {isOpen && modal === "delete" && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title=""
          width="400"
        >
          <DeleteModal
            variant="Category"
            closeModal={closeModal}
            rtkMutation={useDeleteEnrollmentMutation}
            title={"Do you want delete this enrollment !"}
            id={userId}
            successMsg="enrollment delete success"
          />
        </ModalDialog>
      )}
      <td scope="row" className="py-4 px-6">
        <div className="flex space-x-2">
          <div className="lg:w-[60px] relative w-[40px] lg:h-[60px] h-[40px] ">
            <Image
              // className="w-[15px] h-[15px] rounded-md"
              src={student?.avatar}
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h2 className="text-[14px] md:text-[16px] text-[#232D42] font-medium">
              {student?.firstName} {student?.lastName}
            </h2>
          </div>
        </div>
      </td>
      <td className="py-4 px-3">{course?.title}</td>
      <td className="py-4 px-6">{course?.price}</td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-2">
          {/* <Image
            // className="w-[30px] h-[15px]"
            src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
            alt=""
            width={20}
            height={20}
          /> */}
          <p className="capitalize">{moment(createdAt).format("MM/DD/YYYY")}</p>
        </div>
      </td>
      {/* <td className="py-4 px-6">{grade}</td> */}
      <td className="py-4 px-6">
        <select
          className={`rounded-xl px-2 py-1 text-[12px] capitalize min-w-[100px]
         ${
           (active === true && "text-[#3A57E8]") ||
           (active === false && "text-[#F16A1B]")
         } 
         ${
           (active === true && "bg-[#EBEEFD]") ||
           (active === false && "bg-[#FCE1D1]")
         } 
         `}
          onChange={(e) => onOptionChangeHandler(_id, e.target.value)}
          defaultValue={active}
        >
          {[
            { title: "active", value: "true" },
            { title: "pending", value: "false" },
          ].map((val, index) => {
            return (
              <option key={index} value={val?.value} className="capitalize">
                {val?.title}{" "}
              </option>
            );
          })}
        </select>
      </td>
      <td className="py-4 px-6">
        <div className="flex justify-center space-x-6">
          <div className="flex justify-center space-x-6">
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
        </div>
      </td>
    </tr>
  );
}

function EnrollListTable({ componentPdf }: any) {
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    user: { _id, roles },
  } = useAppSelector((state) => state.auth);
  const {
    data: enrollIns,
    isLoading: insLoad,
    isFetching: insFetch,
    isError: insIsError,
    isSuccess: insSucces,
    error: insError,
  } = useGetAllEnrollmentInstructorQuery({
    id: _id,
    page: currentPage,
    limit: limit,
  });
  const { data, isLoading, isFetching, isError, isSuccess, error } =
    useGetAllEnrollmentQuery({ page: currentPage, limit: limit });
  const [showTable, setShowTable] = useState("students");

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
      {roles.includes("instructor") && (
        <>
          {isLoading || isFetching ? (
            <Loading />
          ) : isError ? (
            <div>Error...</div>
          ) : isSuccess &&
            enrollIns?.data?.enrollments &&
            enrollIns.data.enrollments.length > 0 ? (
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
                      Student
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      Course
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Created
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
                  {enrollIns.data.enrollments.map(
                    ({
                      course,
                      student,
                      createdAt,
                      active,
                      _id,
                    }: {
                      course: any;
                      student: any;
                      createdAt: any;
                      active: any;
                      _id: any;
                    }) => (
                      <Table
                        key={_id}
                        course={course}
                        student={student}
                        createdAt={createdAt}
                        active={active}
                        _id={_id}
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
            {insSucces && (
              <Pagination
                limit={limit}
                itemsCount={enrollIns?.data?.totalCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
              />
            )}
          </div>
        </>
      )}

      {roles.includes("admin") && (
        <>
          {isLoading || isFetching ? (
            <Loading />
          ) : isError ? (
            <div>Error...</div>
          ) : isSuccess &&
            data?.data?.enrollments &&
            data?.data.enrollments.length > 0 ? (
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
                      Student
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      Course
                    </th>
                    <th scope="col" className="py-3 px-6 ">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Created
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
                  {data.data.enrollments.map(
                    ({
                      course,
                      student,
                      createdAt,
                      active,
                      _id,
                    }: {
                      course: any;
                      student: any;
                      createdAt: any;
                      active: any;
                      _id: any;
                    }) => (
                      <Table
                        key={_id}
                        course={course}
                        student={student}
                        createdAt={createdAt}
                        active={active}
                        _id={_id}
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
                itemsCount={enrollIns?.data?.totalCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default EnrollListTable;
