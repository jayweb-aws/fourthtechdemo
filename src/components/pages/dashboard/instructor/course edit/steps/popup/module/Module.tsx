import Image from "next/image";
import { useState, useEffect } from "react";

//icon
import plusIconBg from "../../../../../../../../assets/Group34917.png";
import closeIcon from "../../../../../../../../assets/closeIcon.png";
import editIcon from "../../../../../../../../assets/editIcon.png";
import minus from "../../../../../../../../assets/minus.png";
import plus from "../../../../../../../../assets/plus.png";
import PopupModal from ".././PopupModal";
import DeleteModule from "./deleteModule";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import UpdateItemModal from "../UpdateItemModal";
import DeleteItemConfirmModal from "../DeleteItemConfirmModal";

export enum ItemType {
  ASSIGNMENT = "assignment",
  QUIZ = "quiz",
  VIDEO = "video",
  SLIDE = "slide",
  PAGE = "page",
}

const Module = ({
  setmoduleName,
  pages,
  duration,
  setModuleId,
  setEditShowModal,
  id,
  name,
  index,
  assignments,
  quizzes,
  videos,
  slides,
}: {
  pages: string[];
  setmoduleName: Function;
  duration: number;
  setEditShowModal: Function;
  setModuleId: any;
  id: string;
  name: string;
  index: string;
  assignments: string[];
  quizzes: string[];
  videos: string[];
  slides: string[];
}) => {
  const [ModuleTab, setModuleTab] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setshowDeleteModal] = useState<boolean>(false);
  const [seletedModule, setseletedModule] = useState("");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState({});
  const [itemEditType, setItemEditType] = useState("");
  const [itemDeleting, setItemDeleting] = useState<any>();
  const [itemDeletingType, setItemDeletingType] = useState<ItemType>();
  const [showDeleteItemModal, setShowDeleteItemModal] =
    useState<boolean>(false);

  const handleClose = () => {
    setshowDeleteModal(false);
    setseletedModule("");
  };

  const handleEdit = () => {
    setEditShowModal(true);
    setModuleId(id);
    setmoduleName(name);
  };

  const handleDeleteModule = (id: string) => {
    setshowDeleteModal(true);
    setseletedModule(id);
  };

  const updateItem = (e: any, item: any, type: string) => {
    e.preventDefault();
    setItemEditType(type);
    setItemEdit(item);
    setShowEditModal(true);
  };

  const handleDeleteItem = (e: any, item: any, type: ItemType) => {
    e.preventDefault();
    setItemDeletingType(type);
    setItemDeleting(item);
    setShowDeleteItemModal(true);
  };

  return (
    <>
      {showDeleteItemModal && (
        <DeleteItemConfirmModal
          show={showDeleteItemModal}
          id={itemDeleting.id}
          type={itemDeletingType}
          handleClose={() => setShowDeleteItemModal(false)}
        />
      )}
      {showEditModal && (
        <UpdateItemModal
          setShowModal={setShowEditModal}
          moduleId={id}
          item={itemEdit}
          type={itemEditType}
        />
      )}
      {showModal && (
        <PopupModal
          name={name}
          index={index}
          id={id}
          setShowModal={setShowModal}
        />
      )}

      <DeleteModule
        show={showDeleteModal}
        handleClose={handleClose}
        id={seletedModule}
      />
      <div
        className="flex justify-between items-center bg-[#F9F9F9] mb-4 p-3"
        style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
      >
        <h2 className="text-[15px] font-medium font-nunito">
          Module {index + 1}: {name}
        </h2>
        <div className="flex items-center">
          <button
            type="button"
            className="flex justify-center h-[24px] items-center"
            onClick={() => setModuleTab(!ModuleTab)}
          >
            {ModuleTab ? (
              <Image src={minus} className="w-8" width={23} alt="" />
            ) : (
              <Image src={plus} className="w-8" width={21} height={19} alt="" />
            )}
          </button>
        </div>
      </div>
      {ModuleTab && (
        <div>
          <div
            className="rounded"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-between bg-[#F9F9F9] p-3">
              <div>
                <h3 className="text-base font-medium font-nunito">
                  Module {index + 1}: {name}
                </h3>
                <span className="text-sm font-normal text-[#8A92A6]">
                  {videos.length} Videos
                </span>{" "}
                <span className="text-[#8A92A6]">|</span>{" "}
                <span className="text-sm font-normal text-[#8A92A6]">
                  {duration}mins
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <div
                  className="bg-[#D5EBDF] rounded-full w-[32px] h-[32px] flex justify-center items-center cursor-pointer"
                  onClick={() => handleEdit()}
                >
                  <Image src={editIcon} width={18} height={16} alt="" />
                </div>
                <div className="bg-[#F2D6D3] rounded-full w-[32px] h-[32px] flex justify-center items-center cursor-pointer">
                  <Image
                    onClick={() => handleDeleteModule(id)}
                    src={closeIcon}
                    width={14}
                    height={13}
                    alt="delete"
                  />
                </div>
              </div>
            </div>

            <div className="p-4">
              {assignments.map((item: any, i) => (
                <div key={item._id} className="mb-5 flex justify-between">
                  <div className="flex items-center mb-1">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 rounded-full h-5"
                    />
                    <label className="ml-2 text-base font-normal text-gray-900 dark:text-gray-300">
                      Assignment - {item.name}
                    </label>
                  </div>
                  <div className="flex gap-x-4">
                    <BiEditAlt
                      onClick={(e) => updateItem(e, item, ItemType.ASSIGNMENT)}
                      cursor={"pointer"}
                      color="blue"
                      size={"18px"}
                    />
                    <AiOutlineDelete
                      onClick={(e) =>
                        handleDeleteItem(e, item, ItemType.ASSIGNMENT)
                      }
                      cursor={"pointer"}
                      color="red"
                      size={"18px"}
                    />
                  </div>
                </div>
              ))}
              {quizzes.map((item: any, i) => (
                <div key={item._id} className="mb-5 flex justify-between">
                  <div className="flex items-center mb-1">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 rounded-full h-5"
                    />
                    <label className="ml-2 text-base font-normal text-gray-900 dark:text-gray-300">
                      Quiz - {item.title}
                    </label>
                  </div>
                  <div className="flex gap-x-4">
                    <BiEditAlt
                      onClick={(e) => updateItem(e, item, ItemType.QUIZ)}
                      cursor={"pointer"}
                      color="blue"
                      size={"18px"}
                    />
                    <AiOutlineDelete
                      onClick={(e) => handleDeleteItem(e, item, ItemType.QUIZ)}
                      cursor={"pointer"}
                      color="red"
                      size={"18px"}
                    />
                  </div>
                </div>
              ))}
              {videos.map((item: any, i) => (
                <div key={item._id} className="mb-5 flex justify-between">
                  <div className="flex items-center mb-1">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 rounded-full h-5"
                    />
                    <label className="ml-2 text-base font-normal text-gray-900 dark:text-gray-300">
                      Video - {item.topicName}
                    </label>
                  </div>
                  <div className="flex gap-x-4">
                    <BiEditAlt
                      onClick={(e) => updateItem(e, item, ItemType.VIDEO)}
                      cursor={"pointer"}
                      color="blue"
                      size={"18px"}
                    />
                    <AiOutlineDelete
                      onClick={(e) => handleDeleteItem(e, item, ItemType.VIDEO)}
                      cursor={"pointer"}
                      color="red"
                      size={"18px"}
                    />
                  </div>
                </div>
              ))}
              {slides.map((item: any, i) => (
                <div key={item._id} className="mb-5 flex justify-between">
                  <div className="flex items-center mb-1">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 rounded-full h-5"
                    />
                    <label className="ml-2 text-base font-normal text-gray-900 dark:text-gray-300">
                      File - {item.title}
                    </label>
                  </div>
                  <div className="flex gap-x-4">
                    <BiEditAlt
                      onClick={(e) => updateItem(e, item, ItemType.SLIDE)}
                      cursor={"pointer"}
                      color="blue"
                      size={"18px"}
                    />
                    <AiOutlineDelete
                      onClick={(e) => handleDeleteItem(e, item, ItemType.SLIDE)}
                      cursor={"pointer"}
                      color="red"
                      size={"18px"}
                    />
                  </div>
                </div>
              ))}
              {pages.map((item: any, i) => (
                <div key={item._id} className="mb-5 flex justify-between">
                  <div className="flex items-center mb-1">
                    <input
                      checked
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 rounded-full h-5"
                    />
                    <label className="ml-2 text-base font-normal text-gray-900 dark:text-gray-300">
                      Pages - {item.title}
                    </label>
                  </div>
                  <div className="flex gap-x-4">
                    <BiEditAlt
                      onClick={(e) => updateItem(e, item, ItemType.PAGE)}
                      cursor={"pointer"}
                      color="blue"
                      size={"18px"}
                    />
                    <AiOutlineDelete
                      onClick={(e) => handleDeleteItem(e, item, ItemType.PAGE)}
                      cursor={"pointer"}
                      color="red"
                      size={"18px"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 mb-6">
            <button
              type="button"
              className="xsm:w-full lg:w-[9rem] justify-center bg-[#EBEEFD] border border-[#3A57E8] px-3 py-2 rounded flex items-center gap-[6px]"
              onClick={() => setShowModal(true)}
            >
              <Image src={plusIconBg} alt="" />
              Add Content
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Module;
