import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetCourseByCategoryQuery,
} from "../../../../feature/api/dashboardApi";
import Loading from "../../../common/Loading";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";
import SingleProgramCourse from "./SingleProgramCourse";

const itemsPerPage = 6;

const TopPrograms = () => {
  const {
    data: course,
    isSuccess: courseIsSuccess,
    isError: courseError,
    isLoading: courseLoading,
  } = useGetCourseByCategoryQuery(``);
  const { data, isSuccess, isError, isLoading } = useGetCategoriesQuery({});
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allResourceArr = activeTab === "all" ? course?.data?.courses : [];
  const filterResourceArr = course?.data?.courses?.filter(
    (item: any) => item?.category?.toLowerCase() === activeTab?.toLowerCase()
  );

  const totalFilteredItems =
    activeTab === "all" ? allResourceArr?.length : filterResourceArr?.length;
  const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 md:pt-[100px] pb-[50px] container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 ">
      <div className="">
        <p className="mb-6 text-[#40424B] font-poppins text-[14px] font-semibold leading-[20px] uppercase">
          Programs
        </p>
        <h3 className=" text-[#40424B] font-poppins text-[36px] font-semibold leading-[52px] max-w-[500px]">
          Our Top Programs
        </h3>
        <p className=" mt-4 mb-16 font-poppins mx-0 text-[#6F6F6F] font-poppins text-base font-normal max-w-[550px]">
          Your pathway to mastering technology. Fourth IT Academy offers comprehensive courses designed to equip you with in-demand skills, ensuring readiness for today’s tech-driven world.
        </p>
      </div>

      <div className=" ">
        <div className="container">
          {/* tabs  */}
          <div className="pb-10 justify-between flex border-b border-gray-300 text-black font-semibold uppercase text-sm tracking-wide">
            <div className="flex w-full gap-8 overflow-x-auto md:w-[75%] md:overflow-x-visible md:flex-nowrap">
              <button
                className={classNames(
                  "relative pb-3 cursor-pointer flex-1 text-left font-jost text-[#2F3034] text-[14px] font-semibold leading-[24px] tracking-[0.8px] uppercase bg-none whitespace-nowrap", // Prevents text wrapping
                  activeTab === "all" ? "font-jost" : "text-[#2F3034]"
                )}
                onClick={() => handleTabChange("all")}
              >
                <span className="block">All</span>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === "all" ? "bg-red-500" : "bg-gray-200"
                    }`}
                ></div>
              </button>
              {data?.data?.categories?.map((item: any, i: any) => (
                <button
                  className={classNames(
                    "relative pb-3 cursor-pointer flex-1 text-left font-jost text-[#2F3034] text-[14px] font-semibold leading-[24px] tracking-[0.8px] uppercase whitespace-nowrap", // Prevents text wrapping
                    activeTab === item?.id ? "font-jost" : "text-[#2F3034]"
                  )}
                  key={i}
                  onClick={() => handleTabChange(item?.id)}
                >
                  <span className="block">{item?.name}</span>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === item?.id ? "bg-red-500" : "bg-gray-200"
                      }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // variants={containerAnimation}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10"
          >
            {courseLoading && (
              <div className="col-span-12">
                <Loading />
              </div>
            )}
            {totalFilteredItems === 0 ? (
              <p className="font-semibold text-[20px]">No Data Available!</p>
            ) : (
              (activeTab === "all" ? allResourceArr : filterResourceArr)
                ?.slice(startIndex, endIndex)
                .filter(
                  (item1: any) => item1._id !== "647939fe6a6659ee0d7c3744"
                )
                .map((item: any, i: any) => (
                  <SingleProgramCourse item={item} key={item?.id} />
                ))
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopPrograms;
// import classNames from "classnames";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   useGetCategoriesQuery,
//   useGetCourseByCategoryQuery,
// } from "../../../../feature/api/dashboardApi";
// import Loading from "../../../common/Loading";
// import SectionTitle from "../../../common/SectionTitle/SectionTitle";
// import SingleProgramCourse from "./SingleProgramCourse";

// const itemsPerPage = 6;

// const TopPrograms = () => {
//   const {
//     data: course,
//     isSuccess: courseIsSuccess,
//     isError: courseError,
//     isLoading: courseLoading,
//   } = useGetCourseByCategoryQuery(``);
//   const { data, isSuccess, isError, isLoading } = useGetCategoriesQuery({});
//   const [activeTab, setActiveTab] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);

//   const allResourceArr = activeTab === "all" ? course?.data?.courses : [];
//   const filterResourceArr = course?.data?.courses?.filter(
//     (item: any) => item?.category?.toLowerCase() === activeTab?.toLowerCase()
//   );

//   const totalFilteredItems =
//     activeTab === "all" ? allResourceArr?.length : filterResourceArr?.length;
//   const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleTabChange = (tabName: string) => {
//     setActiveTab(tabName);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="pt-[150px] pb-[50px]">
//       <SectionTitle title="Our Top Programs" />

//       <div className="bg-lightblue py-[42px] mt-[100px]">
//         <div className="container px-[30px]">
//           {/* tabs  */}
//           <div className="xl:pb-[60px] pb-[50px] flex justify-between">
//             <div>
//               <button
//                 className={classNames(
//                   "uppercase text-[16px] md:text-[18px] 2xl:text-[24px] leading-[25px] font-medium text-deepDark mr-[20px] md:mr-[30px] 2xl:mr-[69px] pb-[2px] mb-[10px] md:mb-[20px] 2xl:mb-0",
//                   activeTab === "all" && "border-b-[3px] border-secondary"
//                 )}
//                 onClick={() => handleTabChange("all")}
//               >
//                 All
//               </button>
//               {data?.data?.categories?.map((item: any, i: any) => (
//                 <button
//                   className={classNames(
//                     "uppercase text-[16px] md:text-[18px] 2xl:text-[24px] leading-[25px] font-medium text-deepDark mr-[20px] md:mr-[30px] 2xl:mr-[69px] pb-[2px] mb-[10px] lg:mb-[20px]",
//                     activeTab === item?.id && "border-b-[2px] border-secondary"
//                   )}
//                   key={i}
//                   onClick={() => handleTabChange(item?.id)}
//                 >
//                   {item?.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             // initial="hidden"
//             // whileInView="visible"
//             // variants={containerAnimation}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]"
//           >
//             {courseLoading && (
//               <div className="col-span-12">
//                 <Loading />
//               </div>
//             )}
//             {totalFilteredItems === 0 ? (
//               <p className="font-semibold text-[20px]">No Data Available!</p>
//             ) : (
//               (activeTab === "all" ? allResourceArr : filterResourceArr)
//                 ?.slice(startIndex, endIndex)
//                 .filter(
//                   (item1: any) => item1._id !== "647939fe6a6659ee0d7c3744"
//                 )
//                 .map((item: any, i: any) => (
//                   <SingleProgramCourse item={item} key={item?.id} />
//                 ))
//             )}
//           </motion.div>
//         </div>
//       </div>

//       {/* Pagination  */}
//       <div className="container px-[30px] mt-[70px] flex justify-between">
//         <div>
//           {/* <span className='text-[20px] text-[#9f9f9f]'>Showing {itemsPerPage} of {totalPages}</span> */}
//         </div>

//         <nav aria-label="Page navigation example">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <span
//               key={index}
//               className={classNames(
//                 "cursor-pointer px-[14px] py-[5px] inline-block text-[16px] leading-[28px] font-semibold tracking-[2%]",
//                 currentPage === index + 1
//                   ? "bg-secondary text-white"
//                   : "bg-lightblue text-lightdark"
//               )}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </span>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default TopPrograms;
