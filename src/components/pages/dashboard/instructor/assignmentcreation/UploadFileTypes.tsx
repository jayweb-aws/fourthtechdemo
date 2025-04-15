import React from "react";
import { InputErrorMessage } from "../../../../utils/error";


type typefun = {
  register:Function;
  errors:any;
  
}

export default function UploadFileTypes(props:typefun) {
  const {register,errors} = props
  return (
    <div className=" w-full">
      <div className="mt-5 mb-1">
        <p className="font-bold text-xl">Upload file types</p>
      </div>
      <div className="bg-white w-full rounded-lg  lg:py-10 py-2">
       
        <div className=" flex justify-center flex-col gap-y-5 mt-5 w-full lg:w-4/5">
         
          <div className="w-full lg:w-4/5">
            <input
              {...register("comment",{required:true})}
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-5 py-5"
              placeholder="Comment"
            />
             <div>
              {errors.comment && <InputErrorMessage message="Enter Comment"/>}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
