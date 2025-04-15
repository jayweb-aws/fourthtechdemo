"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Plus, Trash2, ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
import { useGetCategoriesQuery } from "../../../../../../feature/api/dashboardApi"
import { InputErrorMessage } from "../../../../../utils/error"
import type { InitialFormDataCourse } from "../CourseCreationMain"

// Dynamic import for React Quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

export type StepPropss = {
  setStep: (step: number) => void
  setFormData: any
  step: number
  formData: InitialFormDataCourse
}

type RegistrationFirstStepFromData = {
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
  courseImage?: File
  enableRegionAccess?: boolean
  countries?: string[]
  regions?: string[]
  skillLevel?: string
  students?: number
  captions?: string
  certificateDescription?: string
  featuresDescription?: string
  objectives?: string[]
}

const Creation1 = (props: StepPropss) => {
  const { setStep, setFormData, formData } = props
  const { data, isSuccess } = useGetCategoriesQuery({})
  const [courseImage, setCourseImage] = useState<string | null>(null)
  const [objectives, setObjectives] = useState<string[]>([
    "Learn Drawing, Art, Sketching, Illustration, Character Design, Digital Drawing, Pencil Drawing, Figure",
    "Understand drawing fundamentals and concepts like a pro",
    "Draw using shading and light to improve your art",
    "Complete your drawings with color",
    "Become confident at drawing, even if you're a complete beginner",
    "Draw any kind of art from your imagination",
    "Draw shapes and add perspective to your artwork",
    "Draw gestures that look natural and realistic",
    "Know how to use composition in your drawing",
  ])
  const [value, setValuee] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<RegistrationFirstStepFromData>({
    defaultValues: {
      title: formData.title || "",
      shortDescription: formData.shortDescription || "Demo testing",
      category: formData.category || "",
      language: formData.language || "English",
      durationInMinutes: formData.durationInMinutes || 60,
      price: formData.price || 174.99,
      level: formData.level || "Beginner",
      featured: formData.featured || false,
      numberOfLectures: formData.numberOfLectures || 14,
      discountPrice: formData.discountPrice || 0,
      isDiscount: formData.isDiscount || false,
      description: formData.description || "",
      enableRegionAccess: false,
      countries: ["United States", "Canada", "Australia"],
      regions: ["South America", "North America"],
      skillLevel: "Beginner",
      students: 56521,
      captions: "Yes",
    },
  })

  const enableRegionAccess = watch("enableRegionAccess")
  const isDiscount = watch("isDiscount")

  useEffect(() => {
    register("description", { required: true, minLength: 1 })
  }, [register, setValue])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue("courseImage", file)
      const reader = new FileReader()
      reader.onload = () => {
        setCourseImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setCourseImage(null)
    setValue("courseImage", undefined)
  }

  const addObjective = () => {
    setObjectives([...objectives, ""])
  }

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const submitFirstStep = async (data: RegistrationFirstStepFromData) => {
    setFormData((prev: object) => ({ ...prev, ...data, objectives }))
    setStep(2)
  }

  return (
    <form onSubmit={handleSubmit(submitFirstStep)} className="mt-6 px-4 sm:px-6">
      {/* Course Details Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">Courses Details</h2>
          <p className="text-gray-500 text-sm mb-6">Provide users with an overview of the course you are offering</p>

          {/* Course Image Upload */}
          <div className="mb-8">
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center">
              <div className="w-full sm:w-32 h-24 bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                {courseImage ? (
                  <img
                    src={courseImage || "/placeholder.svg"}
                    alt="Course thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xs p-2 text-center">
                    Product Together Excellence
                  </div>
                )}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:space-x-4 mb-2">
                  <label className="cursor-pointer text-indigo-600 text-sm font-medium mb-2 sm:mb-0">
                    Upload Photo
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                  {courseImage && (
                    <button type="button" onClick={removeImage} className="text-red-500 text-sm font-medium">
                      Remove Photo
                    </button>
                  )}
                </div>
                <p className="text-gray-500 text-xs">Pick a photo up to 2 MB</p>
              </div>
            </div>
          </div>

          {/* Course Name and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Course name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter course name"
                defaultValue="Guilt & Underachievement"
                {...register("title", { required: "Course name is required" })}
              />
              {errors.title && <InputErrorMessage message={errors.title.message || "Course name is required"} />}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Category</label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  defaultValue="Tech"
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="">Select Category</option>
                  {isSuccess &&
                    data.data.categories.map(({ name, id }: { name: string; id: string }) => (
                      <option value={id} key={id}>
                        {name}
                      </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
              {errors.category && <InputErrorMessage message={errors.category.message || "Category is required"} />}
            </div>
          </div>

          {/* Course Time and Total Lectures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Course time</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter duration in minutes"
                  defaultValue="1 hour 5 minutes"
                  {...register("durationInMinutes", { required: "Course time is required" })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6 flex items-center justify-center"
                >
                  +
                </button>
              </div>
              {errors.durationInMinutes && (
                <InputErrorMessage message={errors.durationInMinutes.message || "Course time is required"} />
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Total lectures</label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter number of lectures"
                  defaultValue={14}
                  {...register("numberOfLectures", { required: "Total lectures is required" })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6 flex items-center justify-center"
                >
                  +
                </button>
              </div>
              {errors.numberOfLectures && (
                <InputErrorMessage message={errors.numberOfLectures.message || "Total lectures is required"} />
              )}
            </div>
          </div>

          {/* Price and Discount */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Price</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter price"
                  defaultValue={174.99}
                  {...register("price", { required: "Price is required" })}
                />
              </div>
              {errors.price && <InputErrorMessage message={errors.price.message || "Price is required"} />}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Discount</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  className={`w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    !isDiscount ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                  placeholder="Enter discount amount"
                  disabled={!isDiscount}
                  {...register("discountPrice")}
                />
              </div>
              <div className="mt-2">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    {...register("isDiscount")}
                  />
                  <span className="ml-2 text-sm font-medium text-gray-600">Enable discount</span>
                </label>
              </div>
            </div>
          </div>

          {/* Region Access */}
          <div className="mb-6">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" {...register("enableRegionAccess")} />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-600 ml-2">Enable to Set Access by Country or Region</span>
            </label>
          </div>

          {enableRegionAccess && (
            <>
              {/* Country Access */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Country access</label>
                <div className="relative mb-2">
                  <select className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Select Country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-indigo-50 rounded-full px-3 py-1 flex items-center">
                    <span className="text-xs text-indigo-700">United States</span>
                    <button type="button" className="ml-1 text-indigo-700">
                      ×
                    </button>
                  </div>
                  <div className="bg-indigo-50 rounded-full px-3 py-1 flex items-center">
                    <span className="text-xs text-indigo-700">Canada</span>
                    <button type="button" className="ml-1 text-indigo-700">
                      ×
                    </button>
                  </div>
                  <div className="bg-indigo-50 rounded-full px-3 py-1 flex items-center">
                    <span className="text-xs text-indigo-700">Australia</span>
                    <button type="button" className="ml-1 text-indigo-700">
                      ×
                    </button>
                  </div>
                </div>
              </div>

              {/* Region Access */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Region access</label>
                <div className="relative mb-2">
                  <select className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Select Region</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-indigo-50 rounded-full px-3 py-1 flex items-center">
                    <span className="text-xs text-indigo-700">South America</span>
                    <button type="button" className="ml-1 text-indigo-700">
                      ×
                    </button>
                  </div>
                  <div className="bg-indigo-50 rounded-full px-3 py-1 flex items-center">
                    <span className="text-xs text-indigo-700">North America</span>
                    <button type="button" className="ml-1 text-indigo-700">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* About This Course Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-6">About This Course</h2>

          {/* Course Description */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Course Description</label>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[150px]"
              placeholder="Write a description..."
              value={value ? value : formData.description}
              defaultValue="This course focuses on BAF and uses the BAF framework to introduce you into the compliance world. We
                discuss various frameworks in this course including SOC1, SOC2, HIPAA, FISMA/P, HITRUST, PCI DSS, CMMC,
                GDPR and many more. Whether you are an absolute and know nothing about IT or you're a cybersecurity
                professional, an IT manager or a government employee, this course is for you."
              {...register("description", { 
                required: "Course description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long"
                }
              })}
              onChange={(e) => {
                setValue("description", e.target.value);
                setValuee(e.target.value);
              }}
            />
            {errors.description && <InputErrorMessage message="Course description is required" />}
          </div>

          {/* Skill Level and Students */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Skill Level</label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  defaultValue="Beginner"
                  {...register("level", { required: "Skill level is required" })}
                >
                  <option value="">Select Skill Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Students</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue={56521}
                readOnly
              />
            </div>
          </div>

          {/* Languages and Captions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Languages</label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  defaultValue="English"
                  {...register("language", { required: "Language is required" })}
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Captions</label>
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg p-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  defaultValue="Yes"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-6">Certificate</h2>
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Certificate Description</label>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
              placeholder="Enter certificate description"
              defaultValue="Get the Certificate after completing the course."
              {...register("certificateDescription")}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-6">Features</h2>
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Certificate Description</label>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
              placeholder="Enter features"
              defaultValue="Available on iOS and Android."
              {...register("featuresDescription")}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-6">Description</h2>
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Certificate Description</label>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
              placeholder="Enter description"
              defaultValue="Welcome to the Cybersecurity Compliance course! This comprehensive training program is designed to equip participants with the knowledge and skills necessary to understand and implement cybersecurity compliance requirements effectively. In today's digital landscape, organizations must adhere to various regulations and standards to protect their sensitive data and mitigate cyber threats. This course will provide you with a deep understanding of compliance frameworks, best practices, and practical strategies for maintaining compliance."
            ></textarea>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-semibold mb-6">What You'll Learn</h2>

          {objectives.map((objective, index) => (
            <div key={index} className="items-center mb-4">
              <div className="mr-2 text-xs text-gray-500 w-20 mb-1">{`#${index + 1} Objective`}</div>
              <div className="flex ">
              <input
                type="text"
                className="flex-1 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={objective}
                onChange={(e) => {
                  const newObjectives = [...objectives]
                  newObjectives[index] = e.target.value
                  setObjectives(newObjectives)
                }}
              />
              <button type="button" className="ml-2 text-red-500 flex-shrink-0" onClick={() => removeObjective(index)} >
                <Trash2 className="w-5 h-5" />
              </button>
              </div>
            </div>
          ))}

          <div>
            <button type="button" className="w-full border rounded border-dashed border-gray-500 bg-gray-100 p-2 flex justify-center items-center text-indigo-600 font-medium mt-4" onClick={addObjective}>
              <Plus className="w-5 h-5 mr-1" />
              Add Objective
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-between mt-10 mb-6 gap-3 sm:flex-nowrap">
        <button
          type="button"
          className="w-full sm:w-[20%] px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium"
          disabled
        >
          Previous
        </button>
        <button
          type="submit"
          className="w-full sm:w-[80%] px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default Creation1
