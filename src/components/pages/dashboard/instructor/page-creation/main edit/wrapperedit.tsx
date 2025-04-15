import React,{useState,useEffect} from 'react';
import { useCreatePageMutation,useGetOnePageQuery } from "../../../../../../feature/api/dashboardApi";
import {useRouter} from "next/router";
import Edit from "./edit";
import {toast} from "react-toastify"

const wrapperedit = () => {
  const router = useRouter();
  const id = router.query.id as any;
  const { isError,data, error, isLoading, isSuccess } =  useGetOnePageQuery(id)
  const [formData, setformData] = useState()

  // console.log(data)
  useEffect(() => {
    if (isError) {
      toast.error("Assignment has added error");
    } else if (isSuccess) {
        setformData(data.data.page)
    }
  }, [isError, isSuccess]);
  return (
    <div>
         {
            isSuccess && formData && 
                                    <Edit formData={formData}/>
         }
    </div>
  )
}

export default wrapperedit