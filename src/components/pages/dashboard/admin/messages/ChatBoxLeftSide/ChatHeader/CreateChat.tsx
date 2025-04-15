import React, { useEffect,useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal } from 'flowbite-react';
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {BsSearch} from "react-icons/bs";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import { useGetUserQuery,useCreateChatMutation } from "../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../app/hooks";
import {useRouter}  from "next/router";
import Image from "next/image"

type FormData = {
    name: string;
}

const Schema = z.object({
  name: z.string().min(1, "Module name is required!")
});
  
const CreateChat = ({show, setShowModal,socket }: {socket:any;show:boolean;setShowModal:Function}) => {
    const [createChat, { error, data, isLoading, isSuccess, isError }] = useCreateChatMutation({});
    const [inputValue, setinputValue] = useState("")
    const { error:userError, data:userData, isLoading:userLoading, isSuccess:userIssucces, isError:userisError } = useGetUserQuery(inputValue);
    const [userId, setuserId] = useState("");
 
    

    const creatUserHandle = async () => {
          await createChat({userId:userId})
         // socket.current.emit("get_single_people_chat_list",{page: 1, limit:50})
    }
    
    useEffect(() => {
      if (isError) {
        toast.error((error as any).data.message);
        // console.log(error);
      } else if (isSuccess) {
      
        if(socket.current) {
          socket.current.emit("get_single_people_chat_list",{chatId:data?.data?._id}) 
        } 

        setShowModal(false)
        toast.success("Chat Added successfully!");
        // console.log(data);
  
      }
    }, [isError, isSuccess])
   


    
    
    return (
      <Modal
        show={show}
        size="xl"
        popup={true}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Chat</h3>
            <div className='relative mb-5'>
                   <input type="text" placeholder='Search' onChange={(e) => setinputValue(e.target.value)} className='bg-[#F9F9F9] w-full px-3 py-3 focus:outline-none rounded border pr-[50px]' />
                   <button className='absolute right-5 text-2xl text-[#232D42] top-[50%] -translate-y-[50%]'><BsSearch/></button>
            </div>
            <div className='h-[25rem] overflow-y-auto mb-2'>
            {
                     userLoading ? "loading...":   userIssucces && 

                     userData.data.map((val:any) => (
                        <div key={val._id} className={`flex gap-2 mb-4 cursor-pointer transition select-none ${userId === val._id && "bg-blue-600 rounded text-white px-2 py-2 "}`} onClick={() => setuserId(val._id)}>
                             <Image  src={val.avatar} width="50px" height="50px" className='rounded-full'/>
                             <div>
                                 <h3 className={`font-nunito `}>{val.firstName} {val.lastName}</h3>
                                 <p className={`font-nunito`}>{val.email}</p>
                             </div>
                        </div>
               ))
                }  
            </div>
           
            <Button onClick={creatUserHandle} fullSized={true}>
                       { isLoading ? <ButtonLoader /> : "Create"}
            </Button>
             <Button type="button" onClick={() => setShowModal(false)} fullSized={true} className={"hover:bg-red-700 bg-red-600 mt-2"}>
                Cancel
             </Button>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
  
  export default CreateChat