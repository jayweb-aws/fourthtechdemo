import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useGetManagementAllQuery } from "../../../../../feature/api/fourthit/management/managementApi";
import Loading from "../../../../common/Loading";
import ModalDialog from "../../../../layouts/ModalDialog";
import ManagementTable from "./ManagementTable";
import CreateModal from "./Modal/CreateModal";

const Management = () => {
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (value: any) => {
    setIsOpen(true);
    setModal(value);
  };
  const { data, isLoading, isSuccess, isFetching } =
    useGetManagementAllQuery<any>({
      limit: limit,
      page: currentPage,
    });

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
      {isOpen && modal === "topic" && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title="Create Management"
          width="600"
        >
          <CreateModal closeModal={closeModal} />
        </ModalDialog>
      )}
      <div className="flex justify-between">
        <h2 className="text-[28px] font-semibold leading-[36px]">
          Managements
        </h2>
        <button
          onClick={() => handleModal("topic")}
          className="mb-5 text-white py-2 px-6 rounded bg-[#3A57E8] flex gap-2 items-center"
        >
          Add
          <AiOutlinePlus className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
        </button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        isSuccess && (
          <ManagementTable
            data={data?.data?.managements}
            limit={limit}
            isLoading={isLoading}
            itemsCount={data?.data?.totalCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
            isFetching={isFetching}
          />
        )
      )}
    </>
  );
};

export default Management;
