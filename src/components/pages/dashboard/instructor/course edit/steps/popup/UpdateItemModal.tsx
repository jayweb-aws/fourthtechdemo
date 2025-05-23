import React, { useState } from "react";
import Image from "next/image";

//component
import AssignmentCategory from "./AssignmentCategory";
import VideoCategoryEdit from "./VideoCategoryEdit";
import SlideCategoryEdit from "./SlideCategoryEdit";
import QuizCategory from "./QuizCategory";
import PageCategory from "./page-category";

type props = {
  setShowModal: any;
  moduleId: string;
  item: any;
  type: string;
};

//icon

const UpdateItemModal = ({ setShowModal, moduleId, item, type }: props) => {
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
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Update {item.name || item.title}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div>
                {type == "assignment" ? (
                  <AssignmentCategory
                    id={moduleId}
                    setShowModal={setShowModal}
                  />
                ) : type == "video" ? (
                  <VideoCategoryEdit item={item} setShowModal={setShowModal} />
                ) : type == "slide" ? (
                  <SlideCategoryEdit item={item} setShowModal={setShowModal} />
                ) : type == "quiz" ? (
                  <QuizCategory id={moduleId} setShowModal={setShowModal} />
                ) : (
                  type == "page" && (
                    <PageCategory id={moduleId} setShowModal={setShowModal} />
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

export default UpdateItemModal;
