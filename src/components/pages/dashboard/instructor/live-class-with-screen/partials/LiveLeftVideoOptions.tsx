import Image from "next/image";
import { useState } from "react";
import { IoVideocam } from "react-icons/io5";
import { useAppSelector } from "../../../../../../app/hooks";
import {
  useAllMeetInstructorQuery,
  useAllMeetStudentQuery,
} from "../../../../../../feature/api/dashboardApi";
import Loading from "../../../../../common/Loading";
import Pagination from "../../../../../common/pagination/Pagination";
import ModalDialog from "../../../../../layouts/ModalDialog";
import LiveCourseCard from "./LiveCourseCard";
import JoinClass from "./modal/JoinClass";
import StartClassV2 from "./modal/StartClassV2";

const LiveLeftVideoOptions = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false);
  const [joinclass, setjoinclass] = useState(false);
  const {
    user: { id: userid, title, roles, avatar, firstName, lastName },
  } = useAppSelector((state) => state.auth);
  const {
    error: getMeetErro,
    data: meetData,
    isLoading: meetLoading,
    isSuccess: meetSuccess,
    isFetching,
    isError: meetIsERror,
  } = useAllMeetInstructorQuery({
    id: userid,
    limit: limit,
    page: currentPage,
  });

  const { error, data, isLoading, isSuccess, isError } =
    useAllMeetStudentQuery<any>({});

  function closeModal() {
    setIsOpen(false);
  }

  const handleModal = (value: any) => {
    setIsOpen(true);
    setModal(value);
  };

  const handleClick = () => {
    setmoduleModalShow(true);
  };
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
      {isOpen && modal === "startClass" && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title="Start Class"
          width="600"
        >
          <StartClassV2 closeModal={closeModal} />
        </ModalDialog>
      )}
      {roles?.includes("instructor") && (
        <div>
          <div className={` w-full  pr-5 lg:pr-0 pt-8  font-nunito`}>
            <div className="flex justify-center ">
              {/* 
        <Image width={170} height={170} alt="" src={teacher} />
        <div className="absolute top-4  bg-white px-2 py-1 rounded flex items-center ">
          <span className="inline-block bg-[#DD0000] w-3 h-3 rounded-full"></span>
          <span className="text-[15px] font-bold title-clr">LIVE</span>
          <span className="text-small-text-color">20:35</span>
        </div>
         */}
              <div className="flex items-center w-[28rem] bg-white px-5 py-2 shadow gap-3 rounded">
                <div>
                  <Image
                    alt=""
                    className="rounded"
                    src={avatar}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[23px] font-nunito">
                    {firstName} {lastName}
                  </h4>
                  <p className="text-base font-nunito">Presenter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[36px] flex justify-center space-x-5">
            <JoinClass show={joinclass} setShowModal={setjoinclass} />

            <button
              disabled={roles.includes("student")}
              className="text-center"
              onClick={() => handleModal("startClass")}
            >
              <div className="bg-orange-400  px-4 py-3  rounded-lg shadow-xl flex items-center mb-2 cursor-pointer">
                <IoVideocam className="w-[35px] h-[30px]  text-white" />
              </div>
              <p className="text-[#5F5F60] font-medium font-nunito">
                Start Class
              </p>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[20px] lg:gap-x-[40px] mt-[30px] lg:mt-[50px]">
        {roles.includes("instructor") &&
          (meetLoading || isFetching ? (
            <div className="col-span-12">
              <Loading />
            </div>
          ) : (
            meetData?.data?.meets?.map((item: any, i: any) => (
              <LiveCourseCard
                key={i}
                item={item}
                roles={roles}
                role={roles?.includes("student")}
              />
            ))
          ))}

        {roles.includes("student") &&
          (isLoading ? (
            <div className="col-span-12">
              <Loading />
            </div>
          ) : (
            data?.data?.meets?.map((item: any, i: any) => (
              <LiveCourseCard
                key={i}
                item={item}
                role={roles?.includes("student")}
              />
            ))
          ))}
      </div>
      {roles?.includes("instructor") && (
        <div className="col-span-12 text-end">
          {" "}
          {meetSuccess && (
            <Pagination
              limit={limit}
              itemsCount={meetData?.data?.totalCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LiveLeftVideoOptions;
