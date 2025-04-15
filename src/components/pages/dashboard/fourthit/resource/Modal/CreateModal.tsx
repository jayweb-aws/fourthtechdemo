import { useFormik } from "formik";
import { useEffect } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import toast from 'react-hot-toast';
import { useCreateResourceMutation } from "../../../../../../feature/api/fourthit/resource/resourceApi";
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { resourceSchema } from "../../../../../../formik/initialSchema";
import { ResourceInitialValue } from "../../../../../../formik/initialValue";
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
  ] = useCreateResourceMutation<any>();
  //upload api call
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
  //upload api second time call
  const [
    singleFileupload2,
    {
      isLoading: uploadLoading2,
      error: uploadError2,
      data: uploadData2,
      isSuccess: isUploadSuccess2,
      isError: isUploadError2,
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
  }: any = useFormik({
    initialValues: ResourceInitialValue,
    validationSchema: resourceSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      categoryCreate(values);
    },
  });

  //success toast
  useEffect(() => {
    if (categoryIsError) {
      toast.error(categoryError?.data?.message);
    }
    if (categorySuccess) {
      toast.success("Resource Added");
      closeModal();
    }
  }, [categorySuccess, categoryIsError]);

  //onchange image function call input
  const getImg = (e: any, value: any) => {
    const files = e.target.files[0];
    const file = e.target.files;
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("image", file["0"]);
      // console.log(value);
      if (value === "photo") {
        singleFileupload(formData);
      } else if (value === "icon") {
        singleFileupload2(formData);
      }
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "image"
    ) {
      toast.error("valid image ");
    }
  };

  //upload img success after set formik statate
  useEffect(() => {
    if (isUploadSuccess) {
      setFieldValue("photo", uploadData?.data?.image);
      setFieldValue("photoKey", uploadData?.data?.photoKey);
    }
  }, [isUploadSuccess]);
  useEffect(() => {
    if (isUploadSuccess2) {
      setFieldValue("icon", uploadData2?.data?.image);
      setFieldValue("iconKey", uploadData2?.data?.key);
    }
  }, [isUploadSuccess2]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label={`Title`}
          isRequired={true}
          placeholder="Add title"
          type="text"
          name="title"
          errors={errors?.title}
          value={values?.title}
          handleChange={handleChange}
          touched={touched?.title}
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

        <div className="mb-7">
          <label className="font-semibold">
            {`Photo`} {true && <span className="text-danger">*</span>}
          </label>
          <div className="mt-2 rounded-md bg-[#F8F8F8] p-5">
            <label className="m-auto mb-2 flex w-fit items-center justify-center gap-2 rounded bg-[#A6B1B7] px-4 py-2 font-medium">
              <BsCloudUpload className="text-[19px] " />
              {values?.photoKey}
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
          <p className="pt-[3px] text-sm text-red-500">
            {errors.photo && touched.photo && errors.photo}
          </p>
        </div>
        <div className="mb-7">
          <label className="font-semibold">
            {`Icon`} {true && <span className="text-danger">*</span>}
          </label>
          <div className="mt-2 rounded-md bg-[#F8F8F8] p-5">
            <label className="m-auto mb-2 flex w-fit items-center justify-center gap-2 rounded bg-[#A6B1B7] px-4 py-2 font-medium">
              <BsCloudUpload className="text-[19px] " />
              {values?.iconKey}
              <input
                type="file"
                onChange={(e: any) => getImg(e, "icon")}
                className="hidden"
                accept="application/pdf,application/vnd.ms-excel,image/*"
              />
            </label>

            <p className="text-center text-sm font-medium text-[#ACACAC]">
              File should be jpg or png{" "}
            </p>
          </div>
          {uploadLoading2 && <PulseLoader />}
          <p className="pt-[3px] text-sm text-red-500">
            {errors.icon && touched.icon && errors.icon}
          </p>
        </div>
        <Button title={`Create`} type={`submit`} loading={categoryLoading} />
      </form>
    </div>
  );
};

export default CreateModal;
