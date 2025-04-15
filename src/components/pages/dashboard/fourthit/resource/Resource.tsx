import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useGetResourceAllQuery } from "../../../../../feature/api/fourthit/resource/resourceApi";
import Loading from "../../../../common/Loading";
import ModalDialog from "../../../../layouts/ModalDialog";
import CreateModal from "./Modal/CreateModal";
import ResourceTable from "./ResourceTable";

const Resource = () => {
  const [limit, setlimit] = useState(5);
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
    useGetResourceAllQuery<any>({
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
          title="Create Resources"
          width="600"
        >
          <CreateModal closeModal={closeModal} />
        </ModalDialog>
      )}
      <div className="flex justify-between">
        <h2 className="text-[28px] font-semibold leading-[36px]">Resources</h2>
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
          <ResourceTable
            data={data?.data?.resources}
            itemsCount={data?.data?.totalCount}
            limit={limit}
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

export default Resource;
