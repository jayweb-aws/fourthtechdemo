/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal } from 'flowbite-react';
import { useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { toast } from 'react-toastify';
import ButtonLoader from '../../../../utils/loaders/ButtonLoader';
import {
    useUpdateReviewMutation,
    useDeleteReviewMutation,
  useGetAllReviewUnPublishQuery,
  useGetAllAdmissionRequestQuery
} from "../../../../../feature/api/dashboardApi";

type Props = {
    show: boolean
    handleClose: () => void
    id: string,
    body?: any
    title?: string
    sureButtonColor?: string,
    cancelButtonColor?: string,
    successMessage: string
}

const ActionConfirmModal = (props: Props) => {
    const { show, handleClose, id, title = "Are you sure you want to perform this action?", sureButtonColor = "failure", cancelButtonColor = "gray", successMessage } = props;

    const [DeleteReview, { isError, error, isLoading, isSuccess }] = useDeleteReviewMutation();

    // HANDLE USER DELETE
    const actionHandler = () => {
        DeleteReview({id:id});
        //console.log(id)
    }

    useEffect(() => {
        if (isError) {
            toast.error((error as any).data.message);
            // console.log(error);
        } else if (isSuccess) {
            toast.success(successMessage);
            // console.log(data);
            handleClose();
        }
    }, [isError, isSuccess])

    return (
        <Modal
            show={show}
            size="md"
            popup={true}
            onClose={handleClose}
        >
            <Modal.Header />
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {title}
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button
                            color={sureButtonColor}
                            onClick={actionHandler}
                        >
                            {isLoading ?
                                <ButtonLoader />
                                : "Yes, I'm sure"
                            }
                        </Button>
                        <Button
                            color={cancelButtonColor}
                            onClick={handleClose}
                        >
                            No, cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ActionConfirmModal;