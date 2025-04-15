/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal } from "flowbite-react";
import { useEffect } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from 'react-hot-toast';
import { useDeleteCourseCategoriesMutation } from "../../../../../../feature/api/dashboardApi";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";

type DeleteUserConfirmModalProps = {
  show: boolean;
  handleClose: () => void;
  userId: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteCourseCategoriesModal = (props: DeleteUserConfirmModalProps) => {
  const { show, handleClose, userId, setActiveMenu } = props;

  const [deleteCategories, { isError, error, isLoading, isSuccess }] =
    useDeleteCourseCategoriesMutation();

  // HANDLE USER DELETE
  const handleDeleteUser = () => {
    deleteCategories(userId);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      toast.success("Category has deleted Successfully!");
      // console.log(data);
      handleClose();
      setActiveMenu(false);
    }
  }, [isError, isSuccess]);
  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this Category?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDeleteUser}>
              {isLoading ? <ButtonLoader /> : "Yes, I'm sure"}
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

export default DeleteCourseCategoriesModal;
