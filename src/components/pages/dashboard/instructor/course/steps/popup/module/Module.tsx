"use client"
import { useState } from "react"
import Image from "next/image";
import closeIcon from "../../../../../../../../assets/Trash.svg";
import editIcon from "../../../../../../../../assets/Pen.svg";

import PopupModal from ".././PopupModal"
import DeleteModule from "./deleteModule"

const Module = ({
  setmoduleName,
  setModuleId,
  setEditShowModal,
  id,
  name,
  index,
  assignments,
  quizzes,
  videos,
  slides,
  duration,
  pages,
}: {
  pages: string[]
  setmoduleName: Function
  duration: number
  setEditShowModal: Function
  setModuleId: any
  id: string
  name: string
  index: string
  assignments: string[]
  quizzes: string[]
  videos: string[]
  slides: string[]
}) => {

  const isEmpty =
    assignments.length === 0 &&
    quizzes.length === 0 &&
    videos.length === 0 &&
    slides.length === 0 &&
    pages.length === 0

  
  const [ModuleTab, setModuleTab] = useState(isEmpty)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showDeleteModal, setshowDeleteModal] = useState<boolean>(false)
  const [seletedModule, setseletedModule] = useState("")

  const handleClose = () => {
    setshowDeleteModal(false)
    setseletedModule("")
  }

  const handleEdit = () => {
    setEditShowModal(true)
    setModuleId(id)
    setmoduleName(name)
  }

  const handleDeleteModule = (id: string) => {
    setshowDeleteModal(true)
    setseletedModule(id)
  }

  return (
    <>
      {showModal && <PopupModal name={name} index={index} id={id} setShowModal={setShowModal} />}

      <DeleteModule show={showDeleteModal} handleClose={handleClose} id={seletedModule} />

      <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white">
        {/* Module Header */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">
              Module {index + 1}: {name}
            </h2>
            <div className="flex gap-2">
            <div
              className="bg-white border border-gray-200 rounded-md p-1.5 flex items-center justify-center hover:bg-gray-50"
              onClick={() => handleEdit()}
            >
              <Image src={editIcon} width={21} height={21} alt="" />
            </div>
            <div
              className="bg-white border border-gray-200 rounded-md p-1.5 flex items-center justify-center hover:bg-gray-50"
              onClick={() => handleDeleteModule(id)}
            >
              <Image src={closeIcon} width={21} height={21} alt="delete" />
            </div>
          </div>
          </div>

          <div className="flex items-center mt-2 text-sm text-gray-500">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M3.05493 11.0549C3.01731 11.3664 3 11.6814 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.3345 3 6.93964 4.15875 5.29168 6"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {videos.length} lectures
            <span className="mx-2">•</span>
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {duration} minutes
          </div>
        </div>

        {/* Module Content */}
        {ModuleTab ? (
          <div className="border-t border-gray-200 p-5">
            {isEmpty ? (
              <div className="text-center py-8 text-gray-500">No lecture uploaded</div>
            ) : (
              <div className="space-y-4">
                {assignments.map((item: any) => (
                  <div className="flex items-center" key={item._id}>
                    <input
                      checked
                      id={`assignment-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 rounded-full text-blue-600"
                    />
                    <label className="ml-3 text-gray-700" htmlFor={`assignment-${item._id}`}>
                      Assignment - {item.name}
                    </label>
                  </div>
                ))}
                {quizzes.map((item: any) => (
                  <div className="flex items-center" key={item._id}>
                    <input
                      checked
                      id={`quiz-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 rounded-full text-blue-600"
                    />
                    <label className="ml-3 text-gray-700" htmlFor={`quiz-${item._id}`}>
                      Quiz - {item.title}
                    </label>
                  </div>
                ))}
                {videos.map((item: any) => (
                  <div className="flex items-center" key={item._id}>
                    <input
                      checked
                      id={`video-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 rounded-full text-blue-600"
                    />
                    <label className="ml-3 text-gray-700" htmlFor={`video-${item._id}`}>
                      Video - {item.topicName}
                    </label>
                  </div>
                ))}
                {slides.map((item: any) => (
                  <div className="flex items-center" key={item._id}>
                    <input
                      checked
                      id={`slide-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 rounded-full text-blue-600"
                    />
                    <label className="ml-3 text-gray-700" htmlFor={`slide-${item._id}`}>
                      File - {item.title}
                    </label>
                  </div>
                ))}
                {pages.map((item: any) => (
                  <div className="flex items-center" key={item._id}>
                    <input
                      checked
                      id={`page-${item._id}`}
                      type="checkbox"
                      className="w-4 h-4 rounded-full text-blue-600"
                    />
                    <label className="ml-3 text-gray-700" htmlFor={`page-${item._id}`}>
                      Pages - {item.title}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-indigo-600 font-medium py-3 px-4 rounded-md transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12H19" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add Content
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t border-gray-200 p-5 text-center">
            <button
              type="button"
              onClick={() => setModuleTab(true)}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-indigo-600 font-medium py-3 px-4 rounded-md transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12H19" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Add Content
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Module
