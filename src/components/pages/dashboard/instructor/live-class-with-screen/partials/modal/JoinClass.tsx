import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal } from "flowbite-react";
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import { useMeetCreateMutation,useAllMeetQuery } from "../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../app/hooks";
import {Spinner} from "flowbite-react"

type FormData = {
  name: string;
  link:string;
};

const Schema = z.object({
  name: z.string().min(1, "Meet name is required!"),
  link: z.string().min(1, "Meet link is required!"),
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
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const {
    course: { id, title },
  } = useAppSelector((state) => state.course);
  const [meetCreate, { error, data, isLoading, isSuccess, isError }] =
  useMeetCreateMutation();
  const { error:getMeetErro, data:meetData, isLoading:meetLoading, isSuccess:meetSuccess, isError:meetIsERror } =
  useAllMeetQuery({});

 
 
  
  return (
    <Modal
      show={show}
      size="3xl"
      popup={true}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Join Class
          </h3>
          <form
            className="space-y-6"
          >
            
            <div>
                 <h2 className="font-nunito font-semibold">Available Meet</h2>
                 <ul className="bg-[#fff] py-2 shadow-lg px-2 overflow-y-scroll h-52">
                    {
                        meetLoading ? <div><Spinner /></div> : meetIsERror ? <div>Error...</div> : meetSuccess &&
                        meetData?.data?.meets?.slice(-1)[0] &&
                            <li className="py-2 font-nunito hover:text-blue-600 mb-2">
                                 <h2 className="font-nunito font-semibold">{meetData?.data?.meets?.slice(-1)[0]?.topic}</h2>
                                <a target="_blank" href={meetData?.data?.meets?.slice(-1)[0].link}>{meetData?.data?.meets?.slice(-1)[0]?.link}</a>
                           </li>
                       
                    }
                 </ul>
            </div>
            <div>
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

export default AddModuleModal;
