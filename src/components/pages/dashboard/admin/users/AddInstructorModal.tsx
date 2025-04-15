/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Button } from "flowbite-react";
import { FormTextInput } from "../../../../utils/form/Inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAddUserMutation } from "../../../../../feature/api/dashboardApi";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

const Schema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  email: z.string().email("Email is required!"),
  phone: z.string().min(1, "Phone number is required!"),
  password: z
    .string()
    .min(8, "Password is required and must be at least 8 characters"),
});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: string;
  password: string;
};

type props = {
  show: boolean;
  handleClose: () => void;
};

const AddInstructorModal = (props: props) => {
  const { show, handleClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const [addUser, { error, isLoading, isSuccess, isError }] =
    useAddUserMutation();
  const addUserHandler = (data: FormData) => {
    data.roles = "instructor";
    addUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("User added Successfully!");
      handleClose();
    } else if (isError) {
      toast.error((error as any).data.message);
    }
  }, [isSuccess, isError]);

  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit(addUserHandler)}>
          <div className="space-y-2 px-4 pb-4 sm:pb-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Instructor
            </h3>
            <FormTextInput
              name="firstName"
              register={register}
              error={errors.firstName?.message}
              placeholder="First name"
              // label="First name"
            />
            <FormTextInput
              name="lastName"
              register={register}
              error={errors.lastName?.message}
              placeholder="Last name"
              // label="Last name"
            />
            <FormTextInput
              name="email"
              register={register}
              error={errors.email?.message}
              placeholder="email address"
              // label="Email address"
            />
            <FormTextInput
              name="phone"
              register={register}
              error={errors.phone?.message}
              placeholder="Phone number"
              // label="Phone number"
            />
            <FormTextInput
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
              placeholder="Password"
              // label="Password"
            />
            <div className="w-full flex flex-wrap gap-2">
              <div>
                <Button type="submit">
                  {isLoading ? <ButtonLoader /> : "Add Instructor"}
                </Button>
              </div>
              <div>
                <Button onClick={handleClose} color="failure">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddInstructorModal;
