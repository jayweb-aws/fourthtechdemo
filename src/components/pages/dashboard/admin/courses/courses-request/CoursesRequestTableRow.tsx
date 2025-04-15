import { StaticImageData } from "next/image";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {
  useAcceptCourseMutation,
  useDeleteCourseMutation,
} from "../../../../../../feature/api/dashboardApi";
import ActionConfirmModal from "../../../../../utils/modals/ActionConfirmModal";

type Props = {
  id: string;
  instructors: {
    firstName: string;
    lastName: string;
    avatar?: string | StaticImageData;
  }[];
  courseTitle: string;
  date: Date;
  isActive: boolean;
  isPending: boolean;
  status: string;
};

const CoursesRequestTableRow = (props: Props) => {
  const { id, instructors, courseTitle, date, isPending, isActive, status } =
    props;
  // const status = isPending ? "pending" : isActive && "active"

  const [showAcceptCourseModal, setShowAcceptCourseModal] = useState(false);
  const [showRejectCourseModal, setShowRejectCourseModal] = useState(false);
  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);

  const handleCloseAcceptCourseModal = () => setShowAcceptCourseModal(false);
  const handleCloseRejectCourseModal = () => setShowRejectCourseModal(false);
  const handleCloseDeleteCourseModal = () => setShowDeleteCourseModal(false);

  return (
    <tr className="border-b">
      {showAcceptCourseModal && (
        <ActionConfirmModal
          id={id}
          show={showAcceptCourseModal}
          handleClose={handleCloseAcceptCourseModal}
          title="Are you sure you want to accept this course?"
          successMessage="Course accepted Successfully!"
          mutationHook={useAcceptCourseMutation}
          sureButtonColor="success"
          cancelButtonColor="failure"
        />
      )}
      {showRejectCourseModal && (
        <ActionConfirmModal
          id={id}
          show={showRejectCourseModal}
          handleClose={handleCloseRejectCourseModal}
          title="Are you sure you want to reject this course?"
          successMessage="Course rejected Successfully!"
          mutationHook={useDeleteCourseMutation}
        />
      )}
      {showDeleteCourseModal && (
        <ActionConfirmModal
          id={id}
          show={showDeleteCourseModal}
          handleClose={handleCloseDeleteCourseModal}
          title="Are you sure you want to delete this course?"
          successMessage="Course deleted Successfully!"
          mutationHook={useDeleteCourseMutation}
        />
      )}
      <td scope="row" className="py-4 px-6">
        <div className="flex items-center">
          {/* <Image
                        src={instructors[0]}
                        alt="avatar"
                        width={30}
                        height={30}
                        objectFit="cover"
                        className="rounded-full"
                    /> */}
          <span>{instructors[0].firstName}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-center">{courseTitle}</td>
      <td className="py-4 px-6 text-center">
        {new Date(date).toLocaleDateString()}
      </td>
      <td className="py-4 px-6">
        <button
          className={`rounded-xl px-2 py-1 text-[12px]
           ${
             (status === "active" && "text-[#3A57E8]") ||
             (status === "pending" && "text-[#F16A1B]")
           } 
           ${
             (status === "active" && "bg-[#EBEEFD]") ||
             (status === "pending" && "bg-[#FCE1D1]")
           } 
           `}
        >
          {status}
        </button>
      </td>
      <td className="py-4 px-6">
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={() => setShowAcceptCourseModal(true)}
            className="bg-[#3A57E8] rounded text-white px-3 lg:px-5 py-1 lg:py-2 "
          >
            Accept
          </button>
          <button
            onClick={() => setShowRejectCourseModal(true)}
            className="bg-[#C03221] rounded text-white px-3 lg:px-5 py-1 lg:py-2 "
          >
            Reject
          </button>
          <button
            onClick={() => setShowDeleteCourseModal(true)}
            className="items-center text-[#C03221] text-2xl"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CoursesRequestTableRow;
