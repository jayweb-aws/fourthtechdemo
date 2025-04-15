import { Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import Delete from "../../../Icon/Delete";
import { useAppSelector } from "../../../app/hooks";
import {
  useDeleteOneAnnouncementMutation,
  useGetAllAnnouncementQuery,
} from "../../../feature/api/dashboardApi";
import ActionConfirmModal from "../../utils/modals/ActionConfirmModal";
import ExpendText from "../ExpandText/ExpandText";

interface IModalProps {
  show: boolean;
  handleClose: () => void;
}

const AnnouncementModal = ({ show, handleClose }: IModalProps) => {
  const { data, isSuccess, isError, isLoading } = useGetAllAnnouncementQuery(
    {}
  );

  const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
  const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);
  const {
    user: { roles },
  } = useAppSelector((state) => state.auth);
  return (
    <>
      <div className="font-nunito z-[9999]">
        <Modal
          show={show}
          popup={true}
          onClose={handleClose}
          size="4xl"
          className="overflow-auto "
        >
          <Modal.Header />
          <Modal.Body>
            <div className="max-h-[500px] md:max-h-[400px] md:max-w-[900px] max-w-[800px] overflow-auto custom_scroll p-2">
              <div className="flex flex-col md:flex-row justify-around mb-10 md:items-center">
                <div className="relative mb-[10px] md:mb-0">
                  <input
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
                    type="text"
                    placeholder="Search"
                    className="py-2 outline-none rounded border-none px-4 w-full  custom_focus_input"
                  />
                  <BsSearch className="absolute text-small-text-color right-2 top-3 font-bold text-lg" />
                </div>
                {roles.includes("admin" || "instructor") && (
                  <Link href="/dashboard/announcement/create-announcement">
                    <button className="px-5 py-2.5 justify-center rounded-lg flex gap-x-1 items-center text-white bg-blue-700 ">
                      <AiOutlinePlus className="text-white text-[20px]" />
                      <span>Announcements</span>
                    </button>
                  </Link>
                )}
              </div>
              <div className="flex flex-col border-gray-300  border-t-[1px]">
                <div className="">
                  {isLoading ? (
                    <div className="flex justify-center items-center py-5">
                      {" "}
                      <ClipLoader color="#3A57E8" />
                    </div>
                  ) : isError ? (
                    <div className="flex justify-center items-center py-5">
                      Error....
                    </div>
                  ) : isSuccess &&
                    data?.data?.announcements &&
                    data?.data?.announcements?.length > 0 ? (
                    data?.data?.announcements.map(
                      ({
                        title,
                        description,
                        id,
                        createdBy,
                        createdAt,
                      }: {
                        title: string;
                        description: string;
                        id: string;
                        createdBy: any;
                        createdAt: any;
                      }) => (
                        <div
                          key={id}
                          className="flex py-7 md:items-center flex-col md:flex-row justify-between  my-[10px]  border-gray-300 border-b-[1px]"
                        >
                          <div className="flex flex-shrink gap-x-[10px] md:gap-x-0 items-start flex-row">
                            <Image
                              src={createdBy?.avatar}
                              alt=""
                              width={"40px"}
                              height={"40px"}
                            />

                            <div className="md:mx-[10px] max-w-full md:max-w-[400px]  overflow-auto">
                              <h1 className="font-bold font-nunito ">
                                {title}
                              </h1>

                              <ExpendText color={"#1c64f2"}>
                                {description}
                              </ExpendText>
                            </div>
                          </div>
                          <div className="font-nunito">
                            <h1 className="font-bold ">Posted on</h1>
                            <p className="text-small-text-color">
                              {new Date(createdAt).toLocaleDateString()}
                              <span className="mx-[5px]">at</span>
                              {new Date(createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                          {roles.includes("admin" || "instructor") && (
                            <div>
                              <ActionConfirmModal
                                show={showEnrollConfirmModal}
                                handleClose={handleCloseEnrollConfirmModal}
                                title="Are you sure you want to delete this announcement?"
                                id={id}
                                mutationHook={useDeleteOneAnnouncementMutation}
                                successMessage="Successfully deleted!"
                                sureButtonColor="success"
                              />
                              <button
                                onClick={() => setShowEnrollConfirmModal(true)}
                              >
                                <Delete />
                              </button>
                            </div>
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <div className="flex justify-center items-center py-5">
                      No announcement Found
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AnnouncementModal;
