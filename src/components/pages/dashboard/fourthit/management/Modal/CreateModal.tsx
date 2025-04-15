import { useFormik } from "formik";
import { useEffect } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import toast from 'react-hot-toast';
import { useCreateManagementMutation } from "../../../../../../feature/api/fourthit/management/managementApi";
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { managementSchema } from "../../../../../../formik/initialSchema";
import { managementInitialValue } from "../../../../../../formik/initialValue";
import Button from "../../../../../common/button/button";
import TextInput from "../../../../../common/forms/TextInput";

const CreateModal = ({ closeModal }: { closeModal: any }) => {
  //rtk query create management api query
  const [createManagement, { isSuccess, isError, error, data, isLoading }] =
    useCreateManagementMutation<any>();
  //rtk query upload api query
  const [
    singleFileupload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation<any>();

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
    initialValues: managementInitialValue,
    validationSchema: managementSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      createManagement(values);
    },
  });

  //management create success & error toast
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Managements Added");
      closeModal();
    }
  }, [isSuccess, isError]);

  // photo function & upload api call
  const getImg = (e: any, value: any) => {
    const files = e.target.files[0];
    const file = e.target.files;
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("image", file["0"]);
      singleFileupload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "image"
    ) {
      toast.error("valid image ");
    }
  };

  // upload photo api success set value in formik after upload success
  useEffect(() => {
    if (isUploadSuccess) {
      setFieldValue("photo", uploadData?.data?.image);
      setFieldValue("key", uploadData?.data?.key);
    }
    if (isUploadError) {
      toast.error(uploadError?.data?.message);
    }
  }, [isUploadSuccess, isUploadError]);

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

        <TextInput
          label={`Role`}
          isRequired={true}
          placeholder="Add role"
          type="text"
          name="role"
          errors={errors?.role}
          value={values?.role}
          handleChange={handleChange}
          touched={touched?.role}
        />
        <TextInput
          label={`Linkedin`}
          isRequired={true}
          placeholder="Add Linkedin"
          type="text"
          name="linkedin"
          errors={errors?.linkedin}
          value={values?.linkedin}
          handleChange={handleChange}
          touched={touched?.linkedin}
        />
        <TextInput
          label={`Twitter`}
          isRequired={true}
          placeholder="Add twitter"
          type="text"
          name="twitter"
          errors={errors?.twitter}
          value={values?.twitter}
          handleChange={handleChange}
          touched={touched?.twitter}
        />

        <div className="mb-7">
          <label className="font-semibold">
            {`Photo`} {true && <span className="text-danger">*</span>}
          </label>

          <div className="mt-2 rounded-md bg-[#F8F8F8] p-5">
            <label className="m-auto mb-2 flex w-fit items-center justify-center gap-2 rounded bg-[#A6B1B7] px-4 py-2 font-medium">
              <BsCloudUpload className="text-[19px] " />
              {values?.key}
              <input
                type="file"
                onChange={(e: any) => getImg(e, "photo")}
                className="hidden"
                accept="application/pdf,application/vnd.ms-excel,image/*"
              />
            </label>

            <p className="text-center text-sm font-medium text-[#ACACAC]">
              File should be jpg or png{" "}
            </p>
          </div>
          {uploadLoading && <PulseLoader />}
        </div>
        <Button title={`Create`} type={`submit`} loading={isLoading} />
      </form>
    </div>
  );
};

export default CreateModal;
