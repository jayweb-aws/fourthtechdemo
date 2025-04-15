import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
//import DOMPurify from "dompurify";
import toast from 'react-hot-toast';
import { useUpdatePageMutation } from "../../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";
import { Spinner } from "flowbite-react";

export default function PageCreation({ formData }: { formData: any }) {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const router = useRouter();
  const [updatePage, { isError, error, isLoading, isSuccess }] =
    useUpdatePageMutation();
  const id = router.query.id as any;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: formData.title,
      description: formData.description,
    },
  });
  // console.log(formData)
  const [question, setValuee] = useState("");
  const handlepageSubmit = (data: any) => {
    updatePage({
      id: id,
      title: data.title,
      description: data.description,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error("Page has updated error");
    } else if (isSuccess) {
      toast.success("Page Updated Successfully");
      router.push("/dashboard/page");
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    register("description", { required: true, minLength: 1 });
  }, [register, setValue]);

  return (
    <div>
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
                  value={question ? question : formData.description}
                  id="pageQuill"
                  onChange={(e: any) => {
                    setValue("description", e), setValuee(e);
                  }}
                />
                <div>
                  {/* {errors.question && <InputErrorMessage message="Enter question"/>} */}
                </div>
              </div>
              <div className="w-full flex justify-end mt-[30px]">
                <div>
                  <button className="flex text-black border-blue-600 bg-[#EBEEFD] hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito  border-2">
                    cancel
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex text-white border-blue-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
                  >
                    {isLoading ? <Spinner /> : "Update"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}
