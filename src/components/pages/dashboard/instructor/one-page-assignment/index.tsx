import React from "react";
import { MdEdit } from "react-icons/md";
import AssignmentPhoto from "../../../../../assets/admin/pexels-flo-dahm-699459 1.png";
import Image from "next/image";
import { useSingleAssignmentQuery } from "../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import moment from "moment";
import { useAppSelector } from "../../../../../app/hooks";
import { useGetAllSubmitAssignmentQuery } from "../../../../../feature/api/dashboardApi";
import { GoFile } from "react-icons/go";


export default function OnePageAssignment() {
  // const { data:submitData, isSuccess:submitDataSuccess, isError:submitDataIsError, isLoading:submitDataLoading } =
  /// useGetAllSubmitAssignmentQuery({});
  const { roles, id: studentId } =
    useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const { id, courseId } = router.query;
  const { data, isSuccess, isError, isLoading } = useSingleAssignmentQuery(id);


  const assignmentSubmitHandle = async () => {
    try {
      // console.log(data)
      if (data?.data?.assignment?.submissions.length > 0) {
        const a = data.data.assignment.submissions.filter((val: any) =>
          val?.assignment === id &&
          val?.course === courseId &&
          val?.student?._id === studentId
        ).map((val1: any) => {
          /// console.log(val1)
        });

        setTimeout(() => {
          if (a?.length > 0) {
            router.push(
              `/dashboard/assignmentsubmit/${id}/${studentId}`
            );
          } else {
            router.push(
              `/dashboard/assignment-submission/${courseId}/${id}`
            );
          }
        }, 5);

        // console.log(a)
      } else {
        router.push(
          `/dashboard/assignment-submission/${courseId}/${id}`
        );
      }
    } catch (err) {
      // console.log("assignmentsubmit handle error", err);
    }
  }
  return (
    <>
      {
        isLoading ? <div className="flex justify-center items-center"><Spinner /></div> : isSuccess &&
          <div className="p-1 md:p-5 font-nunito">
            <div className="flex justify-between items-center mb-[20px] xsm:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
              <div>
                <h1 className="font-bold text-lg capitalize">
                  {data.data.assignment.name}
                </h1>
              </div>
              {
                roles.includes("instructor") &&
                <div className="flex justify-between items-center">
                  <div>
                    <button
                      type="submit"
                      className="flex hover:bg-blue-500 text-white bg-blue-700 hover:text-white border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-3  py-2 text-center "
                    >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 11.5C22 14.4174 20.8411 17.2153 18.7782 19.2782C16.7153 21.3411 13.9174 22.5 11 22.5C8.08262 22.5 5.28473 21.3411 3.22183 19.2782C1.15893 17.2153 0 14.4174 0 11.5C0 8.58262 1.15893 5.78473 3.22183 3.72183C5.28473 1.65893 8.08262 0.5 11 0.5C13.9174 0.5 16.7153 1.65893 18.7782 3.72183C20.8411 5.78473 22 8.58262 22 11.5ZM16.5413 7.33375C16.443 7.23588 16.3261 7.15881 16.1974 7.10717C16.0687 7.05553 15.9309 7.03037 15.7923 7.03319C15.6537 7.03602 15.5171 7.06677 15.3906 7.12361C15.2641 7.18045 15.1504 7.26221 15.0562 7.364L10.2809 13.4484L7.403 10.5691C7.20751 10.387 6.94895 10.2878 6.68178 10.2925C6.41462 10.2972 6.15971 10.4055 5.97077 10.5944C5.78183 10.7833 5.6736 11.0382 5.66888 11.3054C5.66417 11.5726 5.76334 11.8311 5.9455 12.0266L9.58375 15.6662C9.68176 15.7641 9.79848 15.8412 9.92693 15.8929C10.0554 15.9447 10.1929 15.97 10.3314 15.9675C10.4699 15.9649 10.6064 15.9345 10.7328 15.878C10.8593 15.8215 10.9731 15.7401 11.0674 15.6388L16.5564 8.7775C16.7435 8.58294 16.8469 8.32275 16.8443 8.05282C16.8417 7.78288 16.7334 7.52471 16.5426 7.33375H16.5413Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Publish
                    </button>
                  </div>
                  <div className="mx-[10px]">
                    <button
                      type="submit"
                      className="flex bg-[#EBEEFD]  hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center "
                    >
                      <MdEdit className="mt-[3px]" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <div>
                    <span>
                      <svg
                        width="8"
                        height="20"
                        viewBox="0 0 8 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.61539 29.1923C7.61539 30.2022 7.21422 31.1707 6.50014 31.8848C5.78606 32.5988 4.81756 33 3.80769 33C2.79783 33 1.82933 32.5988 1.11525 31.8848C0.401166 31.1707 0 30.2022 0 29.1923C0 28.1824 0.401166 27.2139 1.11525 26.4999C1.82933 25.7858 2.79783 25.3846 3.80769 25.3846C4.81756 25.3846 5.78606 25.7858 6.50014 26.4999C7.21422 27.2139 7.61539 28.1824 7.61539 29.1923ZM7.61539 16.5C7.61539 17.5099 7.21422 18.4784 6.50014 19.1924C5.78606 19.9065 4.81756 20.3077 3.80769 20.3077C2.79783 20.3077 1.82933 19.9065 1.11525 19.1924C0.401166 18.4784 0 17.5099 0 16.5C0 15.4901 0.401166 14.5216 1.11525 13.8076C1.82933 13.0935 2.79783 12.6923 3.80769 12.6923C4.81756 12.6923 5.78606 13.0935 6.50014 13.8076C7.21422 14.5216 7.61539 15.4901 7.61539 16.5ZM7.61539 3.80769C7.61539 4.81755 7.21422 5.78606 6.50014 6.50014C5.78606 7.21422 4.81756 7.61538 3.80769 7.61538C2.79783 7.61538 1.82933 7.21422 1.11525 6.50014C0.401166 5.78606 0 4.81755 0 3.80769C0 2.79783 0.401166 1.82933 1.11525 1.11525C1.82933 0.401167 2.79783 0 3.80769 0C4.81756 0 5.78606 0.401167 6.50014 1.11525C7.21422 1.82933 7.61539 2.79783 7.61539 3.80769Z"
                          fill="#707070"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              }

            </div>
            <div className="bg-white p-3 md:p-6">
              <div className="border-2 border-gray-400 rounded-l-md rounded-r-md p-5">
                <p className="text-[#8A92A6]" dangerouslySetInnerHTML={{
                  __html: data?.data.assignment.description,
                }}>
                </p>
                <a target="_blank" href={data.data.assignment.fileUrl} className="cursor-pointer flex items-center">
                  <GoFile className="text-[3rem] text-blue-500 mt-2" />
                  <span className="text-sm text-[#8A92A6]">{data.data.assignment.key}</span>
                </a>
              </div>
              <div className="flex w-full md:w-[60%] justify-between mt-[20px] mb-[40px] xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col">
                <p>
                  <span className="font-bold">Points: </span>
                  {data.data.assignment.score}
                </p>
                <p>
                  <span className="font-bold ">Submitting: </span>a website url or a
                  file upload
                </p>
              </div>
              <div>
                <div className="flex justify-around items-start">
                  <p className="font-bold text-[12px] md:text-[16px]">For</p>
                  <p className="font-bold text-[12px] md:text-[16px] text-center">Due</p>
                  <p className="font-bold text-[12px] md:text-[16px] text-center">Available from</p>
                  <p className="font-bold text-[12px] md:text-[16px]">Until</p>
                </div>
                <div className="h-[2px] w-full bg-slate-400 my-[5px]"></div>
                <div className="flex justify-around xsm:items-start sm:items-start md:items-end lg:items-end xl:items-end">
                  <p className="text-[12px] md:text-[14px]">{moment(data.data.assignment.createdAt).format('MM/DD/YYYY')}</p>
                  <p className="text-[12px] md:text-[14px]">Everyone</p>
                  <p className="text-[12px] md:text-[14px]">{moment(data.data.assignment.availFrom).format('MM/DD/YYYY')}</p>
                  <p className="text-[12px] md:text-[14px]">{moment(data.data.assignment.availUntil).format('MM/DD/YYYY')}</p>
                </div>
              </div>
              {
                roles.includes("student") &&
                <div className="flex justify-end mt-[10px]">
                  <button className="text-[#FFFFFF] rounded-lg bg-[#3A57E8] py-3 my-3 px-5" onClick={() => assignmentSubmitHandle()}>Submit Assignment</button>
                </div>
              }
            </div>
          </div>
      }
    </>
  )
}
