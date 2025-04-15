import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
//import DOMPurify from "dompurify";
import toast from 'react-hot-toast';
import { useCreatePageMutation } from "../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

export default function PageCreation() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [createPage, { error, data, isLoading, isSuccess, isError }] =
    useCreatePageMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [question, setValue] = useState("");
  const handlepageSubmit = (data: any) => {
    //console.log(data);
    setPageValue({ ...data, description: question });
    setShowPreview(true);
  };
  const [pageValue, setPageValue] = useState("");
  const [preview, setShowPreview] = useState(false);
  const handlePageCreationCancel = () => {
    setPageValue("");
  };
  return (
    <div>
      {!preview ? (
        <>
          <div className="w-full min-h-[100vh] font-nunito">
            <div>
              <form onSubmit={handleSubmit(handlepageSubmit)}>
                <div>
                  <label className="font-bold">Page Title</label>
                  <input
                    type="text"
                    className="mt-3"
                    placeholder="Enter Page Title"
                    {...register("title", { required: true })}
                    style={{
                      background: " #FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  />
                  {/* {errors.title && (
                  <div className="text-xs text-red-600 font-nunito">
                    Enter Quiz title
                  </div>
                )} */}
                </div>
              </form>
            </div>
            <div>
              <form onSubmit={handleSubmit(handlepageSubmit)}>
                <div>
                  <ReactQuill
                    theme="snow"
                    className="font-nunito"
                    value={question}
                    id="pageQuill"
                    onChange={(e) => {
                      setValue(e);
                    }}
                  />
                  <div>
                    {/* {errors.question && <InputErrorMessage message="Enter question"/>} */}
                  </div>
                </div>
                <div className="w-full flex justify-end mt-[30px]">
                  <div>
                    <button
                      onClick={() => handlePageCreationCancel()}
                      className="flex text-black border-blue-600 bg-[#EBEEFD] hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito  border-2"
                    >
                      cancel
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex text-black border-blue-600 bg-[#EBEEFD] hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito border-2"
                    >
                      Save & publish
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex text-white border-blue-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <ShowPageValue
            setShowPreview={setShowPreview}
            pageValue={pageValue}
          ></ShowPageValue>
        </>
      )}
    </div>
  );
}
const ShowPageValue = ({
  pageValue,
  setShowPreview,
}: {
  pageValue: any;
  setShowPreview: any;
}) => {
  // console.log(pageValue);
  const [createPage, { error, data, isLoading, isSuccess, isError }] =
    useCreatePageMutation();

  const submitPage = () => {
    //  console.log(pageValue)
    createPage(pageValue);
  };
  const router = useRouter();
  useEffect(() => {
    if (isError) {
      toast.error("Page Created failed");
    } else if (isSuccess) {
      toast.success("Page Created Successfully");
      router.push("/dashboard/page");
    }
  }, [isError, isSuccess]);

  return (
    <div className=" font-nunito">
      <div className="bg-white p-5">
        <h1 className="font-bold text-lg">{pageValue?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: pageValue?.description,
          }}
        ></div>
      </div>
      <div className="w-full flex justify-end mt-[30px]">
        <div>
          <button
            onClick={() => setShowPreview(false)}
            className="flex text-black bg-[#EBEEFD] border-blue-600 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito  border-2"
          >
            cancel
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowPreview(false)}
            className="flex text-black bg-[#EBEEFD] border-blue-600 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito border-2"
          >
            Edit
          </button>
        </div>
        <div>
          <button
            onClick={submitPage}
            disabled={isLoading}
            className="flex text-white bg-blue-700 border-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
          >
            {isLoading ? <ButtonLoader /> : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};
