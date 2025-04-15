import React,{useState} from 'react'
import Image from 'next/image';
import { useForm, useFormContext } from "react-hook-form";
import { InputErrorMessage } from '../../../../../utils/error';
import { StepPropss } from './Creation1';
import Module from "./popup/module/Module";
import { useAppSelector } from "../../../../../../app/hooks";
//icon
import plus from '../../../../../../assets/plus.png';
import plusIconBg from '../../../../../../assets/Group34917.png';



//component
import PopupModal from './popup/PopupModal';
import AddModuleModal from './popup/module/AddModuleModal';
import { useGetCourseModuleQuery } from "../../../../../../feature/api/dashboardApi";
import EditModuleModal from './popup/module/EditModuleModal'
import {useRouter} from "next/router";

const Creation3 = (props:StepPropss) => {
  const  [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const id = router.query.editId as any;
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false)   
  const { setStep, setFormData, formData,step } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { isError,data, error, isLoading, isSuccess } = useGetCourseModuleQuery(id);
  const  [EditshowModal, setEditShowModal] = useState<boolean>(false);
  const [ModuleId, setModuleId] = useState("");
  const [moduleName, setmoduleName] = useState("");
  //console.log(data);

  const submitThirdStep = () => {
    setStep(4);
  }

  const onPrev = () => {
     setStep(step-1)
  }

  return (
    <>
     <AddModuleModal show={moduleModalShow} setShowModal={setmoduleModalShow}/>
     {
      EditshowModal && <EditModuleModal moduleName={moduleName} id={ModuleId} EditshowModal={EditshowModal} setEditShowModal={setEditShowModal}  />
     }  
     <form onSubmit={handleSubmit(submitThirdStep)}>
      <div className='Curriculum p-3 mt-5'>
          <h2 className='font-semibold text-2xl mb-5'>Curriculum</h2>

          <div className=''>
               <div className='heading_upload_lectrue flex justify-between items-center mb-6'>
                  <h2 className='text-base font-medium'>Upload Lecture</h2>
                  <button onClick={() =>setmoduleModalShow(!moduleModalShow)} type='button' className="bg-[#EBEEFD] border border-[#3A57E8] px-2 py-2 rounded flex items-center gap-[6px]"><Image src={plusIconBg}/>Add Modules</button>
               </div>
               
             { isSuccess && data.data.modules.map(({duration,id,name,assignments,quizzes,videos,slides,pages}:{pages:string[];duration:number;id:string,name:string,index:string,assignments:string[];quizzes:string[],videos:string[],slides:string[]},index:string) => (
                  <Module pages={pages} key={id} setmoduleName={setmoduleName}  duration={duration} setModuleId={setModuleId} setEditShowModal={setEditShowModal} id={id} name={name} index={index} assignments={assignments} quizzes={quizzes} videos={videos} slides={slides}/>
             ))
             }  
               

          
               <div className='btn flex justify-end gap-5'>
                    <button className='xsm:w-full lg:w-[8rem] bg-[#EBEEFD] border border-[#3A57E8] py-2 px-6 rounded-sm' onClick={onPrev}>Previous</button>
                    <button className='xsm:w-full lg:w-[7rem] bg-[#3A57E8] py-2 px-6 text-[#fff] rounded-sm' type='submit'>Next</button>
               </div>
          </div>
      </div>
     </form>  
    </>
  )
}

export default Creation3