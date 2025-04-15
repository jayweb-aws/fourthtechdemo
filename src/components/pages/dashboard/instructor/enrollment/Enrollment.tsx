import { useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { useGetAllEnrollmentQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import TableHeader from "../../../../common/table/TableHeader";
import EnrollmentTable from "./EnrollmentTable";

const Enrollment = () => {
  const { _id } = useAppSelector((state) => state.auth.user);
  const [limit, setlimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [searchValue, setsearchValue] = useState("");

  const searchFunction = (e: any) => {
    setsearchValue(e.target.value);
  };
  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (value: any) => {
    setIsOpen(true);
    setModal(value);
  };
  const { data, isLoading, isSuccess, isFetching } =
    useGetAllEnrollmentQuery<any>({
      limit: limit,
      page: currentPage,
      search: searchValue,
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
      <div className="flex mb-4 justify-between">
        <h2 className="text-[28px] font-semibold leading-[36px]">
          Enrollment Course
        </h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="bg-white">
          <div className="py-6 px-8">
            <TableHeader
              searchFunction={searchFunction}
              searchValue={searchValue}
            />
          </div>
          {isSuccess && (
            <EnrollmentTable
              data={data?.data?.enrollments}
              itemsCount={data?.data?.totalCount}
              limit={limit}
              searchFunction={searchFunction}
              isLoading={isLoading}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
              isFetching={isFetching}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Enrollment;
