import Image from "next/image";
import { useEffect, useState } from "react";
import { FcAudioFile } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DocumentLogo from "../../../../../assets/Document.png";
import ImageIcon from "../../../../../assets/ImageIcon.png";
import MoreIcon from "../../../../../assets/MoreIcon.png";
import Pdf from "../../../../../assets/Pdf.png";
import PlayIcon from "../../../../../assets/Play.png";
import PlusIcon from "../../../../../assets/PlusIcon.png";
import VideoIcon from "../../../../../assets/Video.png";
import exel from "../../../../../assets/exel.png";
import {
  useAllAssignmentInstructorQuery,
  useAllfilesQuery,
  useCreateFileMutation,
  useDeleteByFileMutation,
  useGetAllInstructorCourseQuery,
  useGetInstructorFileQuery,
  useGetMyEnrollmentAllQuery,
} from "../../../../../feature/api/dashboardApi";
import { useSingleFileUploadMutation } from "../../../../../feature/api/mediaUploadApi";
import InstructorCss from "../../../../../styles/Instructor.module.css";
// import PlusIcon from "../../../../../assets/plusIcon.png";
import { Spinner } from "flowbite-react";
import moment from "moment";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../app/hooks";
import imgJPG from "../../../../../assets/01.jpg";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
const File = () => {
  const {
    data: enrollData,
    isSuccess: enrollSuccess,
    isError: enrollError,
    isLoading: enrollLoading,
  } = useGetMyEnrollmentAllQuery({});
  const { id, roles } = useAppSelector((state) => state.auth.user);
  const {
    data: assignmentData,
    isSuccess: assignmentSuccess,
    isError: assignmentIsError,
    isLoading: assignmentLoading,
  } = useAllAssignmentInstructorQuery(id);
  const {
    data: allfileData,
    isSuccess: allfileSuccess,
    isError: allfileIsError,
    isLoading: allFileLoading,
  } = useAllfilesQuery({});
  const {
    data: courseData,
    isSuccess: courseSuccess,
    isError: courseIsError,
    isLoading: courseLoading,
  } = useGetAllInstructorCourseQuery({});
  const {
    data: instructorFileData,
    isSuccess: instructorFileSuccess,
    isError: instructorFileError,
    isLoading: instructorFileLoading,
  } = useGetInstructorFileQuery(id);
  const [
    singleFileupload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSingleFileUploadMutation();
  const [
    createFile,
    {
      isLoading: createFileLoading,
      error: createFileError,
      data: createFileData,
      isSuccess: createFileSuccess,
      isError: createFileIsError,
    },
  ] = useCreateFileMutation();
  const [
    deleteByFile,
    {
      isLoading: deleteFileLoading,
      error: deleteFileError,
      data: deleteFileData,
      isSuccess: deleteFileSuccess,
      isError: deleteFileIsError,
    },
  ] = useDeleteByFileMutation();
  const [open, setopen] = useState(false);
  const [playVideo, setplayVideo] = useState("");
  const [activeMenu, setactiveMenu] = useState("");
  const [openAudio, setopenAudio] = useState(false);
  //const [dbfile, setdbfile] = useState("")
  //const [dbfileKey, setdbfileKey] = useState("")

  const videoHandle = (url: any) => {
    setplayVideo(url);
    setopen(true);
  };

  const FileGet = (e: any) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"]) {
      const formData = new FormData();
      formData.append("file", file["0"]);
      singleFileupload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "file"
    ) {
      toast.error("Select a valid file.");
    }
  };

  useEffect(() => {
    if (isUploadError) {
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      // toast.success("upload file success")
      createFile({
        file: uploadData.data.fileUrl,
        key: uploadData.data.key,
      });
    }
  }, [isUploadError, isUploadSuccess]);

  useEffect(() => {
    if (createFileIsError) {
      toast.error("file upload failed");
    } else if (createFileSuccess) {
      toast.success("upload file success");
    }
  }, [createFileIsError, createFileSuccess]);

  //console.log(allfileData)
  const activemenuHandle = (id: any) => {
    setactiveMenu(id);
  };

  const deleteFileHandle = (id: any) => {
    deleteByFile({
      id: id,
    });
  };

  useEffect(() => {
    if (deleteFileIsError) {
      toast.error((deleteFileIsError as any).data.message);
    } else if (deleteFileSuccess) {
      toast.success("File Delete Successfully");
    }
  }, [deleteFileIsError, deleteFileSuccess]);

  return (
    <>
      <div className={InstructorCss.AllFiles}>
        <div className="flex xsm:flex-col items-baseline md:flex-row justify-between border-b-2 pb-7 ">
          <div className={`${InstructorCss.AllFileContent} md:w-[70%]`}>
            <h3>All Files</h3>
          </div>
          {roles.includes("instructor") && (
            <div className="flex md:justify-end md:flex-row md:w-full xsm:justify-center xsm:flex-col xsm:w-full xsm:gap-5 xsm:mt-3">
              {/*
                    <button className='flex items-center rounded justify-center gap-1' style={{color:"#fff",background:"#3A57E8",padding:"8px 11px"}}>Create Folder <Image src={PlusIcon} alt=""/></button>
                  */}
              <label
                className="cursor-pointer flex items-center rounded  justify-center gap-1"
                style={{
                  color: "#fff",
                  background: "#3A57E8",
                  padding: "8px 11px",
                }}
              >
                {uploadLoading || createFileLoading ? (
                  <div>
                    <Spinner />
                  </div>
                ) : (
                  <>
                    Upload Files <Image src={PlusIcon} alt="" />
                    <input
                      type="file"
                      onChange={FileGet}
                      className="hidden"
                      disabled={uploadLoading || createFileLoading}
                    />
                  </>
                )}
              </label>
              {/*
                    <button className='flex items-center rounded  justify-center gap-1' style={{color:"#fff",background:"#3A57E8",padding:"8px 11px"}}>All Files <Image src={PlusIcon} alt=""/></button>
                    */}
            </div>
          )}
        </div>
        {roles.includes("student") &&
          (enrollLoading && allFileLoading ? (
            <div className="flex justify-center items-center mt-2">
              <Spinner />
            </div>
          ) : (
            enrollSuccess &&
            allfileSuccess && (
              <div>
                <div className={`${InstructorCss.FileDocuments} mt-5`}>
                  <h2>Documents</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    className="mySwiper !pb-11 "
                  >
                    {enrollSuccess &&
                      enrollData.data.enrollments?.map((val1: any) => {
                        return val1?.course?.modules?.map((val2: any) => {
                          return val2?.assignments?.map((val3: any) => {
                            return (
                              <>
                                {(val3?.key.split(".").pop() === "docs" ||
                                  val3?.key.split(".").pop() === "pdf" ||
                                  val3?.key.split(".").pop() === "xlsx" ||
                                  val3?.key.split(".").pop() === "xls" ||
                                  val3?.key.split(".").pop() === "xlsm" ||
                                  val3?.key.split(".").pop() === "xlsb" ||
                                  val3?.key.split(".").pop() === "csv" ||
                                  val3?.key.split(".").pop() === "xltx" ||
                                  val3?.key.split(".").pop() === "xltm" ||
                                  val3?.key.split(".").pop() === "ods" ||
                                  val3?.key.split(".").pop() === "xml" ||
                                  val3?.key.split(".").pop() === "zip") && (
                                  <SwiperSlide>
                                    <div
                                      key={val3._id}
                                      className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                      style={{
                                        background: "#FFFFFF",
                                        boxShadow:
                                          "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                      }}
                                    >
                                      <div className="container">
                                        <a
                                          target="_blank"
                                          href={`https://docs.google.com/gview?url=${val3.fileUrl}`}
                                        >
                                          <div
                                            className="text-center"
                                            style={{
                                              background: "#F9F9F9",
                                              borderRadius: "5px",
                                              padding: "35px 0px",
                                            }}
                                          >
                                            {val3.key.split(".").pop() ===
                                              "pdf" ||
                                            val3.key.split(".").pop() ===
                                              "docs" ||
                                            val3.key.split(".").pop() ===
                                              "zip" ? (
                                              <Image
                                                src={Pdf}
                                                className={
                                                  InstructorCss.documentCardImg
                                                }
                                                alt=""
                                              />
                                            ) : (
                                              <Image
                                                src={exel}
                                                className={
                                                  InstructorCss.documentCardImg
                                                }
                                                alt=""
                                                height={155}
                                              />
                                            )}
                                          </div>
                                        </a>

                                        <div
                                          className={
                                            InstructorCss.documentCardFooterContent
                                          }
                                        >
                                          <div
                                            className="flex justify-between"
                                            style={{ margin: "10px 0px" }}
                                          >
                                            <span>
                                              Created on{" "}
                                              {moment(val3.createdAt)
                                                .utc()
                                                .format("DD MMMM YYYY")}
                                            </span>
                                            <span
                                              className={InstructorCss.dff35mb}
                                            >
                                              5 mb
                                            </span>
                                          </div>
                                          <div
                                            className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                            style={{ gap: "9px" }}
                                          >
                                            <Image src={DocumentLogo} alt="" />
                                            <h3>{val3?.key.split("")}</h3>
                                          </div>
                                          {/* 
                                                     <div className={InstructorCss.documentCardFooterContentbottom}>
                                                         <h3>You opened<span className={InstructorCss.juose}> just Now</span></h3>
                                                     </div>
                                                     */}
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                )}
                                {val2?.slides?.map(
                                  (slideVal: any) =>
                                    slideVal?.fileUrl?.split(".").pop() ===
                                      "pdf" && (
                                      <SwiperSlide>
                                        <div
                                          key={slideVal?._id}
                                          className="overflow-hidden rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                          style={{
                                            background: "#FFFFFF",
                                            boxShadow:
                                              "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                          }}
                                        >
                                          <div className="container">
                                            <a
                                              target="_blank"
                                              href={`https://docs.google.com/gview?url=${slideVal.fileUrl}`}
                                            >
                                              <div
                                                className="text-center"
                                                style={{
                                                  background: "#F9F9F9",
                                                  borderRadius: "5px",
                                                  padding: "35px 0px",
                                                }}
                                              >
                                                <Image
                                                  src={Pdf}
                                                  className={
                                                    InstructorCss.documentCardImg
                                                  }
                                                  alt=""
                                                />
                                              </div>
                                            </a>

                                            <div
                                              className={
                                                InstructorCss.documentCardFooterContent
                                              }
                                            >
                                              <div
                                                className="flex justify-between"
                                                style={{ margin: "10px 0px" }}
                                              >
                                                <span>
                                                  Created on{" "}
                                                  {moment(slideVal.createdAt)
                                                    .utc()
                                                    .format("DD MMMM YYYY")}
                                                </span>
                                                <span
                                                  className={
                                                    InstructorCss.dff35mb
                                                  }
                                                >
                                                  5 mb
                                                </span>
                                              </div>
                                              <div
                                                className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                                style={{ gap: "9px" }}
                                              >
                                                <Image
                                                  src={DocumentLogo}
                                                  alt=""
                                                />
                                                <h3>
                                                  {slideVal?.fileUrl
                                                    .split("/")
                                                    .pop()}
                                                </h3>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                    )
                                )}
                              </>
                            );
                          });
                        });
                      })}
                    {allfileSuccess &&
                      allfileData.data.files.map(
                        (val: any) =>
                          (val?.key?.split(".").pop() === "pdf" ||
                            val?.key?.split(".").pop() === "docs" ||
                            val?.key?.split(".").pop() === "zip" ||
                            val?.key?.split(".").pop() === "xlsx" ||
                            val?.key?.split(".").pop() === "xls" ||
                            val?.key?.split(".").pop() === "xlsm" ||
                            val?.key?.split(".").pop() === "xlsb" ||
                            val?.key?.split(".").pop() === "csv" ||
                            val?.key?.split(".").pop() === "xltx" ||
                            val?.key?.split(".").pop() === "xltm" ||
                            val?.key?.split(".").pop() === "ods" ||
                            val?.key?.split(".").pop() === "xml" ||
                            val?.key?.split(".").pop() === "txt") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="overflow-hidden rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                }}
                              >
                                <div className="container">
                                  <a
                                    target="_blank"
                                    href={`https://docs.google.com/gview?url=${val.file}`}
                                  >
                                    <div
                                      className="text-center"
                                      style={{
                                        background: "#F9F9F9",
                                        borderRadius: "5px",
                                        padding: "35px 0px",
                                      }}
                                    >
                                      {val.key.split(".").pop() === "pdf" ||
                                      val.key.split(".").pop() === "docs" ||
                                      val.key.split(".").pop() === "zip" ? (
                                        <Image
                                          src={Pdf}
                                          className={
                                            InstructorCss.documentCardImg
                                          }
                                          alt=""
                                        />
                                      ) : (
                                        <Image
                                          src={exel}
                                          className={
                                            InstructorCss.documentCardImg
                                          }
                                          alt=""
                                          height={155}
                                        />
                                      )}
                                    </div>
                                  </a>

                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                  >
                                    <div
                                      className="flex justify-between"
                                      style={{ margin: "10px 0px" }}
                                    >
                                      <span>
                                        Created on{" "}
                                        {moment(val.createdAt)
                                          .utc()
                                          .format("DD MMMM YYYY")}
                                      </span>
                                      <span className={InstructorCss.dff35mb}>
                                        5 mb
                                      </span>
                                    </div>
                                    <div
                                      className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                      style={{ gap: "9px" }}
                                    >
                                      <Image src={DocumentLogo} alt="" />
                                      <h3>{val.key}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>
                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Audio</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      hideOnClick: false,
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {instructorFileSuccess &&
                      instructorFileData.data.files.map(
                        (val: any) =>
                          (val?.key?.split(".").pop() === "mp3" ||
                            val?.key?.split(".").pop() === "wav") && (
                            <SwiperSlide>
                              <div
                                key={val?._id}
                                className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <div
                                    className={`text-center relative w-full flex items-center justify-center h-[218px] bg-no-repeat`}
                                    style={{
                                      background: "rgb(249, 249, 249)",
                                      borderRadius: "5px",
                                      padding: "35px 0px",
                                      backgroundSize: "100% 100%",
                                    }}
                                  >
                                    <div className="flex flex-col justify-center items-center text-center">
                                      <FcAudioFile
                                        className="text-center text-8xl mb-2 cursor-pointer"
                                        onClick={() => setopenAudio(!openAudio)}
                                      />
                                      {openAudio && (
                                        <audio src={val?.file} controls />
                                      )}
                                    </div>
                                    <div
                                      className={`absolute shadow-2xl top-3 bg-white right-2 rounded px-1 ${
                                        activeMenu === val._id
                                          ? "block"
                                          : "hidden"
                                      }`}
                                    >
                                      <button
                                        disabled={deleteFileLoading}
                                        onClick={() =>
                                          deleteFileHandle(val._id)
                                        }
                                        className="py-2 px-3 flex justify-center items-center gap-1"
                                      >
                                        <RiDeleteBin6Line className="bg-[#bb1c1c] text-white w-[25px] h-[25px] rounded-full p-1" />
                                        <span>
                                          {deleteFileLoading ? (
                                            <Spinner />
                                          ) : (
                                            "Delete"
                                          )}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                    onClick={() => setactiveMenu("")}
                                  >
                                    <a
                                      target="_blank"
                                      href={`https://docs.google.com/gview?url=${val.file}`}
                                    >
                                      <div
                                        className="flex justify-between"
                                        style={{ margin: "10px 0px" }}
                                      >
                                        <span>
                                          Created on{" "}
                                          {moment(val.createdAt)
                                            .utc()
                                            .format("DD MMMM YYYY")}
                                        </span>
                                        <span className={InstructorCss.dff35mb}>
                                          5 mb
                                        </span>
                                      </div>
                                      <div
                                        className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                        style={{ gap: "9px" }}
                                      >
                                        <FcAudioFile className="text-5xl" />
                                        <h3>Audio -{val.key}</h3>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>
                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Images</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {enrollSuccess &&
                      enrollData.data.enrollments?.map((val1: any) => {
                        return val1?.course?.modules?.map((val2: any) => {
                          return val2?.assignments?.map((val3: any) => {
                            return (
                              <>
                                {(val3.key.split(".").pop() === "jpg" ||
                                  val3.key.split(".").pop() === "png" ||
                                  val3.key.split(".").pop() === "jpeg") && (
                                  <SwiperSlide>
                                    <div
                                      key={val3._id}
                                      className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                      style={{
                                        background: "#FFFFFF",
                                        boxShadow:
                                          "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                      }}
                                    >
                                      <div className="container">
                                        <a target="_blank" href={val3.fileUrl}>
                                          <div
                                            className={
                                              InstructorCss.documentCardImgImg
                                            }
                                            style={{
                                              backgroundImage: `url(${val3.fileUrl})`,
                                            }}
                                          >
                                            {/*
                                                      <Image src={MoreIcon} alt=""/>
                                                   */}
                                          </div>
                                        </a>
                                        <div
                                          className={
                                            InstructorCss.documentCardFooterContent
                                          }
                                        >
                                          <div
                                            className="flex justify-between"
                                            style={{ margin: "10px 0px" }}
                                          >
                                            <span>
                                              Created on{" "}
                                              {moment(val3.createdAt)
                                                .utc()
                                                .format("DD MMMM YYYY")}
                                            </span>
                                          </div>
                                          <div
                                            className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                            style={{ gap: "9px" }}
                                          >
                                            <Image src={ImageIcon} alt="" />
                                            <h3>Doc -{val3.key}</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                )}
                              </>
                            );
                          });
                        });
                      })}
                    {allfileSuccess &&
                      allfileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "jpg" ||
                            val.key.split(".").pop() === "png" ||
                            val.key.split(".").pop() === "jpeg") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                }}
                              >
                                <div className="container">
                                  <a target="_blank" href={val.file}>
                                    <div
                                      className={
                                        InstructorCss.documentCardImgImg
                                      }
                                      style={{
                                        backgroundImage: `url(${val.file})`,
                                      }}
                                    >
                                      {/*
                                    <Image src={MoreIcon} alt=""/>
                                 */}
                                    </div>
                                  </a>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                  >
                                    <div
                                      className="flex justify-between"
                                      style={{ margin: "10px 0px" }}
                                    >
                                      <span>
                                        Created on{" "}
                                        {moment(val.createdAt)
                                          .utc()
                                          .format("DD MMMM YYYY")}
                                      </span>
                                    </div>
                                    <div
                                      className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                      style={{ gap: "9px" }}
                                    >
                                      <Image src={ImageIcon} alt="" />
                                      <h3>Doc -{val.key}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>

                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Videos</h2>
                  <ModalVideo
                    channel="custom"
                    isOpen={open}
                    url={playVideo}
                    onClose={() => setopen(false)}
                  />
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {enrollSuccess &&
                      enrollData?.data?.enrollments?.map((val1: any) => {
                        return val1?.course?.modules?.map((val2: any) => {
                          return val2?.videos?.map((val3: any) => {
                            return (
                              <>
                                {val3.youtubeVideo && (
                                  <SwiperSlide>
                                    <div
                                      key={val3._id}
                                      className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                      style={{
                                        background: "#FFFFFF",
                                        boxShadow:
                                          "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                      }}
                                    >
                                      <div className="container">
                                        <div
                                          className={
                                            InstructorCss.documentCardImgImgVideo
                                          }
                                          style={{
                                            backgroundImage: `url(${imgJPG.src})`,
                                          }}
                                        >
                                          <Image
                                            src={PlayIcon}
                                            alt=""
                                            className="cursor-pointer"
                                            onClick={() =>
                                              videoHandle(val3.youtubeVideo)
                                            }
                                          />
                                        </div>
                                        <div
                                          className={
                                            InstructorCss.documentCardFooterContent
                                          }
                                        >
                                          <div
                                            className="flex justify-between"
                                            style={{ margin: "10px 0px" }}
                                          >
                                            <span>
                                              Created on{" "}
                                              {moment(val3.createdAt)
                                                .utc()
                                                .format("DD MMMM YYYY")}
                                            </span>
                                          </div>
                                          <div
                                            className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}
                                          >
                                            <Image
                                              src={VideoIcon}
                                              style={{
                                                width: "27px",
                                                height: "22px",
                                              }}
                                              alt=""
                                            />
                                            <h3>Video -{val3?.topicName}</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                )}
                              </>
                            );
                          });
                        });
                      })}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                  {/*allfileSuccess &&
                      allfileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "mkv" ||
                            val.key.split(".").pop() === "mp4") && (
                            <div
                              key={val._id}
                              className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                              style={{
                                background: "#FFFFFF",
                                boxShadow: "0px 8px 32px rgba(0, 16, 41, 0.05)",
                              }}
                            >
                              <div className="container">
                                <div
                                  className={
                                    InstructorCss.documentCardImgImgVideo
                                  }
                                  style={{
                                    backgroundImage: `url(${imgJPG.src})`,
                                  }}
                                >
                                  <Image
                                    src={PlayIcon}
                                    alt=""
                                    className="cursor-pointer"
                                    onClick={() => videoHandle(val.file)}
                                  />
                                </div>
                                <div
                                  className={
                                    InstructorCss.documentCardFooterContent
                                  }
                                >
                                  <div
                                    className="flex justify-between"
                                    style={{ margin: "10px 0px" }}
                                  >
                                    <span>
                                      Created on{" "}
                                      {moment(val.createdAt)
                                        .utc()
                                        .format("DD MMMM YYYY")}
                                    </span>
                                  </div>
                                  <div
                                    className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}
                                  >
                                    <Image
                                      src={VideoIcon}
                                      style={{ width: "27px", height: "22px" }}
                                      alt=""
                                    />
                                    <h3>Video -{val?.key}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                                      )*/}
                </div>
              </div>
            )
          ))}
        {roles.includes("instructor") &&
          (assignmentLoading && courseLoading && instructorFileLoading ? (
            <div className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            assignmentSuccess &&
            instructorFileSuccess &&
            courseSuccess && (
              <>
                <div className={`${InstructorCss.FileDocuments} mt-5`}>
                  <h2>Documents</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {assignmentSuccess &&
                      assignmentData.data.assignments.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "pdf" ||
                            val.key.split(".").pop() === "docs" ||
                            val.key.split(".").pop() === "zip" ||
                            val.key.split(".").pop() === "xlsx" ||
                            val.key.split(".").pop() === "xls" ||
                            val.key.split(".").pop() === "xlsm" ||
                            val.key.split(".").pop() === "xlsb" ||
                            val.key.split(".").pop() === "csv" ||
                            val.key.split(".").pop() === "xltx" ||
                            val.key.split(".").pop() === "xltm" ||
                            val.key.split(".").pop() === "ods" ||
                            val.key.split(".").pop() === "xml" ||
                            val.key.split(".").pop() === "rar") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <a
                                    target="_blank"
                                    href={`https://docs.google.com/gview?url=${val.fileUrl}`}
                                  >
                                    <div
                                      className="text-center"
                                      style={{
                                        background: "#F9F9F9",
                                        borderRadius: "5px",
                                        padding: "35px 0px",
                                      }}
                                    >
                                      {val.key.split(".").pop() === "pdf" ||
                                      val.key.split(".").pop() === "docs" ||
                                      val.key.split(".").pop() === "zip" ? (
                                        <Image
                                          src={Pdf}
                                          className={
                                            InstructorCss.documentCardImg
                                          }
                                          alt=""
                                        />
                                      ) : (
                                        <Image
                                          src={exel}
                                          className={
                                            InstructorCss.documentCardImg
                                          }
                                          alt=""
                                          height={155}
                                        />
                                      )}
                                    </div>
                                    <div
                                      className={
                                        InstructorCss.documentCardFooterContent
                                      }
                                    >
                                      <div
                                        className="flex justify-between"
                                        style={{ margin: "10px 0px" }}
                                      >
                                        <span>
                                          Created on{" "}
                                          {moment(val.createdAt)
                                            .utc()
                                            .format("DD MMMM YYYY")}
                                        </span>
                                        <span className={InstructorCss.dff35mb}>
                                          5 mb
                                        </span>
                                      </div>
                                      <div
                                        className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                        style={{ gap: "9px" }}
                                      >
                                        <Image src={DocumentLogo} alt="" />
                                        <h3>Doc -{val.key}</h3>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    {instructorFileSuccess &&
                      instructorFileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "pdf" ||
                            val.key.split(".").pop() === "docs" ||
                            val.key.split(".").pop() === "zip" ||
                            val.key.split(".").pop() === "xlsx" ||
                            val.key.split(".").pop() === "xls" ||
                            val.key.split(".").pop() === "xlsm" ||
                            val.key.split(".").pop() === "xlsb" ||
                            val.key.split(".").pop() === "csv" ||
                            val.key.split(".").pop() === "xltx" ||
                            val.key.split(".").pop() === "xltm" ||
                            val.key.split(".").pop() === "ods" ||
                            val.key.split(".").pop() === "xml" ||
                            val.key.split(".").pop() === "rar") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <div
                                    className={`text-center relative w-full h-[218px] bg-no-repeat`}
                                    style={{
                                      background: "rgb(249, 249, 249)",
                                      borderRadius: "5px",
                                      padding: "35px 0px",
                                      backgroundSize: "100% 100%",
                                    }}
                                  >
                                    {val.key.split(".").pop() === "pdf" ||
                                    val.key.split(".").pop() === "docs" ||
                                    val.key.split(".").pop() === "zip" ? (
                                      <Image
                                        src={Pdf}
                                        className={
                                          InstructorCss.documentCardImg
                                        }
                                        alt=""
                                      />
                                    ) : (
                                      <Image
                                        src={exel}
                                        className={
                                          InstructorCss.documentCardImg
                                        }
                                        alt=""
                                        height={155}
                                      />
                                    )}
                                    <div className="test absolute right-0 top-0 block">
                                      <Image
                                        src={MoreIcon}
                                        alt=""
                                        className="cursor-pointer"
                                        onClick={() =>
                                          activemenuHandle(val._id)
                                        }
                                      />
                                    </div>
                                    <div
                                      className={`absolute shadow-2xl top-3 bg-white right-2 rounded px-1 ${
                                        activeMenu === val._id
                                          ? "block"
                                          : "hidden"
                                      }`}
                                    >
                                      <button
                                        disabled={deleteFileLoading}
                                        onClick={() =>
                                          deleteFileHandle(val._id)
                                        }
                                        className="py-2 px-3 flex justify-center items-center gap-1"
                                      >
                                        <RiDeleteBin6Line className="bg-[#bb1c1c] text-white w-[25px] h-[25px] rounded-full p-1" />
                                        <span>
                                          {deleteFileLoading ? (
                                            <Spinner />
                                          ) : (
                                            "Delete"
                                          )}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                    onClick={() => setactiveMenu("")}
                                  >
                                    <a
                                      target="_blank"
                                      href={`https://docs.google.com/gview?url=${val.file}`}
                                    >
                                      <div
                                        className="flex justify-between"
                                        style={{ margin: "10px 0px" }}
                                      >
                                        <span>
                                          Created on{" "}
                                          {moment(val.createdAt)
                                            .utc()
                                            .format("DD MMMM YYYY")}
                                        </span>
                                        <span className={InstructorCss.dff35mb}>
                                          5 mb
                                        </span>
                                      </div>
                                      <div
                                        className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                        style={{ gap: "9px" }}
                                      >
                                        <Image src={DocumentLogo} alt="" />
                                        <h3>Doc -{val.key}</h3>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>

                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Images</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {assignmentSuccess &&
                      assignmentData.data.assignments.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "jpg" ||
                            val.key.split(".").pop() === "png" ||
                            val.key.split(".").pop() === "jpeg") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <a target="_blank" href={val.fileUrl}>
                                    <div
                                      className={
                                        InstructorCss.documentCardImgImg
                                      }
                                      style={{
                                        backgroundImage: `url(${val?.fileUrl})`,
                                      }}
                                    >
                                      <Image src={MoreIcon} alt="" />
                                    </div>
                                  </a>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                  >
                                    <div
                                      className="flex justify-between"
                                      style={{ margin: "10px 0px" }}
                                    >
                                      <span>
                                        Created on{" "}
                                        {moment(val.createdAt)
                                          .utc()
                                          .format("DD MMMM YYYY")}
                                      </span>
                                    </div>
                                    <div
                                      className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                      style={{ gap: "9px" }}
                                    >
                                      <Image src={ImageIcon} alt="" />
                                      <h3>Doc -{val.key}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    {instructorFileSuccess &&
                      instructorFileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "jpg" ||
                            val.key.split(".").pop() === "png" ||
                            val.key.split(".").pop() === "jpeg") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <div
                                    className={`${InstructorCss.documentCardImgImg} relative`}
                                    style={{
                                      backgroundImage: `url(${val?.file})`,
                                    }}
                                  >
                                    <Image
                                      src={MoreIcon}
                                      alt=""
                                      className="cursor-pointer"
                                      onClick={() => activemenuHandle(val._id)}
                                    />
                                    <div
                                      className={`absolute shadow-2xl top-3 bg-white right-2 rounded px-1 ${
                                        activeMenu === val._id
                                          ? "block"
                                          : "hidden"
                                      }`}
                                    >
                                      <button
                                        disabled={deleteFileLoading}
                                        onClick={() =>
                                          deleteFileHandle(val._id)
                                        }
                                        className="py-2 px-3 flex justify-center items-center gap-1"
                                      >
                                        <RiDeleteBin6Line className="bg-[#bb1c1c] text-white w-[25px] h-[25px] rounded-full p-1" />
                                        <span>
                                          {deleteFileLoading ? (
                                            <Spinner />
                                          ) : (
                                            "Delete"
                                          )}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                    onClick={() => setactiveMenu("")}
                                  >
                                    <div
                                      className="flex justify-between"
                                      style={{ margin: "10px 0px" }}
                                    >
                                      <span>
                                        Created on{" "}
                                        {moment(val.createdAt)
                                          .utc()
                                          .format("DD MMMM YYYY")}
                                      </span>
                                    </div>
                                    <a target="_blank" href={val.file}>
                                      <div
                                        className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                        style={{ gap: "9px" }}
                                      >
                                        <Image src={ImageIcon} alt="" />
                                        <h3>Doc -{val.key}</h3>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>

                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Audio</h2>
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {instructorFileSuccess &&
                      instructorFileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "mp3" ||
                            val.key.split(".").pop() === "wav") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card  xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <div
                                    className={`text-center relative w-full flex items-center justify-center h-[218px] bg-no-repeat`}
                                    style={{
                                      background: "rgb(249, 249, 249)",
                                      borderRadius: "5px",
                                      padding: "35px 0px",
                                      backgroundSize: "100% 100%",
                                    }}
                                  >
                                    <div className="flex flex-col justify-center items-center text-center">
                                      <FcAudioFile
                                        className="text-center text-8xl mb-2 cursor-pointer"
                                        onClick={() => setopenAudio(!openAudio)}
                                      />
                                      {openAudio && (
                                        <audio src={val?.file} controls />
                                      )}
                                    </div>
                                    <div className="test absolute right-0 top-0 block">
                                      <Image
                                        src={MoreIcon}
                                        alt=""
                                        className="cursor-pointer"
                                        onClick={() =>
                                          activemenuHandle(val._id)
                                        }
                                      />
                                    </div>
                                    <div
                                      className={`absolute shadow-2xl top-3 bg-white right-2 rounded px-1 ${
                                        activeMenu === val._id
                                          ? "block"
                                          : "hidden"
                                      }`}
                                    >
                                      <button
                                        disabled={deleteFileLoading}
                                        onClick={() =>
                                          deleteFileHandle(val._id)
                                        }
                                        className="py-2 px-3 flex justify-center items-center gap-1"
                                      >
                                        <RiDeleteBin6Line className="bg-[#bb1c1c] text-white w-[25px] h-[25px] rounded-full p-1" />
                                        <span>
                                          {deleteFileLoading ? (
                                            <Spinner />
                                          ) : (
                                            "Delete"
                                          )}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                    onClick={() => setactiveMenu("")}
                                  >
                                    <a
                                      target="_blank"
                                      href={`https://docs.google.com/gview?url=${val.file}`}
                                    >
                                      <div
                                        className="flex justify-between"
                                        style={{ margin: "10px 0px" }}
                                      >
                                        <span>
                                          Created on{" "}
                                          {moment(val.createdAt)
                                            .utc()
                                            .format("DD MMMM YYYY")}
                                        </span>
                                        <span className={InstructorCss.dff35mb}>
                                          5 mb
                                        </span>
                                      </div>
                                      <div
                                        className={`flex items-center ${InstructorCss.documentCardFooterContentMiddle}`}
                                        style={{ gap: "9px" }}
                                      >
                                        <FcAudioFile className="text-5xl" />
                                        <h3>Audio -{val.key}</h3>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>

                <div className={`${InstructorCss.FileDocuments} mt-8`}>
                  <h2>Videos</h2>
                  <ModalVideo
                    channel="custom"
                    isOpen={open}
                    url={playVideo}
                    allowFullScreen
                    onClose={() => setopen(false)}
                  />
                  <Swiper
                    grid={{
                      rows: 1,
                    }}
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      // 851: {
                      //   slidesPerView: 3,
                      //   spaceBetween: 20,
                      // },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".button-next-slide",
                      prevEl: ".button-prev-slide",
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper !pb-11"
                  >
                    {courseSuccess &&
                      courseData.data.courses.map((val: any) =>
                        val.modules.map((val2: any) =>
                          val2.videos.map((val3: any) => (
                            <SwiperSlide>
                              <>
                                {val3.youtubeVideo && (
                                  <div
                                    key={val3._id}
                                    className="rounded-lg p-4 document_card xsm:!w-full md:!w-full"
                                    style={{
                                      background: "#FFFFFF",
                                      boxShadow:
                                        "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                      height: "385px",
                                    }}
                                  >
                                    <div className="container">
                                      <div
                                        className={`${InstructorCss.documentCardImgImgVideo}`}
                                        style={{
                                          backgroundImage: `url(${imgJPG.src})`,
                                        }}
                                      >
                                        <Image
                                          src={PlayIcon}
                                          alt=""
                                          className="cursor-pointer"
                                          onClick={() =>
                                            videoHandle(val3.youtubeVideo)
                                          }
                                        />
                                      </div>
                                      <div
                                        className={
                                          InstructorCss.documentCardFooterContent
                                        }
                                      >
                                        <div
                                          className="flex justify-between"
                                          style={{ margin: "10px 0px" }}
                                        >
                                          <span>
                                            Created on{" "}
                                            {moment(val3.createdAt)
                                              .utc()
                                              .format("DD MMMM YYYY")}
                                          </span>
                                        </div>
                                        <div
                                          className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}
                                        >
                                          <Image
                                            src={VideoIcon}
                                            style={{
                                              width: "27px",
                                              height: "22px",
                                            }}
                                            alt=""
                                          />
                                          <h3>Video -{val3.topicName}</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            </SwiperSlide>
                          ))
                        )
                      )}
                    {instructorFileSuccess &&
                      instructorFileData.data.files.map(
                        (val: any) =>
                          (val.key.split(".").pop() === "mp4" ||
                            val.key.split(".").pop() === "mkv") && (
                            <SwiperSlide>
                              <div
                                key={val._id}
                                className="rounded-lg p-4 document_card xsm:!w-full md:!w-full"
                                style={{
                                  background: "#FFFFFF",
                                  boxShadow:
                                    "0px 8px 32px rgba(0, 16, 41, 0.05)",
                                  height: "385px",
                                }}
                              >
                                <div className="container">
                                  <div
                                    className={`${InstructorCss.documentCardImgImgVideo}`}
                                    style={{
                                      backgroundImage: `url(${imgJPG.src})`,
                                    }}
                                  >
                                    <Image
                                      src={PlayIcon}
                                      alt=""
                                      className="cursor-pointer"
                                      onClick={() => videoHandle(val.file)}
                                    />
                                  </div>
                                  <div
                                    className={
                                      InstructorCss.documentCardFooterContent
                                    }
                                  >
                                    <div
                                      className="flex justify-between"
                                      style={{ margin: "10px 0px" }}
                                    >
                                      <span>
                                        Created on{" "}
                                        {moment(val.createdAt)
                                          .utc()
                                          .format("DD MMMM YYYY")}
                                      </span>
                                    </div>
                                    <div
                                      className={`${InstructorCss.documentCardFooterContentMiddleVideo} d-flex`}
                                    >
                                      <Image
                                        src={VideoIcon}
                                        style={{
                                          width: "27px",
                                          height: "22px",
                                        }}
                                        alt=""
                                      />
                                      <h3>Video -{val.key}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                      )}
                    <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowBack className="text-[20px]" />
                    </div>
                    <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-white shadow-md p-3 text-[#3D3BB7]">
                      <IoIosArrowForward className="text-[20px]" />
                    </div>
                  </Swiper>
                </div>
              </>
            )
          ))}
      </div>
    </>
  );
};

export default File;
