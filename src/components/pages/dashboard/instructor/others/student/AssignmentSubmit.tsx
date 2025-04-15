import Image from "next/image";
import React, { useEffect, useState } from "react";
import rightIcon from "../../../../../../assets/RightIcon.png";
import { useRouter } from "next/router";
import {
  useGetOneSubmitAssignmentQuery,
  useGetAllSubmitAssignmentQuery,
} from "../../../../../../feature/api/dashboardApi";
import Link from "next/link";
import moment from "moment";

function AssignmentSubmitted() {
  const router = useRouter();
  const { assignmentId, studentId } = router.query;
  const { isError, data, error, isLoading, isSuccess } =
    useGetOneSubmitAssignmentQuery({
      id: studentId,
      assignmentId: assignmentId,
    });
  // console.log(id, data)
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        isSuccess && (
          <div>
            <div className="mb-5">
              <h3
                className=" mb-2"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.subAssignments[0]?.text,
                }}
              ></h3>
              <div className="flex text-[14px] font-medium text-[#3A57E8] gap-5">
                <span>
                  Due{" "}
                  {moment(
                    data?.data?.subAssignments[0]?.assignment?.availUntil
                  ).format("MMMM Do YYYY")}
                </span>
                <span>
                  Score {data?.data?.subAssignments[0]?.assignment?.score}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-[#fff] rounded p-5">
                  <div className="grid grid-cols-12 mb-8">
                    <div className="col-span-12 lg:col-span-6">
                      <div className="flex gap-3 items-baseline">
                        <h3 className="font-semibold text-xl">Due</h3>
                        <span className="font-normal text-[16px]">
                          {moment(
                            data?.data?.subAssignments[0]?.assignment
                              ?.availUntil
                          ).format("MMMM Do YYYY")}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xsm:mt-8 lg:mt-0">
                      <div className="flex gap-3 items-baseline">
                        <h3 className="font-semibold text-xl">Points</h3>
                        <span className="font-normal text-[16px]">
                          {data?.data?.subAssignments[0]?.mark}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-baseline mb-6">
                    <h3 className="font-semibold text-xl">Submitting</h3>
                    <span className="font-normal text-[16px]">
                      a text entry box, a website url, a media recording, or a
                      file upload
                    </span>
                  </div>
                  <div className="flex gap-3 items-baseline mb-5 border-b border-[#DFDEDE] pb-6">
                    <h3 className="font-semibold text-xl">Available</h3>
                    <span className="font-normal text-[16px]">
                      {moment(
                        data?.data?.subAssignments[0]?.assignment?.availFrom
                      ).format("MMMM Do YYYY")}{" "}
                      -{" "}
                      {moment(
                        data?.data?.subAssignments[0]?.assignment?.availUntil
                      ).format("MMMM Do YYYY")}{" "}
                      about{" "}
                      {moment(
                        data?.data?.subAssignments[0]?.assignment?.availFrom,
                        "YYYYMMDD"
                      ).from(
                        data?.data?.subAssignments[0]?.assignment?.availUntil
                      )}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span>{data?.data?.subAssignments[0]?.comment}</span>
                  </div>
                  <div className="mb-6">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-[#fff] p-5 rounded">
                  <div className="mb-3">
                    <h3 className="font-semibold text-[17px] border-b border-[#DFDEDE] pb-4 mb-5">
                      Submission
                    </h3>
                  </div>
                  <div>
                    <button className=" gap-3 flex justify-center items-center rounded xsm:w-full lg:w-[165px] h-[42px] font-normal text-[15px] text-[#1AA053] bg-[#D5EBDF]">
                      <Image src={rightIcon} alt="icon" /> Submitted!
                    </button>
                    <br />
                    <span className="font-medium">
                      {moment(data?.data?.subAssignments[0]?.createdAt).format(
                        "LLLL"
                      )}
                    </span>
                    <br />
                    <button className="mt-5 flex text-xs rounded lg:!w-[80%] xsm:!w-full font-medium justify-center items-center gap-3 bg-[#EBEEFD] text-[#3A57E8]      border-[1px] h-[2.6rem] text-[14px] border-[#3A57E8] border-solid">
                      Submission Details
                    </button>
                    <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={data?.data?.subAssignments[0]?.fileUrl[0]}
                      className="flex text-xs rounded lg:!w-[80%] xsm:!w-full font-medium justify-center items-center gap-3 bg-[#EBEEFD] text-[#3A57E8] border-[1px] h-[2.6rem] text-[14px] border-[#3A57E8] border-solid"
                    >
                      Download Assignment.PDF
                    </a>
                    <br />
                  </div>
                  <div className="mb-5">
                    <span className="font-medium mb-1 text-[14px]">
                      Assigned Peer Reviews
                    </span>
                    <h3 className="font-semibold mb-4 mt-3">None Assigned</h3>
                    <span className="font-medium text-[#8A92A6] text-[15px]">
                      You may not see all comments right now because the
                      assignment is currently being graded
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default AssignmentSubmitted;
