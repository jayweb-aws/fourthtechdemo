import { Button, Modal } from "flowbite-react";
import { useEffect } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from 'react-hot-toast';
import { useDeleteModuleMutation } from "../../../../../../../../feature/api/dashboardApi";
import ButtonLoader from "../../../../../../../utils/loaders/ButtonLoader";

type DeleteUserConfirmModalProps = {
  show: boolean;
  handleClose: () => void;
  id: string;
};

const DeleteModule = (props: DeleteUserConfirmModalProps) => {
  const { show, handleClose, id } = props;

  const [deleteModule, { isError, error, isLoading, isSuccess }] =
    useDeleteModuleMutation();

  // HANDLE USER DELETE
  const handleDeleteUser = () => {
    deleteModule(id);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      toast.success("Module has deleted Successfully!");
      // console.log(data);
      handleClose();
    }
  }, [isError, isSuccess]);
  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this Module?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              disabled={isLoading}
              color="failure"
              onClick={handleDeleteUser}
            >
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

export default DeleteModule;
