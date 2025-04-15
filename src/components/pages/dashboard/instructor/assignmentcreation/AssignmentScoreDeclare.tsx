import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
// import TagsInput from "react-tag-input";
import { TagsInput } from "react-tag-input-component";
import {InputErrorMessage} from '../../../../utils/error';

type typefun = {
  register:Function;
  errors:any;
  
}

const AssignmentScoreDeclare = (props:typefun) => {
  const [selected, setSelected] = useState(["Everyone"]);
  const {register,errors} = props
  //   const [tags, setTags] = useState(["tag1", "tag2"]);
  //   const handleChange = (newTags: string[]) => {
  //     setTags(newTags);
  //   };
  return (
    <div className="bg-white flex  flex-col lg:px-5 py-3">
      <div className="w-full lg:w-4/5">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Score
        </label>
        <input
          type="number"
          {...register("score",{required:true})}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter Score"
          required
        />
           <div>
              {errors.score && <InputErrorMessage message="Enter Score"/>}
          </div>
      </div>
      <div className="w-full lg:w-4/5 my-5">
        <label htmlFor="media" className="block mb-3  text-black">
             Submission attempts
        </label>
        <select required {...register("submissionAttempts")} className="bg-white border rounded-l-[0.25rem] rounded-r-[0.25rem] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between ">
             <option value="single-attempt">Single attempt</option>
             <option value="double-attempt">Double attempt</option>
             <option value="Five-attempts">Five attempts</option>
        </select>
        {/* <Shortby /> */}
      </div>
    </div>
  );
};

export default AssignmentScoreDeclare;
const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
}) => {
  return (
    <div className="">
      <label htmlFor="media" className="block mb-3  text-black">
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-white border rounded-l-[0.25rem] rounded-r-[0.25rem] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between "
      >
        <option defaultValue={byDefault}>{byDefault}</option>
        {options.map((item, id) => (
          <span key={id}>
            <option value={item} key={id}>
              {item}
            </option>
            <hr />
          </span>
        ))}
      </select>
    </div>
  );
};
