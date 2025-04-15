import React,{useState} from 'react';
import imgJPG from "../../../../../assets/01.jpg";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../../../../app/hooks";
import {AiFillPlayCircle} from "react-icons/ai"
import ActionConfirmModal from "../../../../utils/modals/ActionConfirmModal";
import { useEnrollMutation } from "../../../../../feature/api/dashboardApi";
import { isAuthorized } from "../../../../../utils/auth";


const BootcampPriceCard = ({setOpen,price,discountPrice,id,setregShow}:{setregShow:Function,id:string;setOpen:Function;price:number;discountPrice:number}) => {
     const {
          user: { roles, studentType,email },refresh
        } = useAppSelector((state) => state.auth);
        const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
        const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);
  return (
   <>
      <ActionConfirmModal
        show={showEnrollConfirmModal}
        handleClose={handleCloseEnrollConfirmModal}
        title="Are you sure you want to enroll this course?"
        id={id}
        mutationHook={useEnrollMutation}
        successMessage="Successfully enrolled!"
        sureButtonColor="success"
      />  
    <div className='p-2' style={{boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.15)"}}>
       <div className='relative h-full rounded-md'>
                <Image src={imgJPG} className="w-full h-full rounded-md" width={820} height={450}/>
                <div className='absolute w-full h-[98%] top-0 left-0 block z-50 !bg-[#0a0a0a] opacity-50'></div>
                <div className='absolute top-0 left-0 right-0 items-center justify-center flex h-full'>
                    <a className='cursor-pointer z-50' onClick={() => setOpen(true)}><AiFillPlayCircle className='text-[59px] hover:text-red-800 cursor-pointer'/></a>
                </div>
       </div>
       <div className='p-4'>
            <div className='flex gap-2 items-center mb-2'>
                 <h3 className='font-bold text-2xl font-nunito'>${price}</h3>
                 <span className='line-through text-[#747579] text-sm'>${discountPrice}</span>
            </div>
            <div>
          {
               !isAuthorized(email, refresh) &&  
                 <button onClick={() => setregShow(true)} className='bg-[#0AA073] text-[#fff] py-1.5 px-6 rounded-md'>Register</button>
          } 
                 {roles.includes("student") && (
                        <div
                          onClick={() => setShowEnrollConfirmModal(true)}
                          className=""
                        >
                          <button className='bg-[#0AA073] text-[#fff] py-1.5 px-6 rounded-md'>
                            {studentType === "self-pace"
                              ? "Self pace"
                              : "Instructor led"}
                          </button>
                        </div>
                  )}
            </div>
       </div>
    </div>
  </> 
  )
}

export default BootcampPriceCard