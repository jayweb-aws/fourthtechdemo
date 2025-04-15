import { useEffect } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import toast from 'react-hot-toast';

const DeleteModal = ({
  id,
  variant,
  closeModal,
  title,
  rtkMutation,
  successMsg,
}) => {
  const [deleteMe, { error, data, isLoading, isSuccess, isError }] =
    rtkMutation({}) || {};
  const DeleteBy = () => {
    deleteMe({ id: id });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(successMsg);
      closeModal();
    }
  }, [isSuccess, isError]);
  return (
    <div className="space-y-4 text-center">
      <button className="text-center">
        <RiDeleteBin4Line size={40} color="red" />
      </button>
      <h2 className="text-[24px]">Are you sure?</h2>
      <p>{title}</p>
      <div className="flex justify-center gap-x-4 py-4">
        <button
          onClick={closeModal}
          className="h-12 rounded bg-[#adb5bd] px-6 text-[18px] text-white"
        >
          Cancel!
        </button>
        <button
          onClick={DeleteBy}
          type="submit"
          disabled={isLoading}
          className="flex h-12 items-center justify-center rounded bg-[#f62947] px-6  text-[18px] text-white"
        >
          {isLoading ? (
            <ClipLoader className="!border-[4px]" color="#fff" size={30} />
          ) : (
            " Delete!"
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
