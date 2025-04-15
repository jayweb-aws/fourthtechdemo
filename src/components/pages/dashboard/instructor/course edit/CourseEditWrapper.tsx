import { useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import Creation1 from "./steps/Creation1";
import Creation2 from "./steps/Creation2";
import Creation3 from "./steps/Creation3";
import Creation4 from "./steps/Creation4";

export type InitialFormDataCourse = {
  title: string;
  shortDescription: string;
  category: string;
  language: string;
  durationInMinutes: number;
  price: number;
  level: string;
  featured?: boolean;
  numberOfLectures: number;
  discountPrice: number;
  isDiscount?: boolean;
  description: string;
  courseImage: string;
  videoUrl: string;
  tags: string[];
  msgtoreviewer: string;
};

const CourseEditWrapper = ({
  step,
  setStep,
}: {
  step: number;
  setStep: any;
}) => {
  const {
    courseEdit: {
      category,
      title,
      courseImage,
      description,
      language,
      discountPrice,
      durationInMinutes,
      featured,
      isDiscount,
      level,
      messageToReviewer,
      numberOfLectures,
      price,
      shortDescription,
      tags,
      videoUrl,
    },
    refresh,
  } = useAppSelector((state) => state.course);

  //console.log(title)

  const InitialFormDataCourse = {
    title: title,
    shortDescription: shortDescription,
    category: category,
    language: language,
    durationInMinutes: durationInMinutes,
    price: price,
    level: level,
    featured: featured,
    numberOfLectures: numberOfLectures,
    discountPrice: discountPrice,
    isDiscount: isDiscount,
    description: description,
    courseImage: courseImage,
    videoUrl: videoUrl,
    msgtoreviewer: messageToReviewer,
    tags: tags,
  };

  let [formData, setFormData] = useState<InitialFormDataCourse>(
    InitialFormDataCourse
  );

  return (
    <div>
      {refresh &&
        (step === 1 ? (
          <Creation1
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
            step={step}
          />
        ) : step === 2 ? (
          <Creation2
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
            step={step}
          />
        ) : step === 3 ? (
          <Creation3
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
            step={step}
          />
        ) : (
          step === 4 && (
            <Creation4
              formData={formData}
              setFormData={setFormData}
              setStep={setStep}
              step={step}
            />
          )
        ))}
    </div>
  );
};

export default CourseEditWrapper;
