import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useAppSelector } from "../../../../../app/hooks";
import {
  useGetAllAdmissionRequestQuery,
  useGetAllEnrollmentActiveQuery,
  useGetAllEnrollmentInstructorActiveQuery,
} from "../../../../../feature/api/dashboardApi";
import TableController from "../common/TableController";
import AdmissionTable from "./AdmissionTable";
import EnrollListTable from "./EnrollListTable";
import MentoringTable from "./MentoringTable";
import OptimizationTable from "./OptimizationTable";
import StudentsListTable from "./StudentsListTable";

function Students() {
  const {
    user: { roles, _id },
  } = useAppSelector((state: any) => state.auth);
  const [count, setcount] = useState(0);
  const [showTable, setShowTable] = useState(
    roles.includes("instructor") ? "enroll" : "students"
  );

  const componentPdf = useRef<any>();
  //admission api all
  const [limit, setLimit] = useState(5);
  const [searchValue, setsearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isFetching, isSuccess, error } =
    useGetAllAdmissionRequestQuery({
      page: currentPage,
      limit: limit,
      search: searchValue,
    });
  const { data: activeData } = useGetAllEnrollmentActiveQuery({
    page: currentPage,
    limit: 111111,
  });

  const { data: activeDataInstructor } =
    useGetAllEnrollmentInstructorActiveQuery({
      page: 1,
      limit: 11111,
      id: _id,
    });

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
  // what to render table
  let render = null;
  if (showTable === "students") {
    render = (
      <StudentsListTable
        componentPdf={componentPdf}
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
    );
  } else if (showTable === "enroll") {
    render = <EnrollListTable componentPdf={componentPdf} />;
  } else if (showTable === "admission") {
    render = (
      <AdmissionTable
        componentPdf={componentPdf}
        isLoading={isLoading}
        isFetching={isFetching}
        isSuccess={isSuccess}
        data={data}
        isError={isError}
        limit={limit}
        handlePageChange={handlePageChange}
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
        currentPage={currentPage}
      />
    );
  } else if (showTable === "mentoring") {
    render = <MentoringTable />;
  } else if (showTable === "optimization") {
    render = <OptimizationTable />;
  }
  // ["student","instrucor"].

  const searchFunction = (e: any) => {
    setsearchValue(e.target.value);
  };
  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "student-list",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <>
      <div className="py-[40px]">
        <div className="flex items-center space-x-2 md:space-x-4 mb-[40px] text-[16px] md:text-[20px] lg:text-[26px] border-b font-nunito">
          {roles.includes("admin") && (
            <>
              <button
                onClick={() => setShowTable("students")}
                className={` font-medium
            font-nunito
             ${
               showTable === "students"
                 ? "text-[#232D42] border-b-2 border-[#3A57E8]"
                 : "text-[#8A92A6]"
             }  
             `}
              >
                Students <span className="hidden md:inline">list</span>
                {/* <sup className="hidden sm:inline bg-[#F16A1B] ml-1 px-2 pb-[3px] text-[16px] text-white rounded-full ">
              55
            </sup> */}
              </button>

              <span className="font-bold">|</span>
            </>
          )}
          <button
            onClick={() => setShowTable("enroll")}
            className={`font-medium relative
          font-nunito
           ${
             showTable === "enroll"
               ? "text-[#232D42] border-b-2 border-[#3A57E8]"
               : "text-[#8A92A6]"
           }  
           `}
          >
            Enrollment <span className="hidden md:inline">Requests</span>
            {/* <sup className="hidden sm:inline bg-[#F16A1B] ml-1 px-2 pb-[3px] text-[16px] text-white rounded-full ">
            55
          </sup> */}
            <div className="p-1 text-sm w-6 right-[-12px] top-[-13px] h-6 flex items-center justify-center text-white absolute rounded-full bg-blue-500">
              {roles?.includes("admin")
                ? activeData?.data?.enrollments?.length
                : activeDataInstructor?.data?.enrollments?.length}
            </div>
          </button>

          <span className="font-bold">|</span>
          {roles.includes("admin") && (
            <button
              onClick={() => setShowTable("admission")}
              className={`font-medium relative
          font-nunito
           ${
             showTable === "admission"
               ? "text-[#232D42] border-b-2 border-[#3A57E8]"
               : "text-[#8A92A6]"
           }  
           `}
            >
              Admission <span className="hidden md:inline">Request</span>
              {/* <sup className="hidden sm:inline bg-[#F16A1B] ml-1 px-2 pb-[3px] text-[16px] text-white rounded-full ">
            55
          </sup> */}
              <div className="p-1 text-sm w-6 right-[-23px] top-[-13px] h-6 flex items-center justify-center text-white absolute rounded-full bg-blue-500">
                {data?.data?.users?.length}
              </div>
            </button>
          )}
        </div>
        {/* table controller  */}
        <TableController
          generatePDF={generatePDF}
          searchValue={searchValue}
          searchFunction={searchFunction}
        />
        {/* table  */}
        <div>{render}</div>
      </div>
    </>
  );
}

export default Students;
