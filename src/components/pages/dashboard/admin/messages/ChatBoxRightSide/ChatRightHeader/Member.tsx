import React, { useEffect,useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Button, Modal,Avatar } from 'flowbite-react';
import { FormTextInput } from "../../../../../../utils/form/Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import {BsThreeDots} from "react-icons/bs"
import * as z from "zod";
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader";
import { useGetUserQuery,useCreateChatMutation } from "../../../../../../../feature/api/dashboardApi";
import { useAppSelector } from "../../../../../../../app/hooks";
import {useRouter}  from "next/router";
import Image from "next/image";
import Addmember from "./AddMember";



  
const Member = ({socket,show, setShowModal,members,chatid }: {socket:any;chatid:any;show:boolean;setShowModal:Function;members:any}) => {
    const [membershow, setmembershow] = useState(false);

    const handleMember = () => {
        setShowModal(false)
        setmembershow(true)
    }
    
    return (
      <Modal
        show={show}
        size="xl"
        popup={true}
        onClose={() => setShowModal(false)}
      >
      <Addmember  
            show={membershow}
            setShowModal={setmembershow}
            chatid={chatid}
            socket={socket}
      />
        <Modal.Header></Modal.Header>
        <Modal.Body>
           <div className='mb-4'>
               <div>
                    <h2 className='font-nunito font-semibold text-xl mb-3'>Chat Members</h2>
               </div>

               <div>
                    <div>
                          {
                            members.map((val:any) => (
                              <div className='flex items-center justify-between mb-4' key={val._id}>
                                  <div className='flex items-center gap-2'>
                                     <div>
                                      <Avatar img={val.avatar} rounded={true}/>
                                    </div>
                                    <div>
                                         <h3 className='font-nunito font-medium'>{val.firstName} {val.lastName}</h3>
                                     </div> 
                                   </div >
                                   <div>
                                       <BsThreeDots />
                                    </div>
                              </div>
                            )) 
                          }
                    </div>
               </div>
           </div>
           <Button fullSized={true} onClick={handleMember}>
                       Add Member
            </Button>
             <Button type="button" onClick={() => setShowModal(false)} fullSized={true} className={"hover:bg-red-700 bg-red-600 mt-2"}>
                Cancel
             </Button>
        </Modal.Body>
      </Modal>
    )
  }
  
  export default Member