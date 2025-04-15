"use client"

import { useState } from "react"
import { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { toast } from "react-toastify"
import { InputErrorMessage } from "../../../../../utils/error"
import type { StepPropss } from "./Creation1"
import { useUpdateCourseMutation, useGetFaqsQuery } from "../../../../../../feature/api/dashboardApi"
import { TagsInput } from "react-tag-input-component"
import { useAppSelector } from "../../../../../../app/hooks"
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader"
import { useAppDispatch } from "../../../../../../app/hooks"
import { SuccessCreate } from "../../../../../../feature/course/courseSlice"

import FaqsCreateModal from "./popup/FaqsCreateModal"

type props = {
  tags: string[]
  msgtoreviewer: string
  anymsg: boolean
}

type FaqItem = {
  id: string
  question: string
  answer: string
}

const Creation4 = (props: StepPropss) => {
  const {
    course: { id, title },
  } = useAppSelector((state) => state.course)
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false)
  const { setStep, setFormData, formData, step } = props
  const dispatch = useAppDispatch()
  const [updateCourse, { isError, data, error, isLoading, isSuccess }] = useUpdateCourseMutation()
  const {
    data: faqsData,
    isError: faqsisError,
    error: faqsError,
    isLoading: faqsLoading,
    isSuccess: faqsIsSuccess,
  } = useGetFaqsQuery(id)

  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: "1",
      question: "What is the focus of this course",
      answer:
        "This course focuses on RMF (Risk Management Framework) and various cybersecurity compliance frameworks, such as SOC1, SOC2, HIPAA, FEDRAMP, HITRUST, PCI DSS, CMMC, GDPR, and more. It is designed to equip participants with essential skills for managing cybersecurity compliance.",
    },
    {
      id: "2",
      question: "Who is this course for",
      answer:
        "This course is designed for professionals responsible for cybersecurity compliance, including those in IT, risk management, and data protection roles, seeking to deepen their understanding of compliance frameworks.",
    },
    {
      id: "3",
      question: "What are the prerequisites for this course",
      answer:
        "A basic understanding of cybersecurity concepts is recommended but not required. This course is structured to benefit both beginners and seasoned professionals.",
    },
  ])

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<props>({
    defaultValues: {
      tags: formData.tags || [],
      msgtoreviewer: formData.msgtoreviewer || "",
    },
  })

  const handleDeleteFaq = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id))
    toast.success("FAQ deleted successfully")
  }

  const courseRegister = async (data: props) => {
    setFormData((prev: object) => ({ ...prev, ...data }))
    const userData = { ...formData, ...data, faqs }

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
      faqs: userData.faqs,
    })
  }

  const onPrev = () => {
    setStep(step - 1)
  }

  useEffect(() => {
    if (isError) {
      toast.error("Course has update error")
    } else if (isSuccess) {
      toast.success("Course has updated successfully!")
      dispatch(SuccessCreate())
      setStep(5)
    }
  }, [isError, isSuccess])

  return (
    <>
      <FaqsCreateModal show={moduleModalShow} setShowModal={setmoduleModalShow} />
      <form onSubmit={handleSubmit(courseRegister)}>
        <div className="p-3 mt-5">
          <h2 className="font-semibold text-2xl mb-5">FAQ</h2>
          <p className="text-gray-500 mb-6">Provide users with a description of the course you offer</p>

          <div>
            {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-6 border border-gray-200 rounded-md p-6 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">Question {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => handleDeleteFaq(faq.id)}
                    className="text-red-500 bg-red-50 px-3 py-1 rounded-md text-sm flex items-center"
                  >
                    <span className="mr-1">Delete</span>
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Question</p>
                  <div className="p-3 border border-gray-200 rounded-md bg-white">{faq.question}?</div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Answer</p>
                  <div className="p-3 border border-gray-200 rounded-md bg-white">{faq.answer}</div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={() => setmoduleModalShow(true)}
                className="flex items-center justify-center gap-2 text-indigo-600 border border-indigo-600 bg-indigo-50 px-4 py-2 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Question
              </button>
            </div>

            {/* <div className="tag_url flex flex-col mb-5">
              <label className="text-base font-medium mb-3">Tags</label>
              <Controller
                control={control}
                name="tags"
                rules={{ required: "Tags are required" }}
                render={({ field }) => (
                  <TagsInput
                    {...field}
                    value={field.value || []}
                    onChange={(tags: string[]) => {
                      field.onChange(tags)
                    }}
                    className="border border-gray-200 rounded-md p-2"
                  />
                )}
              />
              {errors.tags && <InputErrorMessage message={"Enter your tags"} />}
            </div>

            <div className="bg-[#CDEBEC] p-4 rounded-md mb-8">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div className="text-[#056C71] text-sm">Max keywords: 14</div>
                <div className="text-[#056C71] text-sm">in lowercase and separated by commas</div>
                <div className="text-black text-sm">e.g. javascript, react, marketing</div>
              </div>
            </div>

            <div className="message flex flex-col mb-8">
              <label className="text-base font-medium mb-3">Message to a reviewer</label>
              <textarea
                {...register("msgtoreviewer", { required: "Message to reviewer is required" })}
                placeholder="Write a message"
                className="p-3 border border-gray-200 rounded-md min-h-[120px] w-full"
              ></textarea>
              {errors.msgtoreviewer && <InputErrorMessage message={"Enter message to reviewer"} />}
            </div> */}

            <div className="flex flex-wrap justify-between mt-10 mb-6 gap-3 sm:flex-nowrap">
              <button
                type="button"
                className="w-full sm:w-[20%] px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium"
                onClick={onPrev}
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full sm:w-[80%] px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium"
              >
                {isLoading ? <ButtonLoader /> : "Submit Course"}
              </button>
            </div>

            {/* <div className="flex justify-between sm:justify-end gap-4 mt-8">
              <button
                type="button"
                className="w-full sm:w-auto bg-white border border-indigo-600 text-indigo-600 py-2 px-6 rounded-md"
                onClick={onPrev}
              >
                Previous
              </button>
              <button
                className="w-full sm:w-auto bg-indigo-600 py-2 px-6 text-white rounded-md flex justify-center items-center"
                type="submit"
              >
                {isLoading ? <ButtonLoader /> : "Submit Course"}
              </button>
            </div> */}
          </div>
        </div>
      </form>
    </>
  )
}

export default Creation4
