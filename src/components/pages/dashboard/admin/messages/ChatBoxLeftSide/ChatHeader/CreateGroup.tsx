import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useMsgGroupCreateMutation } from "../../../../../../../feature/api/dashboardApi";
import { useSinglePhotoUploadMutation } from "../../../../../../../feature/api/mediaUploadApi";
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";

type FormData = {
  chatName: string;
  description: string;
};

const Schema = z.object({
  chatName: z.string().min(1, "Name is required!"),
  description: z.string().min(1, "Description is required!"),
});

const CreateChat = ({
  show,
  setShowModal,
  socket,
}: {
  show: boolean;
  setShowModal: Function;
  socket: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const [picsname, setpicsname] = useState("");
  const [FilePreview, setFilePreview] = useState("");
  const [msgGroupCreate, { error, data, isLoading, isSuccess, isError }] =
    useMsgGroupCreateMutation();
  const [
    singlePhotoUpload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation();

  const CreateModuleHandler = (data: FormData) => {
    if (FilePreview) {
      msgGroupCreate({
        chatName: data.chatName,
        description: data.description,
        img: FilePreview,
      });
    }
    //  console.log(data);
    // console.log(data, FilePreview);
  };

  const ImageGet = (e: any) => {
    const file = e.target.files;

    setpicsname(e.target.files[0].name);
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
      toast.success("upload success");
    }
  }, [isUploadError, isUploadSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setShowModal(false);
      if (socket.current) {
        socket.current.emit("get_group_chat_list", { chatId: data?.data?._id });
      }
      toast.success("course Module has Added Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <Modal
      show={show}
      size="md"
      popup={true}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create Group
          </h3>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(CreateModuleHandler)}
          >
            <FormTextInput
              name="chatName"
              register={register}
              error={errors.chatName?.message}
              placeholder="Name"
              label="Name"
            />
            <div className="flex flex-col">
              <Label value="Img" className="mb-1" />
              <input
                onChange={ImageGet}
                type="file"
                className="mt-1 bg-slate-400 text-white"
              />
            </div>
            <FormTextInput
              name="description"
              register={register}
              error={errors.description?.message}
              placeholder="Description"
              label="Description"
            />

            <div>
              <Button type="submit" fullSized={true}>
                {isLoading ? <ButtonLoader /> : "Create"}
              </Button>
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                fullSized={true}
                className={"hover:bg-red-700 bg-red-600 mt-2"}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateChat;
