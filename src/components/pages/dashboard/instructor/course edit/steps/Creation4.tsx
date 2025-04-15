import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from 'react-hot-toast';
import { InputErrorMessage } from "../../../../../utils/error";
import { StepPropss } from "./Creation1";
import {
  useUpdateCourseMutation,
  useGetFaqsQuery,
} from "../../../../../../feature/api/dashboardApi";
import { TagsInput } from "react-tag-input-component";
import { useAppSelector } from "../../../../../../app/hooks";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";
import { useAppDispatch } from "../../../../../../app/hooks";
import {
  SuccessCreate,
  DelEditCourse,
} from "../../../../../../feature/course/courseSlice";
//icon
import editIcon from "../../../../../../assets/editIcon.png";
import closeIcon from "../../../../../../assets/closeIcon.png";
import minus from "../../../../../../assets/minus.png";
import plus from "../../../../../../assets/plus.png";
import plusIconBg from "../../../../../../assets/Group34917.png";
import { useRouter } from "next/router";

import FaqsCreateModal from "./popup/FaqsCreateModal";

type props = {
  tags: string[];
  msgtoreviewer: string;
  anymsg: boolean;
};

const Creation4 = (props: StepPropss) => {
  const router = useRouter();
  const id = router.query.editId as any;
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false);
  const { setStep, setFormData, formData, step } = props;
  const dispatch = useAppDispatch();
  const [updateCourse, { isError, data, error, isLoading, isSuccess }] =
    useUpdateCourseMutation();
  const {
    data: faqsData,
    isError: faqsisError,
    error: faqsError,
    isLoading: faqsLoading,
    isSuccess: faqsIsSuccess,
  } = useGetFaqsQuery(id);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<props>({
    defaultValues: {
      tags: formData.tags,
      msgtoreviewer: formData.msgtoreviewer,
    },
  });

  const courseRegister = async (data: props) => {
    setFormData((prev: object) => ({ ...prev, ...data }));
    const userData = { ...formData, ...data };

    await updateCourse({
      id,
      isPublished: true,
      tags: userData.tags,
      title: userData.title,
      shortDescription: userData.shortDescription,
      category: userData.category,
      language: userData.language,
      durationInMinutes: userData.durationInMinutes,
      price: userData.price,
      level: userData.level,
      featured: userData.featured,
      numberOfLectures: userData.numberOfLectures,
      discountPrice: userData.discountPrice,
      isDiscount: userData.isDiscount,
      description: userData.description,
      courseImage: userData.courseImage,
      videoUrl: userData.videoUrl,
      messageToReviewer: userData.msgtoreviewer,
    });
  };
  const onPrev = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (isError) {
      toast.error("course has update error");
      // console.log(error);
    } else if (isSuccess) {
      toast.success("Course has update Successfully!");
      dispatch(DelEditCourse());
      //console.log(data);
      setStep(5);
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <>
      <FaqsCreateModal
        show={moduleModalShow}
        setShowModal={setmoduleModalShow}
      />
      <form onSubmit={handleSubmit(courseRegister)}>
        <div className="p-3 mt-5">
          <h2 className="font-semibold text-2xl mb-5">
            Additional Information
          </h2>
          <div>
            <div className="heading_upload_lectrue flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">Upload Faqs</h2>
              <button
                type="button"
                onClick={() => setmoduleModalShow(!moduleModalShow)}
                className="bg-[#EBEEFD] border border-[#3A57E8] px-3 py-2 rounded flex items-center gap-[6px]"
              >
                <Image src={plusIconBg} alt="plus icon" />
                Add Question
              </button>
            </div>
            {faqsIsSuccess &&
              faqsData.data.faqs.map((item: any) => (
                <div
                  className="p-4 mb-4"
                  style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
                  key={item}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-base font-semibold font-nunito">
                      {item.question}?
                    </h2>
                    <div className="flex justify-between gap-2">
                      <div className="bg-[#D5EBDF] rounded-full w-[32px] h-[32px] flex justify-center items-center">
                        <Image src={editIcon} width={18} height={16} alt="" />
                      </div>
                      <div className="bg-[#F2D6D3] rounded-full w-[32px] h-[32px] flex justify-center items-center">
                        <Image src={closeIcon} width={14} height={13} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#8A92A6] font-nunito font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}

            <div className="tag_url flex flex-col mb-5">
              <label className="text-base font-medium mb-3">Tags</label>
              <Controller
                control={control}
                name="tags"
                rules={{ required: "tags is required" }}
                render={({ field }) => (
                  <TagsInput
                    {...field}
                    value={formData.tags}
                    onChange={(text: any) => {
                      field.onChange(text);
                    }}
                  />
                )}
              />
              {errors.tags && <InputErrorMessage message={"Enter your tag"} />}
            </div>
            <div
              className="upload_image_details flex justify-between bg-[#CDEBEC] mt-10 mb-8 flex-col sm:flex-row items-center"
              style={{ padding: "12px 21px" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[10px] lg:text-base font-nunito text-[#056C71]">
                  Max keywords: 14
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[10px] lg:text-base font-nunito text-[#056C71]">
                  in lowercase and separated by commas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[10px] lg:text-base font-nunito text-black">
                  {" "}
                  e.g. javascript, react, marketing
                </span>
              </div>
            </div>

            <div className="message flex flex-col mb-3">
              <label className="text-base font-medium mb-3">
                Message to a reviewer
              </label>
              <textarea
                {...register("msgtoreviewer", { required: true })}
                placeholder="Write a message"
                className="p-3 border-none"
                style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
              ></textarea>
              {errors.msgtoreviewer && (
                <InputErrorMessage message={"Enter message reviewer"} />
              )}
            </div>

            <div className="btn flex justify-end gap-5 mt-8">
              <button
                className="xsm:w-full lg:w-[8rem] bg-[#EBEEFD] border border-[#3A57E8] py-2 px-4 rounded"
                onClick={onPrev}
              >
                Previous
              </button>
              <button
                className="flex xsm:w-full lg:w-[9rem] bg-[#3A57E8] py-2 px-4 text-[#fff] rounded"
                type="submit"
              >
                {isLoading ? <ButtonLoader /> : "Submit Course"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Creation4;
