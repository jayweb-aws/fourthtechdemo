import { Disclosure } from "@headlessui/react";
import { Button, Spinner } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useAllQuizInstructorQuery,
  useDeleteQuestionMutation,
} from "../../../../../feature/api/dashboardApi";
import DeleteModal from "../../../../common/deleteModal/DeleteModalById";
import ModalDialog from "../../../../layouts/ModalDialog";
import DeleteQuiz from "./DeleteQuiz";
import EditModal from "./EditModal";

export default function AllQuiz() {
  const { data, isSuccess, isError, isLoading } = useAllQuizInstructorQuery({});
  const [modalAssignment, setmodalAssignment] = useState(false);
  const [title, settitle] = useState("");
  const [deleteId, setdeleteId] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const [userId, setuserId] = useState("");
  const [modal, setModal] = useState("");
  // console.log(data)
  const handleCloseRejectAssignmentModal = () => {
    setmodalAssignment(false);
  };
  const handleEditClick = (id: any) => {
    setmodalAssignment(true);
    setdeleteId(id);
  };
  const handleModal = (value: any, id: any, title: any) => {
    setIsOpen(true);
    setModal(value);
    setuserId(id);
    settitle(title);
    // console.log(title);
  };
  function closeModal() {
    setIsOpen(false);
  }

  const handleModalDelete = (id: any, value: any) => {
    setIsOpen(true);
    setModal(value);
    setuserId(id);
  };
  return (
    <div>
      {isOpen && modal === "editModal" && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title=""
          width="600"
        >
          <EditModal
            show={true}
            id={userId}
            handleClose={closeModal}
            user={{
              title: title,
            }}
          />
        </ModalDialog>
      )}
      {isOpen && modal === "delete" && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title=""
          width="400"
        >
          <DeleteModal
            variant="Category"
            closeModal={closeModal}
            rtkMutation={useDeleteQuestionMutation}
            title={"Do you want delete this Question !"}
            id={userId}
            successMsg="Question delete success"
          />
        </ModalDialog>
      )}
      <DeleteQuiz
        id={deleteId}
        show={modalAssignment}
        handleClose={handleCloseRejectAssignmentModal}
        title="Are you sure you want to Delete this quiz?"
        successMessage="Delete quiz Successfully!"
      />
      <h1 className="font-bold text-xl">Information</h1>
      <div className="flex justify-between xl:flex-row lg:flex-row  md:flex-row sm:flex-row xsm:flex-col items-center">
        <div className="mr-[10px] xl:w-[65%] lg:w-[55%] flex items-center md:w-[60%] sm:w-[50%] ">
          {/* <h1 className="font-bold text-xs w-[82px]">Test Name:</h1>

          <input
            type="text"
            className=""
            placeholder="Title"
            //   {...register("title", { required: true })}
            style={{
              background: " #FFFFFF",
              boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
              borderRadius: "8px",
              width: "100%",
              border: "none",
              padding: " 11px 17px",
            }}
          /> */}
          {/* {errors.title && (
              <div className="text-xs text-red-600 font-nunito">
                Enter Quiz title
              </div>
            )} */}
        </div>
        <div className="flex ">
          <div className="mr-[10px]">
            <Button>
              <Link href={`/dashboard/quiz/quiz-result`}>Quiz Result</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link href={`/dashboard/quiz/quiz-creation`}>Add Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
      <h1 className="font-bold my-[20px] text-xl">Quiz</h1>
      <div className="max-h-[100vh] overflow-y-auto flex flex-col">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : isSuccess && data.data.quazes.length > 0 ? (
          data.data.quazes.map((item: any, id: any) => (
            <Disclosure
              as="div"
              className="border-b-2   border-gray-300 "
              key={item._id}
            >
              {({ open }) => (
                <>
                  <div
                    className={`flex relative w-full px-6 py-4 justify-between items-center ${
                      !open ? "bg-transparent" : "bg-white"
                    }  text-left font-bold text-lg  hover:bg-slate-50  focus:outline-none focus:bg-white`}
                  >
                    <Disclosure.Button
                      className={"flex justify-between items-center"}
                    >
                      <span className="font-normal">{item.title}</span>
                    </Disclosure.Button>
                    <div className="flex items-center gap-3">
                      <div>
                        <BiEdit
                          onClick={() =>
                            handleModal("editModal", item?._id, item?.title)
                          }
                          className="text-[25px] cursor-pointer text-blue-500"
                        />
                      </div>
                      <div>
                        <Disclosure.Button>
                          <AiFillEye className="text-[25px] cursor-pointer text-blue-500" />
                        </Disclosure.Button>
                      </div>
                      <div>
                        <button onClick={() => handleEditClick(item._id)}>
                          <RiDeleteBin6Line className="text-[25px] cursor-pointer text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {item.questions.length > 0 ? (
                    item.questions.map((item: any) => (
                      <Disclosure.Panel
                        key={item._id}
                        className="px-5 py-5 bg-white  "
                      >
                        <div className="flex justify-between items-center">
                          <div
                            className="font-bold my-4"
                            dangerouslySetInnerHTML={{
                              __html: item?.question,
                            }}
                          ></div>
                          <div
                            onClick={() =>
                              handleModalDelete(item?._id, "delete")
                            }
                            className=" cursor-pointer bg-red-500 h-7 p-1 flex items-center justify-center  rounded-full z-40"
                          >
                            <AiOutlineDelete className="text-[22px] text-white" />
                          </div>
                        </div>
                        <div
                          className="flex flex-row justify-between items-start xsm:flex-col sm:flex-row lg:flex-row md:flex-row xl:flex-row
                  
                  "
                        >
                          <div className="xsm:w-[100%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%]">
                            <h1 className="text-[#8A92A6] font-bold">
                              Options
                            </h1>
                            <div className="grid grid-cols-2">
                              {item.answers.map((item: any) => (
                                <div key={item._id}>
                                  <div className="flex ">
                                    <p className="text-blue-600 font-bold text-3xl">
                                      &#x2022;
                                    </p>
                                    <p className="pt-2"> {item.value}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className=" m-l-[20px]">
                            <h1 className="text-[#8A92A6] font-bold">
                              Correct answers
                            </h1>
                            <div className="flex ">
                              <p className="text-blue-600 font-bold text-3xl">
                                &#x2022;
                              </p>
                              <div className="pt-2 text-[#1AA053]">
                                {" "}
                                {item.answers
                                  .filter((val: any) => val.checked === true)
                                  .map((val: any) => (
                                    <p key={val._id}>{val.value}</p>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    ))
                  ) : (
                    <Disclosure.Panel className="px-5 pb-1 bg-white font-bold ">
                      No question found
                    </Disclosure.Panel>
                  )}
                </>
              )}
            </Disclosure>
          ))
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <p>No data available!</p>
          </div>
        )}
      </div>
    </div>
  );
}
