import { useFormik } from "formik";
import { useEffect } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import toast from 'react-hot-toast';
import {
  useEditPartnersMutation,
  useGetPartnersOneQuery,
} from "../../../../../../feature/api/fourthit/partners/partnersApi";
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { partnersSchema } from "../../../../../../formik/initialSchema";
import { partnersInitialValue } from "../../../../../../formik/initialValue";
import Button from "../../../../../common/button/button";
import TextInput from "../../../../../common/forms/TextInput";

const UpdateModal = ({ closeModal, id }: { closeModal: any; id: any }) => {
  //rtk query single one managements get api query call
  const { data: singleManagementData, isSuccess: singleManagementSuccess } =
    useGetPartnersOneQuery<any>({ id: id });
  //rtk query create management api query
  const [updatePartners, { isSuccess, isError, error, data, isLoading }] =
    useEditPartnersMutation<any>();
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
    initialValues: partnersInitialValue,
    validationSchema: partnersSchema,
    onSubmit: (values: any) => {
      // Define what happens when the form is submitted
      updatePartners({
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
      toast.success("Managements Update");
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

  //if single management get success then value set default value formik state
  useEffect(() => {
    if (singleManagementSuccess) {
      setFieldValue(
        "description",
        singleManagementData?.data?.partner?.description
      );
      setFieldValue("photo", singleManagementData?.data?.partner?.photo);
      setFieldValue("key", singleManagementData?.data?.partner?.key);
    }
  }, [singleManagementSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <Button title={`Update`} type={`submit`} loading={isLoading} />
      </form>
    </div>
  );
};

export default UpdateModal;
