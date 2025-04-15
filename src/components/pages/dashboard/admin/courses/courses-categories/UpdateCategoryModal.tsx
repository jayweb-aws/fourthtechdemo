/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal } from "flowbite-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useUpdateCategoryMutation } from "../../../../../../feature/api/dashboardApi";
import { FormTextInput } from "../../../../../utils/form/Inputs";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";

type props = {
  handleClose: () => void;
  show: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  category: {
    id: string;
    name: string;
    description: string;
  };
};

type FormData = {
  name: string;
  description: string;
};

const Schema = z.object({
  name: z.string().min(1, "Category name is required!"),
  description: z.string().min(1, "Category description is required!"),
});

const UpdateCategoryModal = ({
  show,
  handleClose,
  setActiveMenu,
  category: { name, description, id },
}: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name,
      description,
    },
    resolver: zodResolver(Schema),
  });
  const [updateCategory, { error, data, isLoading, isSuccess, isError }] =
    useUpdateCategoryMutation();

  const createCategoryHandler = (data: FormData) => {
    updateCategory({ id, data });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      handleClose();
      setActiveMenu(false);
      toast.success("Category has updated Successfully!");
    }
  }, [isError, isSuccess]);
  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Update Category
          </h3>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(createCategoryHandler)}
          >
            <FormTextInput
              name="name"
              register={register}
              error={errors.name?.message}
              placeholder="category name"
              label="Category name"
            />
            <FormTextInput
              name="description"
              register={register}
              error={errors.description?.message}
              placeholder="Description"
              label="Category details"
            />
            <Button type="submit" fullSized={true}>
              {isLoading ? <ButtonLoader /> : "Save"}
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateCategoryModal;
