import Link from "next/link";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../../../app/hooks";
import {
  useAllAssignmentInstructorQuery,
  useGetAssignmentQuery,
  useUpdateModuleMutation,
} from "../../../../../../../feature/api/dashboardApi";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

const AssignmentCategory = ({
  id,
  setShowModal,
}: {
  id: string;
  setShowModal: any;
}) => {
  const { id: userId, roles } = useAppSelector((state) => state.auth.user);
  const {
    data: instructorAssignmentData,
    isSuccess: instructorAssignmentSuccess,
    isError: instructorAssignmentIsError,
    isLoading: instructorAssignmentLoading,
  } = useAllAssignmentInstructorQuery(userId);
  const { data, isSuccess, isError, isLoading } = useGetAssignmentQuery({});
  const [
    updateModule,
    {
      error,
      data: moduleData,
      isLoading: loadingModule,
      isSuccess: moduleisSuccess,
    },
  ] = useUpdateModuleMutation();
  const [assignmentId, setassignmentId] = useState("");
  const [activeClass, setactiveClass] = useState("");

  const clickAssignment = (id: string) => {
    setassignmentId(id);
    setactiveClass(id);
  };

  const update = () => {
    updateModule({ id, assignments: assignmentId });
    // console.log(assignmentId,id)
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (moduleisSuccess) {
      toast.success("Module has updated Successfully!");
      // console.log(data);
      setShowModal(false);
    }
  }, [isError, moduleisSuccess]);
  return (
    <>
      <div>
        <div>
          <p className="text-[#8A92A6] text-[16px] mb-3 leading-[19px]">
            Select the assignment you want to associate with this module or add
            an assignment by selecting “Create Assignment”.
          </p>
        </div>
        <div
          className="bg-[#fff] p-3 px-5 rounded"
          style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
        >
          <Link href={`/dashboard/assignment-creation`}>
            <h2 className="cursor-pointer text-[#3A57E8] underline font-medium mb-2 text-base">
              Create Assignment
            </h2>
          </Link>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#8A92A6] text-[15px] mb-2 h-[12rem] overflow-y-scroll	">
              {roles.includes("admin") &&
                (isLoading ? (
                  <div>Loading....</div>
                ) : isError ? (
                  <div>Error....</div>
                ) : isSuccess &&
                  data?.data?.assignments &&
                  data.data.assignments.length > 0 ? (
                  data.data.assignments.map(
                    (
                      { name, id }: { name: string; id: string },
                      index: string
                    ) => (
                      <li
                        key={id}
                        onClick={() => clickAssignment(id)}
                        className={`${
                          activeClass == id && "text-[#3A57E8]"
                        } hover:text-[#da7b4f] cursor-pointer`}
                      >
                        Assignment {index + 1} - {name}
                      </li>
                    )
                  )
                ) : (
                  <div className="h-[50vh] flex justify-center items-center">
                    <p>No data available!</p>
                  </div>
                ))}
              {roles.includes("instructor") &&
                (instructorAssignmentLoading ? (
                  <div>Loading....</div>
                ) : instructorAssignmentIsError ? (
                  <div>Error....</div>
                ) : instructorAssignmentSuccess &&
                  instructorAssignmentData?.data?.assignments &&
                  instructorAssignmentData.data.assignments.length > 0 ? (
                  instructorAssignmentData.data.assignments.map(
                    (
                      { name, id }: { name: string; id: string },
                      index: string
                    ) => (
                      <li
                        key={index}
                        onClick={() => clickAssignment(id)}
                        className={`${
                          activeClass == id && "text-[#3A57E8]"
                        } hover:text-[#da7b4f] cursor-pointer`}
                      >
                        Assignment {index + 1} - {name}
                      </li>
                    )
                  )
                ) : (
                  <div className="h-[50vh] flex justify-center items-center">
                    <p>No data available!</p>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 p-4">
        <label className="font-medium text-base mb-2">Indentation</label>
        <select
          className="w-[16rem] h-[3rem] mb-2 border-none"
          style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
        >
          <option>Indent 1 Level</option>
          <option>Indent 2 Level</option>
          <option>Indent 4 Level</option>
        </select>
      </div>
      <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          onClick={() => setShowModal(false)}
          data-modal-hide="staticModal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
        <button
          disabled={loadingModule}
          onClick={update}
          data-modal-hide="staticModal"
          type="button"
          className="flex text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          {loadingModule ? <ButtonLoader /> : "Add Item"}
        </button>
      </div>
    </>
  );
};

export default AssignmentCategory;
