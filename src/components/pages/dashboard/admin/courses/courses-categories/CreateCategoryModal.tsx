/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useCreateCategoryMutation } from "../../../../../../feature/api/dashboardApi";
import { Button, Modal } from "flowbite-react";
import { FormTextInput } from "../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";

type props = {
  setShowModal: any;
  Modal: boolean;
};

type FormData = {
  name: string;
  description: string;
};

const Schema = z.object({
  name: z.string().min(1, "Category name is required!"),
  description: z.string().min(1, "Category description is required!"),
});

const CreateCategoryModal = ({ Modal: show, setShowModal }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // defaultValues: {
    //   name: formData.name,
    //   description: formData.description
    // }
    resolver: zodResolver(Schema),
  });
  const [createCategory, { error, data, isLoading, isSuccess, isError }] =
    useCreateCategoryMutation();

  const createCategoryHandler = (data: FormData) => {
    createCategory(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setShowModal(false);
      toast.success("Category has Added Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <Modal
      show={show}
      size="md"
      popup={true}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Add Category
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
              {isLoading ? <ButtonLoader /> : "Create"}
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCategoryModal;
