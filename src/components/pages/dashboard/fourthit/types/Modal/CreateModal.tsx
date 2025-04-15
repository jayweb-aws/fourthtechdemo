import { useFormik } from "formik";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { useCreateTypesMutation } from "../../../../../../feature/api/fourthit/types/typesApi";
import { typesSchema } from "../../../../../../formik/initialSchema";
import { typesInitialValue } from "../../../../../../formik/initialValue";
import Button from "../../../../../common/button/button";
import TextInput from "../../../../../common/forms/TextInput";
import TextareaField from "../../../../../common/forms/TextareaField";

const CreateModal = ({ closeModal }: { closeModal: any }) => {
  //create api call
  const [
    categoryCreate,
    {
      isSuccess: categorySuccess,
      isError: categoryIsError,
      error: categoryError,
      data: categoryData,
      isLoading: categoryLoading,
    },
  ] = useCreateTypesMutation<any>();

  // Destructure the necessary functions and values from the useFormik hook
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    touched,
    setFieldValue,
  }: any = useFormik({
    initialValues: typesInitialValue,
    validationSchema: typesSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      categoryCreate(values);
    },
  });

  //api success toast
  useEffect(() => {
    if (categoryIsError) {
      toast.error(categoryError?.data?.message);
    }
    if (categorySuccess) {
      toast.success("Types Added");
      closeModal();
    }
  }, [categorySuccess, categoryIsError]);

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

        <Button title={`Create`} type={`submit`} loading={categoryLoading} />
      </form>
    </div>
  );
};

export default CreateModal;
