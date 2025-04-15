import React, { useEffect } from "react";
import InstructorCss from "../../../../../styles/Instructor.module.css";
import fileIcon from "../../../../../assets/filel.png";
import rightIcon from "../../../../../assets/RightIcon.png";
import Image from "next/image";
import {
  useGetOneSubmitAssignmentInstructorQuery,
  useSubmitAssignmentUdpateMutation,
} from "../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Spinner } from "flowbite-react";
import moment from "moment";
const Assignment = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isSuccess, isError, isLoading } =
  useGetOneSubmitAssignmentInstructorQuery(id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      grade: data?.data?.subAssignment?.grade,
      mark: data?.data?.subAssignment?.mark,
      comment: data?.data?.subAssignment?.comment,

    }
  });

 
  const [
    submitAssignmentUdpate,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSubmitAssignmentUdpateMutation();

  const onSubmit = (data: any) => {
    submitAssignmentUdpate({
      id: id,
      comment: data.comment,
      grade: data.grade,
      mark: data.mark,
    });
  };

  useEffect(() => {
    if (isUploadError) {
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      toast.success("assignment update success");
      //redirect to back
      router.back();
    }
  }, [isUploadError, isUploadSuccess]);

  return (
    <>
      <div className="assignment_grade h-[100vh] font-nunito">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center">Error...</div>
        ) : (
          isSuccess && (
            <div className="ascontainer" style={{ padding: "0px 2rem" }}>
              <div className="assignment_grade_heading flex justify-between md:flex-row xsm:flex-col xsm:gap-3 md:gap-0">
                <div className="assignment_grade_heading_left">
                  <h2
                    className="md:mb-3 xsm:md-1"
                    style={{
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: " 130%",
                      letterSpacing: " 0.02em",
                      color: " #232D42",
                    }}
                  >
                    {data?.data?.subAssignment?.assignment?.name}
                  </h2>
                  <div className="assignment_grade_heading_bottom_content flex gap-5">
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "130%",
                        letterSpacing: " 0.02em",
                        color: " #3A57E8",
                      }}
                    >
                      {moment(
                        data?.data?.subAssignment?.assignment?.availUntil
                      ).format("MM/DD/YYYY")}
                    </span>
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "130%",
                        letterSpacing: " 0.02em",
                        color: " #3A57E8",
                      }}
                    >
                      Score {data?.data?.subAssignment?.assignment?.score}
                    </span>
                  </div>
                </div>
           {
            isUploadSuccess || uploadLoading &&
                <div className={InstructorCss.assignment_grade_heading_right}>
                  <button
                    className="gap-3 flex justify-center items-center rounded"
                    style={{
                      width: "165px",
                      height: "42px",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#1AA053",
                      background: " #D5EBDF",
                    }}
                  >
                    <Image src={rightIcon} alt="" />
                    Submitted!
                  </button>
                </div>
              }  
              </div>

              <div className="mt-[1.5rem] bg-[#fff] pl-[25px] xsm:pr-[25px] md:pr-[86px] pt-[28px] pb-[28px]">
                <div
                  className="flex-col  md:flex-row assignment_grade_body_topheading flex  md:justify-between md:items-center"
                  style={{
                    borderBottom: "1px  solid #ADB5BD",
                    paddingBottom: " 17px",
                  }}
                >
                  <h2
                    className="xsm:mb-3 md:mb-0"
                    style={{
                      fontWeight: "600",
                      fontSize: " 17px",
                      lineHeight: "130%",
                      letterSpacing: "0.02em",
                      color: " #232D42",
                    }}
                  >
                    Name of Single Student{" "}
                    {data?.data?.subAssignment?.student.firstName}{" "}
                    {data?.data?.subAssignment?.student.lastName}
                  </h2>
                  {/* <button
                    className="rounded xsm:!w-full md:!w-[119px]"
                    style={{
                      width: "119px",
                      height: " 36px",
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "175%",
                      letterSpacing: " 0.02em",
                      color: "#FFFFFF",
                      background: " #3A57E8",
                    }}
                  >
                    Update Grade
                  </button> */}
                </div>

                <div className="">
                  {/*
              <h1
                className="font-semibold mb-4 mt-4"
                style={{
                  fontSize: "20px",
                  lineHeight: "130%",
                  letterSpacing: "0.02em",
                  color: "#232D42",
                }}
              >
                Abraham Lincoin Eassy
              </h1>
            */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="assignment_grade_inputfiled flex xsm:gap-3 md:gap-24 xsm:flex-col md:flex-row mb-3">
                      <div className="flex flex-col">
                        <label
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            marginBottom: "5px",
                            lineHeight: "175%",
                            letterSpacing: "0.02em",
                            color: "#232D42",
                          }}
                        >
                          Grade:
                        </label>
                        <input
                          type="text"
                          {...register("grade", { required: true })}
                          className="md:w-[368px] xsm:w-full"
                          style={{
                            height: " 42px",
                            background: "#FFFFFF",
                            boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)",
                            marginBottom: "4px",
                            padding: "5px 13px",
                            borderRadius: "5px",
                          }}
                        />
                        <span className="text-red-700">
                            Hints: A,B,C,D
                         </span>
                      </div>
                      <div className="flex flex-col">
                        <label
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            marginBottom: "5px",
                            lineHeight: "175%",
                            letterSpacing: "0.02em",
                            color: "#232D42",
                          }}
                        >
                          Mark:
                        </label>
                        <input
                          type="text"
                          {...register("mark", { required: true })}
                          className="md:w-[368px] xsm:w-full"
                          style={{
                            height: " 42px",
                            background: "#FFFFFF",
                            boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)",
                            marginBottom: "4px",
                            padding: "5px 13px",
                            borderRadius: "5px",
                          }}
                        />
                         <span className="text-red-700">
                            Hints: 10,50,100
                          </span>
                      </div>
                    </div>

                    <button
                      className="flex text-xs rounded md:!w-[16rem] xsm:!w-full font-medium justify-center items-center gap-3"
                      style={{
                        background: "#EBEEFD",
                        border: "1px solid #3A57E8",
                        padding: "5px 20px",
                        marginBottom: "1.6rem",
                        lineHeight: "175%",
                        letterSpacing: "0.02em",
                        color: "#3A57E8",
                      }}
                    >
                      More Details in the sppedd grader
                    </button>

                    <div
                      className={`${InstructorCss.submitted_filesss} flex xsm:items-left md:items-center xsm:gap-2 md:gap-8 md:flex-row xsm:flex-col `}
                      style={{
                        borderBottom: "1px solid #ADB5BD",
                        paddingBottom: "2.1rem",
                      }}
                    >
                      <h3
                        className="font-medium text-sm"
                        style={{
                          lineHeight: " 175%",
                          letterSpacing: "0.02em",
                          color: "#232D42",
                        }}
                      >
                        Submitted files:
                      </h3>
                      <button
                        className="flex text-xs rounded  font-medium justify-center items-center gap-3"
                        style={{
                          marginBottom: 0,
                          background: "#EBEEFD",
                          border: "1px solid #3A57E8",
                          padding: "5px 20px",
                          lineHeight: "175%",
                          letterSpacing: "0.02em",
                          color: "#3A57E8",
                        }}
                      >
                        <a
                          target="_blank"
                          href={`https://docs.google.com/gview?url=${data.data.subAssignment.fileUrl[0]}`}
                          className="flex justify-between gap-2 items-center"
                          rel="noreferrer"
                        >
                          <Image
                            src={fileIcon}
                            width={"18px"}
                            height={"19px"}
                            alt=""
                          />
                          {
                            data?.data?.subAssignment?.fileUrl[0].split("/").pop()
                          }
                        </a>
                      </button>
                    </div>
                    <div
                      className={`${InstructorCss.assingment_comment_input} flex flex-col`}
                    >
                      <label
                        className="font-semibold"
                        style={{
                          fontStyle: "normal",
                          paddingBottom: "1rem",
                          fontSize: "15px",
                          paddingTop: "9px",
                          lineHeight: "175%",
                          letterSpacing: " 0.02em",
                          color: " #232D42",
                        }}
                      >
                        Add a Comment
                      </label>
                      <input
                        type="text"
                        className="md:!w-[368px] xsm:!w-full"
                        {...register("comment", { required: true })}
                      />
                      {errors.comment && (
                        <span className="text-red-700">
                          This field is required
                        </span>
                      )}
                      <button className="md:w-[131px] xsm:w-full gap-1" type="submit">
                        {uploadLoading ? (
                          <>
                            <Spinner />
                          </>
                        ) : (
                          "Update Score"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Assignment;
