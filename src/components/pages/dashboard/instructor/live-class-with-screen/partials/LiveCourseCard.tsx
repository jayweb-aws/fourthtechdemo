import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import instructorImg from "../../../../../../assets/dashboard/instructor.png";
import { useDeleteMeetMutation } from "../../../../../../feature/api/dashboardApi";
import DeleteModal from "../../../../../common/deleteModal/DeleteModalById";
import ModalDialog from "../../../../../layouts/ModalDialog";
import ExpendText from '../../../../../common/ExpandText/ExpandText';

const LiveCourseCard = ({ role, item, roles = "" }: any) => {
  let [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [id, setid] = useState("");

  function closeModal() {
    setIsOpen(false);
  }
  const handleModal = (id: any, value: any) => {
    setIsOpen(true);
    setModal(value);
    setid(id);
  };
  return (
    <>
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
            rtkMutation={useDeleteMeetMutation}
            title={"Do you want delete this live class !"}
            id={id}
            successMsg="Live class delete success"
          />
        </ModalDialog>
      )}

      <div className="shadow-[0px_1px_24px_0px_#0000001A] relative rounded-[10px] mb-[30px]">
        {roles?.includes("instructor") && (
          <div className="absolute top-[7px] cursor-pointer bg-red-500 right-[10px] p-1.5 rounded-full z-40">
            <AiOutlineDelete
              onClick={() => handleModal(item?._id, "delete")}
              className="text-[22px] text-white"
            />
          </div>
        )}
        <Image
          src={item?.courseImg}
          className="rounded-[10px]"
          alt="course card"
          width={475}
          height={275}
          layout="responsive"
        />

        <div className="px-[20px] pb-[23px]">
          <h4 className="text-[20px] lg:text-[24px] font-semibold text-dark mt-[10px]">
            {item?.courseName}
          </h4>
          <div>
            <ExpendText color="#5BB1F2" maxChars={60}>
              {item?.description}
            </ExpendText>
          </div>

          {role && (
            <div>
              <div className="flex items-center gap-x-[10px] mt-[10px] lg:mt-[15px] mb-[30px]">
                <Image
                  src={instructorImg}
                  alt="instructor"
                  width={25}
                  height={25}
                />
                <h4 className="text-[20px] lg:text-[24px] text-darkgrey">
                  {item?.createdBy?.firstName} {item?.createdBy?.lastName}
                </h4>
              </div>

              <div className="text-right">
                <button className="bg-primary text-[16px] rounded-[5px] text-white font-medium p-[10px_15px] border-2 border-transparent hover:bg-white hover:text-primary duration-300 hover:border-primary">
                  <Link href={item?.link}>Join Zoom Meeting</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LiveCourseCard;
