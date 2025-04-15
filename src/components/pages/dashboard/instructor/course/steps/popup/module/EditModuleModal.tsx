import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal } from "flowbite-react";
import { FormTextInput } from "../../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../../../utils/loaders/ButtonLoader";
import { useUpdateModuleNameMutation } from "../../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../../app/hooks";

type FormData = {
  name: string;
};

const Schema = z.object({
  name: z.string().min(1, "Module name is required!"),
});

const AddModuleModal = ({
  id,
  setEditShowModal,
  EditshowModal,
  moduleName,
}: {
  moduleName: string;
  EditshowModal: boolean;
  setEditShowModal: Function;
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const [updateModuleName, { error, data, isLoading, isSuccess, isError }] =
    useUpdateModuleNameMutation();

  const EditModuleHandler = (data: FormData) => {
    updateModuleName({ name: data.name, id: id });
    //  console.log(data);
    //  console.log(data)
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setEditShowModal(false);
      toast.success("Module Update Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <Modal
      show={EditshowModal}
      size="md"
      popup={true}
      onClose={() => setEditShowModal(!EditshowModal)}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Edit Module
          </h3>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(EditModuleHandler)}
          >
            <FormTextInput
              name="name"
              register={register}
              error={errors.name?.message}
              placeholder={`The ${moduleName} of the module1`}
              label="Module Name"
            />
            <div>
              <Button disabled={isLoading} type="submit" fullSized={true}>
                {isLoading ? <ButtonLoader /> : "Update Module"}
              </Button>
              <Button
                type="button"
                onClick={() => setEditShowModal(false)}
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
