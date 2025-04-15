import Link from "next/link";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../../../app/hooks";
import {
  useGetAllInstructorPageQuery,
  useGetAllPageQuery,
  useUpdateModulePageMutation,
} from "../../../../../../../feature/api/dashboardApi";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

const pageCategory = ({
  id,
  setShowModal,
}: {
  id: string;
  setShowModal: any;
}) => {
  const { id: userId, roles } = useAppSelector((state) => state.auth.user);
  const { data, isSuccess, isError, isLoading } = useGetAllPageQuery({});
  const {
    data: instructorPageData,
    isSuccess: instructorPageIsSuccess,
    isError: instructorPageIsError,
    isLoading: instructorPageIsLoading,
  } = useGetAllInstructorPageQuery({});
  const [
    updateModulePage,
    {
      error,
      data: moduleData,
      isLoading: loadingModule,
      isSuccess: moduleisSuccess,
    },
  ] = useUpdateModulePageMutation();
  const [pageId, setPageId] = useState("");
  const [activeClass, setactiveClass] = useState("");

  const clickPage = (id: string) => {
    setPageId(id);
    setactiveClass(id);
  };

  const update = () => {
    updateModulePage({ id, pages: pageId });
    //   console.log(assignmentId,id)
  };
  //console.log(data)
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (moduleisSuccess) {
      toast.success("Module has Updated Successfully!");
      //  console.log(data);
      setShowModal(false);
    }
  }, [isError, moduleisSuccess]);
  return (
    <>
      <div>
        <div>
          <p className="text-[#8A92A6] text-[16px] mb-3 leading-[19px]">
            Select the page you want to associate with this module or add an
            page by selecting “Create Page.
          </p>
        </div>
        <div
          className="bg-[#fff] p-3 px-5 rounded"
          style={{ boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.15)" }}
        >
          <Link href={`/dashboard/page-creation`}>
            <h2 className="cursor-pointer text-[#3A57E8] underline font-medium mb-2 text-base">
              Create Page
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
                  data?.data?.quazes &&
                  data.data.quazes.length > 0 ? (
                  data.data.quazes.map(
                    (
                      {
                        title,
                        description,
                        id,
                      }: { description: string; title: string; id: string },
                      index: string
                    ) => (
                      <li
                        key={index}
                        onClick={() => clickPage(id)}
                        className={`${
                          activeClass == id && "text-[#3A57E8]"
                        } hover:text-[#da7b4f] cursor-pointer`}
                      >
                        Page {index + 1} - {title}
                      </li>
                    )
                  )
                ) : (
                  <div className="h-[50vh] flex justify-center items-center">
                    <p>No data available!</p>
                  </div>
                ))}

              {roles.includes("instructor") &&
                (instructorPageIsLoading ? (
                  <div>Loading....</div>
                ) : instructorPageIsError ? (
                  <div>Error....</div>
                ) : instructorPageIsSuccess &&
                  instructorPageData?.data?.quazes &&
                  instructorPageData.data.quazes.length > 0 ? (
                  instructorPageData.data.quazes.map(
                    (
                      {
                        title,
                        description,
                        id,
                      }: { description: string; title: string; id: string },
                      index: string
                    ) => (
                      <li
                        key={index}
                        onClick={() => clickPage(id)}
                        className={`${
                          activeClass == id && "text-[#3A57E8]"
                        } hover:text-[#da7b4f] cursor-pointer`}
                      >
                        Page {index + 1} - {title}
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
          className="text-gray-500 flex bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          {loadingModule ? <ButtonLoader /> : "Add Item"}
        </button>
      </div>
    </>
  );
};

export default pageCategory;
