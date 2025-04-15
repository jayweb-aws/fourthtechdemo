import dynamic from "next/dynamic";
import React, { useState, useEffect, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {InputErrorMessage} from '../../../../utils/error'


type typefun = {
  register:any;
  setValue:any;
  errors:any;
}

const AssignementNaming = (props:typefun) => {
  const {register,setValue,errors} = props;
  const [value, setValuee] = useState('');
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  useEffect(() => {
    register("description", { required: true, minLength: 1 });
  }, [register]);

  return (
    // <Fragment>
    <div>
      <div className="grid grid-cols-12 items-center ">
        <div className="lg:col-span-3 col-span-12">
          <p className="font-semibold text-base">Assignment Name </p>
        </div>
        <div className="lg:col-span-7 col-span-12">
          <input
            type="text"
            className="mt-3"
            placeholder="Enter Name"
            style={{
              background: " #FFFFFF",
              boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
              borderRadius: "8px",
              width: "100%",
              border: "none",
              padding: " 11px 17px",
            }}
            {...register("name",{required:true})}
            
            
          />
          <div>
              {errors.name && <InputErrorMessage message="Enter Assignment Name"/>}
          </div>
        </div>
      </div>
      <ReactQuill theme="snow" value={value} onChange={(e) => {setValue("description",e),setValuee(e)}} />
      <div>
              {errors.description && <InputErrorMessage message="Enter description"/>}
      </div>
    </div>
    // </Fragment>
  );
};
// AssignementNaming.getInitialProps = ({ isServer }: { isServer: any }) => {
//   if (isServer) {
//     return {};
//   }
//   return {};
// };
export default AssignementNaming;
