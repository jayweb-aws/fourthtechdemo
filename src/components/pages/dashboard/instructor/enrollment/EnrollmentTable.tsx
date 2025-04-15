import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import { useTable } from "react-table";
import toast from 'react-hot-toast';
import {
  useDeleteEnrollmentMutation,
  useUpdateEnrollmentMutation,
} from "../../../../../feature/api/dashboardApi";
import DeleteModal from "../../../../common/deleteModal/DeleteModalById";
import Pagination from "../../../../common/pagination/Pagination";
import Table from "../../../../common/table/Table";
import ModalDialog from "../../../../layouts/ModalDial";

const EnrollmentTable = ({
  data,
  limit,
  itemsCount,
  currentPage,
  onPageChange,
  onPreviousClick,
  onNextClick,
  searchFunction,
  isLoading,
  isFetching,
}: {
  data: any;
  searchFunction: any;
  limit: any;
  itemsCount: any;
  currentPage: any;
  isLoading: any;
  onPageChange: any;
  onPreviousClick: any;
  isFetching: any;
  onNextClick: any;
}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [id, setid] = useState("");
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
  const [userStatus, setUserStatus] = useState(status);

  const [isDelete, setIsDelete] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (id: any, value: any) => {
    setIsOpen(true);
    setModal(value);
    setid(id);
  };

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
  const columns = React.useMemo(
    () => [
      {
        Header: "Student",
        accessor: "Student",
        Cell: (row: any) => {
          const { student } = row?.cell?.row?.original;
          return (
            <div className="flex items-center space-x-2">
              <div className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] ">
                <img
                  className="h-full w-full rounded-md"
                  src={student?.avatar}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[14px] md:text-[16px] text-[#232D42] font-medium">
                  {student?.firstName} {student?.lastName}
                </h2>
              </div>
            </div>
          );
        },
      },
      {
        Header: "Course",
        accessor: "Course",
        Cell: (row) => {
          const { course } = row?.cell?.row?.original;
          return <p>{course?.title}</p>;
        },
      },
      {
        Header: "Price",
        accessor: "Price",
        Cell: (row) => {
          const { course } = row?.cell?.row?.original;
          return <p>{course?.price}</p>;
        },
      },
      {
        Header: "Created",
        accessor: "Date",
        Cell: (row) => {
          const { createdAt } = row?.cell?.row?.original;
          return <p>{moment(createdAt).format("MM/DD/YYYY")}</p>;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (row) => {
          const { active, _id } = row?.cell?.row?.original;
          return (
            <select
              className={`rounded-xl px-2 py-1 text-[12px] min-w-[100px] capitalize
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
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => {
          const { id, _id } = row?.cell?.row?.original;
          return (
            <div className="flex  space-x-2">
              <button
                onClick={() => handleModal(id, "delete")}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#3A57E8] text-white "
              >
                <AiOutlineDelete />
              </button>
            </div>
          );
        },
      },
    ],
    [data]
  );

  const useTableData = useTable({ columns, data });
  return (
    <>
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
            id={id}
            successMsg="enrollment delete success"
          />
        </ModalDialog>
      )}

      <div className="bg-white py-4">
        <div>
          {isFetching || isLoading ? (
            <div className="flex items-center justify-center pb-5">
              <BeatLoader color="#808080" />
            </div>
          ) : data.length > 0 ? (
            <div>
              <Table useTableData={useTableData} />
              {
                // <div className="px-4 pt-6">
                //   <Pagination
                //     // data={data}
                //     useTableData={useTableData}
                //     // totalLength={totalLength}
                //   />
                // </div>
              }
              <div className="pt-9 pb-4 px-2 flex justify-end">
                <Pagination
                  limit={limit}
                  itemsCount={itemsCount}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  onPreviousClick={onPreviousClick}
                  onNextClick={onNextClick}
                />
              </div>
            </div>
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
              <p>No data available!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnrollmentTable;
