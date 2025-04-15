import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import toast from 'react-hot-toast';
import Plus from "../../../../../Icon/Plus";
import { useAppSelector } from "../../../../../app/hooks";
import {
  useGetAllSubmitAssignmentQuery,
  useSubmitAssignmentMutation,
} from "../../../../../feature/api/dashboardApi";
import { useSingleFileUploadMutation } from "../../../../../feature/api/mediaUploadApi";
import { InputErrorMessage } from "../../../../utils/error";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

type props = {
  fileUrl: string[];
  comment: string;
  text: any;
};

export default function AssignmentSubmission() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const router = useRouter();
  const [serviceList, setserviceList] = useState<any>([]);
  const { id: studentId } = useAppSelector((state) => state.auth.user);
  const { assignmentId, courseId } = router.query;
  const [filePreview, setFilePreview] = useState([]);
  const [Filename, setFilename] = useState("");
  const [showFileUpload, setshowFileUpload] = useState(false);
  const [quillText, setQuillText] = useState("");
  const {
    data: AllSubmitAssignment,
    isSuccess: AllSubmitAssignmentIsSuccess,
    isError: AllSubmitAssignmentIsError,
    isLoading: AllSubmitAssignmentIsLoading,
  } = useGetAllSubmitAssignmentQuery({});
  const [submitAssignment, { error, data, isLoading, isSuccess, isError }] =
    useSubmitAssignmentMutation();
  const [
    singleFileUpload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSingleFileUploadMutation();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<props>();

  const handleFile = () => {
    const abc = [...serviceList, []];
    setserviceList(abc);
  };

  const onQuestionSubmit = (data: any) => {
    data.fileUrl = filePreview;
    submitAssignment({
      course: courseId,
      assignment: assignmentId,
      text: data.text,
      comment: data.comment,
      fileUrl: data.fileUrl,
    });
  };
  // console.log({ ...inputs, value });

  const fileGet = (e: any) => {
    const file = e.target.files;
    // console.log(file)

    if (file && file.length > 0 && file["0"]) {
      const formData = new FormData();
      setshowFileUpload(true);
      formData.append("file", file["0"]);
      singleFileUpload(formData);
      setFilename(e.target.files[0].name);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "file"
    ) {
      toast.error("Select a valid File.");
    }
  };

  useEffect(() => {
    if (isUploadError) {
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      // console.log("upload success", uploadData);
      setFilePreview(uploadData.data.fileUrl);
      toast.success("upload success");
      // console.log(serviceList)
    }
  }, [isUploadError, isUploadSuccess]);

  useEffect(() => {
    register("text", { required: true, minLength: 1 });
  }, [register, setValue]);

  useEffect(() => {
    if (isError) {
      toast.error("assigment has submit error");
    } else if (isSuccess) {
      router.push(
        `/dashboard/assignmentsubmit/${data.data.subAssignment.assignment}/${data.data.subAssignment.student}`
      );
      toast.success("assignment submit Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    const test = async () => {
      try {
        const a = AllSubmitAssignment.data.subAssignments
          .filter(
            (student: any) =>
              student.assignment === assignmentId &&
              student.student === studentId &&
              student.course === courseId
          )
          .map((student: any) => {
            router.push(
              `/dashboard/instructor/students/assignmentsubmit/${student._id}`
            );
          });
      } catch (err) {
        // console.log("assignmentsubmit handle error", err);
      }
    };
    test();
  }, [AllSubmitAssignmentIsSuccess]);
  const [activeTab, setactiveTab] = useState("assignment");

  return (
    <>
      {AllSubmitAssignmentIsLoading ? (
        <div>Loading...</div>
      ) : AllSubmitAssignmentIsError ? (
        <div>Error...</div>
      ) : (
        AllSubmitAssignmentIsSuccess && (
          <div className="grid  lg:grid-cols-12 w-full justify-between gap-x-8 font-nunito">
            <div className="lg:col-span-8 md:col-span-12 col-span-12">
              <form onSubmit={handleSubmit(onQuestionSubmit)}>
                <div className="my-5">
                  <div>
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col">
                        <p className="font-semibold text-base font-nunito">
                          Submit Assignment{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-[10px]">
                    <ReactQuill
                      theme="snow"
                      className="font-nunito"
                      onChange={(e) => {
                        setValue("text", e);
                      }}
                    />
                    <div>
                      {errors.text && (
                        <InputErrorMessage message="Enter description" />
                      )}
                    </div>
                  </div>

                  <div>
                    <>
                      <div className="mb-2">
                        <h1 className="font-bold text-xl">Assignment File</h1>
                      </div>
                      <div className="xsm:p-3 lg:p-0 lg:pr-[6rem] py-11 bg-white rounded-lg">
                        <div>
                          <div>
                            <div className="w-full">
                              <div className="bg-white lg:p-8 p-0 ">
                                <div className="w-full">
                                  <div
                                    // htmlFor="dropzone-file"
                                    className=" h-28 xsm:w-full lg:w-full border-2 px-4 py-2 border-gray-300 border-dashed rounded-lg  bg-white"
                                  >
                                    <p>Assignment file</p>
                                    <div className="flex justify-center mt-1 items-center">
                                      <label
                                        className="text-white xsm:w-[7.5rem] lg:w-[9.5rem] justify-center items-center flex gap-3 bg-[#3A57E8] rounded-lg shadow-lg tracking-wide  cursor-pointer"
                                        style={{ padding: "10px 0px" }}
                                      >
                                        <svg
                                          className="h-7"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className="text-base leading-normal">
                                          Upload
                                        </span>
                                        <input
                                          {...register("fileUrl", {
                                            required: true,
                                          })}
                                          onChange={fileGet}
                                          type="file"
                                          className="hidden"
                                          name="filess"
                                        />
                                      </label>
                                      <span className="ml-2 text-[#727272] text-sm">
                                        {Filename
                                          ? Filename
                                          : "No file choosen"}
                                      </span>
                                    </div>
                                    <div className="pt-5">
                                      <p className="text-[#3A57E8] font-medium mt-3">
                                        {uploadLoading && "uploading..."}
                                        {isUploadSuccess && "Upload Completed"}
                                      </p>
                                      {errors.fileUrl && (
                                        <InputErrorMessage
                                          message={"Enter file"}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  {/* <div>
                            {errors.fileUrl && <InputErrorMessage message="Enter file"/>}
                         </div> */}
                                  {/* <div className='mt-5'>
                              <p className='text-[#3A57E8] font-medium'>{uploadLoading && "uploading..."}{isUploadSuccess && "Upload Completed"}</p>
                          </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-10 lg:pl-[2rem]">
                          <button
                            className=" flex items-center"
                            onClick={handleFile}
                          >
                            <Plus />
                            <p className="text-blue-600 ml-2 text-xl font-nunito">
                              Add another file
                            </p>
                          </button>
                          <div className="xsm:w-full lg:w-[97%] px-2  py-1 mt-5 flex justify-between items-center bg-[#CDEBEC]">
                            <p className="text-[#056C71]">file types</p>
                            <p className="text-xs">
                              Zip, rar, txt, doc, ppt, xlsx, png, jpg
                            </p>
                          </div>
                          <div className="my-5 lg:w-[90%] mb-6 pb-7">
                            <input
                              type="text"
                              className="mt-3"
                              placeholder="comment"
                              {...register("comment", { required: true })}
                              style={{
                                background: " #FFFFFF",
                                boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                                borderRadius: "8px",
                                width: "100%",
                                border: "none",
                                padding: " 11px 17px",
                              }}
                            />
                            <div>
                              {errors.comment && (
                                <InputErrorMessage
                                  message={"Enter your comment"}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>

                <div className="flex justify-end  items-center w-full lg:mt-0 md:mt-0 mt-5">
                  <div className="">
                    <button
                      type="submit"
                      className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
                    >
                      {isLoading ? <ButtonLoader /> : "submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:col-span-4 md:col-span-12 col-span-12">
              <form>
                <div className="bg-white flex mt-5  flex-col px-5 py-7 rounded-lg">
                  <div className="flex lg:flex-col xl:flex-col sm:flex-col xsm:flex-col justify-between lg:items-baseline sm:items-center xsm:items-center xl:items-baseline">
                    <div className="my-8 xsm:w-full">
                      <label
                        htmlFor="startDate"
                        className="font-semibold font-nunito"
                      >
                        Due Date
                      </label>
                      <br />
                      <input
                        className="xsm:w-full border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                        type="date"
                        id="startDate"
                        value="2000-05-05"

                        // {...register("startDate", { required: "start date is required" })}
                      />
                    </div>
                    <div className="xsm:w-full lg:ml-[-25px] xl:ml-0   lg:mb-4 md:my-0 sm:my-0 xsm:my-0  xl:mb-4">
                      <label
                        htmlFor="startTime "
                        className="font-semibold mb-2 font-nunito"
                      >
                        Time remaining
                      </label>
                      <br />
                      <div className="border  border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito flex justify-between">
                        <p>
                          {1}day, {2}hr
                        </p>
                        <div
                          className="w-4 h-4 ml-2
                  "
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8611 0.166992C15.1389 0.166992 17.9352 1.3244 20.25 3.63921C22.5648 5.95403 23.7222 8.74107 23.7222 12.0003C23.7222 15.2596 22.5648 18.0466 20.25 20.3614C17.9352 22.6763 15.1389 23.8337 11.8611 23.8337C8.58333 23.8337 5.78704 22.6763 3.47222 20.3614C1.15741 18.0466 0 15.2596 0 12.0003C0 8.74107 1.15741 5.95403 3.47222 3.63921C5.78704 1.3244 8.58333 0.166992 11.8611 0.166992ZM11.8611 21.5003C14.4722 21.5003 16.7037 20.5744 18.5556 18.7225C20.4074 16.8707 21.3333 14.63 21.3333 12.0003C21.3333 9.3707 20.4074 7.12996 18.5556 5.2781C16.7037 3.42625 14.4722 2.50033 11.8611 2.50033C9.25 2.50033 7.01852 3.42625 5.16667 5.2781C3.31482 7.12996 2.38889 9.3707 2.38889 12.0003C2.38889 14.63 3.31482 16.8707 5.16667 18.7225C7.01852 20.5744 9.25 21.5003 11.8611 21.5003ZM12.4444 6.05588V12.2781L17.7778 15.4448L16.8889 16.9448L10.6667 13.167V6.05588H12.4444Z"
                              fill="#3A57E8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      )}
    </>
  );
}
