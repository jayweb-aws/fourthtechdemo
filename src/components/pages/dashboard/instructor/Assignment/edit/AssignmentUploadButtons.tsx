import React from "react";
import ButtonLoader from "../../../../../utils/loaders/ButtonLoader";


type typeProp = {
  isLoading: any
}

const AssignmentUploadButtons = (props: typeProp) => {
  const { isLoading } = props;
  return (
    <div className="w-full lg:flex flex justify-end items-center gap-x-1 lg:gap-x-3 mt-5">
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2 py-2.5 text-center mr-2 mb-2"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="flex text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 text-center mr-2 mb-2"
      >
        {isLoading ? <ButtonLoader /> : "Update"}
      </button>
    </div>
  );
};

export default AssignmentUploadButtons;
