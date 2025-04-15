"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"

// Components
import Creation1 from "./steps/Creation1"
import Creation2 from "./steps/Creation2"
import Creation3 from "./steps/Creation3"
import Creation4 from "./steps/Creation4"
import CourseCreationSuccessful from "./steps/CourseCreationSuccessful"

export type InitialFormDataCourse = {
  title: string
  shortDescription: string
  category: string
  language: string
  durationInMinutes: number
  price: number
  level: string
  featured?: boolean
  numberOfLectures: number
  discountPrice: number
  isDiscount?: boolean
  description: string
  courseImage: string
  videoUrl: string
  tags: string[]
  msgtoreviewer: string
}

const InitialFormDataCourse = {
  title: "",
  shortDescription: "",
  category: "",
  language: "",
  durationInMinutes: 0,
  price: 0,
  level: "",
  featured: false,
  numberOfLectures: 0,
  discountPrice: 0,
  isDiscount: false,
  description: "",
  courseImage: "",
  videoUrl: "",
  msgtoreviewer: "",
  tags: [],
}

const CourseCreationMain = () => {
  const [formData, setFormData] = useState<InitialFormDataCourse>(InitialFormDataCourse)
  const [step, setStep] = useState(1)

  const onNext = () => {
    setStep(step + 1)
  }

  const onPrev = () => {
    setStep(step - 1)
  }

  const steps = [
    { number: 1, title: "Courses Details" },
    { number: 2, title: "Courses Media" },
    { number: 3, title: "Curriculum Details" },
    { number: 4, title: "Additional Information" },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="text-gray-700">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-medium text-gray-800">Create New Courses</h1>
        </div>
        <button className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12.5H12.5L17.5 7.5C17.8978 7.10217 18.1213 6.56261 18.1213 6C18.1213 5.43739 17.8978 4.89782 17.5 4.5C17.1022 4.10217 16.5626 3.87868 16 3.87868C15.4374 3.87868 14.8978 4.10217 14.5 4.5L9.5 9.5V12H10Z"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.75 5.25L16.25 7.75"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">Save Draft</span>
        </button>
      </header>

      <div className="mx-auto px-0 md:px-4 py-8">
        {step === 5 ? (
          <CourseCreationSuccessful onPrev={onPrev} onNext={onNext} />
        ) : (
          <>
            {/* Step Indicator */}
            <div className="relative mb-12">
              <div className="flex justify-between items-center text-center">
                {steps.map((s, index) => (
                  <div key={s.number} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        step === s.number
                          ? "bg-indigo-600 text-white"
                          : step > s.number
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {s.number}
                    </div>
                    <p
                      className={`mt-2 text-sm ${step === s.number ? "text-indigo-600 font-medium" : "text-gray-500"}`}
                    >
                      {s.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Lines */}
              <div className="absolute top-5 left-0 right-0 h-[1px] z-0">
                <div className="flex justify-between">
                  {steps.map((s, index) => {
                    if (index === steps.length - 1) return null
                    const width = `${100 / (steps.length - 1)}%`
                    return (
                      <div
                        key={`line-${index}`}
                        className={`h-[1px] ${step > index + 1 ? "bg-indigo-600" : "bg-gray-200"}`}
                        style={{ width }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              {step === 1 ? (
                <Creation1 setFormData={setFormData} setStep={setStep} formData={formData} step={step} />
              ) : step === 2 ? (
                <Creation2 setFormData={setFormData} setStep={setStep} formData={formData} step={step} />
              ) : step === 3 ? (
                <Creation3 setFormData={setFormData} setStep={setStep} formData={formData} step={step} />
              ) : (
                step === 4 && <Creation4 setFormData={setFormData} setStep={setStep} formData={formData} step={step} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CourseCreationMain
