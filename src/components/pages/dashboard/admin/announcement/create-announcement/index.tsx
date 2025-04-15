/* eslint-disable react-hooks/exhaustive-deps */
import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import toast from 'react-hot-toast';
import { useCreateAnAnnouncementMutation } from "../../../../../../feature/api/dashboardApi";

export default function PageCreation() {
  const router = useRouter();
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [createAnnouncement, { isError, isSuccess, isLoading, error, data }] =
    useCreateAnAnnouncementMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [question, setValue] = useState("");

  const handlepageSubmit = (data: any) => {
    if (question.length <= 10) {
      toast.error("Please write the announcement");
    } else if (question.length > 10) {
      createAnnouncement({ ...data, description: question });
    }
  };

  const handlePageCreationCancel = () => {
    setValue("");
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
    } else if (isSuccess) {
      toast.success("Announcement Created Successfully!");
      router.push("/dashboard");
    }
  }, [isError, isSuccess]);
  return (
    <div>
      <>
        <div className="w-full min-h-[100vh] font-nunito">
          <div>
            <form onSubmit={handleSubmit(handlepageSubmit)}>
              <div>
                <label className="font-bold">Announcement Title</label>
                <input
                  type="text"
                  className="mt-3"
                  placeholder="Enter Title"
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
                  onChange={(e) => setValue(e)}
                />
                <div></div>
              </div>
              <div className="w-full flex justify-end mt-[30px]">
                <div>
                  <button
                    onClick={() => handlePageCreationCancel()}
                    className="flex capitalize text-black border-blue-600 bg-[#EBEEFD] hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito  border-2"
                  >
                    cancel
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex text-white border-blue-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito border-2 border-transparent"
                  >
                    {isLoading ? (
                      <div className="gap-1 flex">
                        <Spinner color="white" size="sm" />
                        Loading...
                      </div>
                    ) : (
                      "Save"
                    )}
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
