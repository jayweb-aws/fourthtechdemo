import { useFormik } from "formik";
import { useEffect } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import toast from 'react-hot-toast';
import {
  useEditResourceMutation,
  useGetResourceOneQuery,
} from "../../../../../../feature/api/fourthit/resource/resourceApi";
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { resourceSchema } from "../../../../../../formik/initialSchema";
import { ResourceInitialValue } from "../../../../../../formik/initialValue";
import Button from "../../../../../common/button/button";
import TextInput from "../../../../../common/forms/TextInput";

const UpdateModal = ({ closeModal, id }: { closeModal: any; id: any }) => {
  //rtk query single one managements get api query call
  const { data: singleManagementData, isSuccess: singleManagementSuccess } =
    useGetResourceOneQuery<any>({ id: id });
  //rtk query create management api query
  const [updateManagement, { isSuccess, isError, error, data, isLoading }] =
    useEditResourceMutation<any>();
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
  //rtk query upload 2 api query
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
  }: {
    handleChange: any;
    values: any;
    errors: any;
    handleSubmit: any;
    touched: any;
    setFieldValue: any;
  } = useFormik({
    initialValues: ResourceInitialValue,
    validationSchema: resourceSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      updateManagement({
        id: id,
        data: values,
      });
    },
  });

  //management create success & error toast
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Resource Update");
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

  // upload photo api success set value in formik after upload success
  useEffect(() => {
    if (isUploadSuccess) {
      setFieldValue("photo", uploadData?.data?.image);
      setFieldValue("photoKey", uploadData?.data?.key);
    }
    if (isUploadError) {
      toast.error(uploadError?.data?.message);
    }
  }, [isUploadSuccess, isUploadError]);

  // upload icon api success set value in formik after upload success
  useEffect(() => {
    if (isUploadSuccess2) {
      setFieldValue("icon", uploadData2?.data?.image);
      setFieldValue("iconKey", uploadData2?.data?.key);
    }
    if (isUploadError2) {
      toast.error(uploadError2?.data?.message);
    }
  }, [isUploadSuccess2, isUploadError2]);

  //if single management get success then value set default value formik state
  useEffect(() => {
    if (singleManagementSuccess) {
      setFieldValue("title", singleManagementData?.data?.resource?.title);
      setFieldValue(
        "description",
        singleManagementData?.data?.resource?.description
      );
      setFieldValue("photo", singleManagementData?.data?.resource?.photo);
      setFieldValue("icon", singleManagementData?.data?.resource?.icon);
      setFieldValue("photoKey", singleManagementData?.data?.resource?.photoKey);
      setFieldValue("iconKey", singleManagementData?.data?.resource?.iconKey);
    }
  }, [singleManagementSuccess]);

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

        <TextInput
          label={`Description`}
          isRequired={true}
          placeholder="Add description"
          type="text"
          name="description"
          errors={errors?.description}
          value={values?.description}
          handleChange={handleChange}
          touched={touched?.description}
        />

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
        </div>
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
        </div>
        <Button title={`Update`} type={`submit`} loading={isLoading} />
      </form>
    </div>
  );
};

export default UpdateModal;
