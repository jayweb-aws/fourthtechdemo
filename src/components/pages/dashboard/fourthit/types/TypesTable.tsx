import moment from "moment/moment";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { RotateLoader } from "react-spinners";
import { useTable } from "react-table";
import { useDeleteTypesMutation } from "../../../../../feature/api/fourthit/types/typesApi";
import DeleteModal from "../../../../common/deleteModal/DeleteModalById";
import Pagination from "../../../../common/pagination/Pagination";
import Table from "../../../../common/table/Table";
import TableHeader from "../../../../common/table/TableHeader";
import ModalDialog from "../../../../layouts/ModalDial";
import ModalDialog2 from "../../../../layouts/ModalDialog";
import UpdateModal from "./Modal/UpdateModal";

const UsersTable = ({
  data,
  limit,
  currentPage,
  onPageChange,
  onPreviousClick,
  onNextClick,
  isFetching,
  itemsCount,
}: {
  data: any;
  itemsCount: any;
  limit: any;
  currentPage: any;
  onPageChange: any;
  onPreviousClick: any;
  isFetching: any;
  onNextClick: any;
}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [id, setid] = useState("");

  const [isDelete, setIsDelete] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (id: any, value: any) => {
    setIsOpen(true);
    setModal(value);
    setid(id);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: (row: any) => {
          const { description } = row?.cell?.row?.original;
          return <p>{description}</p>;
        },
      },
      {
        Header: "Created",
        accessor: "Date",
        Cell: (row: any) => {
          const { createdAt } = row?.cell?.row?.original;
          return <p>{moment(createdAt).format("MM/DD/YYYY")}</p>;
        },
      },

      {
        Header: "Action",
        accessor: "action",
        Cell: (row: any) => {
          const { id, _id } = row?.cell?.row?.original;
          return (
            <div className="flex  space-x-2">
              <button
                onClick={() => handleModal(id, "edit")}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#3A57E8] text-white "
              >
                <BiEditAlt />
              </button>
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
            rtkMutation={useDeleteTypesMutation}
            title={"Do you want delete this types !"}
            id={id}
            successMsg="types delete success"
          />
        </ModalDialog>
      )}
      {isOpen && modal === "edit" && (
        <ModalDialog2
          isOpen={isOpen}
          closeModal={closeModal}
          title="Update Types"
          width="400"
        >
          <UpdateModal closeModal={closeModal} id={id} />
        </ModalDialog2>
      )}
      <div className="bg-white py-4">
        <div className="px-6">
          <div className="py-6">
            <TableHeader />
          </div>
        </div>
        <div>
          {isFetching ? (
            <div className="flex items-center justify-center">
              <RotateLoader color="#808080" />
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

export default UsersTable;
