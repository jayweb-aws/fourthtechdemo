/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import {
  useDeleteAssignmentMutation,
  useDeleteVideoMutation,
  useDeleteQuizMutation,
  useDeleteSlideMutation,
} from "../../../../../../../feature/api/dashboardApi";
import { useEffect } from "react";
import { ItemType } from "./module/Module";
import toast from 'react-hot-toast';

type DeleteItemConfirmModalProps = {
  show: boolean;
  handleClose: () => void;
  type?: ItemType;
  id: string;
};

const DeleteItemConfirmModal = (props: DeleteItemConfirmModalProps) => {
  const { show, handleClose, type, id } = props;

  const [
    deleteAssignment,
    {
      isLoading: isLoadingDeleteAssignment,
      error: errorDeleteAssignment,
      data: dataDeleteAssignment,
      isSuccess: isSuccessDeleteAssignment,
      isError: isErrorDeleteAssignment,
    },
  ] = useDeleteAssignmentMutation();
  const [
    deleteVideo,
    {
      isLoading: isLoadingDeleteVideo,
      error: errorDeleteVideo,
      data: dataDeleteVideo,
      isSuccess: isSuccessDeleteVideo,
      isError: isErrorDeleteVideo,
    },
  ] = useDeleteVideoMutation();

  const [
    deleteQuiz,
    {
      isLoading: isLoadingDeleteQuiz,
      error: errorDeleteQuiz,
      data: dataDeleteQuiz,
      isSuccess: isSuccessDeleteQuiz,
      isError: isErrorDeleteQuiz,
    },
  ] = useDeleteQuizMutation();

  const [
    deleteSlide,
    {
      isLoading: isLoadingDeleteSlide,
      error: errorDeleteSlide,
      data: dataDeleteSlide,
      isSuccess: isSuccessDeleteSlide,
      isError: isErrorDeleteSlide,
    },
  ] = useDeleteSlideMutation();

  const handleDeleteItem = () => {
    if (type === ItemType.ASSIGNMENT) {
      deleteAssignment({ id });
      return;
    }

    if (type === ItemType.VIDEO) {
      deleteVideo(id);
      return;
    }

    if (type === ItemType.QUIZ) {
      deleteQuiz(id);
      return;
    }

    if (type === ItemType.SLIDE) {
      deleteSlide(id);
      return;
    }
  };

  useEffect(() => {
    if (isErrorDeleteAssignment) {
      toast.error((errorDeleteAssignment as any).data.message);
      return;
    }

    if (isSuccessDeleteAssignment) {
      toast.success("Assignment has deleted successfully!");
      handleClose();
      return;
    }

    if (isErrorDeleteVideo) {
      toast.error((errorDeleteVideo as any).data.message);
      return;
    }
    if (isSuccessDeleteVideo) {
      toast.success("Video has deleted successfully!");
      handleClose();
      return;
    }

    if (isErrorDeleteQuiz) {
      toast.error((errorDeleteQuiz as any).data.message);
      return;
    }
    if (isSuccessDeleteQuiz) {
      toast.success("Quiz has deleted successfully!");
      handleClose();
      return;
    }

    if (isErrorDeleteSlide) {
      toast.error((errorDeleteSlide as any).data.message);
      return;
    }
    if (isSuccessDeleteSlide) {
      toast.success("Slide has deleted successfully!");
      handleClose();
      return;
    }
  }, [
    isErrorDeleteAssignment,
    isErrorDeleteQuiz,
    isErrorDeleteSlide,
    isErrorDeleteVideo,
    isSuccessDeleteAssignment,
    isSuccessDeleteQuiz,
    isSuccessDeleteSlide,
    isSuccessDeleteVideo,
  ]);

  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this item?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDeleteItem}>
              {isLoadingDeleteAssignment ||
              isLoadingDeleteQuiz ||
              isLoadingDeleteSlide ||
              isLoadingDeleteVideo ? (
                <ButtonLoader />
              ) : (
                "Yes, I'm sure"
              )}
            </Button>
            <Button color="gray" onClick={handleClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteItemConfirmModal;
