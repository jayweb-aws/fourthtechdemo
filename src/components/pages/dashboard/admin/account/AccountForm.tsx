/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "flowbite-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../app/hooks";
import { useSinglePhotoUploadMutation } from "../../../../../feature/api/mediaUploadApi";
import { useUpdateUserMutation } from "../../../../../feature/api/userApi";
import { InputErrorMessage } from "../../../../utils/error";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

type AccountFormData = {
  avatar: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  expertise: string;
  userName: string;
  houseOrFlat: string;
  landMark: string;
  streetAddress: string;
  townOrCity: string;
  stateOrCountry: string;
  postalOrZip: string;
};

const AccountForm = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    expertise,
    userName,
    houseOrFlat,
    landMark,
    streetAddress,
    townOrCity,
    stateOrCountry,
    postalOrZip,
    avatar,
  } = useAppSelector((state) => state.auth.user);

  const [
    singlePhotoUpload,
    {
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation();
  const [
    updateUser,
    {
      error: updateUserError,
      data: updatedUserData,
      isLoading: isUpdateUserLoading,
      isSuccess: isUpdateUserSuccess,
      isError: isUpdateUserError,
    },
  ] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AccountFormData>({
    defaultValues: {
      firstName,
      lastName,
      phone,
      email,
      expertise,
      userName,
      houseOrFlat,
      landMark,
      streetAddress,
      townOrCity,
      stateOrCountry,
      postalOrZip,
    },
  });
  const [filePreview, setFilePreview] = useState("");

  const formSubmit = (data: AccountFormData) => {
    if (filePreview) {
      data.avatar = filePreview;
    }
    // console.log(data)
    updateUser(data);
  };
  // console.log("error", errors);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("image", file["0"]);
      singlePhotoUpload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "image"
    ) {
      toast.error("Select a valid image.");
    }
  };

  useEffect(() => {
    if (isUploadError) {
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      setFilePreview(uploadData.data.image);
    }

    if (isUpdateUserError) {
      toast.error((updateUserError as any).data.message);
    } else if (isUpdateUserSuccess) {
      toast.success("User Information Updated Successfully!");
    }
  }, [isUploadError, isUploadSuccess, isUpdateUserError, isUpdateUserSuccess]);

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="font-nunito">
      <div className="mt-5 border-b-2 pb-6">
        <h2 className="text-[#232D42] text-lg md:text-2xl font-medium mb-6">
          Personal
        </h2>
        {/* Avatar */}
        <div className="mb-5 flex items-center space-x-7">
          <div className="space-y-2">
            <label className="block text-[#232D42]" htmlFor={"avatar"}>
              {"Avatar"}
            </label>
            <div className="w-[120px] h-[120px] relative rounded border-8 border-[#f9f9f9] bg-[#f9f9f9]">
              <img
                className="w-full h-full object-cover"
                src={
                  filePreview && typeof filePreview === "string"
                    ? filePreview
                    : avatar
                }
                alt="avatar"
              />
              <div className="w-[30px] h-[30px] absolute top-1 right-[-23px]">
                <button className="relative w-full h-full text-white bg-[#3A57E8] rounded-full flex items-center justify-center overflow-hidden">
                  <MdEdit />
                  <input
                    className="absolute opacity-0 top-0 left-0 scale-150"
                    type="file"
                    id={"avatar"}
                    onChange={handleAvatarChange}
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#8A92A6] ">
              Allowed file type : png, jpg, jpeg
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"firstName"}>
              First Name
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <InputErrorMessage message={"Enter your first name."} />
            )}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"lastName"}>
              Last Name
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <InputErrorMessage message={"Enter your last name."} />
            )}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"phone"}>
              Contact Number
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <InputErrorMessage message={"Enter your contact number."} />
            )}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"email"}>
              Email ID
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <InputErrorMessage message={"Enter your email address."} />
            )}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"expertise"}>
              Expertise
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="expertise"
              {...register("expertise")}
            />
            {/* {errors.expertise && <InputErrorMessage message={"Enter your expertise."} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"userName"}>
              Username
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="userName"
              {...register("userName")}
            />
            {/* {errors.userName && <InputErrorMessage message={"Enter your username."} />} */}
          </div>
        </div>
      </div>
      <div className="my-5 border-b-2">
        <h2 className="text-[#232D42] text-lg md:text-2xl font-medium mb-6">
          Address
        </h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"houseOrFlat"}>
              House no./Flat no.
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="houseOrFlat"
              {...register("houseOrFlat")}
            />
            {/* {errors.houseOrFlat && <InputErrorMessage message={"Enter your House no./Flat no."} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"landMark"}>
              Landmark
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="landMark"
              {...register("landMark")}
            />
            {/* {errors.landMark && <InputErrorMessage message={"Enter your landmark"} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"streetAddress"}>
              Street Address
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="streetAddress"
              {...register("streetAddress")}
            />
            {/* {errors.streetAddress && <InputErrorMessage message={"Enter your street address"} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"townOrCity"}>
              Town/City
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="townOrCity"
              {...register("townOrCity")}
            />
            {/* {errors.townOrCity && <InputErrorMessage message={"Enter your Town/City"} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"stateOrCountry"}>
              State/Country
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="stateOrCountry"
              {...register("stateOrCountry")}
            />
            {/* {errors.stateOrCountry && <InputErrorMessage message={"Enter your State/Country"} />} */}
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"postalOrZip"}>
              Postcode/ZIP Code
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="text"
              id="postalOrZip"
              {...register("postalOrZip")}
            />
            {/* {errors.postalOrZip && <InputErrorMessage message={"Enter your Postcode/ZIP Code"} />} */}
          </div>
        </div>
        <Button className="min-w-[10rem] my-5" type="submit">
          {isUpdateUserLoading ? <ButtonLoader /> : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
