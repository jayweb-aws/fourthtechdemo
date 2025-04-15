import { useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid1X2Fill } from "react-icons/bs";

import { useGetAllInstructorsQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import AddInstructorModal from "../../admin/users/AddInstructorModal";
import UsersListView from "../users/UsersListView";
import InstructorGridCard from "./InstructorGridCard";
import Admindashboardcard from "../../dashboardcard/Admindashboardcard";

type View = "list" | "grid";

function Instructors() {
  const [view, setView] = useState<View>("list");
  const [searchValue, setsearchValue] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [limit, setLimit] = useState(5);
  const componentPdf = useRef<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetAllInstructorsQuery({
      limit: limit,
      page: currentPage,
      search: searchValue,
    });
  const handleCloseUserAddModal = () => setShowModal(false);

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

  const searchFunction = (e: any) => {
    setsearchValue(e.target.value);
  };
  return (
    <div>
      <Admindashboardcard />
      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3">
        <h3 className="text-[28px] font-semibold leading-[36px] ">
          Instructors
        </h3>
        <div className="flex sm:justify-between items-center gap-3 mt-3 sm:mt-0">
          <button
            onClick={() =>
              view === "list" ? setView("grid") : setView("list")
            }
            className="text-white py-2 px-2 space-x-2 rounded bg-[#3A57E8] flex gap-2 items-center"
          >
            View{" "}
            {view === "list" ? (
              <BsFillGrid1X2Fill className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
            ) : (
              <AiOutlineUnorderedList className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
            )}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="text-white py-2 px-6 rounded bg-[#3A57E8] flex gap-2 items-center"
          >
            Add a Instructor{" "}
            <AiOutlinePlus className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div className="flex justify-center items-center py-5">Error...</div>
        ) : data?.data?.users && data.data.users.length > 0 ? (
          <>
            {view === "list" ? (
              <UsersListView
                users={data?.data?.users}
                isFetching={isFetching}
                isLoading={isLoading}
                searchFunction={searchFunction}
                limit={limit}
                itemsCount={data?.data?.totalCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
                course={true}
              />
            ) : (
              <div className="grid grid-cols-12 gap-6">
                {data.data.users.map(
                  ({
                    _id,
                    firstName,
                    lastName,
                    avatar,
                    roles,
                  }: {
                    _id: string;
                    firstName: string;
                    lastName: string;
                    avatar: string;
                    roles: any[];
                  }) => (
                    <InstructorGridCard
                      key={_id}
                      firstName={firstName}
                      lastName={lastName}
                      avatar={avatar}
                    />
                  )
                )}
              </div>
            )}
          </>
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <p>No data available!</p>
          </div>
        )}
      </div>

      <AddInstructorModal
        show={showModal}
        handleClose={handleCloseUserAddModal}
      />
    </div>
  );
}

export default Instructors;
