"use client"

import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useCreateSlideMutation } from "../../../../../../../feature/api/dashboardApi"
import { useSingleFileUploadMutation } from "../../../../../../../feature/api/mediaUploadApi"
import { X, ChevronDown, Upload, Plus } from "lucide-react"
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader"

const SlideCategory = ({
  id,
  setShowModal,
}: {
  id: string
  setShowModal: any
}) => {
  const [localFile, setlocalFile] = useState("")
  const [localFileKey, setlocalFileKey] = useState("")
  const [title, setTitle] = useState("")
  const [indentation, setIndentation] = useState("Don't Indent")
  const [isCreateMode, setIsCreateMode] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState("")

  const [
    singleFileupload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSingleFileUploadMutation()

  const [createSlide, { isError, error, data, isLoading, isSuccess }] = useCreateSlideMutation()

  // Sample slides data (would come from API in real implementation)
  const sampleSlides = [
    { id: "1", title: "Slide 1 - The Digital World with Eye Shut" },
    { id: "2", title: "Slide 2- What's Going on in there?" },
    { id: "3", title: "Slide 3 - The web" },
    { id: "4", title: "Slide 4 - Reading Programs and Privacy Issues" },
  ]

  const fileGet = async (e: any) => {
    const file = e.target.files
    if (file && file.length > 0 && file["0"]) {
      const formData = new FormData()
      formData.append("file", file["0"])
      singleFileupload(formData)
    } else if (file && file.length > 0 && file["0"].type.substr(0, 5) !== "file") {
      // console.log("error");
    }
  }

  useEffect(() => {
    if (isUploadError) {
      toast.error("File upload failed")
    } else if (isUploadSuccess) {
      setlocalFile(uploadData.data.fileUrl)
      setlocalFileKey(uploadData.data.key)
      toast.success("Upload file success")
    }
  }, [isUploadError, isUploadSuccess, uploadData])

  const slideSubmit = (e: any) => {
    e.preventDefault()
    createSlide({
      module: id,
      fileUrl: localFile,
      key: localFileKey,
      title: title,
    })
  }

  useEffect(() => {
    if (isError) {
      toast.error("Slide Module has added error")
    } else if (isSuccess) {
      setShowModal(false)
      toast.success("Slide Module has Added Successfully!")
    }
  }, [isError, isSuccess, setShowModal])

  return (
    <div className="rounded-lg max-w-2xl w-full mx-auto">
      <div className="p-3">

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Select the slide you want to associate with this module or add an slide by selecting{" "}
          <span className="text-indigo-600">"Upload Slide"</span>
        </p>

        {/* Slide Selection */}
        
          <div className="border rounded-lg overflow-hidden">
            {sampleSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedSlide === slide.id ? "bg-indigo-50 border-l-4 border-indigo-500" : ""} ${index !== 0 ? "border-t" : ""}`}
                onClick={() => setSelectedSlide(slide.id)}
              >
                <p className={`${selectedSlide === slide.id ? "text-indigo-600" : "text-gray-700"}`}>{slide.title}</p>
              </div>
            ))}
          </div>
        

        {/* Create Slide Button */}
      
          <div className="flex flex-col items-center">
            {/* <button
              onClick={() => setIsCreateMode(true)}
              className="flex items-center text-indigo-600 font-medium hover:text-indigo-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Create Slide
            </button> */}
            <div className="text-gray-400 my-2">or</div>
          </div>

        {/* Upload Form */}
        {/* {(isCreateMode || !sampleSlides.length) && ( */}
          <div className="border rounded-lg p-6 mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Slide name</label>
              <input
                type="text"
                placeholder="Enter your slide name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <div className="flex justify-center mb-2">
                <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-indigo-500" />
                </div>
              </div>
              <p className="text-indigo-600 font-medium">Click to upload</p>
              <p className="text-gray-500">or drag and drop</p>
              <p className="text-gray-400 text-sm mt-2">Supported format: docx, pdf, zip, ppt</p>
              <input id="file-upload" type="file" className="hidden" onChange={fileGet} />
              {uploadLoading && <p className="mt-2 text-indigo-600">Uploading...</p>}
              {isUploadSuccess && <p className="mt-2 text-green-600">Upload completed</p>}
            </div>
          </div>
        {/* )} */}

        {/* Indentation */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Indentation</label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={indentation}
              onChange={(e) => setIndentation(e.target.value)}
            >
              <option value="Don't Indent">Don't Indent</option>
              <option value="Indent">Indent</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end p-6 border-t gap-4">
        <button
          onClick={() => setShowModal(false)}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={slideSubmit}
          disabled={isLoading}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-70 flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? <ButtonLoader /> : "Add Content"}
        </button>
      </div>
    </div>
  )
}

export default SlideCategory
