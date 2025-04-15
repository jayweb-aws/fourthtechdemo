import React, { useState } from "react";
import Image from "next/image";
//component
import { ChevronDown, Plus, X } from "lucide-react"
import AssignmentCategory from "./AssignmentCategory";
import VideoCategory from "./VideoCategory";
import SlideCategory from "./SlideCategory";
import QuizCategory from "./QuizCategory";
import PageCategory from "./page-category";

type props = {
  setShowModal: any;
  id: string;
  index: string;
  name: string;
};

//icon
import closeIcon from "../../../../../../../assets/close.png";

const PopupModal = ({ setShowModal, id, index, name }: props) => {
  const [activeTab, setactiveTab] = useState("assignment");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const handleActive = (value: string) => {
    if (value === "assignment" || value === "video" || value === "slide" || value === "quiz" || value === "page") {
      setactiveTab(value)
      setShowCategoryDropdown(false)
    }
  }

  return (
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className="bg-[#474b4cd4] justify-center items-center flex fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {
            //Modal content }
          }
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {
              //!-- Modal header -->}
            }
            <div className="flex items-center justify-between p-6">
              <h3 className="text-xl font-medium text-gray-800">
                Add Content to Introduction of {name} Module {Number.parseInt(index) + 1}
              </h3>
              <button type="button" onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
            <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Add category</label>
            <div className="relative">
              <div
                className="w-full p-3 text-gray-800 bg-white border border-gray-200 rounded-md flex justify-between items-center cursor-pointer"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <span>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>

              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                  <div
                    className={`p-4 cursor-pointer ${activeTab === "assignment" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => handleActive("assignment")}
                  >
                    Assignment
                  </div>
                  <div
                    className={`p-4 cursor-pointer ${activeTab === "video" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => handleActive("video")}
                  >
                    Video
                  </div>
                  <div
                    className={`p-4 cursor-pointer ${activeTab === "slide" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => handleActive("slide")}
                  >
                    File
                  </div>
                  <div
                    className={`p-4 cursor-pointer ${activeTab === "quiz" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => handleActive("quiz")}
                  >
                    Quiz
                  </div>
                  <div
                    className={`p-4 cursor-pointer ${activeTab === "page" ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => handleActive("page")}
                  >
                    Page
                  </div>
                  {/* <div
                    className="p-4 text-indigo-600 hover:bg-gray-50 cursor-pointer border-t border-gray-200 flex items-center justify-center"
                    onClick={() => {
                      // Handle adding a new category
                      setShowCategoryDropdown(false)
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
                  </div> */}
                </div>
              )}
            </div>
          </div>
              <div>
                {activeTab == "assignment" ? (
                  <AssignmentCategory id={id} setShowModal={setShowModal} />
                ) : activeTab == "video" ? (
                  <VideoCategory id={id} setShowModal={setShowModal} />
                ) : activeTab == "slide" ? (
                  <SlideCategory id={id} setShowModal={setShowModal} />
                ) : activeTab == "quiz" ? (
                  <QuizCategory id={id} setShowModal={setShowModal} />
                ) : (
                  activeTab == "page" && (
                    <PageCategory id={id} setShowModal={setShowModal} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupModal;
