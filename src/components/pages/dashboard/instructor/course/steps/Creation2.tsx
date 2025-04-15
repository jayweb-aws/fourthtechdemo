"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks"
import { useCreateCourseMutation } from "../../../../../../feature/api/dashboardApi"
import { useSinglePhotoUploadMutation } from "../../../../../../feature/api/mediaUploadApi"
import { Course } from "../../../../../../feature/course/courseSlice"
import { InputErrorMessage } from "../../../../../utils/error"
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader"
import type { StepPropss } from "./Creation1"
import { RefreshCw, Trash2, Upload } from "lucide-react"

type props = {
  courseImage: string
  videoUrl: string
  files: any
}

const Creation2 = (props: StepPropss) => {
  const { setStep, setFormData, formData, step } = props
  const [filePreview, setFilePreview] = useState("")
  const [picsname, setpicsname] = useState("")
  const dispatch = useAppDispatch()
  const [
    singlePhotoUpload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation()
  const [createCourse, { error, data: courseData, isLoading, isSuccess, isError }] = useCreateCourseMutation()
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<props>({
    defaultValues: {
      videoUrl: formData.videoUrl,
    },
  })
  const {
    course: { id, title },
  } = useAppSelector((state) => state.course)

  const onPrev = () => {
    setStep(step - 1)
  }

  const ImageGet = (e: any) => {
    const file = e.target.files
    if (!file || file.length === 0) return

    setpicsname(file[0].name)
    if (file[0].type.substr(0, 5) === "image") {
      const formData = new FormData()
      formData.append("image", file[0])
      singlePhotoUpload(formData)
    } else {
      toast.error("Select a valid image.")
    }
  }

  const handleDeleteImage = () => {
    setFilePreview("")
    setpicsname("")
    setValue("files", null)
  }

  const handleRetryUpload = () => {
    document.getElementById("fileUpload")?.click()
  }

  useEffect(() => {
    if (isUploadError) {
      toast.error((uploadError as any).data.message)
    } else if (isUploadSuccess) {
      setFilePreview(uploadData.data.image)
      toast.success("Upload successful")
    }
  }, [isUploadError, isUploadSuccess])

  const submitSecondStep = (data: props) => {
    // setStep(3)
    if (isUploadSuccess) {
      setFormData((prev: object) => ({ ...prev, ...data }))
      const userData = { ...formData, ...data }
      if (filePreview) {
        userData.courseImage = filePreview
      }
      setFormData((prev: object) => ({ ...prev, ...userData }))
      if (id == "") {
        createCourse(userData)
      }
      id && setStep(3)
      if (isSuccess) {
        setStep(3)
      }
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error("Course Has Added Error")
    } else if (isSuccess) {
      const { id, title } = courseData.data.course
      dispatch(Course({ id, title }))
      toast.success("Course has Added Successfully!")
      setStep(3)
    }
  }, [isError, isSuccess])

  return (
    <div className="container px-4">
      <form onSubmit={handleSubmit(submitSecondStep)}>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Courses Media</h2>
          <p className="text-gray-500 mt-1">Provide users with an overview of the course you are offering</p>

          <div className="mt-8 space-y-6 border border-gray-200 rounded-lg p-6">
            {/* Video URL Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Video URL</label>
              <div className="relative">
                <input
                  {...register("videoUrl", { required: false })}
                  placeholder="Enter your video URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                {watch("videoUrl") && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                  </div>
                )}
              </div>
              {errors.videoUrl && <InputErrorMessage message="Please enter a valid video URL" />}
            </div>

            <div className="text-center text-sm text-gray-500">or</div>

            {/* File Upload Area or Preview */}
            <div className="space-y-2">
              {filePreview ? (
                <div className="relative rounded-md overflow-hidden">
                  {/* Image Preview */}
                  <div className="bg-black aspect-[16/9] relative">
                    <img
                      src={filePreview || "/placeholder.svg"}
                      alt="Course thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-white text-4xl font-bold">
                        Product-Led
                        <br />
                        Growth
                      </h2>
                    </div>

                    {/* Control buttons */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        type="button"
                        onClick={handleRetryUpload}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                      >
                        <RefreshCw className="h-4 w-4 text-gray-700" />
                      </button>
                      <button
                        type="button"
                        onClick={handleDeleteImage}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="border border-dashed border-gray-300 rounded-md bg-gray-50 p-12 text-center cursor-pointer"
                  onClick={() => document.getElementById("fileUpload")?.click()}
                >
                  <div className="flex flex-col items-center">
                    <div className="p-3 bg-indigo-100 rounded-full mb-4">
                      <Upload className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium text-indigo-600">Click to upload</p>
                    <p className="text-sm text-gray-500">or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-2">Supported formats: MP4, WebM, OGG</p>
                  </div>
                  <input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    {...register("files", { required: !filePreview })}
                    onChange={ImageGet}
                  />
                </div>
              )}
              {uploadLoading && <p className="text-indigo-600 text-sm">Uploading...</p>}
              {errors.files && !filePreview && <InputErrorMessage message="Please upload a file" />}
            </div>
          </div>

          {/* Navigation Buttons */}
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
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Creation2







