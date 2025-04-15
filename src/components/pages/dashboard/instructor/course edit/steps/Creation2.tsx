import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks";
import { useCreateCourseMutation } from "../../../../../../feature/api/dashboardApi";
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { InputErrorMessage } from "../../../../../utils/error";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";
import { StepPropss } from "./Creation1";
//icon
import DeleteIcon from "../../../../../../assets/Delete.png";
import { Course } from "../../../../../../feature/course/courseSlice";

type props = {
  courseImage: string;
  videoUrl: string;
  files: any;
};

const Creation2 = (props: StepPropss) => {
  const { setStep, setFormData, formData, step } = props;
  const [filePreview, setFilePreview] = useState("");
  const [picsname, setpicsname] = useState("");
  const dispatch = useAppDispatch();
  const [
    singlePhotoUpload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation();
  const [
    createCourse,
    { error, data: courseData, isLoading, isSuccess, isError },
  ] = useCreateCourseMutation();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<props>({
    // resolver: zodResolver(registrationFirstStepFromSchema)
    defaultValues: {
      videoUrl: formData.videoUrl,
      files: formData.courseImage,
    },
  });

  useEffect(() => {
    setValue("files", formData.courseImage);
  }, [setValue]);

  const {
    course: { id, title },
  } = useAppSelector((state) => state.course);

  const onPrev = () => {
    setStep(step - 1);
  };

  const ImageGet = (e: any) => {
    const file = e.target.files;
    //console.log(file)
    setpicsname(e.target.files[0].name);
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("image", file["0"]);
      singlePhotoUpload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "image"
    ) {
      toast.error("Select a valid image.");
      // console.log("img", watch("courseImage"))
    }
  };

  useEffect(() => {
    if (isUploadError) {
      //console.log("upload error", uploadError);
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      // console.log("upload success", uploadData);
      setFilePreview(uploadData.data.image);
      toast.success("upload success");
    }
  }, [isUploadError, isUploadSuccess]);

  const submitSecondStep = (data: props) => {
    // console.log(data);

    setFormData((prev: object) => ({ ...prev, ...data }));
    const userData = { ...formData, ...data };
    if (filePreview) {
      userData.courseImage = filePreview;
    }
    setFormData((prev: object) => ({ ...prev, ...userData }));
    // console.log(formData)
    setStep(3);
  };

  useEffect(() => {
    if (isError) {
      toast.error("course has added error");
      //console.log(error);
    } else if (isSuccess) {
      // console.log(courseData)
      const { id, title } = courseData.data.course;
      dispatch(Course({ id, title }));
      toast.success("Course has Added Successfully!");
      setStep(3);
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <>
      <form onSubmit={handleSubmit(submitSecondStep)}>
        <div className="course_media  p-3 mt-5">
          <h2 className="font-semibold text-2xl mb-5">Course media</h2>
          <div className="Course_media_form border border-dashed p-5 border-black">
            <div className="upload_image_input flex flex-col">
              <label className="mb-2 text-base font-medium">
                Upload course image
              </label>
              <div className="flex flex-col md:flex-row justify-center gap-2 items-center">
                <label
                  className="text-white xsm:w-[7.5rem] lg:w-[9.5rem] justify-center items-center flex gap-3 bg-[#3A57E8] rounded-lg shadow-lg tracking-wide  cursor-pointer"
                  style={{ padding: "10px 0px" }}
                >
                  <svg
                    className="h-7"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="text-base leading-normal">Upload</span>
                  <input
                    {...register("files", { required: false })}
                    onChange={ImageGet}
                    type="file"
                    className="hidden"
                  />
                </label>
                <span className="text-[#727272] text-sm">
                  {picsname
                    ? picsname
                    : formData?.courseImage
                    ? formData?.courseImage.split("/").pop()
                    : "No file choosen"}
                </span>
              </div>
              <div className="text-right mt-3">
                <button>
                  <Image src={DeleteIcon} width={24} height={27} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-[#3A57E8] font-medium">
              {uploadLoading && "uploading..."}
              {isUploadSuccess && "Upload Completed"}
            </p>
            {errors.files && <InputErrorMessage message={"Enter Image"} />}
          </div>
          <div
            className="upload_image_details flex justify-between bg-[#CDEBEC] mt-10 mb-8 flex-col sm:flex-row items-center sm:items-start"
            style={{ padding: "12px 21px" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[8px] sm:text-[10px] lg:text-[13px] font-normal text-[#056C71]">
                Accepted file types:
              </span>
              <span className="text-[8px]  sm:text-[10px] lg:text-[13px] font-normal text-black">
                PNG,JPG,JPEG
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] sm:text-[10px] lg:text-[13px] font-normal text-[#056C71]">
                Suggested dimensions:
              </span>
              <span className="text-[8px]  sm:text-[10px] lg:text-[13px] font-normal text-black">
                600px*450px
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] sm:text-[10px] lg:text-[13px] font-normal text-[#056C71]">
                Large image crop to:
              </span>
              <span className="text-[8px]  sm:text-[10px] lg:text-[13px] font-normal text-black">
                4:3
              </span>
            </div>
          </div>
          <div className="upload_video_url flex flex-col mb-5">
            <label className="text-base font-medium mb-3">Upload video</label>
            <input
              {...register("videoUrl", { required: true })}
              placeholder="Enter Video Url"
              className="p-3"
              style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
            />
            <div>
              {errors.videoUrl && (
                <InputErrorMessage
                  message={
                    "Note: https://www.youtube-nocookie.com/embed/dFUYsbbf6U0"
                  }
                />
              )}
            </div>
          </div>

          <div className="btn flex justify-end gap-5">
            <button
              className="xsm:w-full lg:w-[8rem] bg-[#EBEEFD] border border-[#3A57E8] py-2 px-6 rounded-sm"
              onClick={onPrev}
            >
              Previous
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="xsm:w-full flex justify-center lg:w-[7rem] bg-[#3A57E8] py-2 px-6 text-[#fff] rounded-sm"
            >
              {isLoading ? <ButtonLoader /> : "Next"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Creation2;
