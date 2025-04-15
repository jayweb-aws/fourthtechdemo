import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal } from "flowbite-react";
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import { useCreateFaqsMutation } from "../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../app/hooks";
import { useRouter } from "next/router";

type FormData = {
  question: string;
  answer: string;
};

const Schema = z.object({
  question: z.string().min(1, "Question name is required!"),
  answer: z.string().min(1, "Answer is required!"),
});

const AddModuleModal = ({
  show,
  setShowModal,
}: {
  show: boolean;
  setShowModal: Function;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const router = useRouter();
  const id = router.query.editId as any;
  const [CreateFaqs, { error, data, isLoading, isSuccess, isError }] =
    useCreateFaqsMutation();

  const CreateModuleHandler = async (data: FormData) => {
    await CreateFaqs({
      question: data.question,
      answer: data.answer,
      course: id,
    });
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setShowModal(false);
      toast.success("course faqs has Added Successfully!");
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
            Add Faqs
          </h3>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(CreateModuleHandler)}
          >
            <FormTextInput
              name="question"
              register={register}
              error={errors.question?.message}
              placeholder="Question Name"
              label="Question Name"
            />
            <FormTextInput
              name="answer"
              register={register}
              error={errors.answer?.message}
              placeholder="Answer"
              label="Answer"
            />
            <Button disabled={isLoading} type="submit" fullSized={true}>
              {isLoading ? <ButtonLoader /> : "Create"}
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddModuleModal;
