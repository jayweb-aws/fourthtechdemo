import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import {
  useGetAllInstructorCourseQuery,
  useMeetCreateMutation,
} from "../../../../../../../feature/api/dashboardApi";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

const StartClassV2 = ({ closeModal }: { closeModal: any }) => {
  const [
    meetCreate,
    {
      error: meetError,
      data: meetData,
      isLoading: meetLoading,
      isSuccess: meetSuccess,
      isError: meetIsError,
    },
  ] = useMeetCreateMutation();
  const { error, data, isLoading, isSuccess, isError } =
    useGetAllInstructorCourseQuery<any>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleStartClass = (e: any) => {
    meetCreate(e);
  };

  useEffect(() => {
    if (meetIsError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (meetSuccess) {
      toast.success("Meet Created Successfully!");
      reset();
      // console.log(data);
      closeModal();
    }
  }, [meetIsError, meetSuccess]);
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(handleStartClass)}>
        <div>
          <label className="text-[18px] font-medium">Course</label>
          <br />
          <select
            {...register("course", { required: true })}
            className="mt-3 bg-[#F9F9F9] h-[50px]"
            style={{
              borderRadius: "5px",
              width: "100%",
              borderColor: "#3A57E8",
            }}
          >
            <option value={""} disabled selected>
              {"Select Course"}
            </option>
            {data?.data?.courses?.map((item: any, id: any) => (
              <option value={item?._id} key={id}>
                {item?.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[18px] font-medium">Zoom Link</label>
          <br />
          <input
            type="text"
            placeholder="Enter Course Title"
            className="mt-3 h-[50px]"
            style={{
              borderRadius: "8px",
              width: "100%",
              borderColor: "#3A57E8",
            }}
            {...register("link", { required: true })}
          />
        </div>
        <div>
          <label className="text-[18px] font-medium">Description</label>
          <br />
          <textarea
            placeholder="Enter Description"
            className="mt-3 h-[151px]"
            style={{
              borderRadius: "8px",
              width: "100%",
              borderColor: "#3A57E8",
            }}
            {...register("description", { required: true })}
          />
        </div>

        <div className="flex gap-x-[20px]">
          <button className="bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary hover:text-primary duration-300 text-white p-[10px_40px] font-semibold rounded-[5px]">
            {meetLoading ? <ButtonLoader /> : "Start Class"}
          </button>
          <button
            onClick={closeModal}
            className="border-2 hover:bg-primary hover:text-white hover:border-transparent duration-300 border-primary text-primary p-[10px_40px] font-semibold rounded-[5px]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartClassV2;
