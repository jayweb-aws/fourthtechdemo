import { Modal } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import {
  useGetOneOptimizationQuery,
  useUpdateOneMetoringMutation,
} from "../../../../../feature/api/dashboardApi";

interface IModalProps {
  show: boolean;
  handleClose: () => void;
  id: string;
  setShow: (show: boolean) => void;
}
type IuserData = {
  firstName: string;
  email: string;
  interest: string;
  createdAt: string;
};

const OptimizationView = ({ show, handleClose, id, setShow }: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IuserData>();
  const { data, isSuccess, isError, isLoading } =
    useGetOneOptimizationQuery(id);
  //  console.log(id);
  const [
    updateMentoring,
    {
      data: updateMentoringDate,
      isSuccess: updateMentoringSuccess,
      isError: updateMentoringError,
      isLoading: updateMentoringLoading,
      error: updateMentoringerror,
    },
  ] = useUpdateOneMetoringMutation();
  const UpdateUserData = (data: IuserData) => {
    const { firstName, email, createdAt, interest } = data;
    updateMentoring({
      id: id,
      firstName: firstName,
      email: email,
      createdAt: createdAt,
      interest: interest,
    });
  };
  useEffect(() => {
    if (updateMentoringError) {
      toast.error((updateMentoringerror as any).data.message);
    } else if (updateMentoringSuccess) {
      toast.success("User Updated Successfully");
      setShow(false);
    }
  }, [updateMentoringError, updateMentoringSuccess]);
  return (
    <>
      <div className="font-nunito">
        <Modal
          show={show}
          popup={true}
          onClose={handleClose}
          size="4xl"
          className="overflow-auto "
        >
          <Modal.Header />
          <Modal.Body>
            <div className="max-h-[500px] md:max-h-[500px] md:max-w-[900px] max-w-[800px] overflow-auto">
              <div className="flex flex-col ">
                <div className="">
                  {isLoading ? (
                    <div>Loading....</div>
                  ) : isError ? (
                    <div>Error....</div>
                  ) : isSuccess && data?.data?.optimize ? (
                    <form onSubmit={handleSubmit(UpdateUserData)}>
                      <div className="form_control mb-5">
                        <label className="text-sm font-medium">
                          First Name
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter Course Title"
                          className="mt-3"
                          style={{
                            background: " #FFFFFF",
                            boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                            borderRadius: "8px",
                            width: "100%",
                            border: "none",
                            padding: " 11px 17px",
                          }}
                          defaultValue={data.data.optimize.firstName}
                          {...register("firstName", { required: true })}
                        />
                        <div></div>
                      </div>
                      <div className="form_control mb-5">
                        <label className="text-sm font-medium">Email</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter Course Title"
                          className="mt-3"
                          style={{
                            background: " #FFFFFF",
                            boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                            borderRadius: "8px",
                            width: "100%",
                            border: "none",
                            padding: " 11px 17px",
                          }}
                          defaultValue={data.data.optimize.email}
                          {...register("email", { required: true })}
                        />
                        <div></div>
                      </div>
                      <div className="form_control mb-5">
                        <label className="text-sm font-medium">Date</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter Course Title"
                          className="mt-3"
                          style={{
                            background: " #FFFFFF",
                            boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                            borderRadius: "8px",
                            width: "100%",
                            border: "none",
                            padding: " 11px 17px",
                          }}
                          defaultValue={new Date(
                            data.data.optimize.createdAt
                          ).toLocaleDateString()}
                          {...register("createdAt", { required: true })}
                        />
                      </div>
                      <div className="form_control mb-5">
                        <label className="text-sm font-medium">
                          Linkedin Url
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="Linkedin"
                          className="mt-3"
                          style={{
                            background: " #FFFFFF",
                            boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                            borderRadius: "8px",
                            width: "100%",
                            border: "none",
                            padding: " 11px 17px",
                          }}
                          defaultValue={data.data.optimize.linkedin}
                          {...register("interest", { required: true })}
                        />
                        <div></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setShow(false)}
                          className="w-[60px] h-[40px] flex justify-center items-center text-black  bg-[#EBEEFD] "
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="h-[50vh] flex justify-center items-center">
                    <p>No data available!</p>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default OptimizationView;
