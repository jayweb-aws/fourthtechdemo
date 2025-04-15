import { useFormik } from "formik";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import {
  useEditTypesMutation,
  useGetTypesOneQuery,
} from "../../../../../../feature/api/fourthit/types/typesApi";
import { typesSchema } from "../../../../../../formik/initialSchema";
import { typesInitialValue } from "../../../../../../formik/initialValue";
import Button from "../../../../../common/button/button";
import TextInput from "../../../../../common/forms/TextInput";
import TextareaField from "../../../../../common/forms/TextareaField";

const UpdateModal = ({ closeModal, id }: { closeModal: any; id: any }) => {
  //rtk query single one managements get api query call
  const { data: singleManagementData, isSuccess: singleManagementSuccess } =
    useGetTypesOneQuery<any>({ id: id });
  //rtk query create management api query
  const [updateManagement, { isSuccess, isError, error, data, isLoading }] =
    useEditTypesMutation<any>();

  // Destructure the necessary functions and values from the useFormik hook
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    touched,
    setFieldValue,
  }: {
    handleChange: any;
    values: any;
    errors: any;
    handleSubmit: any;
    touched: any;
    setFieldValue: any;
  } = useFormik({
    initialValues: typesInitialValue,
    validationSchema: typesSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      updateManagement({
        id: id,
        data: values,
      });
    },
  });

  // create success & error toast
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Types Update");
      closeModal();
    }
  }, [isSuccess, isError]);

  //if single management get success then value set default value formik state
  useEffect(() => {
    if (singleManagementSuccess) {
      setFieldValue("name", singleManagementData?.data?.type?.name);
      setFieldValue(
        "description",
        singleManagementData?.data?.type?.description
      );
    }
  }, [singleManagementSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label={`Name`}
          isRequired={true}
          placeholder="Add name"
          type="text"
          name="name"
          errors={errors?.name}
          value={values?.name}
          handleChange={handleChange}
          touched={touched?.name}
        />

        <TextareaField
          label={`Description`}
          isRequired={true}
          placeholder="Description"
          type="text"
          name="description"
          errors={errors?.description}
          value={values?.description}
          handleChange={handleChange}
          touched={touched?.description}
          rows={3}
        />
        <Button title={`Update`} type={`submit`} loading={isLoading} />
      </form>
    </div>
  );
};

export default UpdateModal;
