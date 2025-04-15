/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useUpdateQuizMutation } from "../../../../../feature/api/dashboardApi";
import { FormTextInput } from "../../../../utils/form/Inputs";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

const Schema = z.object({
  title: z.string().min(1, "Title is required!"),
});

type FormData = {
  title: string;
};

type props = {
  show: boolean;
  id: string;
  handleClose: () => void;
  user: {
    title: string;
  };
};

const EditUserModal = (props: props) => {
  const {
    show,
    handleClose,
    id,
    user: { title },
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      title,
    },
  });

  const [updateUser, { error, isLoading, isSuccess, isError }] =
    useUpdateQuizMutation();

  const updateUserHandler = (data: FormData) => {
    updateUser({
      id: id,
      title: data?.title,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    } else if (isSuccess) {
      toast.success("Quiz Update Successfully!");
    }
  }, [isError, isSuccess]);
  return (
    <div>
      <form onSubmit={handleSubmit(updateUserHandler)} className="font-nunito">
        <div>
          <FormTextInput
            name="title"
            register={register}
            error={errors.title?.message}
            placeholder="Title"
            label="Title"
          />

          <div className="w-full !pt-2 flex flex-wrap gap-4">
            <div>
              <button
                type="submit"
                className="bg-primary flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
              >
                {isLoading ? <ButtonLoader /> : "Save"}
              </button>
            </div>
            <div>
              <button
                className="bg-red-800 flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
                onClick={handleClose}
                color="failure"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserModal;
