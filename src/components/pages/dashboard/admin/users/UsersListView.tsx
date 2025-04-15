import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Loading from "../../../../common/Loading";
import Pagination from "../../../../common/pagination/Pagination";
import TableController from "../common/TableController";
import UsersTable from "./UsersTable";

type UsersListViewProps = {
  users: any[];
  title?: string;
  limit: any;
  itemsCount: any;
  onPageChange: any;
  onPreviousClick: any;
  onNextClick: any;
  currentPage: any;
  course: any;
  setsearchValue: any;
  searchValue: any;
  searchFunction: any;
  isFetching: any;
  isLoading: any;
};

const UsersListView = (props: UsersListViewProps) => {
  const {
    users,
    setsearchValue,
    searchFunction,
    searchValue,
    title,
    limit,
    itemsCount,
    currentPage,
    onPageChange,
    onPreviousClick,
    course = false,
    onNextClick,
    isFetching = false,
    isLoading = false,
  } = props;
  const componentPdf = useRef<any>();
  //pdf generate function
  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "student-list",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <div className="py-[40px] bg-[#ffffff] px-4 mt-6">
      {/* Nav */}
      {title && (
        <div className="pb-[40px] flex items-center gap-6">
          <h3>{title}</h3>
        </div>
      )}
      {/* table controller  */}
      <TableController
        searchValue={searchValue}
        generatePDF={generatePDF}
        searchFunction={searchFunction}
      />

      {/* table  */}
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <UsersTable users={users} course={course} componentPdf={componentPdf} />
      )}

      <div className="flex justify-end mt-8">
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
  );
};

export default UsersListView;
