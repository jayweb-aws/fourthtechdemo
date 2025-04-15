import React, { useEffect,useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal,Avatar,Spinner } from 'flowbite-react';
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import { useGetUserQuery,useAddGroupMemberMutation } from "../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../app/hooks";
import {useRouter}  from "next/router";
import Image from "next/image";
import {BsSearch} from "react-icons/bs"


type FormData = {
    name: string;
}

const Schema = z.object({
  name: z.string().min(1, "Module name is required!")
});
  
const Member = ({socket,show, setShowModal,chatid}: {socket:any;show:boolean;setShowModal:Function,chatid:string}) => {
    const [inputValue, setinputValue] = useState("");

    const { error:userError, data:userData, isLoading:userLoading, isSuccess:userIssucces, isError:userisError } = useGetUserQuery(inputValue);
    const [AddGroupMember, { error, data, isLoading, isSuccess, isError }] = useAddGroupMemberMutation({});
    const [clickId, setclickId] = useState("")
    
    const handleClick = (id:any) => {
       // console.log(id)
        setclickId(id);
    };

    const handleSubmit = () => {
        AddGroupMember({userId:clickId,chatId:chatid})
        if(socket.current) {
          socket.current.emit("get_group_chat_list",{chatId:chatid}) 
        } 
    }

    useEffect(() => {
        if (isError) {
          toast.error((error as any).data.error.members);
          // console.log(error);
        } else if (isSuccess) {
            setShowModal(false)
          toast.success("Member Added successfully!");
          // console.log(data);
    
        }
      }, [isError, isSuccess])
    return (
      <Modal
        show={show}
        size="md"
        popup={true}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
           <div className='mb-4'>
               <div>
                    <h2 className='font-nunito font-semibold text-xl mb-3'>Add People</h2>
               </div>
               <div className='relative mb-5'>
                   <input type="text" placeholder='Search' onChange={(e) => setinputValue(e.target.value)} className='bg-[#F9F9F9] w-full px-3 py-3 focus:outline-none rounded border pr-[50px]' />
                   <button className='absolute right-5 text-2xl text-[#232D42] top-[50%] -translate-y-[50%]'><BsSearch/></button>
               </div>

               <div>
                    <div className=' h-[350px] overflow-y-auto'>
                    {
                        userLoading ?  <div className='flex justify-center items-center'><Spinner aria-label="Default status example" /></div> : userIssucces &&
                        userData.data.map((val:any) => (
                              <div className={`select-none	 flex items-center gap-2 mb-4 cursor-pointer transition ${clickId === val._id && "bg-blue-600 rounded text-white px-2 py-2"}`} key={val._id} onClick={() => handleClick(val._id)}>
                                   <div>
                                      <Avatar img={val.avatar} rounded={true}/>
                                   </div>
                                   <div>
                                        <h3 className='font-nunito font-medium'>{val.firstName} {val.lastName}</h3>
                                    </div>  
                              </div>
                            )) 
                    }
                    </div>
               </div>
           </div>
           <Button fullSized={true} onClick={handleSubmit}>
                 { isLoading ? <ButtonLoader /> : "Add Member"}
            </Button>
             <Button type="button" onClick={() => setShowModal(false)} fullSized={true} className={"hover:bg-red-700 bg-red-600 mt-2"}>
                Cancel
             </Button>
        </Modal.Body>
      </Modal>
    )
  }
  
  export default Member