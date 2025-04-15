import React from "react";
import {InputErrorMessage} from '../../../../utils/error';

type typefun = {
  register:Function;
  errors:any;
  
}


const AssignmentDue = (props:typefun) => {
  const {register,errors} = props
  return (
    <div className="bg-white flex mt-5  flex-col lg:px-5 py-7">
      <h1>Due</h1>
      <div className="my-8 w-full lg:w-4/5">
        <label htmlFor="available mb-2">Available From</label>
        <br />
        <input
          {...register("availFrom",{required:true})}
          className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 w-full"
          type="date"
          id="available"
        />
         <div>
              {errors.availFrom && <InputErrorMessage message="Enter AvailForm"/>}
          </div>
      </div>
      <div className="w-full lg:w-4/5">
        <label htmlFor="until ">Until</label>
        <br />

        <input
         {...register("availUntil",{required:true})}
          className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 w-full"
          type="date"
          id="until"
        />
         <div>
              {errors.availUntil && <InputErrorMessage message="Enter AvailUntil"/>}
          </div>
      </div>
    </div>
  );
};

export default AssignmentDue;
