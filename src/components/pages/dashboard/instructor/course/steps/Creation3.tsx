import React, { useState } from "react";
import Image from "next/image";
import { useForm, useFormContext } from "react-hook-form";
import { InputErrorMessage } from "../../../../../utils/error";
import { StepPropss } from "./Creation1";
import Module from "./popup/module/Module";
import { useAppSelector } from "../../../../../../app/hooks";
//icon
import plus from "../../../../../../assets/plus.png";
import plusIconBg from "../../../../../../assets/Group34917.png";
import { Spinner } from "flowbite-react";
import { Plus } from "lucide-react"

//component
import PopupModal from "./popup/PopupModal";
import AddModuleModal from "./popup/module/AddModuleModal";
import { useGetCourseModuleQuery } from "../../../../../../feature/api/dashboardApi";
import EditModuleModal from "./popup/module/EditModuleModal";

const Creation3 = (props: StepPropss) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    course: { id, title },
  } = useAppSelector((state) => state.course);
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false);
  const { setStep, setFormData, formData, step } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { isError, data, error, isLoading, isSuccess } =
    useGetCourseModuleQuery(id);
  const [EditshowModal, setEditShowModal] = useState<boolean>(false);
  const [ModuleId, setModuleId] = useState("");
  const [moduleName, setmoduleName] = useState("");
  //console.log(data);

  const submitThirdStep = () => {
    setStep(4);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <>
      <AddModuleModal
        show={moduleModalShow}
        setShowModal={setmoduleModalShow}
      />
      {EditshowModal && (
        <EditModuleModal
          moduleName={moduleName}
          id={ModuleId}
          EditshowModal={EditshowModal}
          setEditShowModal={setEditShowModal}
        />
      )}
      <form onSubmit={handleSubmit(submitThirdStep)} className="container mx-auto">
      <div className="mt-8 px-4 md:px-6">
          <h2 className="text-3xl font-medium text-gray-800">Curriculum</h2>
          <p className="text-gray-600 mt-1">Provide users with an overview of the course you are offering</p>

          <div className="">
            <div className="flex justify-between items-center mt-6">
              <div className="flex-grow"></div>
              <button
                onClick={() => setmoduleModalShow(true)}
                type="button"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium border rounded border-gray-200 p-2 justify-center"
              >
                <Plus className="h-5 w-5" />
                Add Module
              </button>
            </div>

            <div className="mt-4 border border-gray-200 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner aria-label="Loading modules" />
              </div>
            ) : isSuccess && data.data.modules.length > 0 ? (
              <div className="w-full space-y-4">
                {data.data.modules.map(({ id, pages, name, assignments, quizzes, videos, slides, duration }, index) => (
                  <Module
                    pages={pages}
                    key={id}
                    setmoduleName={setmoduleName}
                    duration={duration}
                    setModuleId={setModuleId}
                    setEditShowModal={setEditShowModal}
                    id={id}
                    name={name}
                    index={index}
                    assignments={assignments}
                    quizzes={quizzes}
                    videos={videos}
                    slides={slides}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No Module Created</p>
            )}
          </div>

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
        </div>
      </form>
    </>
  );
};

export default Creation3;





{/* <div className="flex justify-between gap-2">
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
              </div> */}
