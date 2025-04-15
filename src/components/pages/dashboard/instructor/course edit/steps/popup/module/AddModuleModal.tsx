import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal } from "flowbite-react";
import { FormTextInput } from "../../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../../../utils/loaders/ButtonLoader";
import { useCreateModuleCourseMutation } from "../../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../../app/hooks";
import { useRouter } from "next/router";

type FormData = {
  name: string;
};

const Schema = z.object({
  name: z.string().min(1, "Module name is required!"),
});

const AddModuleModal = ({
  show,
  setShowModal,
}: {
  show: boolean;
  setShowModal: Function;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const router = useRouter();
  const id = router.query.editId as any;
  const [createModuleCourse, { error, data, isLoading, isSuccess, isError }] =
    useCreateModuleCourseMutation();

  const CreateModuleHandler = (data: FormData) => {
    createModuleCourse({ name: data.name, course: id });
    //  console.log(data);
    //  console.log(data)
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setShowModal(false);
      toast.success("course Module has Added Successfully!");
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
            Add Module
          </h3>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(CreateModuleHandler)}
          >
            <FormTextInput
              name="name"
              register={register}
              error={errors.name?.message}
              placeholder="The name of the module"
              label="Module Name"
            />
            <div>
              <Button disabled={isLoading} type="submit" fullSized={true}>
                {isLoading ? <ButtonLoader /> : "Add Module"}
              </Button>
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                fullSized={true}
                className={"hover:bg-red-700 bg-red-600 mt-2"}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddModuleModal;
